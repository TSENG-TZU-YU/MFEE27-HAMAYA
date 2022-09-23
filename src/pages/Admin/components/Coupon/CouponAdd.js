import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../../../utils/config';
import { ReactComponent as Close } from '../../../../assets/svg/close.svg';
import { successToast, errorToast } from '../../../../components/Alert';

function CouponAdd(props) {
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
    return (
        <>
            <div className="mt-1">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to="/admin">首頁</Link>
                        </li>
                        <li class="breadcrumb-item">
                            <Link to="/admin/coupon">優惠券管理</Link>
                        </li>
                        <li className="breadcrumb-item " aria-current="page">
                            新增優惠券
                        </li>
                    </ol>
                </nav>
            </div>
            <h3>新增優惠券</h3>
            <hr />
            <div className="CouponAdd mb-4">
                <div className="d-flex justify-content-end my-1">
                    <button
                        className="closebtn"
                        onClick={() => {
                            navigate(-1);
                        }}
                    >
                        <Close />
                    </button>
                </div>
                <form className="p-3">
                    <label>
                        <h6>優惠券名稱</h6>
                        <input
                            className=""
                            type="text"
                            name="title"
                            value={askForm.title}
                            onChange={askFormChange}
                            placeholder="請輸入優惠券名稱"
                        />
                    </label>
                    <br />
                    <label>
                        <h6>序號</h6>
                        <input
                            className=""
                            type="text"
                            name="title"
                            value={askForm.title}
                            onChange={askFormChange}
                            placeholder="請輸入序號"
                        />
                    </label>
                    <br />
                    <label>
                        <h6>最低消費金額</h6>
                        <input
                            className=""
                            type="number"
                            name="title"
                            value={askForm.title}
                            onChange={askFormChange}
                            placeholder="請輸入最低消費金額"
                        />
                    </label>
                    <br />
                    <label>
                        <h6>折扣金額</h6>
                        <input
                            className=""
                            type="number"
                            name="title"
                            value={askForm.title}
                            onChange={askFormChange}
                            placeholder="請輸入折扣金額"
                        />
                    </label>
                    <br />
                    <label>
                        <h6>優惠券使用時間</h6>
                        <div className="d-flex align-items-center">
                            <input
                                className=""
                                type="datetime-local"
                                name="title"
                                value={askForm.title}
                                onChange={askFormChange}
                                placeholder="請輸入開始時間"
                            />
                            &nbsp;~&nbsp;
                            <input
                                className=""
                                type="datetime-local"
                                name="title"
                                value={askForm.title}
                                onChange={askFormChange}
                                placeholder="請輸入結束時間"
                            />
                        </div>
                    </label>
                    <br />
                    <label>
                        <h6>限制使用者</h6>
                        <div className="d-flex align-items-center">
                            <label className="radiobtn">
                                <input type="radio" value="no" />無
                            </label>
                            <label className="radiobtn">
                                <input type="radio" value="yes" />有
                            </label>
                            <input
                                className="w-100"
                                type="text"
                                name="title"
                                value={askForm.title}
                                onChange={askFormChange}
                                placeholder="請輸入使用者帳號"
                            />
                        </div>
                    </label>
                    <br />
                    <label>
                        <h6>可使用次數</h6>
                        <input
                            className=""
                            type="number"
                            name="title"
                            value={askForm.title}
                            onChange={askFormChange}
                            placeholder="請輸入可使用次數"
                        />
                    </label>
                    <br />
                    <br />
                    <div className="d-flex justify-content-end">
                        <button
                            className="btn1 text-light bg-main-color p-1 px-5 "
                            onClick={asksubmit}
                        >
                            確定新增
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default CouponAdd;
