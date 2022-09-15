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
    // console.log('shoppingCart in Cart', shoppingCart);
    //如果臨時購物車商品為0 則關閉
    if (shoppingCart.length === 0) {
        setShopCartState(false);
    }

    function handleRemoveItem(itemId) {
        //取得localStorage內容
        let shoppingCartLocal = JSON.parse(
            localStorage.getItem('shoppingCart')
        );
        if (member !== null && member.id !== '') {
            //讀資料庫 進行刪除
            let setItemDataDelete = async () => {
                let response = await axios.delete(`${API_URL}/cart`, {
                    data: {
                        user_id: member.id,
                        product_id: itemId,
                    },
                });
                // console.log(response.data);
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

    // async function setItemDelete(itemsData) {
    //     let response = await axios.post(`${API_URL}/cart/:itemData`, itemsData);
    //     // console.log(response.data);
    //     alert(response.data.message);
    // }

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
                    <span className="minimum">總金額:NT $000000</span>
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
                                        // console.log(item.product_id);
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
                    <button className="border-0 bg-main-color checkOutBtn py-2">
                        <CheckOut className="checkOutIcon" />
                        <span className="px-2">訂單結帳</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Cart;
