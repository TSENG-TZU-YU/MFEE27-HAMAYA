import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import member_img from '../../../../assets/svg/member_avatar.svg';
import './index.css';

function MemberListMobile(props) {
    const [url, setUrl] = useState('');
    const navigate = useNavigate();
    return (
        <div className="d-md-none MemberListMobile">
            <div className="d-flex MemberListBg">
                <div>
                    <img className="img-fluid" src={member_img} alt="" />
                </div>
                <div className="d-flex align-items-center">
                    <div className="ms-3" >
                        <h5 className="main-color">Emma</h5>
                        <p>Emma@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="my-3">
                <select
                    value={url}
                    onChange={(e) => {
                        setUrl(e.target.value);
                        const newUrl = e.target.value;
                        navigate(newUrl);
                    }}
                >
                    <option value="">會員資料</option>
                    <option value="myclass">我的課程</option>
                    <option value="mybucketlist">我的收藏</option>
                    <option value="mycart">購物車</option>
                    <option value="myorder">訂單查詢</option>
                    <option value="mycoupon">我的優惠券</option>
                    <option value="myquestion">我的詢問</option>
                </select>
            </div>
        </div>
    );
}

export default MemberListMobile;
