import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../../../../utils/config';
import { useAuth } from '../../../../../utils/use_auth';
import { useCart } from '../../../../../utils/use_cart';
import {
    successToast,
    warningToast,
    errorToast,
    successSmallToast,
} from '../../../../../components/Alert';
//svg
import { ReactComponent as AshBin } from '../../../../../assets/svg/delete.svg';
import { ReactComponent as AddCart } from '../../../../../assets/svg/shopping_cart_check.svg';
import { TbMusicOff } from 'react-icons/tb';
import _ from 'lodash';

function BucketClass({
    myBucketB,
    setMyBucketB,
    pageProductsB,
    setPageProductsB,
    setPageNowB,
    setPageTotalB,
    perPageB,
    pageNowB,
}) {
    // console.log('myBucketB', myBucketB);
    const { member } = useAuth();
    //checkbox check 裡面放product_id
    const [check, setCheck] = useState([]);
    // console.log('check', check);
    const [allCheck, setAllCheck] = useState(false);

    //商品單選checkbox
    function handleCheckBox(e) {
        // console.log('value, allCheck, check', e.target.value, allCheck, check);

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
        if (newItem.length === myBucketB.length) {
            setAllCheck(true);
        }
        if (newItem.length !== myBucketB.length) {
            setAllCheck(false);
        }
        // console.log('newItem', newItem);
    }

    //取得product_id
    let itemId = myBucketB.map((v) => v.product_id);
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
    //點選icon的加入購物車
    function getCheck(itemInfo) {
        // console.log('itemInfo', itemInfo);
        let stock = itemInfo.stock;
        let amount = itemInfo.amount;
        if (stock < amount) {
            setShopCartState(false);
            return errorToast('已額滿', '關閉');
        }
        //確認有沒有重複
        let newItemInfo = shoppingCart.find((v) => {
            return v.product_id === itemInfo.product_id;
        });
        if (!newItemInfo) {
            setShopCartState(true);
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
                            `${API_URL}/member/mycart/single`,
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
    //依賴checkbox加入購物車
    function getCheckBucket() {
        // console.log('buy bucket  myBucketB', check, myBucketB);

        //過濾出有被選取的
        let newMyBucketB = myBucketB.filter((item) => {
            return check.indexOf(item.product_id) !== -1;
        });
        // console.log('newMyBucketB', newMyBucketB);
        //確認有無存在購物車
        let newItemInfo = shoppingCart.find((v) => {
            return v.product_id === newMyBucketB.product_id;
        });
        // console.log('newItemInfo', newItemInfo);
        let reNewMyBucketB = newMyBucketB.map((item) => {
            return {
                product_id: item.product_id,
                category_id: item.category_id,
                name: item.name,
                amount: 1,
                price: item.price,
                image_1: item.image_1,
            };
        });
        // console.log('reNewMyBucketB', reNewMyBucketB);
        if (!newItemInfo) {
            setShopCartState(true);
            //localStorage
            setNewLocal([...reNewMyBucketB, ...shoppingCart]);
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
                            `${API_URL}/member/mycart/single`,
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
            setShoppingCart([...reNewMyBucketB, ...shoppingCart]);
            return;
        }
        warningToast('已加入臨時購物車', '關閉');
    }

    // 單筆 取消收藏
    async function handleRemoveFavoriteSingle(product_id) {
        let itemsData = [{ user_id: member.id, product_id: product_id }];
        try {
            let response = await axios.delete(
                `${API_URL}/member/mybucketlist/delete`,
                {
                    withCredentials: true,
                    data: itemsData,
                }
            );
            successSmallToast.fire({
                icon: 'success',
                iconColor: '#86a8ae',
                color: '#00323d',
                title: response.data.message,
            });
            setMyBucketB(response.data.class);
            const pageListB = _.chunk(response.data.class, perPageB);
            setPageTotalB(pageListB.length);
            // 設定到state中
            setPageProductsB(pageListB);
        } catch (err) {
            successSmallToast.fire({
                icon: 'error',
                iconColor: '#c59894',
                color: '#5b322f',
                title: err.response.data.message,
            });
        }
    }

    // console.log(myBucketB);

    // 多筆 取消收藏
    async function handleRemoveFavorite() {
        //filter我選取的東西
        let newMyBucketB = myBucketB.filter((item) => {
            return check.indexOf(item.product_id) !== -1;
        });
        let itemsData = newMyBucketB.map((item) => {
            return { user_id: member.id, product_id: item.product_id };
        });
        setItemsData(itemsData);
        async function setItemsData(itemsData) {
            try {
                let response = await axios.delete(
                    `${API_URL}/member/mybucketlist/delete`,
                    {
                        withCredentials: true,
                        data: itemsData,
                    }
                );
                successSmallToast.fire({
                    icon: 'success',
                    iconColor: '#86a8ae',
                    color: '#00323d',
                    title: response.data.message,
                });
                setMyBucketB(response.data.class);
                const pageListB = _.chunk(response.data.class, perPageB);
                setPageTotalB(pageListB.length);
                // 設定到state中
                setPageProductsB(pageListB);
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
                            //checkbox select add cart
                            getCheckBucket();
                        }}
                    >
                        加入購物車
                    </button>
                </div>
            </div>
            {pageProductsB.length === 0 ? (
                <h4 className="mt-5 d-flex w-100 main-gary-light-color text-center justify-content-center align-items-center">
                    <TbMusicOff
                        className="me-2"
                        style={{
                            width: '30px',
                            height: '30px',
                        }}
                    />
                    目前無收藏商品
                </h4>
            ) : (
                ''
            )}
            {pageProductsB.length > 0 &&
                pageProductsB[pageNowB - 1].map((item) => {
                    return (
                        <div className="my-4 bucket-shadow " key={item.id}>
                            <div className="myBucketClass-Item d-lg-flex">
                                <Link
                                    to={`/class/list/${item.product_id}?class=${item.ins_main_id}`}
                                    className="myBucketClass-Img"
                                >
                                    <img
                                        className="myBucketClass-Img-cover"
                                        src={require(`../../../../../album/class/${item.image_1}`)}
                                        alt=""
                                    />
                                </Link>
                                <div className="flex-grow-1 p-2 row">
                                    <div className="col-12 d-flex justify-content-between">
                                        <Link
                                            to={`/class/list/${item.product_id}?class=${item.ins_main_id}`}
                                        >
                                            <h6>
                                                <b>{item.name}</b>
                                            </h6>
                                        </Link>
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
                                    <div className="col-12 row">
                                        <span className="d-inline-block col-md-6 order-1 order-md-0">
                                            報名期限：{item.deadline}
                                        </span>
                                        <span className="d-inline-block col-md-6 order-3 order-md-0">
                                            師資：{item.teacher}
                                        </span>

                                        <span className="d-inline-block col-md-6 order-2 order-md-0">
                                            上課時間：{item.start_date} -{' '}
                                            {item.end_date}
                                        </span>
                                        <span className="d-inline-block col-md-6 order-4 order-md-0">
                                            名額：{item.stock}人
                                        </span>
                                    </div>
                                    <div className="col-12 d-flex justify-content-between align-items-center">
                                        <p className="d-inline-flex m-0">
                                            <span className="accent-color">
                                                <b>NT ${item.price}</b>
                                            </span>
                                            /期
                                        </p>
                                        <div>
                                            <button
                                                className="btn border-0 p-0 mx-3"
                                                onClick={() => {
                                                    getCheck({
                                                        product_id:
                                                            item.product_id,
                                                        category_id:
                                                            item.category_id,
                                                        image_1: item.image_1,
                                                        name: item.name,
                                                        amount: 1,
                                                        price: item.price,
                                                        stock: item.stock,
                                                    });
                                                }}
                                            >
                                                <AddCart className="myBucketItemIcon" />
                                            </button>
                                            <button className="btn border-0 p-0">
                                                <AshBin
                                                    className="myBucketItemIcon"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        handleRemoveFavoriteSingle(
                                                            item.product_id
                                                        );
                                                    }}
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
        </>
    );
}

export default BucketClass;
