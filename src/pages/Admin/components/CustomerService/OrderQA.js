import { v4 as uuidv4 } from 'uuid';
import detail_img from '../../../../assets/svg/detailed.svg';
import { useState, useEffect } from 'react';
import {
    Link,
    useOutletContext,
    useLocation,
    useNavigate,
} from 'react-router-dom'; //抓取Outlet的props
import axios from 'axios';
import { API_URL } from '../../../../utils/config';
import _ from 'lodash';
import { errorToast } from '../../../../components/Alert';
import { io } from 'socket.io-client';
import {
    FiChevronLeft,
    FiChevronRight,
    FiPlus,
    FiPlusSquare,
} from 'react-icons/fi';
function OrderQA(props) {
    const [loadingComplete, setLoadingComplete] = useState(false); //是否已載入完成
    const [socketConn, setSocketConn] = useState(null);
    const [orderQAList, setOrderQAList] = useState(null);
    const [pageNow, setPageNow] = useState(1); // 目前頁號
    const [perPage, setPerPage] = useState(6); // 每頁多少筆資料
    const [pageTotal, setPageTotal] = useState(0); //總共幾頁
    const location = useLocation();
    //讀取頁數
    useEffect(() => {
        let params = new URLSearchParams(location.search);
        let page = params.get('page');
        console.log('page', page);
        if (page) {
            setPageNow(page);
        }
    }, [location]);

    async function loadingOrderQA() {
        try {
            let response = await axios.get(
                `${API_URL}/admin/customerservice/orderqa/loading`,
                {
                    withCredentials: true,
                }
            );
            console.log(response.data);

            //分切頁面資料
            const pageList = _.chunk(response.data, perPage);

            console.log(pageList);

            if (pageList.length > 0) {
                setPageTotal(pageList.length);
                setOrderQAList(pageList);
                setLoadingComplete(true);
            }
        } catch (err) {
            console.log(err.response.data);
            errorToast(err.response.data.message, '關閉');
            // alert(err.response.data.message);
        }
    }
    useEffect(() => {
        loadingOrderQA();
    }, []);

    //頁碼
    const paginationBar = (
        <div className="member_pagination d-flex justify-content-center align-items-center">
            <Link
                className="page_number"
                to={
                    pageNow > 1
                        ? `/admin/customerservice/orderqa?page=${Number(pageNow) - 1}`
                        : `/admin/customerservice/orderqa?page=${Number(pageNow)}`
                }
            >
                <FiChevronLeft />
            </Link>
            {Array(pageTotal)
                .fill(1)
                .map((v, i) => {
                    return (
                        <Link
                            key={i}
                            to={`/admin/customerservice/orderqa?page=${i + 1}`}
                            className={
                                i + 1 === Number(pageNow)
                                    ? 'page_number active'
                                    : 'page_number'
                            }
                        >
                            {i + 1}
                        </Link>
                    );
                })}
            <Link
                className="page_number"
                to={
                    pageNow < pageTotal
                        ? `/admin/customerservice/orderqa?page=${Number(pageNow) + 1}`
                        : `/admin/customerservice/orderqa?page=${Number(pageNow)}`
                }
            >
                <FiChevronRight />
            </Link>
        </div>
    );

    return (
        <div className="OrderQA">
            {loadingComplete && (
                <table className="table NLQA">
                    <thead>
                        <tr className="bg-main-color accent-light-color ">
                            <th
                                className="text-nowrap fw-light text-center"
                                scope="col"
                            >
                                訂單編號
                            </th>
                            <th
                                className="text-nowrap fw-light text-center"
                                scope="col"
                            >
                                E-MAIL
                            </th>
                            <th
                                className="text-nowrap fw-light text-center"
                                scope="col"
                            >
                                姓名
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
                        {orderQAList[pageNow - 1].map((data, index) => {
                            return (
                                <tr key={uuidv4()} className="cssTable">
                                    <th scope="row">
                                        OR00{data.order_id}
                                        <br />
                                        <span className="time">
                                            {data.create_time}
                                        </span>
                                    </th>

                                    <td>
                                        <span className="email">
                                            {data.email}
                                        </span>
                                    </td>
                                    <td className="text-nowrap">{data.name}</td>

                                    <td>{data.q_category}</td>
                                    <td>{data.title}</td>
                                    <td>
                                        <div className="">
                                            <span className="ellipsis">
                                                {data.q_content}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="">
                                        <span
                                            className={
                                                data.manager_reply_state ===
                                                '未回覆'
                                                    ? 'reply_state'
                                                    : data.manager_reply_state ===
                                                      '已回覆'
                                                    ? 'reply_state2'
                                                    : 'reply_state3'
                                            }
                                        >
                                            {data.manager_reply_state}
                                        </span>
                                    </td>
                                    <td className="">{data.update_time}</td>
                                    <td className="text-nowrap ">
                                        <Link
                                            className=""
                                            to={`/admin/customerservice/orderqa/detail?orid=${data.order_id}`}
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
            )}
            {pageTotal > 1 && paginationBar}
        </div>
    );
}

export default OrderQA;
