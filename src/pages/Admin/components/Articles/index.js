import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './index.css';
import detail_img from '../../../../assets/svg/detailed.svg';
import {
    Link,
    useOutletContext,
    useLocation,
    useNavigate,
} from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../../../utils/config';
import _ from 'lodash';
import {
    FiChevronLeft,
    FiChevronRight,
    FiPlus,
    FiPlusSquare,
} from 'react-icons/fi';
function Articles(props) {
    const [loadingComplete, setLoadingComplete] = useState(false); //是否已載入完成
    // 分頁用
    const [pageNow, setPageNow] = useState(1); // 目前頁號
    const [perPage, setPerPage] = useState(6); // 每頁多少筆資料
    const [pageTotal, setPageTotal] = useState(0); //總共幾頁

    const [myQuestionList, setMyQuestionList] = useState([
        [
            {
                id: '',
                user_id: '',
                name: '',
                email: '',
                phone: '',
                user_q_category: '',
                title: '',
                comment: '',
                user_reply_state: '',
                create_time: '',
                update_time: '',
            },
        ],
    ]);
    return (
        <div className="Articles">
            <div className="mt-1">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to="/admin">首頁</Link>
                        </li>
                        <li className="breadcrumb-item " aria-current="page">
                            文章管理
                        </li>
                    </ol>
                </nav>
            </div>
            <div className="d-flex align-items-center">
                <h3>文章管理</h3>
                <Link to={`/admin/coupon/add`} className="addbtn">
                    <FiPlusSquare className="icon" />
                    新增文章
                </Link>
            </div>
            <hr />
            <div>
                <table className="table ">
                    <thead>
                        <tr className="bg-main-color accent-light-color ">
                            <th
                                className="text-nowrap fw-light text-center"
                                scope="col"
                            >
                                文章編號
                            </th>
                            <th
                                className="text-nowrap fw-light Qtitle text-center"
                                scope="col"
                            >
                                文章縮圖
                            </th>
                            <th
                                className="text-nowrap fw-light text-center"
                                scope="col"
                            >
                                作者
                            </th>
                            <th
                                className="text-nowrap fw-light text-center"
                                scope="col"
                            >
                                文章類型
                            </th>
                            <th
                                className="text-nowrap fw-light text-center"
                                scope="col"
                            >
                                文章標題
                            </th>
                            <th
                                className="text-nowrap fw-light text-center "
                                scope="col"
                            >
                                文章內容
                            </th>
                            <th
                                className="text-nowrap fw-light text-center"
                                scope="col"
                            >
                                狀態
                            </th>
                            <th
                                className="text-nowrap fw-light text-center"
                                scope="col"
                            >
                                建立時間
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
                        {myQuestionList[pageNow - 1].map((data, index) => {
                            return (
                                <tr key={uuidv4()} className="cssTable">
                                    <th scope="row">
                                        {data.id}
                                        <br />
                                        <span className="time">
                                            {data.create_time}
                                        </span>
                                    </th>
                                    <td className="text-nowrap text-center">
                                        {data.name}
                                    </td>
                                    <td>{data.user_q_category}</td>
                                    <td>{data.title}</td>
                                    <td>
                                        <div className="">
                                            <span className="ellipsis">
                                                {data.comment}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="">
                                        {data.user_reply_state}
                                    </td>
                                    <td className="">{data.update_time}</td>
                                    <td className="">{data.update_time}</td>
                                    <td className="text-nowrap ">
                                        <Link
                                            className=""
                                            to={`/admin/customerservice/commonqa/detail?nlid=${data.id}`}
                                        >
                                            <img src={detail_img} alt="" />
                                            查看詳細
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Articles;
