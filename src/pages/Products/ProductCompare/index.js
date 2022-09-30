import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { API_URL } from '../../../utils/config';
//會員
import { useAuth } from '../../../utils/use_auth';
//購物車
import { useCart } from '../../../utils/use_cart';
// 收藏
import { useLiked } from '../../../utils/use_liked';

// 樣式
import './index.scss';

// 套件
import { Container } from 'react-bootstrap';

// 元件
import {
    successToast,
    warningToast,
    errorToast,
    successSmallToast,
} from '../../../components/Alert';

// 圖檔
import { ReactComponent as Close } from '../../../assets/svg/close.svg';
import { ReactComponent as Delete } from '../../../assets/svg/delete.svg';
import { ReactComponent as CartCheck } from '../../../assets/svg/shopping_cart_check.svg';
import { TbMusicOff } from 'react-icons/tb';
import { ReactComponent as HeartLine } from '../../../assets/svg/favorite_defaut.svg';
import { ReactComponent as HeartFill } from '../../../assets/svg/favorite_check.svg';

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
        successToast('商品清空成功!', '關閉');
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

    //會員
    const { member, setMember, isLogin, setIsLogin } = useAuth();

    //購物車
    const { shopCartState, setShopCartState, shoppingCart, setShoppingCart } =
        useCart();
    //存localStorage
    const setNewLocal = (newLocal) => {
        //塞資料進去
        localStorage.setItem('shoppingCart', JSON.stringify(newLocal));
    };

    //加入購物車
    function getCheck(itemInfo) {
        // console.log('get Member', member);
        // console.log('itemInfo compare', itemInfo);
        let stock = itemInfo.stock;
        let amount = itemInfo.amount;
        if (stock < amount) {
            setShopCartState(false);
            return errorToast('暫無庫存', '關閉');
        }
        //確認有沒有重複
        let newItemInfo = shoppingCart.find((v) => {
            return v.product_id === itemInfo.product_id;
        });

        if (!newItemInfo) {
            //臨時購物車
            setShoppingCart([{ ...itemInfo }, ...shoppingCart]);
            //localStorage;
            setNewLocal([{ ...itemInfo }, ...shoppingCart]);
            //判斷是否為登入;
            if (member !== null && member.id !== '') {
                let getNewLocal = JSON.parse(
                    localStorage.getItem('shoppingCart')
                );
                // console.log('getNewLocal', getNewLocal);

                const itemsData = getNewLocal.map((item) => {
                    return {
                        user_id: member.id,
                        product_id: item.product_id,
                        category_id: item.category_id,
                        amount: item.amount,
                    };
                });
                // console.log('itemsData', itemsData);
                //寫進資料庫
                setItemsData(itemsData);
                async function setItemsData(itemsData) {
                    //要做後端資料庫裡是否重複 重複則請去去購物車修改數量
                    try {
                        let response = await axios.post(
                            `${API_URL}/member/mycart/single`,
                            itemsData
                        );
                        // console.log('duplicate', response.data.duplicate);
                        if (response.data.duplicate === 1) {
                            warningToast(response.data.message, '關閉');
                            setShoppingCart([...shoppingCart]);
                            return;
                        }
                        successToast(response.data.message, '關閉');
                    } catch (err) {
                        console.log(err.response.data.message);
                    }
                }
            }
            successToast('成功加入購物車', '關閉');
            //臨時購物車
            setShoppingCart([{ ...itemInfo }, ...shoppingCart]);
            return;
        }
        successToast('成功加入購物車', '關閉');
    }

    // 收藏
    const { favProducts, setFavProducts } = useLiked();

    // 會員收藏的資料
    useEffect(() => {
        try {
            let getAllFavProducts = async () => {
                let response = await axios.get(
                    `${API_URL}/member/mybucketlist`,
                    { withCredentials: true }
                );

                let products = response.data.product.map(
                    (item) => item.product_id
                );
                setFavProducts(products);
            };
            if (member.id) {
                getAllFavProducts();
            }
        } catch (err) {
            console.log(err.response.data);
        }
    }, [member]);

    // 新增收藏
    const handleAddFavorite = (itemsData) => {
        // console.log(itemsData);
        if (itemsData.user_id !== null && itemsData.user_id !== '') {
            setItemsData(itemsData);
            async function setItemsData(itemsData) {
                try {
                    let response = await axios.post(
                        `${API_URL}/member/mybucketlist`,
                        [itemsData]
                    );
                    let products = response.data.product.map(
                        (item) => item.product_id
                    );
                    successSmallToast.fire({
                        icon: 'success',
                        iconColor: '#86a8ae',
                        color: '#00323d',
                        title: response.data.message,
                    });
                    setFavProducts(products);
                } catch (err) {
                    successSmallToast.fire({
                        icon: 'error',
                        iconColor: '#c59894',
                        color: '#5b322f',
                        title: err.response.data.message,
                    });
                }
            }
        }
    };

    // 取消收藏
    async function handleRemoveFavorite(product_id) {
        let itemsData = [{ user_id: member.id, product_id: product_id }];
        try {
            let response = await axios.delete(
                `${API_URL}/member/mybucketlist/delete`,
                {
                    withCredentials: true,
                    data: itemsData,
                }
            );
            let products = response.data.product.map((item) => item.product_id);
            successSmallToast.fire({
                icon: 'success',
                iconColor: '#86a8ae',
                color: '#00323d',
                title: response.data.message,
            });
            setFavProducts(products);
        } catch (err) {
            successSmallToast.fire({
                icon: 'error',
                iconColor: '#c59894',
                color: '#5b322f',
                title: err.response.data.message,
            });
        }
    }

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
                                    className="me-2"
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
                                            {favProducts.includes(
                                                value.product_id
                                            ) ? (
                                                <HeartFill
                                                    className="me-5 CartFavorite cursor-pointer"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        handleRemoveFavorite(
                                                            value.product_id
                                                        );
                                                    }}
                                                />
                                            ) : (
                                                <HeartLine
                                                    className="me-5 CartFavorite cursor-pointer"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        handleAddFavorite({
                                                            user_id: member.id,
                                                            product_id:
                                                                value.product_id,
                                                            category_id:
                                                                value.category_id,
                                                        });
                                                    }}
                                                />
                                            )}
                                            <CartCheck
                                                style={{
                                                    width: '25px',
                                                    height: '25px',
                                                }}
                                                className="me-5 cursor-pointer"
                                                onClick={() => {
                                                    getCheck({
                                                        product_id:
                                                            value.product_id,
                                                        category_id:
                                                            value.category_id,
                                                        image: value.image,
                                                        name: value.name,
                                                        amount: 1,
                                                        price: value.price,
                                                        spec: value.spec,
                                                        shipment:
                                                            value.shipment,
                                                        stock: value.stock,
                                                    });
                                                }}
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
