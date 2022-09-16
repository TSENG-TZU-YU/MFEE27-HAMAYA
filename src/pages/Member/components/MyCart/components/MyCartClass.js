import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../../../../utils/config';
import { useAuth } from '../../../../../utils/use_auth';
import { useCart } from '../../../../../utils/use_cart';

import '../MyCart.scss';
import { ReactComponent as AshBin } from '../../../../../assets/svg/delete.svg';
import { ReactComponent as FavDefault } from '../../../../../assets/svg/favorite_defaut.svg';
import { RiAddFill } from 'react-icons/ri';
import { RiSubtractFill } from 'react-icons/ri';

function MyCartClass({ myCart, setMyCart }) {
    const { member, setMember, isLogin, setIsLogin } = useAuth();
    const { shopCartState, setShopCartState, shoppingCart, setShoppingCart } =
        useCart();

    const myCartList = myCart.myCart;
    console.log('myCartList class', myCartList);
    const myCart_cateB = myCartList.filter((v) => {
        return v.category_id === 'B';
    });
    // console.log(myCart_cateB);
    //進行刪除沒辦法及時更新
    function handleRemoveItem(itemId) {
        console.log('click');
        //取得localStorage內容
        let shoppingCartLocal = JSON.parse(
            localStorage.getItem('shoppingCart')
        );
        if (member !== null && member.id !== '') {
            //讀資料庫 進行刪除 還必須確認資料庫有無東西
            let setItemDataDelete = async () => {
                let response = await axios.delete(`${API_URL}/cart`, {
                    data: {
                        user_id: member.id,
                        product_id: itemId,
                    },
                });
                console.log('刪除response.data', response.data);
                alert(response.data.message);
                setMyCart(response.data);
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

    return (
        <>
            {myCart_cateB.map((item) => {
                return (
                    <tr key={item.product_id}>
                        <td data-title="音樂課程" align="center">
                            <div className="d-flex justify-content-lg-between p-lg-0 pt-2">
                                <div className="align-self-center">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id=""
                                    />
                                </div>
                                <div className="flex-lg-grow-1">
                                    <img
                                        className="myCart-Img myCart-contain"
                                        src={require(`../../../../../album/class/${item.image_1}`)}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </td>
                        <td align="center">
                            <div className="d-flex flex-column align-items-lg-start pt-lg-2">
                                <span className="p main-color">
                                    <b>{item.name}</b>
                                </span>
                                <div className="pt-lg-3 d-inline">
                                    <button className="btn border-0 p-0">
                                        <FavDefault className="myCartItemIconFav " />
                                    </button>
                                    <button
                                        className="btn border-0 p-0 ms-3"
                                        onClick={() => {
                                            handleRemoveItem(item.product_id);
                                        }}
                                    >
                                        <AshBin className="myCartItemIcon" />
                                    </button>
                                </div>
                            </div>
                        </td>
                        <td align="center" className="align-middle">
                            <div className="gary-dark">
                                <span className="d-lg-none myCartPriceTitle accent-color">
                                    <b>價錢：</b>
                                </span>
                                <span>NT ${item.price}</span>
                            </div>
                        </td>
                        <td align="center" className="align-middle">
                            <div className="d-inline-block">
                                <button className="btn border-0">
                                    <RiSubtractFill size="20" />
                                </button>
                                <div className="countBox">{item.amount}</div>
                                <button className=" btn border-0">
                                    <RiAddFill size="20" />
                                </button>
                            </div>
                        </td>
                        <td align="center" className="align-middle ">
                            <div className="gary-dark">
                                <span className="d-lg-none myCartPriceTitle accent-color">
                                    <b>小計：</b>
                                </span>
                                <span>NT $100000</span>
                            </div>
                        </td>
                    </tr>
                );
            })}
        </>
    );
}

export default MyCartClass;
