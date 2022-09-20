import { Outlet } from 'react-router-dom';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuth } from '../../utils/use_auth';
import axios from 'axios';
import { API_URL } from '../../utils/config';

function Admin(props) {
    const { member, setMember, isLogin, setIsLogin } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {}, []);

    // if (!isLogin) {
    //     return <Navigate to="/" />;
    // }
    return (
        <div className="container">
            <div className="row">
                <div className="col-2">
                    <nav>
                        <div>
                            <Link to="/admin">後台首頁</Link>
                        </div>
                        <div>
                            <Link to="/admin/article">文章管理</Link>
                        </div>
                        <div>
                            <Link to="/admin/coupon">優惠券管理</Link>
                        </div>
                        <div>
                            <Link to="/admin/customerservice">客服系統</Link>
                        </div>
                        <div>
                            <Link to="/admin/members">會員管理</Link>
                        </div>
                        <div>
                            <Link to="/admin/order">訂單管理</Link>
                        </div>
                        <div>
                            <Link to="/admin/product">商品管理</Link>
                        </div>
                        <div>
                            <Link to="/admin/teachers">師資管理</Link>
                        </div>
                    </nav>
                </div>
                <div className="col-10">
                    <Outlet context={[]} />
                </div>
            </div>
        </div>
    );
}

export default Admin;
