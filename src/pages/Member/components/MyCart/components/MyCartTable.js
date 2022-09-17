import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../../../../utils/config';
import { useAuth } from '../../../../../utils/use_auth';
import '../MyCart.scss';
import MyCartProduct from './MyCartProduct';
import MyCartClass from './MyCartClass';

function MyCartTable({ myCart, setMyCart, myCartPrice, setMyCartPrice }) {
    const { member, setMember, isLogin, setIsLogin } = useAuth();
    // const [myCart, setMyCart] = useState(null);
    const [myCartA, setMyCartA] = useState();
    const [myCartB, setMyCartB] = useState();
    const id = member.id;
    useEffect(() => {
        async function getMyCart() {
            try {
                let response = await axios.get(
                    `${API_URL}/member/mycart/${id}`
                );

                let items_amount = response.data.myCart.length;
                if (items_amount) {
                    setMyCart(response.data.myCart);

                    //分類別
                    let myCartList = response.data.myCart;
                    const myCart_cateA = myCartList.filter((v) => {
                        return v.category_id === 'A';
                    });
                    setMyCartA(myCart_cateA);
                    const myCart_cateB = myCartList.filter((v) => {
                        return v.category_id === 'B';
                    });
                    setMyCartB(myCart_cateB);

                    //TODO:金額無法即時更新
                    let myCartListPrice = myCartList
                        .map((v) => {
                            return v.price;
                        })
                        .reduce((prev, curr) => prev + curr);
                    setMyCartPrice(myCartListPrice);
                    console.log('myCartListPrice', myCartListPrice);
                    return;
                }
            } catch (err) {
                console.log('錯誤', err.response.data.message);
            }
        }
        getMyCart();
    }, [setMyCart]);

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
                    {/* {console.log('myCartA in table', myCartA)} */}
                    {myCartA ? (
                        <MyCartProduct
                            myCart={myCart}
                            setMyCart={setMyCart}
                            myCartA={myCartA}
                            setMyCartA={setMyCartA}
                        />
                    ) : (
                        ''
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
                    {/* {console.log('myCartB in table', myCartB)} */}
                    {myCartB ? (
                        <MyCartClass
                            myCart={myCart}
                            setMyCart={setMyCart}
                            myCartB={myCartB}
                            setMyCartB={setMyCartB}
                        />
                    ) : (
                        ''
                    )}
                </tbody>
            </table>
        </>
    );
}

export default MyCartTable;
