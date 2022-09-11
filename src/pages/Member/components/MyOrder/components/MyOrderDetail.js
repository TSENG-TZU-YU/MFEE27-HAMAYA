import React from 'react';
import { ReactComponent as OrderFinish } from '../../../../../assets/svg/order_status_finish.svg';
import { ReactComponent as OrderUndone } from '../../../../../assets/svg/order_status_undone.svg';
import { ReactComponent as OK } from '../../../../../assets/svg/ok.svg';
import { ReactComponent as Message } from '../../../../../assets/svg/message.svg';
import productImg from '../../../../../album/products/FP-90-3.png';
import classPic from '../../../../../assets/ClassImg/Adult img.png';
import './MyOrderDetail.scss';
function MyOrderDetail() {
    return (
        <div className="col-12 col-md-8 col-lg-9">
            {/*此className為RWD設定請勿更動*/}
            <div className="d-flex align-items-center">
                <h4 className="main-color d-inline-block">
                    <b>訂單詳細</b>
                </h4>
                <span className="main-color p d-inline-block mx-2">
                    訂單編號：A1033042
                </span>
            </div>
            <div className="d-flex justify-content-evenly pt-4">
                <div>
                    <OrderFinish className="myOrderDetail-Icon" />
                    <p className="gary-dark-color">訂單成立</p>
                </div>
                <div>
                    <OrderFinish className="myOrderDetail-Icon" />
                    <p className="gary-dark-color">待出貨</p>
                </div>
                <div>
                    <OrderUndone className="myOrderDetail-Icon" />
                    <p className="gary-dark-color">訂單完成</p>
                </div>
            </div>
            <h6 className="main-color py-2">收件資訊</h6>
            <div className="row">
                <p className="m-0 py-1 main-color col-lg-3 col-12">
                    收件人姓名 <span className="gary-dark-color">OXOX</span>
                </p>
                <p className="m-0 py-1 main-color col-lg-3 col-12">
                    收件人電話{' '}
                    <span className="gary-dark-color">0900000000</span>
                </p>
                <p className="m-0 py-1 main-color col-lg-6 col-12">
                    收件人地址{' '}
                    <span className="gary-dark-color">
                        320 桃園市中壢區新生路二段421號
                    </span>
                </p>
            </div>
            <h6 className="main-color py-2">購買列表</h6>
            <table className="table m-0 myOrderDetailTable">
                <thead>
                    <tr className="text-center accent-light-color bg-main-color">
                        <th className="myOrderThWidth">樂器商城</th>
                        <th className="w-50">商品名稱</th>
                        <th>價格</th>
                        <th>數量</th>
                        <th>小計</th>
                    </tr>
                </thead>
                <tbody>
                    {/* first tr for mobile */}
                    <tr>
                        <td data-title="樂器商城">
                            <div className="row g-0 mx-1">
                                <div className="col-3 text-center">
                                    <img
                                        className="myOrder-Img myOrder-contain"
                                        src={productImg}
                                        alt=""
                                    />
                                </div>
                                <div className="col-9 row">
                                    <div className="col-12">
                                        <span className="p main-color">
                                            <b> YAMAHA U系列 U1</b>
                                        </span>
                                    </div>
                                    <div className="col-12 row">
                                        <div className="main-color p col-6">
                                            數量：1
                                        </div>
                                        <div className="gary-dark-color p col-6">
                                            NT $100000
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row g-0 mx-1">
                                <div className="col-3 text-center">
                                    <img
                                        className="myOrder-Img myOrder-contain"
                                        src={productImg}
                                        alt=""
                                    />
                                </div>
                                <div className="col-9 row">
                                    <div className="col-12">
                                        <span className="p main-color">
                                            <b> YAMAHA U系列 U1</b>
                                        </span>
                                    </div>
                                    <div className="col-12 row">
                                        <div className="main-color p col-6">
                                            數量：1
                                        </div>
                                        <div className="gary-dark-color p col-6">
                                            NT $100000
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="align-middle" align="center">
                            <img
                                className="myOrder-Img myOrder-contain"
                                src={productImg}
                                alt=""
                            />
                        </td>
                        <td>
                            <div className="d-flex flex-column align-items-lg-start pt-lg-2">
                                <span className="p main-color">
                                    <b> YAMAHA U系列 U1</b>
                                </span>
                                <span className="small">型號：aNueNue-M2</span>
                            </div>
                        </td>
                        <td align="center" className="align-middle">
                            <div className="gary-dark-color p">
                                <span>NT $100000</span>
                            </div>
                        </td>
                        <td align="center" className="align-middle">
                            <div className="gary-dark-color p">1</div>
                        </td>
                        <td align="center" className="align-middle ">
                            <div className="gary-dark-color p">
                                <span>NT $100000</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table className="table m-0 myOrderDetailTable py-2">
                <thead>
                    <tr className="text-center accent-light-color bg-main-color">
                        <th className="myOrderThWidth">音樂教育</th>
                        <th className="w-50">商品名稱</th>
                        <th>價格</th>
                        <th>數量</th>
                        <th>小計</th>
                    </tr>
                </thead>
                <tbody>
                    {/* first tr for mobile */}
                    <tr>
                        <td data-title="音樂課程"></td>
                    </tr>
                    <tr>
                        <td className="align-middle" align="center">
                            <img
                                className="myOrder-Img myOrder-contain"
                                src={classPic}
                                alt=""
                            />
                        </td>
                        <td>
                            <div className="d-flex flex-column align-items-lg-start pt-lg-2">
                                <span className="p main-color">
                                    <b>藍調與爵士鋼琴的獨奏技巧與應用</b>
                                </span>
                            </div>
                        </td>
                        <td align="center" className="align-middle">
                            <div className="gary-dark-color p">
                                <span>NT $100000</span>
                            </div>
                        </td>
                        <td align="center" className="align-middle">
                            <div className="gary-dark-color p">1</div>
                        </td>
                        <td align="center" className="align-middle ">
                            <div className="gary-dark-color p">
                                <span>NT $100000</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="row detailBorder gary-dark-color mx-1">
                <div className="py-2 col-12 row justify-content-end">
                    <p className="m-0 col-lg-2 col-5 text-end">總計</p>
                    <p className="m-0 col-lg-2 col-5 text-end">NT $15300</p>
                </div>
                <div className="py-2 col-12 row justify-content-end">
                    <p className="m-0 col-lg-2 col-5 text-end">運費</p>
                    <p className="m-0 col-lg-2 col-5 text-end">NT $100</p>
                </div>
                <div className="py-2 col-12 row justify-content-end">
                    <p className="m-0 col-lg-2 col-5 text-end">優惠券折扣</p>
                    <p className="m-0 col-lg-2 col-5 text-end">- NT $50</p>
                </div>
            </div>
            <div className="row mx-1">
                <div className="py-2 row justify-content-end">
                    <p className="m-0 main-color col-lg-2 col-5 text-end">
                        <b>訂單金額</b>
                    </p>
                    <p className="m-0 main-color col-lg-2 col-5 text-end">
                        <b>NT $15300</b>
                    </p>
                </div>
                <div className="py-2 row col-lg-5 offset-lg-7 align-items-center">
                    <button className="btn btn-secondary col mx-2 p-0 text-nowrap">
                        <Message className="myOrderIcon myOrderDetailBtn-Icon px-1" />
                        訂單詢問
                    </button>
                    <button className="btn btn-primary col mx-2 p-0 text-nowrap">
                        <OK className="myOrderIcon myOrderDetailBtn-Icon px-1" />
                        訂單完成
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MyOrderDetail;
