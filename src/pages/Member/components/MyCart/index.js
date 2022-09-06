import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom'; //抓取Outlet的props
import './MyCart.scss';
//暫時的img
import productImg from '../../../../album/products/FP-90-3.png';
import classPic from '../../../../assets/ClassImg/Adult img.png';
import { ReactComponent as AshBin } from '../../../../assets/svg/delete.svg';
import { ReactComponent as FavDefault } from '../../../../assets/svg/favorite_defaut.svg';
import { RiAddFill } from 'react-icons/ri';
import { RiSubtractFill } from 'react-icons/ri';
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
                <div className="row col-md-5 align-items-center py-2">
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
                    <button className="btn btn-primary col mx-2 p-0">
                        移除品項
                    </button>
                    <button className="btn btn-primary col mx-2 p-0">
                        加入購物車
                    </button>
                </div>
            </div>
            {/* TODO: table要調整RWD */}
            <div className="listBottomLine">
                <table className="table m-0">
                    <thead>
                        <tr className="text-center accent-light-color bg-main-color">
                            <th className="tdWidth">樂器商城</th>
                            <th>商品名稱</th>
                            <th>價格</th>
                            <th>數量</th>
                            <th>小計</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="d-flex justify-content-between">
                                <input
                                    className="form-check-input align-self-center"
                                    type="checkbox"
                                    value=""
                                    id=""
                                />
                                <div className="flex-grow-1 text-center">
                                    <img
                                        className="myCartImg"
                                        src={productImg}
                                        alt=""
                                    />
                                </div>
                            </td>
                            <td>
                                <div className="d-flex flex-column align-items-start">
                                    <span className="p main-color">
                                        <b> YAMAHA U系列 U1</b>
                                    </span>
                                    <span className="small">
                                        型號：aNueNue-M2
                                    </span>
                                    <div className="pt-3">
                                        <button className="btn border-0 p-0">
                                            <FavDefault className="myCartItemIconFav " />
                                        </button>
                                        <button className="btn border-0 p-0 ms-3">
                                            <AshBin className="myCartItemIcon" />
                                        </button>
                                    </div>
                                </div>
                            </td>
                            <td
                                align="center"
                                valign="middle"
                                className="gary-dark"
                            >
                                NT $100000
                            </td>
                            <td align="center" valign="middle">
                                <div className="">
                                    <button className="btn border-0">
                                        <RiSubtractFill size="20" />
                                    </button>
                                    {/* <input className="" size="5" type="text" /> */}
                                    <div className="countBox">1</div>
                                    <button className=" btn border-0">
                                        <RiAddFill size="20" />
                                    </button>
                                </div>
                            </td>
                            <td
                                align="center"
                                valign="middle"
                                className="gary-dark"
                            >
                                NT $100000
                            </td>
                        </tr>
                        <tr>
                            <td className="d-flex justify-content-between">
                                <input
                                    className="form-check-input align-self-center"
                                    type="checkbox"
                                    value=""
                                    id=""
                                />
                                <div className="flex-grow-1 text-center">
                                    <img
                                        className="myCartImg"
                                        src={productImg}
                                        alt=""
                                    />
                                </div>
                            </td>
                            <td>
                                <div className="d-flex flex-column align-items-start">
                                    <span className="p main-color">
                                        <b> YAMAHA U系列 U1</b>
                                    </span>
                                    <span className="small">
                                        型號：aNueNue-M2
                                    </span>
                                    <div className="pt-3">
                                        <button className="btn border-0 p-0">
                                            <FavDefault className="myCartItemIconFav " />
                                        </button>
                                        <button className="btn border-0 p-0 ms-3">
                                            <AshBin className="myCartItemIcon" />
                                        </button>
                                    </div>
                                </div>
                            </td>
                            <td
                                align="center"
                                valign="middle"
                                className="gary-dark"
                            >
                                NT $100000
                            </td>
                            <td align="center" valign="middle">
                                <div className="">
                                    <button className="btn border-0">
                                        <RiSubtractFill size="20" />
                                    </button>
                                    {/* <input className="" size="5" type="text" /> */}
                                    <div className="countBox">1</div>
                                    <button className=" btn border-0">
                                        <RiAddFill size="20" />
                                    </button>
                                </div>
                            </td>
                            <td
                                align="center"
                                valign="middle"
                                className="gary-dark"
                            >
                                NT $100000
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table className="table m-0">
                    <thead>
                        <tr className="text-center accent-light-color bg-main-color">
                            <th className="tdWidth">音樂教育</th>
                            <th>課程名稱</th>
                            <th>價格</th>
                            <th>數量</th>
                            <th>小計</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="d-flex">
                                <input
                                    className="form-check-input align-self-center"
                                    type="checkbox"
                                    value=""
                                    id=""
                                />
                                <div className="flex-grow-1 text-center">
                                    <img
                                        className="myCartImg"
                                        src={classPic}
                                        alt=""
                                    />
                                </div>
                            </td>
                            <td valign="middle">
                                <div className="d-flex flex-column align-items-start">
                                    <span className="p main-color">
                                        <b> YAMAHA U系列 U1</b>
                                    </span>
                                    {/* <span className="small">型號：aNueNue-M2</span> */}
                                    <div className="pt-2">
                                        <button className="btn border-0 p-0">
                                            <FavDefault className="myCartItemIconFav " />
                                        </button>
                                        <button className="btn border-0 p-0 ms-3">
                                            <AshBin className="myCartItemIcon" />
                                        </button>
                                    </div>
                                </div>
                            </td>
                            <td
                                align="center"
                                valign="middle"
                                className="gary-dark"
                            >
                                NT $100000
                            </td>
                            <td align="center" valign="middle">
                                <div className="">
                                    <button className="btn border-0">
                                        <RiSubtractFill size="20" />
                                    </button>
                                    {/* <input className="" size="5" type="text" /> */}
                                    <div className="countBox">1</div>
                                    <button className=" btn border-0">
                                        <RiAddFill size="20" />
                                    </button>
                                </div>
                            </td>
                            <td
                                align="center"
                                valign="middle"
                                className="gary-dark"
                            >
                                NT $100000
                            </td>
                        </tr>
                        <tr>
                            <td className="d-flex justify-content-between">
                                <input
                                    className="form-check-input align-self-center"
                                    type="checkbox"
                                    value=""
                                    id=""
                                />
                                <div className="flex-grow-1 text-center">
                                    <img
                                        className="myCartImg"
                                        src={classPic}
                                        alt=""
                                    />
                                </div>
                            </td>
                            <td valign="middle">
                                <div className="d-flex flex-column align-items-start">
                                    <span className="p main-color">
                                        <b> YAMAHA U系列 U1</b>
                                    </span>
                                    {/* <span className="small">型號：aNueNue-M2</span> */}
                                    <div className="pt-2">
                                        <button className="btn border-0 p-0">
                                            <FavDefault className="myCartItemIconFav " />
                                        </button>
                                        <button className="btn border-0 p-0 ms-3">
                                            <AshBin className="myCartItemIcon" />
                                        </button>
                                    </div>
                                </div>
                            </td>
                            <td
                                align="center"
                                valign="middle"
                                className="gary-dark"
                            >
                                NT $100000
                            </td>
                            <td align="center" valign="middle">
                                <div className="">
                                    <button className="btn border-0">
                                        <RiSubtractFill size="20" />
                                    </button>
                                    {/* <input className="" size="5" type="text" /> */}
                                    <div className="countBox">1</div>
                                    <button className=" btn border-0">
                                        <RiAddFill size="20" />
                                    </button>
                                </div>
                            </td>
                            <td
                                align="center"
                                valign="middle"
                                className="gary-dark"
                            >
                                NT $100000
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="pb-5 row justify-content-around">
                <div className="pt-5 col-md-7">
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
                <div className="pt-5 pb-2 col-md-5">
                    <div className="titleBg bg-accent-color">
                        <span className="h6 accent-light-color px-2">
                            <b>訂購資訊</b>
                        </span>
                    </div>
                    <div className="d-flex justify-content-end py-2">
                        <span className="accent-color px-2">總計</span>
                        <span className="">NT: 100000</span>
                    </div>
                    <div className="d-flex justify-content-end align-items-center py-md-2">
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
                <div className="col-md-3 offset-md-9">
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
