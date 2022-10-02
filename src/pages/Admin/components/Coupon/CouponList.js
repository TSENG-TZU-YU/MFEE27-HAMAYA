import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
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
import { errorToast } from '../../../../components/Alert';
import {
    FiChevronLeft,
    FiChevronRight,
    FiPlus,
    FiPlusSquare,
} from 'react-icons/fi';

function CouponList(props) {
    const [loadingComplete, setLoadingComplete] = useState(false); //是否已載入完成
    //給予預設值防止報錯
    const [myCouponList, setMyCouponList] = useState(null);
    // const [myCouponList, setMyCouponList] = useState([
    //     [
    //         {
    //             id: '',
    //             name: '',
    //             sn: '',
    //             minimum: '',
    //             discount: '',
    //             use_count: '',
    //             take_count: '',
    //             start_time: '',
    //             end_time: '',
    //             create_time: '',
    //             valid: '',
    //         },
    //     ],
    // ]);

    // 分頁用
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

    //讀取優惠券
    useEffect(() => {
        async function loadingMyCoupon() {
            try {
                let response = await axios.get(
                    `${API_URL}/admin/coupon/loading`,
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
                    setMyCouponList(pageList);
                    setLoadingComplete(true); //載入完成
                }
            } catch (err) {
                console.log(err.response.data);
                errorToast(err.response.data.message, '關閉');
                // alert(err.response.data.message);
            }
        }
        loadingMyCoupon();
    }, []);

    //頁碼
    const paginationBar = (
        <div className="member_pagination d-flex justify-content-center align-items-center">
            <Link
                className="page_number"
                to={
                    pageNow > 1
                        ? `/admin/coupon?page=${Number(pageNow) - 1}`
                        : `/admin/coupon?page=${Number(pageNow)}`
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
                            to={`/admin/coupon?page=${i + 1}`}
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
                        ? `/admin/coupon?page=${Number(pageNow) + 1}`
                        : `/admin/coupon?page=${Number(pageNow)}`
                }
            >
                <FiChevronRight />
            </Link>
        </div>
    );
    return (
        <div className="CouponList">
            <div className="mt-1">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to="/admin">首頁</Link>
                        </li>
                        <li className="breadcrumb-item " aria-current="page">
                            優惠券管理
                        </li>
                    </ol>
                </nav>
            </div>
            <div className="d-flex align-items-center">
                <h3>優惠券管理</h3>
                <Link to={`/admin/coupon/add`} className="addbtn">
                    <FiPlusSquare className="icon" />
                    新增優惠券
                </Link>
            </div>
            <hr />
            {loadingComplete && (
                <table className="table ">
                    <thead>
                        <tr className="bg-main-color accent-light-color ">
                            <th
                                className="text-nowrap fw-light text-center"
                                scope="col"
                            >
                                優惠券序號
                            </th>
                            <th
                                className="text-nowrap fw-light text-center"
                                scope="col"
                            >
                                名稱
                            </th>
                            <th
                                className="text-nowrap fw-light text-center"
                                scope="col"
                            >
                                最低消費金額
                            </th>
                            <th
                                className="text-nowrap fw-light Qtitle text-center"
                                scope="col"
                            >
                                折扣金額
                            </th>
                            <th
                                className="text-nowrap fw-light text-center"
                                scope="col"
                            >
                                可使用次數
                            </th>
                            <th
                                className="text-nowrap fw-light text-center"
                                scope="col"
                            >
                                可領取次數
                            </th>
                            <th
                                className="text-nowrap fw-light text-center "
                                scope="col"
                            >
                                開始時間
                            </th>
                            <th
                                className="text-nowrap fw-light text-center "
                                scope="col"
                            >
                                結束時間
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
                        {myCouponList[pageNow - 1].map((data, index) => {
                            return (
                                <tr key={uuidv4()} className="cssTable">
                                    <th scope="row">
                                        {data.sn}
                                        <br />
                                        <span className="time">
                                            {data.create_time}
                                        </span>
                                    </th>
                                    <td className="text-nowrap">{data.name}</td>
                                    <td>{data.minimum}</td>
                                    <td>{data.discount}</td>
                                    <td>{data.use_count}</td>
                                    <td>{data.take_count}</td>
                                    <td>
                                        <span className="time2">
                                            {data.start_time}
                                        </span>
                                    </td>
                                    <td>
                                        <span className="time2">
                                            {data.end_time}
                                        </span>
                                    </td>
                                    <td className="text-nowrap ">
                                        <Link
                                            className=""
                                            to={`/admin/coupon/detail?cpid=${data.id}`}
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

export default CouponList;
