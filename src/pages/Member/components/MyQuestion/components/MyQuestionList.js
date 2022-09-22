import { useState, useEffect } from 'react';
import {
    Link,
    useOutletContext,
    useLocation,
    useNavigate,
} from 'react-router-dom'; //抓取Outlet的props
import detail_img from '../../../../../assets/svg/detailed.svg';
// import add_img from '../../../../../assets/svg/add.svg';
import { ReactComponent as AddImg } from '../../../../../assets/svg/add.svg';
import axios from 'axios';
import { API_URL } from '../../../../../utils/config';
import { useAuth } from '../../../../../utils/use_auth';
import _ from 'lodash';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { v4 as uuidv4 } from 'uuid';
import { errorToast } from '../../../../../components/Alert';

function MyQuestionList(props) {
    const [setbread] = useOutletContext(); //此CODE為抓取麵包削setbread
    const navigate = useNavigate();
    const location = useLocation();
    const { socketStatus, setSocketStatus } = useAuth();
    const [haveQuestion, setHaveQuestion] = useState(0); //是否有詢問問題
    // const [openAskForm, setOpenAskForm] = useState(false); //開啟詢問表單
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

    // 分頁用
    const [pageNow, setPageNow] = useState(1); // 目前頁號
    const [perPage, setPerPage] = useState(6); // 每頁多少筆資料
    const [pageTotal, setPageTotal] = useState(0); //總共幾頁

    useEffect(() => {
        setbread('客服問答'); //載入頁面時 設定麵包削
        loadingMyQuestion();
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
            loadingMyQuestion();
        }
    }, [socketStatus.newMessage]);

    //讀取我的詢問
    async function loadingMyQuestion() {
        try {
            let response = await axios.get(
                `${API_URL}/member/myquestion/loading`,
                {
                    withCredentials: true,
                }
            );
            console.log(response.data);

            //判斷是否擁有優惠券
            if (response.data.length === 0) {
                setHaveQuestion(0);
            }

            //分切頁面資料
            const pageList = _.chunk(response.data, perPage);

            console.log(pageList);

            if (pageList.length > 0) {
                setPageTotal(pageList.length);
                setMyQuestionList(pageList);
                setHaveQuestion(1);
            }
        } catch (err) {
            console.log(err.response.data);
            errorToast(err.response.data.message, '關閉');
            // alert(err.response.data.message);
        }
    }

    //頁碼
    const paginationBar = (
        <div className="member_pagination d-flex justify-content-center align-items-center">
            <Link
                className="page_number"
                to={
                    pageNow > 1
                        ? `/member/myquestion?page=${Number(pageNow) - 1}`
                        : `/member/myquestion?page=${Number(pageNow)}`
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
                            to={`/member/myquestion?page=${i + 1}`}
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
                        ? `/member/myquestion?page=${Number(pageNow) + 1}`
                        : `/member/myquestion?page=${Number(pageNow)}`
                }
            >
                <FiChevronRight />
            </Link>
        </div>
    );
    //詢問清單頁面
    const questionList = (
        <div className="col-12 col-md-8 col-lg-9  MyQuestion">
            <div className="d-flex my-2">
                <h4 className="main-color ">客服問答</h4>

                <Link to="/member/myquestion/add" className="addbtn">
                    <AddImg />
                    我要提問
                </Link>
            </div>
            {haveQuestion === 1 ? (
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
                                        問答編號
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
                                {myQuestionList[pageNow - 1].map(
                                    (data, index) => {
                                        return (
                                            <tr
                                                key={uuidv4()}
                                                className="cssTable"
                                            >
                                                <th scope="row">
                                                    QA00{data.id}
                                                    <br />
                                                    <span className="time">
                                                        {data.create_time}
                                                    </span>
                                                </th>
                                                <td>{data.user_q_category}</td>
                                                <td>{data.title}</td>
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
                                                            : 'reply_state2'
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
                                                        to={`/member/myquestion/detail?qaid=${data.id}`}
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
                                    }
                                )}
                            </tbody>
                        </table>
                    </div>
                    {/* 手機板 */}
                    {myQuestionList[pageNow - 1].map((data, index) => {
                        return (
                            <div key={uuidv4()} className="d-block d-lg-none">
                                <div className="row ">
                                    <div className="col-12 ">
                                        <div className="bg-main-color accent-light-color p-1">
                                            <div className="d-flex justify-content-between">
                                                <div className="text-nowrap fw-light">
                                                    問答編號:
                                                    <span>QA00{data.id}</span>
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
                                                問題主旨:
                                            </div>
                                            <div>{data.title}</div>
                                        </div>
                                    </div>
                                    <div className="col-6 ">
                                        <div className="p-1 d-flex justify-content-between align-items-center h-100">
                                            <div className="main-color text-nowrap">
                                                問題類型:
                                            </div>
                                            <div>{data.user_q_category}</div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="col-6">
                                        <div className="p-1 d-flex justify-content-between align-items-center h-100">
                                            <div className="main-color text-nowrap">
                                                回覆狀態:
                                            </div>
                                            <div
                                                className={
                                                    data.user_reply_state ===
                                                    '未回覆'
                                                        ? 'reply_state'
                                                        : 'reply_state2'
                                                }
                                            >
                                                {data.user_reply_state}
                                            </div>
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
                                                提問內容:&nbsp;
                                            </div>
                                            <div className="ellipsis">
                                                {data.comment}
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="main-color text-center p-1 ">
                                            <Link
                                                to={`/member/myquestion/detail?qaid=${data.id}`}
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
            ) : (
                <div className="m-2">
                    <h6>目前沒有問答!!</h6>
                </div>
            )}
            {pageTotal > 1 && paginationBar}
        </div>
    );

    return <>{questionList}</>;
}
export default MyQuestionList;
