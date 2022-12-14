import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../../../../utils/config';
import { ReactComponent as Close } from '../../../../../assets/svg/close.svg';
import {
    successToast,
    errorToast,
    warningToast,
} from '../../../../../components/Alert';
function MyQuestionAdd(props) {
    const navigate = useNavigate();
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
            // loadingMyQuestion();
            setAskForm({
                q_category: '0',
                title: '',
                comment: '',
            });
            navigate('/member/myquestion');
            // setOpenAskForm(false);
            successToast(response.data.message, '關閉');
            // alert(response.data.message);
        } catch (err) {
            console.log(err.response.data);
            errorToast(err.response.data.message, '關閉');
            // alert(err.response.data.message);

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
    const addQuestion = (
        <div className="col-12 col-md-8 col-lg-9  MyQuestionAdd">
            <div className="d-flex align-items-center justify-content-between content my-1">
                <h4 className="main-color ">進行提問</h4>
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
            <form className="myQuestion_form mb-2">
                <label>
                    <h6>問題類型</h6>
                    <select
                        name="q_category"
                        className=""
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
                        className=""
                        type="text"
                        name="title"
                        value={askForm.title}
                        onChange={askFormChange}
                        placeholder="請輸入問題主旨"
                    />
                </label>
                <br />
                <label>
                    <h6>提問內容</h6>
                    <textarea
                        className=""
                        rows="4"
                        type="text"
                        name="comment"
                        value={askForm.comment}
                        onChange={askFormChange}
                        placeholder="請輸入問題內容"
                    />
                </label>
                <br />
                <button
                    className="btn1 text-light bg-main-color p-1 px-5 btn1 my-2"
                    onClick={asksubmit}
                >
                    進行提問
                </button>
            </form>
            <button
                className="addformbtn"
                onClick={(e) => {
                    e.preventDefault();
                    setAskForm({
                        ...askForm,
                        q_category: '1',
                        title: '可否自取',
                        comment: '您好~請問可否訂購後去實體店面自行取貨?',
                    });
                }}
            ></button>
        </div>
    );
    return <>{addQuestion}</>;
}

export default MyQuestionAdd;
