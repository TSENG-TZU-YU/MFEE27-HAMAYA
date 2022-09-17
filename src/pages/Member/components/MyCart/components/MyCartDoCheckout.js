import React from 'react';
import { useState, useEffect } from 'react';
import { useAuth } from '../../../../../utils/use_auth';
import { cityData, distData } from '../../MyProfile/location';
function MyCartDoCheckout({ myCart, setMyCart, myCartPrice, setMyCartPrice }) {
    const { member, setMember, isLogin, setIsLogin } = useAuth();

    const [myCartInfo, setMyCartInfo] = useState({
        fullName: member.fullName,
        phone: member.phone,
        city: member.city,
        dist: member.dist,
        address: member.address,
        freight: 0,
        coupon: 0,
    });

    function getMyCartInfo(e) {
        setMyCartInfo({ ...myCartInfo, [e.target.name]: e.target.value });
    }

    function setSaveOrder(saveOrderInfo) {
        console.log('click in to Checkout', saveOrderInfo);
        console.log('order product Detail', myCart);
    }


    return (
        <>
            <div className="pt-5 col-lg-7">
                <div className="titleBg bg-main-color">
                    <span className="h6 accent-light-color px-2">
                        <b>收件人資訊</b>
                    </span>
                </div>
                <div className="d-flex align-items-center py-2">
                    <div className="col-auto px-2">
                        <label for="" className="main-color col-form-label">
                            收件人姓名
                        </label>
                    </div>
                    <div>
                        <input
                            type="text"
                            id=""
                            name="fullName"
                            className="form-control"
                            onChange={getMyCartInfo}
                            value={myCartInfo.fullName}
                        />
                    </div>
                    <div className="col-auto px-2">
                        <label for="" className="main-color col-form-label">
                            聯絡電話
                        </label>
                    </div>
                    <div>
                        <input
                            type="phone"
                            id=""
                            name="phone"
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
                                class="form-select"
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
                                class="form-select"
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
                                                value={data.dist}
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
                        id=""
                        name="address"
                        value={myCartInfo.address}
                        onChange={getMyCartInfo}
                        className="form-control"
                    />
                </div>
            </div>
            <div className="pt-5 pb-2 col-lg-5">
                <div className="titleBg bg-accent-color">
                    <span className="h6 accent-light-color px-2">
                        <b>訂購資訊</b>
                    </span>
                </div>
                <div className="d-flex justify-content-end py-2">
                    <span className="accent-color px-2">總計</span>
                    <span className="">NT: {myCartPrice}</span>
                </div>
                <div className="d-flex justify-content-end align-items-center py-lg-2">
                    <div className="flex-grow-1 d-flex align-items-center justify-content-between px-2 mx-3">
                        <div className="myCartMarginLeft">
                            <span className="accent-color">運費</span>
                        </div>
                        <div className="">
                            <select
                                className="form-select"
                                name="freight"
                                id=""
                                onChange={getMyCartInfo}
                            >
                                <option value="">請選擇運費</option>
                                <option value="2000">2000</option>
                                <option value="5000">5000</option>
                                <option value="3000">3000</option>
                            </select>
                        </div>
                    </div>
                    <div className="ps-2">
                        <span className="">NT:{myCartInfo.freight}</span>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-end py-2 orderBottomLine">
                    <div className="flex-grow-1 d-flex align-items-center justify-content-between px-2">
                        <div>
                            <span className="accent-color text-nowrap">
                                優惠券折扣
                            </span>
                        </div>
                        <div className="myCartMarginRight">
                            <select
                                className="form-select"
                                name="coupon"
                                id=""
                                onChange={getMyCartInfo}
                            >
                                <option value="">請選擇折扣</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                                <option value="200">200</option>
                            </select>
                        </div>
                    </div>
                    <span className="text-nowrap">
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
                                {myCartPrice +
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
                            //TODO:要送order資料庫
                            setSaveOrder({
                                myCartInfo: myCartInfo,
                                myCartTotal:
                                    myCartPrice +
                                    Number(myCartInfo.freight) -
                                    Number(myCartInfo.coupon),
                            });
                        }}
                    >
                        前往付款
                    </button>
                </div>
            </div>
        </>
    );
}

export default MyCartDoCheckout;
