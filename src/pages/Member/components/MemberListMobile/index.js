import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import member_img from '../../../../assets/svg/member_avatar.svg';
import './index.css';
import axios from 'axios';
import { API_URL, IMAGE_URL } from '../../../../utils/config';
import { useAuth } from '../../../../utils/use_auth';

function MemberListMobile(props) {
    const [url, setUrl] = useState('');
    const navigate = useNavigate();
    const { member, setMember, isLogin, setIsLogin } = useAuth();
    const [photo, setPhoto] = useState({ photo: '' });

    function handleUpload(e) {
        // type=file 的 input
        // 選好的檔案是放在 e.target.files[0]
        console.log(e.target.files);
        setPhoto({ ...photo, photo: e.target.files[0] });
    }

    async function photoSubmit(e) {
        e.preventDefault();
        try {
            let photoData = new FormData();
            photoData.append('photo', photo.photo);
            let response = await axios.post(
                `${API_URL}/auth/photo`,
                photoData,
                {
                    withCredentials: true,
                }
            );
            console.log(response.data);
            console.log(response.data.photo);
            setMember({ ...member, photo: response.data.photo });
            alert(response.data.message);
        } catch (err) {
            console.log(err.response.data);
            alert(err.response.data.message);
        }
    }
    return (
        <div className="d-md-none MemberListMobile">
            <div className="d-flex MemberListBg">
                <div>
                    <img className="MemberListMobile-img" src={
                            member.photo ? IMAGE_URL + member.photo : member_img
                        } alt="" />
                </div>
                <div className="d-flex align-items-center">
                    <div className="ms-3" >
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
