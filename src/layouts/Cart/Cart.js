import React, { useEffect, useState } from 'react';
import { useAuth } from '../../utils/use_auth';
import { useCart } from '../../utils/use_cart';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import './Cart.scss';
import ashBin from '../../assets/svg/delete.svg';
//修改 CheckOut 顏色
import { ReactComponent as CheckOut } from '../../assets/svg/shopping_cart_checkout.svg';

function Cart() {
    const { member, setMember, isLogin, setIsLogin } = useAuth();
    const { shopCartState, setShopCartState, shoppingCart, setShoppingCart } =
        useCart();
    //如果臨時購物車商品為0 則關閉
    if (shoppingCart.length === 0) {
        setShopCartState(false);
    }
    let newShoppingCart = shoppingCart.map((item) => {
        return { ...item };
    });

    // console.log('shoppingCartPrice', shoppingCartPrice);

    function handleRemoveItem(itemId) {
        //取得localStorage內容
        let shoppingCartLocal = JSON.parse(
            localStorage.getItem('shoppingCart')
        );
        if (member !== null && member.id !== '') {
            //讀資料庫 進行刪除
            let setItemDataDelete = async () => {
                let response = await axios.delete(`${API_URL}/member/mycart`, {
                    data: {
                        user_id: member.id,
                        product_id: itemId,
                    },
                });

                alert(response.data.message);
            };
            setItemDataDelete();
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
            alert('請先登入');
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
                alert(response.data.message);
            } catch (err) {
                console.log(err.response.data.message);
            }
        }
        setItemsData(multipleCart);
        //清掉localStorage
        localStorage.removeItem('shoppingCart');
        //清空臨時購物車
        setShoppingCart([]);
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
                        共有{shoppingCart.length}件商品
                    </span>
                    <span className="minimum">
                        總金額:NT ${shoppingCartPrice}
                    </span>
                </div>
                <div className="scrollStyle overflow-auto pb-2">
                    {shoppingCart.map((item, index) => {
                        return (
                            <div
                                className="shoppingCartItem d-flex py-2"
                                key={Math.random()
                                    .toString(36)
                                    .replace('3.', '')}
                            >
                                {/* <img
                                    className="shoppingCartItemImg mx-3"
                                    src={require(`../../album/products/${item.image}`)}
                                    alt=""
                                /> */}
                                <div className="d-flex flex-column">
                                    <span className="small main-color mb-5">
                                        {item.name + ' & ' + item.product_id}
                                    </span>
                                    <span className="small gary-dark-color">
                                        數量:{1}
                                    </span>
                                    <span className="small gary-dark-color">
                                        價錢:{item.price}
                                    </span>
                                </div>
                                <button
                                    className="border-0 btn ms-auto"
                                    onClick={() => {
                                        handleRemoveItem(item.product_id);
                                    }}
                                >
                                    <img src={ashBin} alt="" />
                                </button>
                            </div>
                        );
                    })}
                </div>
                <div className="pt-2">
                    {/* 訂單結帳 如果未登入要要求登入 已登入要把資料送到後台重複的不寫入 沒有則寫入 清空localStorage*/}
                    <button
                        className="border-0 bg-main-color checkOutBtn py-2"
                        onClick={() => {
                            getMultipleCheck();
                        }}
                    >
                        <CheckOut className="checkOutIcon" />
                        <span className="px-2">訂單結帳</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Cart;
