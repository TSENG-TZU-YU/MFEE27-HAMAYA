import { useState, useEffect } from 'react';
import { Link, useOutletContext } from 'react-router-dom'; //抓取Outlet的props
import detail_img from '../../../../assets/svg/detailed.svg';
import add_img from '../../../../assets/svg/add.svg';
import './index.css';

function MyQuestion(props) {
    const [setbread] = useOutletContext(); //此CODE為抓取麵包削setbread
    useEffect(() => {
        setbread('我的詢問'); //載入頁面時 設定麵包削
    }, []);
    return (
        <div className="col-12 col-md-8 col-lg-9  MyQuestion">
            <div className="d-flex my-2">
                <h4 className="main-color ">我的詢問</h4>
                <Link to="/member/myquestion/detail">
                    <div className="bg-main-gary-light-color d-flex align-items-center addbtn">
                        <img src={add_img} />
                        我要提問
                    </div>
                </Link>
            </div>

            {/* 桌機板 */}
            <div className="d-none d-lg-block">
                <table className="table ">
                    <thead>
                        <tr className="bg-main-color accent-light-color ">
                            <th
                                className="text-nowrap fw-light text-center"
                                scope="col"
                            >
                                提問編號
                            </th>
                            <th
                                className="text-nowrap fw-light text-center"
                                scope="col"
                            >
                                問題類型
                            </th>
                            <th
                                className="text-nowrap fw-light Qtitle text-center"
                                scope="col"
                            >
                                問題主旨
                            </th>
                            <th
                                className="text-nowrap fw-light text-center"
                                scope="col"
                            >
                                詢問內容
                            </th>
                            <th
                                className="text-nowrap fw-light text-center"
                                scope="col"
                            >
                                回覆狀態
                            </th>
                            <th
                                className="text-nowrap fw-light text-center "
                                scope="col"
                            >
                                最後更新時間
                            </th>
                            <th
                                className="text-nowrap fw-light text-center"
                                scope="col"
                            >
                                功能
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="cssTable">
                            <th scope="row">
                                A0001
                                <br />
                                <span className="time">2022/08/30 15:30</span>
                            </th>
                            <td>商品問題</td>
                            <td>請問還有貨嗎?</td>
                            <td>
                                <div className="">
                                    <span className="ellipsis">
                                        問題的關鍵看似不明確，但想必在諸位心中已有了明確的答案。菲爾丁講過一段深奧的話，不好的書也像不好的朋友一樣，可能會把你戕害。請諸位將這段話在心中默念三遍。我們都有個共識，若問題很困難，那就勢必不好解決。庫存的出現，重寫了人生的意義。
                                    </span>
                                </div>
                            </td>
                            <td className="">已回覆</td>
                            <td className="">2022/08/31 13:30</td>
                            <td className="text-nowrap ">
                                <a>
                                    <img src={detail_img} />
                                    查看詳細
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* 手機板 */}
            <div className="d-block d-lg-none">
                <div className="row ">
                    <div className="col-12 ">
                        <div className="bg-main-color accent-light-color p-1">
                            <div className="d-flex justify-content-between">
                                <div className="text-nowrap fw-light">
                                    提問編號:<span> A0001</span>
                                </div>
                                <span className="time">2022/08/30 15:30</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="p-1 d-flex justify-content-between ">
                            <div className="main-color text-nowrap">
                                問題主旨:
                            </div>
                            <div>請問還有貨嗎?</div>
                        </div>
                    </div>
                    <div className="col-6 ">
                        <div className="p-1 d-flex justify-content-between ">
                            <div className="main-color text-nowrap">
                                問題類型:
                            </div>
                            <div>商品問題</div>
                        </div>
                    </div>
                    <hr />
                    <div className="col-6">
                        <div className="p-1 d-flex justify-content-between align-items-center h-100">
                            <div className="main-color text-nowrap">
                                回覆狀態:
                            </div>
                            <div>已回覆</div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="p-1 d-flex justify-content-between align-items-center ">
                            <div className="main-color text-nowrap">
                                最後更新時間:&nbsp;
                            </div>
                            <div className="text-wrap time2">
                                2022/08/31 13:30
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="col-12">
                        <div className="p-1 d-flex align-items-center">
                            <div className="main-color text-nowrap">
                                提問內容:&nbsp;
                            </div>
                            <div className="ellipsis">
                                問題的關鍵看似不明確，但想必在諸位心中已有了明確的答案。菲爾丁講過一段深奧的話，不好的書也像不好的朋友一樣，可能會把你戕害。請諸位將這段話在心中默念三遍。我們都有個共識，若問題很困難，那就勢必不好解決。庫存的出現，重寫了人生的意義。
                            </div>
                        </div>
                        <div className="main-color text-center p-1 ">
                            <Link to="/member/myquestion/detail">
                                <div className="bg-main-gary-light-color">
                                    <img src={detail_img} />
                                    查看詳細
                                </div>
                            </Link>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    );
}
export default MyQuestion;
