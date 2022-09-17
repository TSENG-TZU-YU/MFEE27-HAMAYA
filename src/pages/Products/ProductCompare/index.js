import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
// 樣式
import './index.scss';

// 套件
import { Container } from 'react-bootstrap';

// 圖檔
import { ReactComponent as Close } from '../../../assets/svg/close.svg';
import { ReactComponent as Delete } from '../../../assets/svg/delete.svg';
import { ReactComponent as CartCheck } from '../../../assets/svg/shopping_cart_check.svg';

function ProductCompare(props) {
    const { compareProduct, setCompareProduct, setProductCompare } = props;
    return (
        <div className="productCompare__popup-bg">
            <Container>
                <div className="productCompare__box bg-accent-light-color fw-bold p-4">
                    <div className="d-flex justify-content-between">
                        <h4 className="main-color fw-bold">比較結果</h4>
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
                            <div className="productCompare__list productCompare__list-height border-bottom ">
                                <p className="main-color">操作</p>
                            </div>
                        </div>
                        <div className="productCompare__item-box">
                            {compareProduct.map((value) => {
                                return (
                                    <div
                                        className="productCompare__item"
                                        key={uuidv4()}
                                    >
                                        <div className="productCompare__list-img p-1">
                                            <img
                                                className="img-fluid"
                                                src={require(`../../../album/products/${value.image}`)}
                                                alt="product"
                                            />
                                        </div>
                                        <div className="productCompare__list border-bottom">
                                            <h6 className="text-nowrap main-color fw-bold">
                                                {value.name}
                                            </h6>
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
