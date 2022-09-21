import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../../../../utils/config';
import { useAuth } from '../../../../../utils/use_auth';
import { useCart } from '../../../../../utils/use_cart';

import '../MyCart.scss';
import { ReactComponent as AshBin } from '../../../../../assets/svg/delete.svg';
import { ReactComponent as FavDefault } from '../../../../../assets/svg/favorite_defaut.svg';
import CartFavorite from '../../../../../components/CartFavorite';
import { RiAddFill } from 'react-icons/ri';
import { RiSubtractFill } from 'react-icons/ri';
import MyCartCount from './MyCartCount';

function MyCartClass({
    myCart,
    setMyCart,
    myCartB,
    setMyCartB,
    check,
    setCheck,
    handleCheckBox,
}) {
    const { member } = useAuth();

    //進行刪除及時更新
    function handleRemoveItem(itemId) {
        if (member !== null && member.id !== '') {
            //讀資料庫 進行刪除 還必須確認資料庫有無東西
            let setItemDataDelete = async () => {
                let response = await axios.delete(`${API_URL}/member/mycart`, {
                    data: [[member.id, itemId]],
                });
                // console.log('刪除response.data', response.data);
                alert(response.data.message);
                //copy myCart
                let newMyCart = myCart.map((item) => {
                    return { ...item };
                });
                //前端刪除狀態 (全部)
                let newMyCartAfterDelete = newMyCart.filter((item) => {
                    return item.product_id !== itemId;
                });
                //set狀態回去
                const myCart_cateB = newMyCartAfterDelete.filter((v) => {
                    return v.category_id === 'B';
                });
                setMyCartB(myCart_cateB);
                setMyCart(newMyCartAfterDelete);
            };
            setItemDataDelete();
        }
    }

    return (
        <>
            {myCartB.map((item) => {
                let itemPriceTotal = item.amount * item.price;
                return (
                    <tr key={item.product_id}>
                        <td data-title="音樂課程" align="center">
                            <div className="d-flex justify-content-lg-between p-lg-0 pt-2">
                                <div className="align-self-center">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value={item.product_id}
                                        checked={check.includes(
                                            item.product_id
                                        )}
                                        onChange={(e) => {
                                            handleCheckBox(e);
                                        }}
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
                                <div className="pt-lg-3 d-flex">
                                    <CartFavorite />
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
                            <MyCartCount
                                count={item.amount}
                                setCount={(newCount) => {
                                    const newMyCart = myCart.map((v, i) => {
                                        return item.id === v.id
                                            ? { ...v, amount: newCount }
                                            : { ...v };
                                    });
                                    const newMyCartB = myCartB.map((v, i) => {
                                        return item.id === v.id
                                            ? { ...v, amount: newCount }
                                            : { ...v };
                                    });
                                    setMyCartB(newMyCartB);
                                    setMyCart(newMyCart);
                                }}
                            />
                        </td>
                        <td align="center" className="align-middle ">
                            <div className="gary-dark">
                                <span className="d-lg-none myCartPriceTitle accent-color">
                                    <b>小計：</b>
                                </span>
                                <span>NT ${itemPriceTotal}</span>
                            </div>
                        </td>
                    </tr>
                );
            })}
        </>
    );
}

export default MyCartClass;
