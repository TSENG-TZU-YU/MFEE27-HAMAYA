import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../../../../utils/config';
import { useAuth } from '../../../../../utils/use_auth';
import { useCart } from '../../../../../utils/use_cart';
import {
    successToast,
    warningToast,
    errorToast,
} from '../../../../../components/Alert';
import { ReactComponent as AshBin } from '../../../../../assets/svg/delete.svg';
import { ReactComponent as AddCart } from '../../../../../assets/svg/shopping_cart_check.svg';
function BucketProduct({ myBucketA, setMyBucketA }) {
    const { member } = useAuth();
    //checkbox check 裡面放product_id
    const [check, setCheck] = useState([]);
    // console.log('check', check);
    const [allCheck, setAllCheck] = useState(false);

    // console.log('我的收藏BucketProduct元件中', myBucketA);

    //商品單選checkbox
    function handleCheckBox(e) {
        console.log('value, allCheck, check', e.target.value, allCheck, check);

        const value = e.target.value;
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
        if (newItem.length === myBucketA.length) {
            setAllCheck(true);
        }
        if (newItem.length !== myBucketA.length) {
            setAllCheck(false);
        }
        console.log('newItem', newItem);
    }

    //取得product_id
    let itemId = myBucketA.map((v) => v.product_id);
    // console.log('itemId', itemId);
    //商品全選
    function handleAllCheckBox() {
        // console.log('click allCheckBox');
        allCheck ? setAllCheck(false) : setAllCheck(true);
        if (!allCheck) {
            setCheck(itemId);
        } else {
            setCheck([]);
        }
    }

    // 購物車
    const { shopCartState, setShopCartState, shoppingCart, setShoppingCart } =
        useCart();
    //存localStorage
    const setNewLocal = (newLocal) => {
        //塞資料進去
        localStorage.setItem('shoppingCart', JSON.stringify(newLocal));
    };
    //icon 加入購物車
    function getCheck(itemInfo) {
        console.log('itemInfo', itemInfo);
        //確認有沒有重複
        let newItemInfo = shoppingCart.find((v) => {
            return v.product_id === itemInfo.product_id;
        });
        if (!newItemInfo) {
            //localStorage
            setNewLocal([{ ...itemInfo }, ...shoppingCart]);
            //判斷是否為登入
            if (member !== null && member.id !== '') {
                let getNewLocal = JSON.parse(
                    localStorage.getItem('shoppingCart')
                );
                // console.log('getNewLocal', getNewLocal);

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
                    //要做後端資料庫裡是否重複 重複則請去去購物車修改數量
                    try {
                        let response = await axios.post(
                            `${API_URL}/member/mycart`,
                            itemsData
                        );
                        // console.log('duplicate', response.data.duplicate);
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
            successToast('加入購物車', '關閉');
            //臨時購物車
            setShoppingCart([{ ...itemInfo }, ...shoppingCart]);
            return;
        }
        warningToast('已加入臨時購物車', '關閉');
    }

    // 取消收藏
    async function handleRemoveFavorite() {
        console.log('buy bucket  myBucketA', check, myBucketA);

        //filter我選取的東西
        let newMyBucketA = myBucketA.filter((item) => {
            return check.indexOf(item.product_id) !== -1;
        });
        //
        let itemsData = newMyBucketA.map((item) => {
            return [item.user_id, item.product_id];
        });
        console.log('itemsData', itemsData);
        try {
            let response = await axios.delete(
                `${API_URL}/member/mybucketlist/delete`,
                {
                    withCredentials: true,
                    data: itemsData,
                }
            );
            console.log(response.data);
            setMyBucketA(response.data.product);
        } catch (err) {
            console.log(err.response.data.message);
        }
    }

    //依賴checkbox加入購物車
    function getCheckBucket() {
        console.log('buy bucket  myBucketA', check, myBucketA);

        //過濾出有被選取的
        let newMyBucketA = myBucketA.filter((item) => {
            return check.indexOf(item.product_id) !== -1;
        });
        console.log('newMyBucketA', newMyBucketA);

        //確認有無存在購物車
        let newItemInfo = shoppingCart.find((v) => {
            return v.product_id === newMyBucketA.product_id;
        });
        console.log('newItemInfo', newItemInfo);

        let reNewMyBucketA = newMyBucketA.map((item) => {
            return {
                product_id: item.product_id,
                category_id: item.category_id,
                name: item.name,
                amount: 1,
                price: item.price,
                image: item.image,
            };
        });
        console.log('reNewMyBucketA', reNewMyBucketA);
        if (!newItemInfo) {
            //localStorage
            setNewLocal([...reNewMyBucketA, ...shoppingCart]);
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
                console.log('itemsData', itemsData);
                //寫進資料庫
                setItemsData(itemsData);
                async function setItemsData(itemsData) {
                    //要做後端資料庫裡是否重複 重複則請去去購物車修改數量
                    try {
                        let response = await axios.post(
                            `${API_URL}/member/mycart`,
                            itemsData
                        );
                        // console.log('duplicate', response.data.duplicate);
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
            successToast('加入購物車', '關閉');
            //臨時購物車
            setShoppingCart([...reNewMyBucketA, ...shoppingCart]);
            return;
        }
        warningToast('已加入臨時購物車', '關閉');
    }
    return (
        <>
            <div className="row p-2">
                <div className="row col-lg-5 align-items-center ">
                    <div className="col-3 d-inline-flex justify-content-evenly form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
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
                            handleRemoveFavorite();
                        }}
                    >
                        取消收藏
                    </button>
                    <button
                        className="btn btn-primary col mx-2 p-0 text-nowrap"
                        onClick={() => {
                            setShopCartState(true);
                            //checkbox select add cart
                            getCheckBucket();
                        }}
                    >
                        加入購物車
                    </button>
                </div>
            </div>
            <div className="row">
                {myBucketA.map((item) => {
                    return (
                        <div className="col-lg-6 p-0 my-1" key={item.id}>
                            <div className="myBucketProduct-Item d-flex m-2 p-2 bucket-shadow ">
                                <div className="myBucketProduct-Img">
                                    <img
                                        className="img-fluid"
                                        src={require(`../../../../../album/products/${item.image}`)}
                                        alt=""
                                    />
                                </div>
                                <div className="flex-grow-1 m-2 d-flex flex-column">
                                    <div className="d-flex justify-content-between">
                                        <h6>
                                            <b>{item.name}</b>
                                        </h6>
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
                                    <div className="d-flex justify-content-between align-items-center mt-auto">
                                        <p className="d-inline-flex m-0">
                                            <span className="accent-color">
                                                <b>NT ${item.price}</b>
                                            </span>
                                        </p>
                                        <div>
                                            <button
                                                className="btn border-0 p-0 mx-3"
                                                onClick={() => {
                                                    setShopCartState(true);
                                                    getCheck({
                                                        product_id:
                                                            item.product_id,
                                                        category_id:
                                                            item.category_id,
                                                        image: item.image,
                                                        name: item.name,
                                                        amount: 1,
                                                        price: item.price,
                                                        spec: item.spec,
                                                        shipment: item.shipment,
                                                    });
                                                }}
                                            >
                                                <AddCart className="myBucketItemIcon" />
                                            </button>
                                            <button
                                                className="btn border-0 p-0"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleRemoveFavorite(
                                                        item.product_id
                                                    );
                                                }}
                                            >
                                                <AshBin className="myBucketItemIcon" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default BucketProduct;
