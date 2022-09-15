import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom'; //抓取Outlet的props
import MyCartTable from './components/MyCartTable';
import './MyCart.scss';
function MyCart(props) {
    const [setbread] = useOutletContext(); //此CODE為抓取麵包削setbread
    useEffect(() => {
        setbread('購物車'); //載入頁面時 設定麵包削
    }, []);
    return (
        <div className="col-12 col-md-8 col-lg-9">
            {/*此className為RWD設定請勿更動*/}
            <h4 className="main-color">
                <b> 購物車</b>
            </h4>
            <div className="p-2">
                <div className="row col-lg-5 align-items-center ">
                    <div class="col-3 d-inline-flex justify-content-evenly form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                        />
                        <label
                            className="form-check-label"
                            for="flexCheckDefault"
                        >
                            全選
                        </label>
                    </div>
                    <button className="btn btn-primary col mx-2 p-0 text-nowrap">
                        移除品項
                    </button>
                    <button className="btn btn-primary col mx-2 p-0 text-nowrap">
                        加入收藏
                    </button>
                </div>
            </div>
            <div className="">
                <MyCartTable />
            </div>
            <div className="pb-5 row justify-content-around">
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
                            <input type="text" id="" className="form-control" />
                        </div>
                        <div className="col-auto px-2">
                            <label for="" className="main-color col-form-label">
                                聯絡電話
                            </label>
                        </div>
                        <div>
                            <input type="text" id="" className="form-control" />
                        </div>
                    </div>
                    <div className="d-flex align-items-center pb-2">
                        <div className="px-2">
                            <span className="main-color">運送地址</span>
                        </div>
                        <div className="flex-grow-1 d-flex">
                            <div className="myCartSelectPadding">
                                <select class="form-select" id="">
                                    <option>請選擇縣市</option>
                                    <option>桃園市</option>
                                    <option>桃園市</option>
                                    <option>桃園市</option>
                                </select>
                            </div>
                            <div>
                                <select class="form-select" id="">
                                    <option>請選擇地區</option>
                                    <option>中壢區</option>
                                    <option>中壢區</option>
                                    <option>中壢區</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="ps-2 d-flex align-items-center pt-2">
                        <input
                            type="text"
                            id=""
                            value="請輸入地址"
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
                        <span className="">NT: 100000</span>
                    </div>
                    <div className="d-flex justify-content-end align-items-center py-lg-2">
                        <div className="flex-grow-1 d-flex align-items-center justify-content-between px-2 mx-3">
                            <div className="myCartMarginLeft">
                                <span className="accent-color">運費</span>
                            </div>
                            <div className="">
                                <select className="form-select" name="" id="">
                                    <option>請選擇運費</option>
                                    <option>2000</option>
                                    <option>5000</option>
                                    <option>3000</option>
                                </select>
                            </div>
                        </div>
                        <div className="ps-2">
                            <span className="">NT:1000</span>
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
                                <select className="form-select" name="" id="">
                                    <option>請選擇折扣</option>
                                    <option>50</option>
                                    <option>100</option>
                                    <option>2000</option>
                                </select>
                            </div>
                        </div>
                        <span className="text-nowrap">- NT:1000</span>
                    </div>
                </div>
                <div className="col-lg-3 offset-lg-9">
                    <div className="text-end">
                        <span className="p accent-color">
                            <b>
                                訂單金額 <span>NT: 100000</span>
                            </b>
                        </span>
                    </div>
                    <div>
                        <button className="w-100 btn btn-primary p-0 mt-2">
                            前往付款
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default MyCart;
