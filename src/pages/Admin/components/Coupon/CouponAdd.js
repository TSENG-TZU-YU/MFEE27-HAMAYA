import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../../../utils/config';
import { ReactComponent as Close } from '../../../../assets/svg/close.svg';
import { successToast, errorToast } from '../../../../components/Alert';

function CouponAdd(props) {
    const [couponUser, setCouponUser] = useState(false);
    const navigate = useNavigate();
    //詢問表單
    const [addCouponForm, setAddCouponForm] = useState({
        name: '',
        sn: '',
        minimum: '',
        discount: '',
        use_count: '',
        take_count: '',
        start_time: '',
        end_time: '',
        user_email: '',
    });
    const addCouponChange = (e) => {
        setAddCouponForm({ ...addCouponForm, [e.target.name]: e.target.value });
    };
    // 送出表單
    async function addCouponSubmit(e) {
        e.preventDefault();
        try {
            const response = await axios.post(
                `${API_URL}/admin/coupon/add`,
                addCouponForm,
                { withCredentials: true }
            );
            console.log(response.data);
            // loadingMyQuestion();
            setAddCouponForm({
                name: '',
                sn: '',
                minimum: '',
                discount: '',
                use_count: '',
                take_count: '',
                start_time: '',
                end_time: '',
                user_email: '',
            });
            // setOpenAskForm(false);
            successToast(response.data.message, '關閉');
            // alert(response.data.message);
        } catch (err) {
            console.log(err.response.data);
            errorToast(err.response.data.message, '關閉');
            // alert(err.response.data.message);
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
                            name="name"
                            value={addCouponForm.name}
                            onChange={addCouponChange}
                            placeholder="請輸入優惠券名稱"
                        />
                    </label>
                    <br />
                    <label>
                        <h6>序號</h6>
                        <input
                            className=""
                            type="text"
                            name="sn"
                            value={addCouponForm.sn}
                            onChange={addCouponChange}
                            placeholder="請輸入序號"
                        />
                    </label>
                    <br />
                    <label>
                        <h6>最低消費金額</h6>
                        <input
                            className=""
                            type="number"
                            name="minimum"
                            value={addCouponForm.minimum}
                            onChange={addCouponChange}
                            placeholder="請輸入最低消費金額"
                            min="1"
                        />
                    </label>
                    <br />
                    <label>
                        <h6>折扣金額</h6>
                        <input
                            className=""
                            type="number"
                            name="discount"
                            value={addCouponForm.discount}
                            onChange={addCouponChange}
                            placeholder="請輸入折扣金額"
                            min="1"
                        />
                    </label>
                    <br />
                    <label>
                        <h6>優惠券使用時間</h6>
                        <div className="d-flex align-items-center">
                            <input
                                className=""
                                type="datetime-local"
                                name="start_time"
                                value={addCouponForm.start_time}
                                onChange={addCouponChange}
                                placeholder="請輸入開始時間"
                            />
                            &nbsp;~&nbsp;
                            <input
                                className=""
                                type="datetime-local"
                                name="end_time"
                                value={addCouponForm.end_time}
                                onChange={addCouponChange}
                                placeholder="請輸入結束時間"
                            />
                        </div>
                    </label>
                    <br />
                    <label>
                        <h6>限制使用者</h6>
                        <div className="d-flex align-items-center">
                            <label className="radiobtn">
                                <input
                                    type="radio"
                                    value="0"
                                    checked={couponUser ? false : true}
                                    onClick={() => {
                                        setCouponUser(false);
                                    }}
                                />
                                無
                            </label>
                            <label className="radiobtn">
                                <input
                                    type="radio"
                                    value="1"
                                    checked={couponUser ? true : false}
                                    onClick={() => {
                                        setCouponUser(true);
                                    }}
                                />
                                有
                            </label>
                            <input
                                className="w-100"
                                type="text"
                                name="user_email"
                                value={addCouponForm.user_email}
                                onChange={addCouponChange}
                                placeholder="請輸入使用者帳號(E-MAIL)"
                                disabled={!couponUser}
                            />
                        </div>
                    </label>
                    <br />
                    <label>
                        <h6>可使用次數</h6>
                        <input
                            className=""
                            type="number"
                            name="use_count"
                            value={couponUser ? 1 : addCouponForm.use_count}
                            onChange={addCouponChange}
                            placeholder="請輸入可使用次數"
                            disabled={couponUser}
                            min="1"
                        />
                    </label>
                    <br />
                    <br />
                    <div className="d-flex justify-content-end">
                        <button
                            className="btn1 text-light bg-main-color p-1 px-5 "
                            onClick={addCouponSubmit}
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
