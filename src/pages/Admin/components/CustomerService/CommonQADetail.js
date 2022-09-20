import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Link,
    useOutletContext,
    useNavigateuse,
    useLocation,
} from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../../../utils/config';
import { useAuth } from '../../../../utils/use_auth';
import { v4 as uuidv4 } from 'uuid';
import { ReactComponent as Close } from '../../../../assets/svg/close.svg';

function CommonQADetail(props) {
    const [setbread] = useOutletContext();
    const navigate = useNavigate();
    const location = useLocation();
    const [myQuestion, setMyQuestion] = useState({
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
    async function myQuestionDetail(nlid) {
        try {
            let response = await axios.get(
                `${API_URL}/member/myquestion/detail?qaid=${nlid}`,
                {
                    withCredentials: true,
                }
            );
            console.log(response.data);
            setreplyForm({
                ...replyForm,
                user_qna_id: response.data.detail.id,
            });
            setMyQuestion(response.data);
        } catch (err) {
            console.log(err.response.data);
            alert(err.response.data.message);
        }
    }
    useEffect(() => {
        let params = new URLSearchParams(location.search);
        let nlid = params.get('nlid');
        console.log(nlid);
        myQuestionDetail(nlid);
        // console.log(myQuestion);
    }, [location]);

    //新增回覆
    const [replyForm, setreplyForm] = useState({
        user_qna_id: '',
        q_content: '',
        // name: '', 從session拿
    });
    const replyFormChange = (e) => {
        setreplyForm({ ...replyForm, q_content: e.target.value });
    };
    async function replyFormSubmit(e) {
        e.preventDefault();
        try {
            let response = await axios.post(
                `${API_URL}/member/myquestion/reply`,
                replyForm,
                {
                    withCredentials: true,
                }
            );
            // console.log(response.data);
            //讀取問答詳細
            myQuestionDetail(replyForm.user_qna_id);
            //清空replyForm input
            setreplyForm({ ...replyForm, q_content: '' });
            // alert(response.data.message);
        } catch (err) {
            console.log(err.response.data);
            alert(err.response.data.message);
        }
    }

    return (
        <div className=" mb-3 MyQuestionDetail">
            <div className="d-flex align-items-center justify-content-between   my-2">
                <div>
                    <h4 className="main-color ">問答詳細</h4>
                    <div className="">
                        問答編號:NL00{myQuestion.detail.id}&nbsp;
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
            <div className=" ">
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
                        {myQuestion.detail.user_q_category}
                    </div>
                </div>
                <div className="d-flex border">
                    <div className="col-3 text-center text-light bg-main-color p-1">
                        回覆狀態
                    </div>
                    <div className="col-9 text-center  p-1">
                        {myQuestion.detail.user_reply_state}
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
                        <textarea
                            className="w-100 textarea"
                            rows="4"
                            type="text"
                            name="q_content"
                            value={replyForm.q_content}
                            onChange={replyFormChange}
                            placeholder="輸入內容"
                        />
                        <button
                            className="text-light bg-main-color p-1 px-5 btn1"
                            onClick={replyFormSubmit}
                        >
                            進行回覆
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default CommonQADetail;
