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
import { errorToast } from '../../../../components/Alert';
import _ from 'lodash';
import { io } from 'socket.io-client';
import {
    FiChevronLeft,
    FiChevronRight,
    FiPlus,
    FiPlusSquare,
} from 'react-icons/fi';

function PlaceQA(props) {
    const [loadingComplete, setLoadingComplete] = useState(false); //是否已載入完成
    const [socketConn, setSocketConn] = useState(null);

    const [myPlaceList, setMyPlaceList] = useState([
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

    async function loadingPlaceQA() {
        try {
            let response = await axios.get(
                `${API_URL}/admin/customerservice/placeqa/loading`,
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
                setMyPlaceList(pageList);
                setLoadingComplete(true);
            }
        } catch (err) {
            console.log(err.response.data);
            errorToast(err.response.data.message, '關閉');
            // alert(err.response.data.message);
        }
    }
    useEffect(() => {
        loadingPlaceQA();
    }, []);

    //建立socket連線
    useEffect(() => {
        async function customerConn() {
            if (!socketConn) {
                console.log('管理員進入List頁面');
                let socket = io('http://localhost:3001');
                setSocketConn(socket);
                // let params = new URLSearchParams(location.search);
                // let nlid = params.get('nlid');
                // let response = await axios.get(
                //     `${API_URL}/admin/customerservice/commonqa/detail?nlid=${nlid}`,
                //     {
                //         withCredentials: true,
                //     }
                // );
                socket.on(`customer_List`, (res) => {
                    console.log('新訊息', res);
                    //判斷是否需要更新資料庫
                    if (res.newMessage) {
                        console.log('更新List頁面');
                        loadingPlaceQA();
                    }
                });
            }
        }
        customerConn();
    }, []);

    //頁碼
    const paginationBar = (
        <div className="member_pagination d-flex justify-content-center align-items-center">
            <Link
                className="page_number"
                to={
                    pageNow > 1
                        ? `/admin/customerservice/placeqa?page=${
                              Number(pageNow) - 1
                          }`
                        : `/admin/customerservice/placeqa?page=${Number(
                              pageNow
                          )}`
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
                            to={`/admin/customerservice/placeqa?page=${i + 1}`}
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
                        ? `/admin/customerservice/placeqa?page=${
                              Number(pageNow) + 1
                          }`
                        : `/admin/customerservice/placeqa?page=${Number(
                              pageNow
                          )}`
                }
            >
                <FiChevronRight />
            </Link>
        </div>
    );
    return (
        <div className="CommonQA">
            {loadingComplete && (
                <table className="table NLQA">
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
                                姓名
                            </th>
                            <th
                                className="text-nowrap fw-light text-center"
                                scope="col"
                            >
                                租借場地
                            </th>
                            <th
                                className="text-nowrap fw-light text-center"
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
                                    <th scope="row">
                                        PL00{data.id}
                                        <br />
                                        <span className="time">
                                            {data.create_time}
                                        </span>
                                    </th>
                                    <td>{data.name}</td>
                                    <td>{data.item}</td>
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
                                    </td>
                                    <td className="">{data.update_time}</td>
                                    <td className="text-nowrap ">
                                        <Link
                                            className=""
                                            to={`/admin/customerservice/placeqa/detail?plid=${data.id}`}
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

export default PlaceQA;
