import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import member_img from '../../../../assets/svg/member_avatar.svg';
import './index.css';
import { IMAGE_URL } from '../../../../utils/config';
import { useAuth } from '../../../../utils/use_auth';

function MemberListMobile(props) {
    const [url, setUrl] = useState('');
    const navigate = useNavigate();
    const {
        member,
        setMember,
        isLogin,
        setIsLogin,
        uploadPhotoURL,
        setUploadPhotoURL,
    } = useAuth();

    return (
        <div className="d-md-none MemberListMobile">
            <div className="d-flex MemberListBg">
                <div className="MemberListMobile-imgDIV">
                    <img
                        className="MemberListMobile-img"
                        src={
                            uploadPhotoURL !== ''
                                ? uploadPhotoURL
                                : member.photo
                                ? IMAGE_URL + member.photo
                                : member_img
                        }
                        alt=""
                    />
                </div>
                <div className="d-flex align-items-center">
                    <div className="ms-3">
                        <h5 className="main-color">{member.fullName}</h5>
                        <p>{member.email}</p>
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
