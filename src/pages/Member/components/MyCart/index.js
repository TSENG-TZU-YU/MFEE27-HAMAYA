import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom'; //抓取Outlet的props
import './MyCart.scss';
//暫時的img
import productImg from '../../../../album/products/FP-90-3.png';
import classPic from '../../../../assets/ClassImg/Adult img.png';
import { ReactComponent as AshBin } from '../../../../assets/svg/delete.svg';
import { ReactComponent as FavDefault } from '../../../../assets/svg/favorite_defaut.svg';
// import { ReactComponent as Add } from '../../../../assets/svg/add.svg';
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
                <div className="row col-md-5 align-items-center ">
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
            <div className="listBottomLine">
                <table className="table m-0">
                    <thead>
                        <tr className="text-center myCartTitle titleBgColorMain">
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
                                <div className="itemFlex text-center">
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
                                <div className="itemFlex text-center">
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
                        <tr className="text-center myCartTitle titleBgColorMain">
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
                                <div className="itemFlex text-center">
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
                                <div className="itemFlex text-center">
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
            {/* TODO:要微調 */}
            <div className="py-5 row justify-content-around">
                <div className="col-md-7 row">
                    <div className="col-12 titleBg titleBgColorMain">
                        <span className="myCartTitle">收件人資訊</span>
                    </div>
                    <div className="col-12 row gy-2">
                        <span className="col-3">收件人姓名</span>
                        <input className="col form-control" type="text" />
                        <span className="col text-center">聯絡電話</span>
                        <input className="col form-control" type="text" />
                    </div>
                    <div className="col-12 row gy-2">
                        <span className="col-3">送件地址</span>
                        {/* <div className="col row"> */}
                        <select className="col form-select" name="" id="">
                            <option>請選擇縣市</option>
                            <option>桃園市</option>
                            <option>桃園市</option>
                            <option>桃園市</option>
                        </select>
                        <select className="col form-select" name="" id="">
                            <option>請選擇地區</option>
                            <option>中壢區</option>
                            <option>中壢區</option>
                            <option>中壢區</option>
                        </select>
                        {/* </div> */}
                    </div>
                    <div className="py-2 row ">
                        <input
                            className="col-5 form-control"
                            type="text"
                            name=""
                            id=""
                        />
                    </div>
                </div>
                <div className="col-md-5 row">
                    <div className="col-12 titleBg titleBgColorAccent">
                        <span className="myCartTitle">訂購資訊</span>
                    </div>
                    <div className="d-flex justify-content-end">
                        <span className="mx-2">總計</span>
                        <span className="">NT: 100000</span>
                    </div>
                    <div className="d-flex align-items-center">
                        <span className="col">運費</span>
                        <select className="col mx-4 form-select" name="" id="">
                            <option>請選擇運費</option>
                            <option>2000</option>
                            <option>5000</option>
                            <option>3000</option>
                        </select>
                        <span className="col me-auto">NT:1000</span>
                    </div>
                    <div className="d-flex align-items-center">
                        <span className="col">優惠券折扣</span>
                        <select className="col mx-4 form-select" name="" id="">
                            <option>請選擇折扣</option>
                            <option>50</option>
                            <option>100</option>
                            <option>2000</option>
                        </select>
                        <span className="col me-auto">NT:1000</span>
                    </div>
                </div>
                <div className="col-3 offset-9 gy-2">
                    <p>
                        訂購金額 <span>NT: 100000</span>
                    </p>
                    <button className="w-100 btn btn-primary p-0">
                        前往付款
                    </button>
                </div>
            </div>
        </div>
    );
}
export default MyCart;
