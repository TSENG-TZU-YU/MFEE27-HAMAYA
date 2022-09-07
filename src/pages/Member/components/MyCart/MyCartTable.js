import React from 'react';
import productImg from '../../../../album/products/FP-90-3.png';
import classPic from '../../../../assets/ClassImg/Adult img.png';
import './MyCart.scss';
import { ReactComponent as AshBin } from '../../../../assets/svg/delete.svg';
import { ReactComponent as FavDefault } from '../../../../assets/svg/favorite_defaut.svg';
import { RiAddFill } from 'react-icons/ri';
import { RiSubtractFill } from 'react-icons/ri';
function MyCartTable() {
    return (
        <>
            <table className="table m-0 myCartTable">
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
                        <td data-title="樂器商城" align="center">
                            <div className="d-flex justify-content-md-between p-md-0 pt-2">
                                <div className="align-self-center">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id=""
                                    />
                                </div>
                                <div className="w-75 m-auto">
                                    <img
                                        className="img-fluid"
                                        src={productImg}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </td>
                        <td align="center">
                            <div className="d-flex flex-column align-items-md-start pt-md-2">
                                <span className="p main-color">
                                    <b> YAMAHA U系列 U1</b>
                                </span>
                                <span className="small">型號：aNueNue-M2</span>
                                <div className="pt-md-3 d-inline">
                                    <button className="btn border-0 p-0">
                                        <FavDefault className="myCartItemIconFav " />
                                    </button>
                                    <button className="btn border-0 p-0 ms-3">
                                        <AshBin className="myCartItemIcon" />
                                    </button>
                                </div>
                            </div>
                        </td>
                        <td align="center" valign="middle">
                            <div className="gary-dark ">NT $100000</div>
                        </td>
                        <td align="center" valign="middle">
                            <div className="d-inline-block">
                                <button className="btn border-0">
                                    <RiSubtractFill size="20" />
                                </button>
                                <div className="countBox">1</div>
                                <button className=" btn border-0">
                                    <RiAddFill size="20" />
                                </button>
                            </div>
                        </td>
                        <td align="center" valign="middle">
                            <div className="gary-dark ">NT $100000</div>
                        </td>
                    </tr>
                    <tr>
                        <td data-title="樂器商城" align="center">
                            <div className="d-flex justify-content-md-between p-md-0 pt-2">
                                <div className="align-self-center">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id=""
                                    />
                                </div>
                                <div className="w-75 m-auto">
                                    <img
                                        className="img-fluid"
                                        src={productImg}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </td>
                        <td align="center" data-title="商品名稱">
                            <div className="d-flex flex-column align-items-md-start pt-2">
                                <span className="p main-color">
                                    <b> YAMAHA U系列 U1</b>
                                </span>
                                <span className="small">型號：aNueNue-M2</span>
                                <div className="pt-md-3 d-inline">
                                    <button className="btn border-0 p-0">
                                        <FavDefault className="myCartItemIconFav " />
                                    </button>
                                    <button className="btn border-0 p-0 ms-3">
                                        <AshBin className="myCartItemIcon" />
                                    </button>
                                </div>
                            </div>
                        </td>
                        <td align="center" valign="middle" data-title="價錢">
                            <div className="gary-dark pt-2 pt-md-0">
                                NT $100000
                            </div>
                        </td>
                        <td align="center" valign="middle" data-title="數量">
                            <div className="d-inline-block pt-2 pt-md-0">
                                <button className="btn border-0">
                                    <RiSubtractFill size="20" />
                                </button>
                                <div className="countBox">1</div>
                                <button className=" btn border-0">
                                    <RiAddFill size="20" />
                                </button>
                            </div>
                        </td>
                        <td align="center" valign="middle" data-title="小計">
                            <div className="gary-dark pt-2 pt-md-0">
                                NT $100000
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table className="table m-0 myCartTable">
                <thead>
                    <tr className="text-center accent-light-color bg-main-color">
                        <th className="tdWidth">音樂教育</th>
                        <th>商品名稱</th>
                        <th>價格</th>
                        <th>數量</th>
                        <th>小計</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td data-title="音樂課程" align="center">
                            <div className="d-flex justify-content-md-between p-md-0 pt-2">
                                <div className="align-self-center">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id=""
                                    />
                                </div>
                                <div className="w-75 m-auto">
                                    <img
                                        className="img-fluid"
                                        src={classPic}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </td>
                        <td align="center" data-title="課程名稱">
                            <div className="d-flex flex-column align-items-md-start pt-2">
                                <span className="p main-color">
                                    <b> YAMAHA U系列 U1</b>
                                </span>
                                <div className="pt-md-3 d-inline">
                                    <button className="btn border-0 p-0">
                                        <FavDefault className="myCartItemIconFav " />
                                    </button>
                                    <button className="btn border-0 p-0 ms-3">
                                        <AshBin className="myCartItemIcon" />
                                    </button>
                                </div>
                            </div>
                        </td>
                        <td align="center" valign="middle" data-title="價錢">
                            <div className="gary-dark pt-2 pt-md-0">
                                NT $100000
                            </div>
                        </td>
                        <td align="center" valign="middle" data-title="數量">
                            <div className="d-inline-block pt-2 pt-md-0">
                                <button className="btn border-0">
                                    <RiSubtractFill size="20" />
                                </button>
                                <div className="countBox">1</div>
                                <button className=" btn border-0">
                                    <RiAddFill size="20" />
                                </button>
                            </div>
                        </td>
                        <td align="center" valign="middle" data-title="小計">
                            <div className="gary-dark pt-2 pt-md-0">
                                NT $100000
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td data-title="音樂課程" align="center">
                            <div className="d-flex justify-content-md-between p-md-0 pt-2">
                                <div className="align-self-center">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id=""
                                    />
                                </div>
                                <div className="w-75 m-auto">
                                    <img
                                        className="img-fluid"
                                        src={classPic}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </td>
                        <td align="center" data-title="課程名稱">
                            <div className="d-flex flex-column align-items-md-start pt-2">
                                <span className="p main-color">
                                    <b> YAMAHA U系列 U1</b>
                                </span>
                                <div className="pt-md-3 d-inline">
                                    <button className="btn border-0 p-0">
                                        <FavDefault className="myCartItemIconFav " />
                                    </button>
                                    <button className="btn border-0 p-0 ms-3">
                                        <AshBin className="myCartItemIcon" />
                                    </button>
                                </div>
                            </div>
                        </td>
                        <td align="center" valign="middle" data-title="價錢">
                            <div className="gary-dark pt-2 pt-md-0">
                                NT $100000
                            </div>
                        </td>
                        <td align="center" valign="middle" data-title="數量">
                            <div className="d-inline-block pt-2 pt-md-0">
                                <button className="btn border-0">
                                    <RiSubtractFill size="20" />
                                </button>
                                <div className="countBox">1</div>
                                <button className=" btn border-0">
                                    <RiAddFill size="20" />
                                </button>
                            </div>
                        </td>
                        <td align="center" valign="middle" data-title="小計">
                            <div className="gary-dark pt-2 pt-md-0">
                                NT $100000
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default MyCartTable;
