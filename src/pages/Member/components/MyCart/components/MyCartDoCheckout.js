import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../../utils/use_auth';
import { cityData, distData } from '../../MyProfile/location';
import axios from 'axios';
import { API_URL } from '../../../../../utils/config';
import {
    basicAlert,
    successToast,
    warningToast,
    errorToast,
} from '../../../../../components/Alert';

function MyCartDoCheckout({
    myCart,
    setMyCart,
    setMyCartA,
    setMyCartB,
    myCartInfo,
    setMyCartInfo,
    setHiddenState,
    calcTotalPrice,
}) {
    const { member } = useAuth();
    const [myCoupon, setMyCoupon] = useState([]);
    const navigate = useNavigate();

    // console.log('myCartInfo DoCheckout', myCartInfo);
    //載入優惠券
    useEffect(() => {
        async function getCoupon() {
            try {
                let response = await axios.get(
                    `${API_URL}/member/mycoupon/loading`,
                    {
                        withCredentials: true,
                    }
                );
                // console.log('myCoupon', response.data);
                //過濾可以使用的
                let filterUse = response.data.filter((v) => {
                    return v.use === 1;
                });

                //過濾大於開始時間
                let currentTime = Date.now();
                // console.log('currentTime', currentTime);
                let filterStart = filterUse.filter((v) => {
                    let start_time = new Date(v.start_time).valueOf();
                    return currentTime > start_time;
                });
                // console.log('filterStart', filterStart);
                //過濾已到期
                let filterEnd = filterStart.filter((v) => {
                    let end_time = new Date(v.end_time).valueOf();
                    return currentTime < end_time;
                });
                // console.log('filterEnd', filterEnd);

                let newMyCoupon = filterEnd.map((item) => {
                    return {
                        coupon_id: item.coupon_id,
                        use: item.use,
                        discount: item.discount,
                        minimum: item.minimum,
                        name: item.name,
                        end_time: item.end_time,
                        start_time: item.start_time,
                    };
                });

                // console.log('newMyCoupon', newMyCoupon);
                setMyCoupon(newMyCoupon);
            } catch (err) {
                console.log('載入優惠券失敗', err);
            }
        }
        getCoupon();
        //運費
        let checkA = myCart.filter((v) => {
            return v.category_id === 'A';
        });
        if (checkA.length !== 0) {
            setMyCartInfo({ ...myCartInfo, freight: 2000 });
        }
    }, []);

    //除優惠券以外表單
    function getMyCartInfo(e) {
        setMyCartInfo({ ...myCartInfo, [e.target.name]: e.target.value });
    }
    //select 優惠券
    function getMyCartCou(e) {
        const [coupon_id] = e.target.value.split('/');
        const [, value] = e.target.value.split('/');
        const [, , minimum] = e.target.value.split('/');
        // console.log(coupon_id, value, minimum, e.target.value);
        if (calcTotalPrice < minimum) {
            errorToast('此優惠券未滿' + minimum, '關閉');
        }
        setMyCartInfo({
            ...myCartInfo,
            [e.target.name]: value,
            coupon_id: coupon_id,
            minimum: minimum,
        });
    }

    //前往付款 成立訂單
    async function setSaveOrder(saveOrderInfo) {
        // console.log('saveOrderInfo', saveOrderInfo, myCart);
        //確保是否登入
        if (member !== null && member.id !== '') {
            //串要傳資料庫的內容 前端驗證資訊是否填妥
            let newMyCart = myCart.filter((item) => {
                return item.amount !== 0;
            });
            // console.log('newMyCart', newMyCart);

            if (!newMyCart.length) {
                return errorToast('商品數量不對喔', '關閉');
            }
            if (saveOrderInfo.pay_method === 0) {
                warningToast('請選擇付款方式', '關閉');
                return;
            }
            if (saveOrderInfo.receiver === '') {
                warningToast('請填寫訂購人姓名', '關閉');
                return;
            }
            if (saveOrderInfo.phone === '') {
                warningToast('請填寫訂購人電話', '關閉');
                return;
            }
            if (saveOrderInfo.minimum > saveOrderInfo.total_amount) {
                return errorToast('金額未達使用該優惠券額度', '關閉');
            }

            let categoryHaveA = myCart.find((item) => {
                return item.category_id === 'A';
            });
            // console.log('categoryOnlyB', categoryOnlyB);

            if (categoryHaveA) {
                if (saveOrderInfo.city === '' && saveOrderInfo.dist === '') {
                    warningToast('請填寫完整地址', '關閉');
                    return;
                }
                if (saveOrderInfo.address === '') {
                    warningToast('請填寫完整地址', '關閉');
                    return;
                }
                // if (saveOrderInfo.freight === 0) {
                //     warningToast('請選擇運費', '關閉');
                //     return;
                // }
                saveOrderInfo = {
                    ...saveOrderInfo,
                    total_amount:
                        calcTotalPrice +
                        Number(saveOrderInfo.freight) -
                        Number(saveOrderInfo.coupon),
                };
                // console.log('saveOrderInfo AAAA', saveOrderInfo);
            } else {
                saveOrderInfo = {
                    ...saveOrderInfo,
                    freight: 0,
                    address: '',
                    city: '',
                    dist: '',
                };
                // console.log('saveOrderInfo BBBBB', saveOrderInfo);
            }

            let newSaveOrderInfo = [
                {
                    user_id: member.id,
                    ...saveOrderInfo,
                    // pay_method: 1, //付款方式
                    product_detail: myCart,
                },
            ];
            // console.log('newSaveOrderInfo', newSaveOrderInfo);
            async function setOrderInfo() {
                try {
                    let response = await axios.post(
                        `${API_URL}/member/myorder`,
                        newSaveOrderInfo
                    );

                    basicAlert(
                        `訂單編號：${response.data.order_id} & ${response.data.message}`,
                        '關閉'
                    );
                    // console.log(response.data);
                    if (response.data.noStock) {
                        basicAlert(
                            `商品名稱：${response.data.noStock}  ${response.data.message} `,
                            '關閉'
                        );
                        return;
                    }
                    setMyCart([]);
                    setMyCartA([]);
                    setMyCartB([]);
                    setHiddenState(false);
                    navigate('/member/myorder');
                } catch (err) {
                    console.log('新增訂單錯誤', err);
                }
            }
            setOrderInfo();
        }
    }

    return (
        <>
            <div className="pt-5 col-lg-6">
                <div className="titleBg bg-main-color">
                    <span className="h6 accent-light-color px-2">
                        <b>收件人資訊</b>
                    </span>
                </div>
                <div className="d-flex align-items-center py-2">
                    <div className="col-auto px-2">
                        <label htmlFor="" className="main-color col-form-label">
                            收件人姓名
                        </label>
                    </div>
                    <div>
                        <input
                            type="text"
                            id=""
                            name="receiver"
                            placeholder="請輸入姓名"
                            className="form-control"
                            onChange={getMyCartInfo}
                            value={myCartInfo.receiver}
                        />
                    </div>
                    <div className="col-auto px-2">
                        <label htmlFor="" className="main-color col-form-label">
                            聯絡電話
                        </label>
                    </div>
                    <div>
                        <input
                            type="phone"
                            id=""
                            name="phone"
                            placeholder="請輸入電話"
                            className="form-control"
                            maxLength={10}
                            onChange={getMyCartInfo}
                            value={myCartInfo.phone}
                        />
                    </div>
                </div>
                <div className="d-flex align-items-center pb-2">
                    <div className="px-2">
                        <span className="main-color">運送地址</span>
                    </div>
                    <div className="flex-grow-1 d-flex">
                        <div className="myCartSelectPadding">
                            <select
                                className="form-select"
                                id=""
                                name="city"
                                value={myCartInfo.city}
                                onChange={getMyCartInfo}
                            >
                                <option>請選擇縣市</option>
                                {cityData.map((data, index) => {
                                    return (
                                        <option key={index} value={data.city}>
                                            {data.city}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <div>
                            <select
                                className="form-select"
                                id=""
                                name="dist"
                                value={myCartInfo.dist}
                                onChange={getMyCartInfo}
                            >
                                <option>請選擇地區</option>
                                {distData.map((data, index) => {
                                    if (data.city === myCartInfo.city) {
                                        return (
                                            <option
                                                key={index}
                                                value={
                                                    data.number +
                                                    ',' +
                                                    data.dist
                                                }
                                            >
                                                {data.dist}
                                            </option>
                                        );
                                    }
                                })}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="ps-2 d-flex align-items-center pt-2">
                    <input
                        type="text"
                        placeholder="請填寫地址"
                        id=""
                        name="address"
                        value={myCartInfo.address}
                        onChange={getMyCartInfo}
                        className="form-control"
                    />
                </div>
            </div>
            <div className="pt-5 pb-2 col-lg-6">
                <div className="titleBg bg-accent-color">
                    <span className="h6 accent-light-color px-2">
                        <b>訂購資訊</b>
                    </span>
                </div>
                <div className="d-flex justify-content-end py-2">
                    <span className="accent-color px-4">總計</span>
                    <span className="">NT: {calcTotalPrice}</span>
                </div>
                <div className="d-flex justify-content-between align-items-center py-lg-2">
                    <div className="d-flex align-items-center justify-content-between px-2 mx-3">
                        {/* 預設pay_method=1 */}
                        <div className="">
                            <span className="accent-color text-nowrap">
                                付款方式
                            </span>
                        </div>
                        <div className="myCartSelectMargin">
                            <select
                                className="form-select"
                                name="pay_method"
                                onChange={getMyCartInfo}
                            >
                                <option value="0">請選擇付款方式</option>
                                <option value="1">信用卡</option>
                                <option value="2">ATM轉帳</option>
                                <option value="3">Line Pay</option>
                                <option value="4">貨到付款</option>
                            </select>
                        </div>
                    </div>
                    <div className="ps-2">
                        <span className="text-nowrap accent-color">
                            運費 NT:{myCartInfo.freight}
                        </span>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-between py-2 orderBottomLine">
                    <div className="d-flex align-items-center justify-content-between px-2">
                        <div>
                            <span className="accent-color text-nowrap">
                                優惠券折扣
                            </span>
                        </div>
                        <div className="myCartSelectMargin">
                            <select
                                className="form-select"
                                name="coupon"
                                id=""
                                onChange={getMyCartCou}
                            >
                                <option value="0/0/0">請選擇折扣</option>
                                {myCoupon.map((v) => {
                                    let option =
                                        v.name +
                                        ' 滿' +
                                        v.minimum +
                                        '折' +
                                        v.discount;

                                    return (
                                        <option
                                            key={v.coupon_id}
                                            value={
                                                v.coupon_id +
                                                '/' +
                                                v.discount +
                                                '/' +
                                                v.minimum
                                            }
                                        >
                                            {option}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                    </div>
                    <span className="text-nowrap accent-color">
                        - NT:{myCartInfo.coupon}
                    </span>
                </div>
            </div>
            <div className="col-lg-3 offset-lg-9">
                <div className="text-end">
                    <span className="p accent-color">
                        <b>
                            訂單金額{' '}
                            <span>
                                NT:{' '}
                                {calcTotalPrice +
                                    Number(myCartInfo.freight) -
                                    Number(myCartInfo.coupon)}
                            </span>
                        </b>
                    </span>
                </div>
                <div>
                    <button
                        className="w-100 btn btn-primary p-0 mt-2"
                        onClick={() => {
                            //要送order資料庫
                            //(1)如果可以做是否結帳詢問的確認訊息 (2)串接信用卡
                            setSaveOrder({
                                ...myCartInfo,
                                total_amount: calcTotalPrice,
                            });
                        }}
                    >
                        訂單成立
                    </button>
                </div>
            </div>
        </>
    );
}

export default MyCartDoCheckout;
