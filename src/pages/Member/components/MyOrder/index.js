import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom'; //抓取Outlet的props
import productImg from '../../../../album/products/FP-90-3.png';
import classPic from '../../../../assets/ClassImg/Adult img.png';
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
            <h4 className="main-color">
                <b>訂單查詢</b>
            </h4>
            <table className="table my-2">
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
                        <td align="center" className="align-middle">
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
                        <td align="center" className="align-middle">
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
                        <td align="center" className="align-middle">
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
