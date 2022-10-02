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
function Order(props) {
    const [loadingComplete, setLoadingComplete] = useState(false); //是否已載入完成
    const [socketConn, setSocketConn] = useState(null);
    const [orderQAList, setOrderQAList] = useState(null);
    const [pageNow, setPageNow] = useState(1); // 目前頁號
    const [perPage, setPerPage] = useState(10); // 每頁多少筆資料
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

    async function loadingOrder() {
        try {
            let response = await axios.get(`${API_URL}/admin/order/loading`, {
                withCredentials: true,
            });
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
        loadingOrder();
    }, []);

    //頁碼
    const paginationBar = (
        <div className="member_pagination d-flex justify-content-center align-items-center">
            <Link
                className="page_number"
                to={
                    pageNow > 1
                        ? `/admin/order?page=${Number(pageNow) - 1}`
                        : `/admin/order?page=${Number(pageNow)}`
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
                            to={`/admin/order?page=${i + 1}`}
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
                        ? `/admin/order?page=${Number(pageNow) + 1}`
                        : `/admin/order?page=${Number(pageNow)}`
                }
            >
                <FiChevronRight />
            </Link>
        </div>
    );
    return (
        <>
            <div className="mt-1">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to="/admin">首頁</Link>
                        </li>
                        <li className="breadcrumb-item " aria-current="page">
                            訂單管理
                        </li>
                    </ol>
                </nav>
            </div>
            <h3>訂單管理</h3>
            <hr />
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
                                    姓名
                                </th>
                                <th
                                    className="text-nowrap fw-light text-center"
                                    scope="col"
                                >
                                    訂單狀態
                                </th>
                                <th
                                    className="text-nowrap fw-light text-center"
                                    scope="col"
                                >
                                    付款方式
                                </th>
                                <th
                                    className="text-nowrap fw-light text-center"
                                    scope="col"
                                >
                                    是否付款
                                </th>

                                <th
                                    className="text-nowrap fw-light text-center"
                                    scope="col"
                                >
                                    使用優惠券
                                </th>
                                <th
                                    className="text-nowrap fw-light text-center"
                                    scope="col"
                                >
                                    運送方式
                                </th>
                                <th
                                    className="text-nowrap fw-light text-center"
                                    scope="col"
                                >
                                    總金額
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
                                        <th>
                                            {data.order_id}
                                            <br />
                                            <span className="time">
                                                {data.create_time}
                                            </span>
                                        </th>
                                        <td className="text-nowrap">
                                            <span className="time">
                                                {data.receiver}
                                                <br />
                                                user_id:{data.user_id}
                                            </span>
                                        </td>
                                        <td className="text-nowrap">
                                            {data.order_state}
                                        </td>
                                        <td className="text-nowrap">
                                            {data.pay_method}
                                        </td>

                                        <td className="text-nowrap">
                                            {data.pay_state}
                                        </td>
                                        <td>
                                            <span className="time">
                                                {data.coupon_name}
                                                <br />
                                                SN:{data.sn}&nbsp; $
                                                {data.discount}
                                            </span>
                                        </td>
                                        <td className="text-nowrap">
                                            {data.shipment}
                                        </td>
                                        <td className="text-nowrap">
                                            {data.total_amount}
                                        </td>
                                        <td className="text-nowrap ">
                                            <Link
                                                className=""
                                                to={`/admin/order/detail?orid=${data.order_id}`}
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
        </>
    );
}

export default Order;
