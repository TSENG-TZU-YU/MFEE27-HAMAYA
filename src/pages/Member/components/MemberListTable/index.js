import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import member_img from '../../../../assets/svg/member_avatar.svg';
import add_img from '../../../../assets/svg/add.svg';
import './index.css';
import axios from 'axios';
import { API_URL, IMAGE_URL } from '../../../../utils/config';
import { useAuth } from '../../../../utils/use_auth';
function MemberListTable(props) {
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
    // console.log(IMAGE_URL + member.photo);
    return (
        <>
            <div className="col-3 col-lg-2 d-none d-md-block MemberListTable">
                <div className="my-1">
                    <img
                        className="MemberListTable-img"
                        src={
                            member.photo ? IMAGE_URL + member.photo : member_img
                        }
                        alt=""
                    />
                </div>
                <div>
                    <form>
                        <input
                            className=""
                            type="file"
                            id="photo"
                            name="photo"
                            onChange={handleUpload}
                        />
                        <button className="my-1 " onClick={photoSubmit}>
                            上傳
                        </button>
                    </form>
                </div>
                <div className="pt-3 pb-1">
                    <h5 className="main-color">{member.fullName}</h5>
                    <p>{member.email}</p>
                </div>

                <ul className="list-unstyled">
                    <li>
                        <Link className="" to="">
                            會員資料
                        </Link>
                    </li>
                    <li>
                        <Link className="" to="myclass">
                            我的課程
                        </Link>
                    </li>
                    <li>
                        <Link className="" to="mybucketlist">
                            我的收藏
                        </Link>
                    </li>
                    <li>
                        <Link className="" to="mycart">
                            購物車
                        </Link>
                    </li>
                    <li>
                        <Link className="" to="myorder">
                            訂單查詢
                        </Link>
                    </li>
                    <li>
                        <Link className="" to="mycoupon">
                            我的優惠券
                        </Link>
                    </li>
                    <li>
                        <Link className="" to="myquestion">
                            我的詢問
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="col-1 py-3 d-none d-md-block">
                <div className="MemberListTable-line h-100"></div>
            </div>
        </>
    );
}

export default MemberListTable;
