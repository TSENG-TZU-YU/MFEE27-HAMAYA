import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Link,
    useOutletContext,
    useNavigateuse,
    useLocation,
} from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../../../../utils/config';
import { useAuth } from '../../../../../utils/use_auth';
import { v4 as uuidv4 } from 'uuid';
import { ReactComponent as Close } from '../../../../../assets/svg/close.svg';
import { errorToast } from '../../../../../components/Alert';

function MyOrderQA(props) {
    const [setbread] = useOutletContext();
    const { socketStatus, setSocketStatus } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [myQuestion, setMyQuestion] = useState({
        order: {
            order_id: '',
        },
        detail: {
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
        content: [
            {
                name: '',
                create_time: '',
                q_content: '',
            },
        ],
    });

    //讀取問答詳細
    // http://localhost:3001/api/member/myorder/qadetail?orid=
    async function myQuestionDetail(orid) {
        try {
            let response = await axios.get(
                `${API_URL}/member/myorder/qadetail?orid=${orid}`,
                {
                    withCredentials: true,
                }
            );
            console.log(response.data);
            setreplyForm({
                order_id: response.data.detail.order_id,
                q_content: '',
            });
            setMyQuestion(response.data);
        } catch (err) {
            console.log(err.response.data);
            errorToast(err.response.data.message, '關閉');
            // alert(err.response.data.message);
        }
    }
    //http://localhost:3000/member/myorder/qadetail?orid=16
    useEffect(() => {
        let params = new URLSearchParams(location.search);
        let orid = params.get('orid');
        console.log('orid', orid);
        myQuestionDetail(orid);
        console.log(socketStatus);
    }, [location]);

    //有新訊息更新資料庫
    useEffect(() => {
        if (socketStatus.newMessage) {
            setSocketStatus({
                ...socketStatus,
                newMessage: false,
            });
            let params = new URLSearchParams(location.search);
            let orid = params.get('orid');
            // console.log(qaid);
            myQuestionDetail(orid);
        }
    }, [socketStatus.newMessage]);

    //新增回覆
    const [replyForm, setreplyForm] = useState({
        order_id: '',
        q_content: '',
    });
    const replyFormChange = (e) => {
        setreplyForm({ ...replyForm, q_content: e.target.value });
    };
    async function replyFormSubmit(e) {
        e.preventDefault();
        try {
            let response = await axios.post(
                `${API_URL}/member/myorder/qareply`,
                replyForm,
                {
                    withCredentials: true,
                }
            );
            //清空replyForm input
            // alert(response.data.message);
        } catch (err) {
            console.log(err.response.data);
            errorToast(err.response.data.message, '關閉');
            // alert(err.response.data.message);
        }
    }

    return (
        <div className="col-12 col-md-8 col-lg-9 mb-3 MyQuestionDetail">
            <div className="d-flex align-items-center justify-content-between content  my-2">
                <div>
                    <h4 className="main-color ">問答詳細</h4>
                    <div className="">
                        訂單編號:{myQuestion.order.order_id}&nbsp;
                        {myQuestion.detail.create_time}
                    </div>
                </div>
                <div>
                    <button
                        className="closebtn"
                        onClick={() => {
                            navigate(-1);
                        }}
                    >
                        <Close />
                    </button>
                </div>
            </div>
            <div className="content ">
                <div className="d-flex border">
                    <div className="col-3 text-center text-light bg-main-color p-1">
                        問題主旨
                    </div>
                    <div className=" col-9 text-center p-1">
                        {myQuestion.detail.title}
                    </div>
                </div>
                <div className="d-flex border">
                    <div className="col-3 text-center text-light bg-main-color p-1">
                        問題類型
                    </div>
                    <div className="col-9 text-center  p-1">
                        {myQuestion.detail.q_category}
                    </div>
                </div>
                <div className="d-flex border">
                    <div className="col-3 text-center text-light bg-main-color p-1">
                        回覆狀態
                    </div>
                    <div className="col-9 text-center  p-1">
                        <span
                            className={
                                myQuestion.detail.user_reply_state === '未回覆'
                                    ? 'reply_state'
                                    : 'reply_state2'
                            }
                        >
                            {myQuestion.detail.user_reply_state}
                        </span>
                    </div>
                </div>
                <div className="d-flex border">
                    <div className="col-3 text-center text-light bg-main-color p-1">
                        最後更新時間
                    </div>
                    <div className="col-9 text-center  p-1">
                        {myQuestion.detail.update_time}
                    </div>
                </div>
                <div className=" text-center text-light bg-main-color p-1 border">
                    問答內容
                </div>
                <div className="border maincontent p-1">
                    <div className="">
                        {myQuestion.content.map((data) => {
                            return (
                                <div key={uuidv4()}>
                                    <p className="text-start m-0">
                                        <span className=" fs-5 fw-bolder">
                                            {data.name}
                                        </span>
                                        &nbsp;
                                        <span className="">
                                            {data.create_time}
                                        </span>{' '}
                                    </p>
                                    <p className="text-start fs-6 m-0">
                                        {data.q_content}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="border p-1">
                    <form>
                        <input
                            className="w-100 inputcontent"
                            type="text"
                            name="q_content"
                            value={replyForm.q_content}
                            onChange={replyFormChange}
                            placeholder="輸入內容"
                            autoComplete="off"
                        />
                        <button
                            className="text-light bg-main-color p-1 px-5 btn1"
                            onClick={replyFormSubmit}
                        >
                            送出
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default MyOrderQA;
