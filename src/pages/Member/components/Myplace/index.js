import { useState, useEffect } from 'react';
import axios from 'axios';
import { useOutletContext } from 'react-router-dom';
import add_img from '../../../../assets/svg/add.svg';
import detail_img from '../../../../assets/svg/detailed.svg';

function Myplace() {
    const [setbread] = useOutletContext(); //此CODE為抓取麵包削setbread
    useEffect(() => {
        setbread('場地租借'); //載入頁面時 設定麵包削
    }, []);
    return (
        <div className="col-12 col-md-8 col-lg-9">
            <div className="d-none d-lg-block">
                <div className="d-flex my-2">
                    <h4 className="main-color ">場地租借</h4>
                    {/* <Link to="/member/myquestion/detail">
                        <div className="bg-main-gary-light-color d-flex align-items-center addbtn">
                            <img src={add_img} />
                            我要提問
                        </div>
                    </Link> */}
                </div>
                <table className="table ">
                    <thead>
                        <tr className="bg-main-color accent-light-color ">
                            <th
                                className="text-nowrap fw-light text-center"
                                scope="col"
                            >
                                您租借的場地
                            </th>
                            <th
                                className="text-nowrap fw-light text-center"
                                scope="col"
                            >
                                租借日期
                            </th>
                            <th
                                className="text-nowrap fw-light Qtitle text-center"
                                scope="col"
                            >
                                使用人數
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
                                className="text-nowrap fw-light text-center"
                                scope="col"
                            >
                                功能
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="cssTable">
                            <th scope="row">studio A 錄音室</th>
                            <td>租借日期</td>
                            <td>使用人數</td>
                            <td>
                                <div className="">
                                    <span className="ellipsis">123123</span>
                                </div>
                            </td>
                            <td className="">已回覆</td>
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
        </div>
    );
}

export default Myplace;
