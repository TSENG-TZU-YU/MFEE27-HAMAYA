import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom'; //抓取Outlet的props

import productImg from '../../../../album/products/FP-90-3.png';
import classPic from '../../../../assets/ClassImg/Adult img.png';
import search from '../../../../assets/svg/search.svg';
import { ReactComponent as Detailed } from '../../../../assets/svg/detailed.svg';
import { ReactComponent as Message } from '../../../../assets/svg/message.svg';
import './MyOrder.scss';

function MyOrder(props) {
    const [setbread] = useOutletContext(); //此CODE為抓取麵包削setbread
    useEffect(() => {
        setbread('訂單查詢'); //載入頁面時 設定麵包削
    }, []);

    return (
        <div className="col-12 col-md-8 col-lg-9">
            {/*此className為RWD設定請勿更動*/}
            <div className="d-flex justify-content-between">
                <h4 className="main-color">
                    <b>訂單查詢</b>
                </h4>
                <button className="border-0">
                    <img src={search} alt="" />
                </button>
            </div>
            <table className="table my-2 myOrderTable">
                <thead>
                    <tr className="text-center accent-light-color bg-main-color">
                        <th className="thWidth">#</th>
                        <th>訂單編號</th>
                        <th>訂單金額</th>
                        <th>訂單狀態</th>
                        <th>訂單時間</th>
                        <th>功能</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="myOrderTr">
                        <td>
                            <img
                                className="img-fluid"
                                src={productImg}
                                alt=""
                            />
                        </td>
                        {/* 這一個td 是只會在手機板出現 */}
                        <td
                            align="center"
                            className="align-middle d-md-none p-0"
                            data-title="訂單編號:A1033038"
                        ></td>
                        <td
                            align="center"
                            className="align-middle"
                            data-title="訂單編號"
                        >
                            A1033038
                        </td>

                        <td
                            align="center"
                            className="align-middle"
                            data-title="訂單價錢"
                        >
                            NT $40400
                        </td>
                        <td
                            align="center"
                            className="align-middle"
                            data-title="訂單狀態"
                        >
                            待出貨
                        </td>
                        <td
                            align="center"
                            className="align-middle"
                            data-title="訂單時間"
                        >
                            2022/08/12
                        </td>
                        <td className="align-middle">
                            <div className="d-flex justify-content-md-between align-items-center">
                                <div>
                                    <button className="btn border-0 p-0">
                                        <Message className="myOrderIcon" />{' '}
                                        訂單詢問
                                    </button>
                                    <span className="small accent-light-color bg-main-color mx-1">
                                        未回覆
                                    </span>
                                </div>
                                <button className="btn border-0 p-0">
                                    <Detailed className="myOrderIcon" />{' '}
                                    訂單詳細
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr className="myOrderTr">
                        <td>
                            <img
                                className="img-fluid"
                                src={productImg}
                                alt=""
                            />
                        </td>
                        {/* 這一個td 是只會在手機板出現 */}
                        <td
                            align="center"
                            className="align-middle d-md-none p-0"
                            data-title="訂單編號:A1033038"
                        ></td>
                        <td className="align-middle text-md-center" colSpan={2}>
                            <div className="row">
                                <span className="col-3 d-md-none">
                                    訂單編號
                                </span>
                                <span className="col-md-6 col-3 text-md-center text-end">
                                    A1033038
                                </span>
                                <span className="col-3  d-md-none">
                                    訂單價錢
                                </span>
                                <span className="col-md-6 col-3 text-md-center text-end">
                                    NT $40
                                </span>
                            </div>
                        </td>

                        <td className="align-middle text-md-center" colSpan={2}>
                            <div className="row">
                                <span className="col-3  d-md-none">
                                    訂單狀態
                                </span>
                                <span className="col-md-6 col-3 text-md-center text-end">
                                    待出貨
                                </span>
                                <span className="col-3  d-md-none">
                                    訂單時間
                                </span>
                                <span className="col-md-6 col-3 text-md-center text-end">
                                    2022/08/12
                                </span>
                            </div>
                        </td>

                        <td className="align-middle">
                            <div className="d-flex justify-content-md-between align-items-center">
                                <div>
                                    <button className="btn border-0 p-0">
                                        <Message className="myOrderIcon" />{' '}
                                        訂單詢問
                                    </button>
                                    <span className="small accent-light-color bg-main-color mx-1">
                                        未回覆
                                    </span>
                                </div>
                                <button className="btn border-0 p-0">
                                    <Detailed className="myOrderIcon" />{' '}
                                    訂單詳細
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="myOrderImg">
                                <img
                                    className="img-fluid"
                                    src={productImg}
                                    alt=""
                                />
                            </div>
                        </td>
                        <td
                            align="center"
                            className="align-middle"
                            data-title="訂單編號:A1033038"
                        >
                            A1033038
                        </td>
                        <td align="center" className="align-middle">
                            NT $40400
                        </td>
                        <td align="center" className="align-middle">
                            待出貨
                        </td>
                        <td align="center" className="align-middle">
                            2022/08/12
                        </td>
                        <td className="align-middle">
                            <div className="d-flex justify-content-md-between align-items-center">
                                <div>
                                    <button className="btn border-0 p-0">
                                        <Message className="myOrderIcon" />{' '}
                                        訂單詢問
                                    </button>
                                    <span className="small accent-light-color bg-accent-color mx-1">
                                        已回覆
                                    </span>
                                </div>
                                <button className="btn border-0 p-0">
                                    <Detailed className="myOrderIcon" />{' '}
                                    訂單詳細
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="myOrderImg">
                                <img
                                    className="img-fluid"
                                    src={classPic}
                                    alt=""
                                />
                            </div>
                        </td>
                        <td
                            align="center"
                            className="align-middle"
                            data-title="訂單編號:A1033038"
                        >
                            A1033038
                        </td>
                        <td align="center" className="align-middle">
                            NT $40400
                        </td>
                        <td align="center" className="align-middle">
                            待出貨
                        </td>
                        <td align="center" className="align-middle">
                            2022/08/12
                        </td>
                        <td className="align-middle">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <button className="btn border-0 p-0">
                                        <Message className="myOrderIcon" />{' '}
                                        訂單詢問
                                    </button>
                                    <span className="small accent-light-color bg-main-light-color mx-1">
                                        未提問
                                    </span>
                                </div>
                                <button className="btn border-0 p-0">
                                    <Detailed className="myOrderIcon" />{' '}
                                    訂單詳細
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export default MyOrder;
