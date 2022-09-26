import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../../../../utils/config';
import { useAuth } from '../../../../../utils/use_auth';
import '../MyCart.scss';
import MyCartProduct from './MyCartProduct';
import MyCartClass from './MyCartClass';
import {
    successSmallToast,
    successToast,
} from '../../../../../components/Alert';

function MyCartTable({
    myCart,
    setMyCart,
    myCartA,
    setMyCartA,
    myCartB,
    setMyCartB,
    favA,
    setFavA,
    favB,
    setFavB,
    setHiddenState,
}) {
    const { member } = useAuth();
    //checkbox check 裡面放product_id
    const [check, setCheck] = useState([]);
    // console.log('check', check);
    const [allCheck, setAllCheck] = useState(false);

    //商品單選checkbox
    function handleCheckBox(e) {
        const value = e.target.value;
        console.log('handleCheckBox', e.target.value);
        let newItem = [];
        if (check.includes(value)) {
            newItem = check.filter((v) => {
                return v !== value;
            });
            setCheck(newItem);
        } else {
            newItem = [...check, value];
            setCheck(newItem);
        }
        if (newItem.length === myCart.length) {
            setAllCheck(true);
        }
        if (newItem.length !== myCart.length) {
            setAllCheck(false);
        }
    }

    //取得product_id
    let itemId = myCart.map((v) => v.product_id);
    //商品全選
    function handleAllCheckBox() {
        allCheck ? setAllCheck(false) : setAllCheck(true);
        if (!allCheck) {
            setCheck(itemId);
        } else {
            setCheck([]);
        }
    }

    //依賴checkbox移除
    function handleRemoveItem() {
        if (member !== null && member.id !== '') {
            //重組陣列 加入member.id
            let newCheck = check.map((product_id) => {
                return [member.id, product_id];
            });
            // console.log('newCheck', newCheck);
            let setItemDataDelete = async () => {
                let response = await axios.delete(`${API_URL}/member/mycart`, {
                    data: newCheck,
                });
                // console.log('刪除response.data', response.data);
                successToast(response.data.message, '關閉');

                // //copy myCart
                let newMyCart = myCart.map((item) => {
                    return { ...item };
                });
                //前端刪除狀態 (全部)
                let newMyCartAfterDelete = newMyCart.filter((item) => {
                    return check.indexOf(item.product_id) === -1;
                });

                // console.log('newMyCartAfterDelete', newMyCartAfterDelete);
                const myCart_cateA = newMyCartAfterDelete.filter((v) => {
                    return v.category_id === 'A';
                });
                const myCart_cateB = newMyCartAfterDelete.filter((v) => {
                    return v.category_id === 'B';
                });
                // //set狀態回去
                setMyCartA(myCart_cateA);
                setMyCartB(myCart_cateB);
                setMyCart(newMyCartAfterDelete);
                setAllCheck(false);
                if (newMyCartAfterDelete.length === 0) {
                    setHiddenState(false);
                }
            };
            setItemDataDelete();
        }
    }

    // 多筆 加入收藏
    async function handleAddFavorite() {
        // console.log('buy Cart myCart', check, myCart);
        // //filter我選取的東西
        let newMyCart = myCart.filter((item) => {
            return check.indexOf(item.product_id) !== -1;
        });
        // console.log('buy Cart newMyCart', check, newMyCart);
        let itemsData = newMyCart.map((item) => {
            return {
                user_id: member.id,
                product_id: item.product_id,
                category_id: item.category_id,
            };
        });
        setItemsData(itemsData);
        async function setItemsData(itemsData) {
            try {
                let response = await axios.post(
                    `${API_URL}/member/mybucketlist`,
                    itemsData
                );
                let productsA = response.data.product.map(
                    (item) => item.product_id
                );
                let productsB = response.data.class.map(
                    (item) => item.product_id
                );
                successSmallToast.fire({
                    icon: 'success',
                    iconColor: '#86a8ae',
                    color: '#00323d',
                    title: response.data.message,
                });
                setFavA(productsA);
                setFavB(productsB);
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

    return (
        <>
            <div className="p-2">
                <div className="row col-lg-5 align-items-center ">
                    <div className="col-3 d-inline-flex justify-content-evenly form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            checked={allCheck}
                            onChange={handleAllCheckBox}
                        />
                        <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                        >
                            全選
                        </label>
                    </div>
                    <button
                        className="btn btn-primary col mx-2 p-0 text-nowrap"
                        onClick={() => {
                            handleRemoveItem();
                        }}
                    >
                        移除品項
                    </button>
                    <button
                        className="btn btn-primary col mx-2 p-0 text-nowrap"
                        onClick={() => {
                            handleAddFavorite();
                        }}
                    >
                        加入收藏
                    </button>
                </div>
            </div>
            <div>
                {myCartA.length !== 0 ? (
                    <table className="table m-0 myCartTable">
                        <thead>
                            <tr className="text-center accent-light-color bg-main-color">
                                <th className="myCartThWidth">樂器商城</th>
                                <th className="w-25">商品名稱</th>
                                <th className="myCartThWidth">價格</th>
                                <th>數量</th>
                                <th className="myCartThWidth">小計</th>
                            </tr>
                        </thead>
                        <tbody>
                            <MyCartProduct
                                myCart={myCart}
                                setMyCart={setMyCart}
                                myCartA={myCartA}
                                setMyCartA={setMyCartA}
                                setHiddenState={setHiddenState}
                                check={check}
                                setCheck={setCheck}
                                handleCheckBox={handleCheckBox}
                                favA={favA}
                                setFavA={setFavA}
                            />
                        </tbody>
                    </table>
                ) : (
                    ''
                )}
                {myCartB.length !== 0 ? (
                    <table className="table m-0 myCartTable myCartTableClass">
                        <thead>
                            <tr className="text-center accent-light-color bg-main-color">
                                <th className="myCartThWidth">音樂教育</th>
                                <th className="w-25">商品名稱</th>
                                <th className="myCartThWidth">價格</th>
                                <th>數量</th>
                                <th className="myCartThWidth">小計</th>
                            </tr>
                        </thead>
                        <tbody>
                            <MyCartClass
                                myCart={myCart}
                                setMyCart={setMyCart}
                                myCartB={myCartB}
                                setMyCartB={setMyCartB}
                                setHiddenState={setHiddenState}
                                check={check}
                                setCheck={setCheck}
                                handleCheckBox={handleCheckBox}
                                favB={favB}
                                setFavB={setFavB}
                            />
                        </tbody>
                    </table>
                ) : (
                    ''
                )}
            </div>
        </>
    );
}

export default MyCartTable;
