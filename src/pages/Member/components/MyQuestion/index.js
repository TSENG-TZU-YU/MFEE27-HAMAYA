import { useState, useEffect } from 'react';
import { Link, useOutletContext } from 'react-router-dom'; //抓取Outlet的props
import detail_img from '../../../../assets/svg/detailed.svg';
import add_img from '../../../../assets/svg/add.svg';
import './index.css';
import axios from 'axios';
import { API_URL } from '../../../../utils/config';
import { useAuth } from '../../../../utils/use_auth';
import _ from 'lodash';
import { ReactComponent as PrevPageIcon } from '../../../../assets/svg/prev_page_btn.svg';
import { ReactComponent as NextPageIcon } from '../../../../assets/svg/next_page_btn.svg';

function MyQuestion(props) {
    const [setbread] = useOutletContext(); //此CODE為抓取麵包削setbread
    // const { member } = useAuth();
    const [haveQuestion, setHaveQuestion] = useState(0); //是否有詢問問題
    const [openAskForm, setOpenAskForm] = useState(false); //開啟詢問表單
    const [myQuestion, setMyQuestion] = useState([
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

    //詢問表單
    const [askForm, setAskForm] = useState({
        q_category: '0',
        title: '',
        comment: '',
    });
    const askFormChange = (e) => {
        setAskForm({ ...askForm, [e.target.name]: e.target.value });
    };
    // 送出表單
    async function asksubmit(e) {
        e.preventDefault();
        try {
            const response = await axios.post(
                `${API_URL}/member/myquestion/add`,
                askForm,
                { withCredentials: true }
            );
            console.log(response.data);
            loadingMyQuestion();
            setAskForm({
                q_category: '0',
                title: '',
                comment: '',
            });

            setOpenAskForm(false);
            alert(response.data.message);
        } catch (err) {
            console.log(err.response.data);
            alert(err.response.data.message);

            // setAskErros({
            //     fullName: err.response.data.fullName,
            //     user_id: err.response.data.user_id,
            //     phone: err.response.data.phone,
            //     email: err.response.data.email,
            //     q_category: err.response.data.q_category,
            //     title: err.response.data.title,
            //     comment: err.response.data.comment,
            // });
        }
    }

    // 分頁用
    const [pageNow, setPageNow] = useState(1); // 目前頁號
    const [perPage, setPerPage] = useState(5); // 每頁多少筆資料
    const [pageTotal, setPageTotal] = useState(0); //總共幾頁

    useEffect(() => {
        setbread('客服問答'); //載入頁面時 設定麵包削
        loadingMyQuestion();
    }, []);

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
                setMyQuestion(pageList);
                setHaveQuestion(1);
            }
        } catch (err) {
            console.log(err.response.data);
            alert(err.response.data.message);
        }
    }

    //頁碼
    const paginationBar = (
        <div className="member_pagination d-flex justify-content-center align-items-center">
            <Link
                className="mx-2"
                to=""
                onClick={() => {
                    pageNow > 1 && setPageNow(pageNow - 1);
                }}
            >
                <PrevPageIcon />
            </Link>
            {Array(pageTotal)
                .fill(1)
                .map((v, i) => {
                    return (
                        <Link
                            key={i}
                            to=""
                            className={
                                i + 1 === pageNow
                                    ? 'mx-2 page_number active '
                                    : 'mx-2 page_number'
                            }
                            onClick={() => {
                                setPageNow(i + 1);
                            }}
                        >
                            {i + 1}
                        </Link>
                    );
                })}
            <Link
                className="mx-2"
                to=""
                onClick={() => {
                    pageNow < pageTotal && setPageNow(pageNow + 1);
                }}
            >
                <NextPageIcon />
            </Link>
        </div>
    );
    //詢問清單頁面
    const questionList = (
        <div className="col-12 col-md-8 col-lg-9  MyQuestion">
            <div className="d-flex my-2">
                <h4 className="main-color ">客服問答</h4>

                <button
                    className="bg-main-gary-light-color d-flex align-items-center addbtn"
                    onClick={() => {
                        setOpenAskForm(true);
                    }}
                >
                    <img src={add_img} alt="" />
                    我要提問
                </button>
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
                                {myQuestion[pageNow - 1].map((data) => {
                                    return (
                                        <tr className="cssTable">
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
                                            <td className="">
                                                {data.user_reply_state}
                                            </td>
                                            <td className="">
                                                {data.update_time}
                                            </td>
                                            <td className="text-nowrap ">
                                                <a>
                                                    <img
                                                        src={detail_img}
                                                        alt=""
                                                    />
                                                    查看詳細
                                                </a>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    {/* 手機板 */}
                    {myQuestion[pageNow - 1].map((data) => {
                        return (
                            <div className="d-block d-lg-none">
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
                                                提問內容:&nbsp;
                                            </div>
                                            <div className="ellipsis">
                                                {data.comment}
                                            </div>
                                        </div>
                                        <div className="main-color text-center p-1 ">
                                            <Link to="/member/myquestion/detail">
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
                    <h6>沒問題!!</h6>
                </div>
            )}
            {pageTotal > 1 && paginationBar}
        </div>
    );
    //新增問題頁面
    const addQuestion = (
        <div className="col-12 col-md-8 col-lg-9  MyQuestion">
            <div className="d-flex my-2">
                <h4 className="main-color ">進行提問</h4>
            </div>
            <form className="form form-control">
                <label>
                    <h6>問題類型</h6>
                    <select
                        name="q_category"
                        className="w-100"
                        value={askForm.q_category}
                        onChange={askFormChange}
                    >
                        <option value="0">請選擇問題類型</option>
                        <option value="1">門市相關問題</option>
                        <option value="2">商品問題</option>
                        <option value="3">課程問題</option>
                        <option value="4">師資問題</option>
                        <option value="5">文章問題</option>
                        <option value="6">場地租借問題</option>
                        <option value="7">其他問題</option>
                    </select>
                </label>
                <br />
                <label>
                    <h6>問題主旨</h6>
                    <input
                        type="text"
                        name="title"
                        value={askForm.title}
                        onChange={askFormChange}
                    />
                </label>
                <br />
                <label>
                    <h6>提問內容</h6>
                    <textarea
                        type="text"
                        name="comment"
                        value={askForm.comment}
                        onChange={askFormChange}
                    />
                </label>
                <br />
                <button onClick={asksubmit}>進行提問</button>
            </form>
        </div>
    );
    return <>{openAskForm ? addQuestion : questionList}</>;
}
export default MyQuestion;
