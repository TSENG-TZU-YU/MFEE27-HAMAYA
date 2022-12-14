import { useState, useEffect } from 'react';
import {
    Link,
    useOutletContext,
    useNavigate,
    useLocation,
} from 'react-router-dom'; //抓取Outlet的props
import detail_img from '../../../../../assets/svg/detailed.svg';
import axios from 'axios';
import { API_URL } from '../../../../../utils/config';
import { useAuth } from '../../../../../utils/use_auth';
import _ from 'lodash';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { v4 as uuidv4 } from 'uuid';
import { errorToast } from '../../../../../components/Alert';

function MyPlaceList(props) {
    const [loadingComplete, setLoadingComplete] = useState(false); //是否已載入完成
    const [setbread] = useOutletContext(); //此CODE為抓取麵包削setbread
    const navigate = useNavigate();
    const location = useLocation();
    const { socketStatus, setSocketStatus } = useAuth();
    const [myPlaceList, setMymyPlaceList] = useState([
        [
            {
                id: '',
                user_id: '',
                name: '',
                email: '',
                phone: '',
                usedate: '',
                item: '',
                comment: '',
                usercount: '',
                user_reply_state: '',
                manager_reply_state: '',
                create_time: '',
                update_time: '',
            },
        ],
    ]);

    // 分頁用
    const [pageNow, setPageNow] = useState(1); // 目前頁號
    const [perPage, setPerPage] = useState(6); // 每頁多少筆資料
    const [pageTotal, setPageTotal] = useState(0); //總共幾頁

    useEffect(() => {
        setbread('場地租借'); //載入頁面時 設定麵包削
        loadingMyPlace();
    }, []);

    useEffect(() => {
        let params = new URLSearchParams(location.search);
        let page = params.get('page');
        console.log('page', page);
        if (page) {
            setPageNow(page);
        }
    }, [location]);

    //有新訊息更新資料庫
    useEffect(() => {
        if (socketStatus.newMessage) {
            setSocketStatus({
                ...socketStatus,
                newMessage: false,
            });
            loadingMyPlace();
        }
    }, [socketStatus.newMessage]);

    //讀取場地表單
    async function loadingMyPlace() {
        try {
            let response = await axios.get(
                `${API_URL}/member/myplace/loading`,
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
                setMymyPlaceList(pageList);
                setLoadingComplete(true);
            }
        } catch (err) {
            console.log(err.response.data);
            errorToast(err.response.data.message, '關閉');
            // alert(err.response.data.message);
        }
    }

    //頁碼
    //頁碼
    const paginationBar = (
        <div className="member_pagination d-flex justify-content-center align-items-center">
            <Link
                className="page_number"
                to={
                    pageNow > 1
                        ? `/member/myplace?page=${Number(pageNow) - 1}`
                        : `/member/myplace?page=${Number(pageNow)}`
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
                            to={`/member/myplace?page=${i + 1}`}
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
                        ? `/member/myplace?page=${Number(pageNow) + 1}`
                        : `/member/myplace?page=${Number(pageNow)}`
                }
            >
                <FiChevronRight />
            </Link>
        </div>
    );
    //租借場地頁面
    const placeList = (
        <div className="col-12 col-md-8 col-lg-9  MyQuestion">
            <div className="d-flex my-2">
                <h4 className="main-color ">租借場地</h4>
            </div>
            {loadingComplete && (
                <>
                    {/* 桌機板 */}
                    <div className="d-none d-lg-block">
                        <table className="table ">
                            <thead>
                                <tr className="bg-main-color accent-light-color ">
                                    <th
                                        className="text-nowrap fw-light text-center"
                                        scope="col"
                                    >
                                        表單編號
                                    </th>
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
                                        希望租借時間
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
                                        回覆內容
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
                                {myPlaceList[pageNow - 1].map((data, index) => {
                                    return (
                                        <tr key={uuidv4()} className="cssTable">
                                            <th>
                                                PL00{data.id}
                                                <br />
                                            </th>
                                            <th className="text-nowrap text-center">
                                                {data.item}
                                            </th>
                                            <td>{data.usedate}</td>
                                            <td>{data.usercount}</td>
                                            <td>
                                                <div className="">
                                                    <span className="ellipsis">
                                                        {data.comment}
                                                    </span>
                                                </div>
                                            </td>
                                            <td
                                                className={
                                                    data.user_reply_state ===
                                                    '未回覆'
                                                        ? 'reply_state'
                                                        : data.user_reply_state ===
                                                          '已回覆'
                                                        ? 'reply_state2'
                                                        : 'reply_state3'
                                                }
                                            >
                                                {data.user_reply_state}
                                            </td>
                                            <td className="">
                                                {data.update_time}
                                            </td>
                                            <td className="text-nowrap ">
                                                <Link
                                                    className=""
                                                    to={`/member/myplace/detail?plid=${data.id}`}
                                                >
                                                    <img
                                                        src={detail_img}
                                                        alt=""
                                                    />
                                                    查看詳細
                                                </Link>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    {/* 手機板 */}
                    {myPlaceList[pageNow - 1].map((data, index) => {
                        return (
                            <div key={uuidv4()} className="d-block d-lg-none">
                                <div className="row ">
                                    <div className="col-12 ">
                                        <div className="bg-main-color accent-light-color p-1">
                                            <div className="d-flex justify-content-between">
                                                <div className="text-nowrap fw-light">
                                                    表單編號
                                                    <span>PL00{data.id}</span>
                                                </div>
                                                <span className="time">
                                                    {data.create_time}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="p-1 d-flex justify-content-between align-items-center h-100">
                                            <div className="main-color text-nowrap">
                                                場地名稱:
                                            </div>
                                            <div>{data.item}</div>
                                        </div>
                                    </div>
                                    <div className="col-6 ">
                                        <div className="p-1 d-flex justify-content-between align-items-center h-100">
                                            <div className="main-color text-nowrap">
                                                希望租借時間:
                                            </div>
                                            <div className="text-wrap time2">
                                                {data.usedate}
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="col-6">
                                        <div className="p-1 d-flex justify-content-between align-items-center h-100">
                                            <div className="main-color text-nowrap">
                                                回覆狀態:
                                            </div>
                                            <div>{data.user_reply_state}</div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="p-1 d-flex justify-content-between align-items-center h-100">
                                            <div className="main-color text-nowrap">
                                                最後更新時間:&nbsp;
                                            </div>
                                            <div className="text-wrap time2">
                                                {data.update_time}
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="col-12">
                                        <div className="p-1 d-flex align-items-center">
                                            <div className="main-color text-nowrap">
                                                詢問內容:&nbsp;
                                            </div>
                                            <div className="ellipsis">
                                                {data.comment}
                                            </div>
                                        </div>
                                        <div className="main-color text-center p-1 ">
                                            <Link
                                                to={`/member/myplace/detail?plid=${data.id}`}
                                            >
                                                <div className="bg-main-gary-light-color">
                                                    <img
                                                        src={detail_img}
                                                        alt=""
                                                    />
                                                    查看詳細
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            </div>
                        );
                    })}
                </>
            )}
            {pageTotal > 1 && paginationBar}
        </div>
    );

    return <>{placeList}</>;
}
export default MyPlaceList;
