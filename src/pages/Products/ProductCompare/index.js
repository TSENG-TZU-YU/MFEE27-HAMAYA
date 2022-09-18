import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

// 樣式
import './index.scss';

// 套件
import { Container } from 'react-bootstrap';

// 圖檔
import { ReactComponent as Close } from '../../../assets/svg/close.svg';
import { ReactComponent as Delete } from '../../../assets/svg/delete.svg';
import { ReactComponent as CartCheck } from '../../../assets/svg/shopping_cart_check.svg';
import { TbMusicOff } from 'react-icons/tb';

function ProductCompare(props) {
    const { compareProduct, setCompareProduct, setProductCompare } = props;
    const [compareTags, setCompareTags] = useState('1');
    function handleRemoveItem(itemId) {
        //移除
        let removeItem = compareProduct.filter((item) => {
            return item.product_id !== itemId;
        });
        //存回localStorage
        localStorage.setItem('compare', JSON.stringify(removeItem));
        setCompareProduct(removeItem);
    }
    function handleClear() {
        //清空
        // localStorage.removeItem('compare');
        localStorage.setItem('compare', JSON.stringify([]));
        setCompareProduct([]);
    }
    // console.log(compareProduct);
    const handleCompare = (compareProduct, compareTags) => {
        let newCompareProduct = [...compareProduct];
        // 價格排序 低 > 高
        if (compareTags === '1') {
            newCompareProduct = [...newCompareProduct].sort(
                (a, b) => a.price - b.price
            );
        }
        // 時間排序 新 > 舊
        if (compareTags === '2') {
            newCompareProduct = [...newCompareProduct].sort((a, b) =>
                b.create_time.localeCompare(a.create_time)
            );
        }
        setCompareProduct(newCompareProduct);
    };

    useEffect(() => {
        handleCompare(compareProduct, compareTags);
    }, [compareTags]);

    return (
        <div className="productCompare__popup-bg">
            <Container>
                <div className="productCompare__box bg-accent-light-color fw-bold p-4">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex">
                            <h4 className="main-color fw-bold">比較結果</h4>
                            <div
                                className={
                                    compareTags === '1'
                                        ? 'bg-main-color productCompare__Tags text-center mx-3 cursor-pinter'
                                        : 'bg-main-light-color productCompare__Tags text-center mx-3 cursor-pinter'
                                }
                                onClick={(e) => {
                                    setCompareTags('1');
                                }}
                            >
                                <p className="accent-light-color">價格最低</p>
                            </div>
                            <div
                                className={
                                    compareTags === '2'
                                        ? 'bg-main-color productCompare__Tags text-center me-3 cursor-pinter'
                                        : 'bg-main-light-color productCompare__Tags text-center me-3 cursor-pinter'
                                }
                                onClick={(e) => {
                                    setCompareTags('2');
                                }}
                            >
                                <p className="accent-light-color">最新上架</p>
                            </div>
                            <div
                                className="productCompare__Tags bg-accent-color text-center cursor-pinter"
                                onClick={() => {
                                    handleClear();
                                }}
                            >
                                <p className="accent-light-color">清空</p>
                            </div>
                        </div>
                        <button className="closeBtn">
                            <Close
                                className="cursor-pointer"
                                onClick={() => {
                                    setProductCompare(false);
                                }}
                            />
                        </button>
                    </div>
                    <div className="d-flex my-3">
                        <div className="productCompare__titles">
                            <div className="productCompare__height"></div>
                            <div className="productCompare__list border-bottom ">
                                <p className="main-color">型號 / 品名</p>
                            </div>
                            <div className="productCompare__list border-bottom ">
                                <p className="main-color">售價</p>
                            </div>
                            <div className="productCompare__list border-bottom ">
                                <p className="main-color">品牌</p>
                            </div>
                            <div className="productCompare__list productCompare__list-height border-bottom ">
                                <p className="main-color">規格</p>
                            </div>
                            <div className="productCompare__list border-bottom ">
                                <p className="main-color">顏色</p>
                            </div>
                            <div className="productCompare__list productCompare__list-height border-bottom "></div>
                        </div>
                        {compareProduct.length === 0 ? (
                            <h4 className="mt-5 d-flex w-100 main-gary-light-color text-center justify-content-center align-items-center">
                                <TbMusicOff
                                    style={{
                                        width: '30px',
                                        height: '30px',
                                    }}
                                />
                                目前沒有商品可以比較
                            </h4>
                        ) : (
                            ''
                        )}
                        <div className="productCompare__item-box">
                            {compareProduct.map((value, index) => {
                                return (
                                    <div
                                        className={
                                            index === 0
                                                ? 'productCompare__item productCompare__item-active'
                                                : 'productCompare__item'
                                        }
                                        key={uuidv4()}
                                    >
                                        <Link
                                            to={`/products/${value.product_id}?main_id=${value.mainId}`}
                                            onClick={() => {
                                                setProductCompare(false);
                                            }}
                                        >
                                            <div className="productCompare__list-img">
                                                <img
                                                    className="img-fluid"
                                                    src={require(`../../../album/products/${value.image}`)}
                                                    alt="product"
                                                />
                                            </div>
                                        </Link>
                                        <div className="productCompare__list border-bottom">
                                            <Link
                                                to={`/products/${value.product_id}?main_id=${value.mainId}`}
                                                onClick={() => {
                                                    setProductCompare(false);
                                                }}
                                                className="text-nowrap main-color fw-bold h5"
                                            >
                                                {value.name}
                                            </Link>
                                        </div>
                                        <div className="productCompare__list border-bottom">
                                            <h6 className="accent-color fw-bold">
                                                NT ${value.price}
                                            </h6>
                                        </div>
                                        <div className="productCompare__list border-bottom">
                                            <p>{value.brand}</p>
                                        </div>
                                        <div className="productCompare__list productCompare__list-height border-bottom">
                                            <p className="text-wrap">
                                                {value.spec}
                                            </p>
                                        </div>
                                        <div className="productCompare__list border-bottom">
                                            <div
                                                className="products-filter-color-box"
                                                style={{
                                                    backgroundColor: `${value.color}`,
                                                }}
                                            ></div>
                                        </div>
                                        <div className="productCompare__list productCompare__list-height  border-bottom">
                                            <CartCheck
                                                style={{
                                                    width: '25px',
                                                    height: '25px',
                                                }}
                                                className="me-5 cursor-pointer"
                                            />
                                            <Delete
                                                style={{
                                                    width: '30px',
                                                    height: '30px',
                                                }}
                                                className="cursor-pointer"
                                                onClick={() => {
                                                    handleRemoveItem(
                                                        value.product_id
                                                    );
                                                }}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default ProductCompare;
