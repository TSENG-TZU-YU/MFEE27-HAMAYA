import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../../../../utils/config';
import { useAuth } from '../../../../../utils/use_auth';
import '../MyCart.scss';
import MyCartProduct from './MyCartProduct';
import MyCartClass from './MyCartClass';

function MyCartTable() {
    const { member, setMember, isLogin, setIsLogin } = useAuth();
    const [myCart, setMyCart] = useState(null);
    const id = member.id;
    useEffect(() => {
        async function getMyCart() {
            try {
                let response = await axios.get(`${API_URL}/cart/${id}`);
                // console.log('mycart', response.data);
                setMyCart(response.data);
            } catch (err) {
                console.log('錯誤', err.response.data.message);
            }
        }
        getMyCart();
    }, []);
    console.log('myCart response', myCart);
    return (
        <>
            <table className="table m-0 myCartTable">
                <thead>
                    <tr className="text-center accent-light-color bg-main-color">
                        <th className="myCartThWidth">樂器商城</th>
                        <th className="w-25">商品名稱</th>
                        <th>價格</th>
                        <th>數量</th>
                        <th>小計</th>
                    </tr>
                </thead>
                <tbody>
                    {myCart ? (
                        <MyCartProduct myCart={myCart} setMyCart={setMyCart} />
                    ) : (
                        '目前沒有資料'
                    )}
                </tbody>
            </table>
            <table className="table m-0 myCartTable myCartTableClass">
                <thead>
                    <tr className="text-center accent-light-color bg-main-color">
                        <th className="myCartThWidth">音樂教育</th>
                        <th className="w-25">商品名稱</th>
                        <th>價格</th>
                        <th>數量</th>
                        <th>小計</th>
                    </tr>
                </thead>
                <tbody>
                    {myCart ? (
                        <MyCartClass myCart={myCart} setMyCart={setMyCart} />
                    ) : (
                        '目前沒有資料'
                    )}
                </tbody>
            </table>
        </>
    );
}

export default MyCartTable;
