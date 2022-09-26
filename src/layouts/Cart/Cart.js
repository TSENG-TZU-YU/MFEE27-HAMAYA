import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../utils/use_auth';
import { useCart } from '../../utils/use_cart';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import './Cart.scss';
import LogInSignUp from '../../components/LogInSignUp';
import { ReactComponent as AshBin } from '../../assets/svg/delete.svg';
import { ReactComponent as Close } from '../../assets/svg/close.svg';
import { basicAlert, successToast } from '../../components/Alert';
//修改 CheckOut 顏色
import { ReactComponent as CheckOut } from '../../assets/svg/shopping_cart_checkout.svg';
import { useNavigate } from 'react-router-dom';

function Cart() {
    const { member, setMember, isLogin, setIsLogin } = useAuth();
    const { shopCartState, setShopCartState, shoppingCart, setShoppingCart } =
        useCart();
    const navigate = useNavigate();
    //臨時購物車商品為0 則關閉
    // if (shoppingCart.length === 0) {
    //     setShopCartState(false);
    // }
    //copy
    let newShoppingCart = shoppingCart.map((item) => {
        return { ...item };
    });
    console.log('shoppingCart', shoppingCart);
    //移除臨時購物車商品
    function handleRemoveItem(itemId) {
        //取得localStorage內容
        let shoppingCartLocal = JSON.parse(
            localStorage.getItem('shoppingCart')
        );
        if (member !== null && member.id !== '') {
            //讀資料庫 進行刪除
            let setItemDataDelete = async () => {
                let response = await axios.delete(`${API_URL}/member/mycart`, {
                    data: [[member.id, itemId]],
                });

                successToast(response.data.message, '關閉');
            };
            setItemDataDelete();
        } else {
            successToast('已刪除購物車商品', '關閉');
        }
        //移除
        let removeItem = shoppingCartLocal.filter((item) => {
            return item.product_id !== itemId;
        });
        //存回localStorage
        localStorage.setItem('shoppingCart', JSON.stringify(removeItem));
        setShoppingCart(removeItem);
    }
    //多筆加入購物車 訂單結帳
    function getMultipleCheck() {
        let shoppingCartLocal = JSON.parse(
            localStorage.getItem('shoppingCart')
        );
        if (member === null || member.id === '') {
            basicAlert('請先登入', '確認');
            return;
        }
        //把資料組成陣列
        let multipleCart = shoppingCartLocal.map((item) => {
            return [member.id, item.product_id, item.category_id, item.amount];
        });
        //寫進資料庫
        async function setItemsData(itemsData) {
            try {
                let response = await axios.post(
                    `${API_URL}/member/mycart/multi`,
                    itemsData
                );
                // successToast(response.data.message, '關閉');
            } catch (err) {
                console.log(err.response.data.message);
            }
        }
        setItemsData(multipleCart);
        //清掉localStorage
        localStorage.removeItem('shoppingCart');
        //清空臨時購物車
        setShoppingCart([]);
        setShopCartState(false);
        navigate('/member/mycart');
    }

    //金額
    let shoppingCartPrice = [];
    shoppingCartPrice = newShoppingCart
        .map((item) => {
            return item.price;
        })
        .reduce((prev, curr) => prev + curr, 0);

    return (
        <div className="position-relative">
            <div className="shoppingCart p-2">
                <div className="d-flex justify-content-between align-items-baseline shoppingCartTitle pb-2">
                    <span className="main-color">
                        <b className="">購物車</b>
                    </span>
                    <span className="minimum main-gary-light-color">
                        共有
                        <span className="accent-color">
                            {shoppingCart.length}
                        </span>
                        件商品
                    </span>
                    <span className="minimum">
                        總金額:NT ${shoppingCartPrice}
                    </span>
                    <button
                        className="cartBtn"
                        onClick={() => {
                            setShopCartState(false);
                        }}
                    >
                        <Close />
                    </button>
                </div>
                <div className="scrollStyle overflow-auto pb-2">
                    {shoppingCart.length !== 0 ? (
                        shoppingCart.map((item, index) => {
                            return (
                                <div
                                    className="shoppingCartItem d-flex py-2"
                                    key={Math.random()
                                        .toString(36)
                                        .replace('3.', '')}
                                >
                                    {item.category_id === 'A' && (
                                        <Link
                                            to={`/products/${item.product_id}`}
                                        >
                                            <img
                                                className="shoppingCartItemImg mx-3"
                                                src={require(`../../album/products/${item.image}`)}
                                                alt=""
                                            />
                                        </Link>
                                    )}
                                    {item.category_id === 'B' && (
                                        <Link
                                            to={`/class/list/${item.product_id}`}
                                        >
                                            <img
                                                className="shoppingCartItemImg mx-3"
                                                src={require(`../../album/class/${item.image_1}`)}
                                                alt=""
                                            />
                                        </Link>
                                    )}

                                    <div className="d-flex flex-column">
                                        <span className="small main-color mb-5">
                                            {item.category_id === 'A' && (
                                                <Link
                                                    to={`/products/${item.product_id}`}
                                                >
                                                    {item.name}
                                                </Link>
                                            )}
                                            {item.category_id === 'B' && (
                                                <Link
                                                    to={`/class/list/${item.product_id}`}
                                                >
                                                    {item.name}
                                                </Link>
                                            )}
                                        </span>
                                        <span className="small gary-dark-color">
                                            數量:{item.amount}
                                        </span>
                                        <span className="small gary-dark-color">
                                            價錢:{item.price}
                                        </span>
                                    </div>
                                    <button
                                        className="btn border-0 ms-auto p-0"
                                        onClick={() => {
                                            handleRemoveItem(item.product_id);
                                        }}
                                    >
                                        <AshBin className="cartBtn ashBinSvg" />
                                    </button>
                                </div>
                            );
                        })
                    ) : (
                        <p className="text-center m-0 mt-4 py-5 main-color">
                            目前購物車為空
                        </p>
                    )}
                </div>
                <div className="pt-2">
                    {/* 訂單結帳 如果未登入要要求登入 已登入要把資料送到後台重複的不寫入 沒有則寫入 清空localStorage*/}
                    <button
                        className="btn btn-primary border-0 bg-main-color checkOutBtn py-2"
                        onClick={() => {
                            getMultipleCheck();
                        }}
                    >
                        <CheckOut className="checkOutIcon" />
                        <span className="px-2">前往會員購物車</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Cart;
