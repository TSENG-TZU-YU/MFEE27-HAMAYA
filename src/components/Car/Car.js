import React from 'react';
import './Car.scss';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import { useAuth } from '../../utils/use_auth';
//購物車
import { useCart } from '../../utils/use_cart';
import { successToast, warningToast, errorToast } from '../Alert';
// 圖檔
import shop_car from '../../assets/svg/add_shopping_cart.svg';

function Car({ itemsCart }) {
    const { member, setMember, isLogin, setIsLogin } = useAuth();
    //購物車
    const { shopCartState, setShopCartState, shoppingCart, setShoppingCart } =
        useCart();

    //存localStorage
    const setNewLocal = (newLocal) => {
        //塞資料進去
        localStorage.setItem('shoppingCart', JSON.stringify(newLocal));
    };

    function getCheck(itemInfo) {
        console.log('itemInfo', itemInfo);
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
            // setShoppingCart([{ ...itemInfo }, ...shoppingCart]);
            //localStorage
            setNewLocal([{ ...itemInfo }, ...shoppingCart]);
            //判斷是否為登入
            if (member !== null && member.id !== '') {
                let getNewLocal = JSON.parse(
                    localStorage.getItem('shoppingCart')
                );
                console.log('getNewLocal', getNewLocal);

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
                    //要做後端資料庫裡是否重複 重複則去購物車修改數量 目前只拿一個加入購物車
                    try {
                        let response = await axios.post(
                            `${API_URL}/member/mycart/single`,
                            itemsData
                        );
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

    return (
        <button
            className="add-car d-flex justify-content-center align-items-center border-0"
            onClick={(e) => {
                setShopCartState(true);
                e.preventDefault();
                getCheck({ ...itemsCart, amount: 1 });
                console.log('itemsCart', itemsCart);
            }}
        >
            <img className="me-2" src={shop_car} alt="shop_car" />
            <small className="car-color">加入購物車</small>
        </button>
    );
}

export default Car;
