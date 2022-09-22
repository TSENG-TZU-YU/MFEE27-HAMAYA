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

    //依賴checkbox移除
    // function handleRemoveItem() {
    //     console.log('移除品項', check);

    //     if (member !== null && member.id !== '') {
    //         //重組陣列 加入member.id
    //         let newCheck = check.map((product_id) => {
    //             return [member.id, product_id];
    //         });
    //         // console.log('newCheck', newCheck);
    //         let setItemDataDelete = async () => {
    //             let response = await axios.delete(`${API_URL}/member/mycart`, {
    //                 data: newCheck,
    //             });
    //             // console.log('刪除response.data', response.data);
    //             alert(response.data.message);

    //             // //copy myCart
    //             let newMyBucketB = myBucketB.map((item) => {
    //                 return { ...item };
    //             });
    //             //前端刪除狀態 (全部)
    //             let newMyBucketAfterDelete = newMyBucketB.filter((item) => {
    //                 return check.indexOf(item.product_id) === -1;
    //             });

    //             // console.log('newMyCartAfterDelete', newMyCartAfterDelete);
    //             const myCart_cateA = newMyBucketAfterDelete.filter((v) => {
    //                 return v.category_id === 'A';
    //             });
    //             const myCart_cateB = newMyBucketAfterDelete.filter((v) => {
    //                 return v.category_id === 'B';
    //             });
    //             // //set狀態回去
    //             // setMyBucketA(myCart_cateA);
    //             // setMyBucketB(myCart_cateB);
    //             // setMyBucket(newMyBucketAfterDelete);
    //         };
    //         setItemDataDelete();
    //     }
    // }

    // 購物車
    const { shopCartState, setShopCartState, shoppingCart, setShoppingCart } =
        useCart();
    //存localStorage
    const setNewLocal = (newLocal) => {
        //塞資料進去
        localStorage.setItem('shoppingCart', JSON.stringify(newLocal));
    };

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
                    <button className="btn btn-primary col mx-2 p-0 text-nowrap">
                        取消收藏
                    </button>
                    <button className="btn btn-primary col mx-2 p-0 text-nowrap">
                        加入購物車
                    </button>
                </div>
            </div>
            <div className="row">
                {myBucketA.map((item) => {
                    return (
                        <div className="col-lg-6 py-2" key={item.id}>
                            <div className="myBucketProduct-Item d-flex">
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
                                                <b>NT: {item.price}</b>
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
                                            <button className="btn border-0 p-0">
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
