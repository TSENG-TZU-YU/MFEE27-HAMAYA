import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../../../utils/config';
import { ReactComponent as Close } from '../../../../assets/svg/close.svg';

function CouponAdd(props) {
    const navigate = useNavigate();
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
            <div className="container">
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
                <p className="m-0">優惠券名稱</p>
                <input type="text" value=""></input>
                <p className="m-0">序號</p>
                <input type="text" value=""></input>
                <p className="m-0">最低消費金額</p>
                <input type="text" value=""></input>
                <p className="m-0">折扣金額</p>
                <input type="text" value=""></input>
                <p className="m-0">優惠券使用時間</p>
                <div className="d-flex justify-content-start">
                    <input type="date"></input>
                    <p className="mb-0 mx-2">~</p>
                    <input type="date"></input>
                </div>
                <p className="m-0">限制使用者</p>
                <label>無</label>
                <input type="radio" value="no" />
                <label>有</label>
                <input type="radio" value="yes" />
                <input type="text" value="" placeholder="請輸入帳號"></input>
                <p className="m-0">可使用次數</p>
                <input type="number"></input>
                <br />
                <div className="my-2">
                    <button>確定新增</button>
                </div>
            </div>
        </>
    );
}

export default CouponAdd;
