import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import member_img from '../../../../assets/svg/member_avatar.svg';
import add_img from '../../../../assets/svg/add.svg';
import './index.css';
import axios from 'axios';
import { API_URL, IMAGE_URL } from '../../../../utils/config';
import { useAuth } from '../../../../utils/use_auth';
function MemberListTable(props) {
    const {
        member,
        setMember,
        isLogin,
        setIsLogin,
        originalPhotoURL,
        setOriginalPhotoURL,
    } = useAuth();
    
    useEffect(() => {
        setOriginalPhotoURL(member.photo);
    }, []);

    return (
        <>
            <div className="col-3 col-lg-2 d-none d-md-block MemberListTable">
                <div className="my-1">
                    <img
                        className="MemberListTable-img"
                        src={
                            member.photo
                                ? IMAGE_URL + originalPhotoURL
                                : member_img
                        }
                        alt=""
                    />
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
