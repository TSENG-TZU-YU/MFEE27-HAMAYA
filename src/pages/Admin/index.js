import { Outlet } from 'react-router-dom';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuth } from '../../utils/use_auth';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import './index.css';

function Admin(props) {
    const { member, setMember, isLogin, setIsLogin } = useAuth();
    const [listActive, setListActive] = useState('');

    const navigate = useNavigate();

    useEffect(() => {}, []);

    // if (!isLogin) {
    //     return <Navigate to="/" />;
    // }
    return (
        <div className="container">
            <div className="row">
                <div className="col-2 ">
                    <nav className="adminlist">
                        <Link
                            to="/admin"
                            onClick={() => {
                                setListActive(1);
                            }}
                        >
                            <div
                                className={
                                    listActive === 1
                                        ? 'text-nowrap text-center my-1 py-1 active'
                                        : 'text-nowrap text-center my-1 py-1 '
                                }
                            >
                                首頁
                            </div>
                        </Link>
                        <Link
                            to="/admin/articles"
                            onClick={() => {
                                setListActive(2);
                            }}
                        >
                            <div
                                className={
                                    listActive === 2
                                        ? 'text-nowrap text-center my-1 py-1 active'
                                        : 'text-nowrap text-center my-1 py-1 '
                                }
                            >
                                文章管理
                            </div>
                        </Link>
                        <Link
                            to="/admin/coupon"
                            onClick={() => {
                                setListActive(3);
                            }}
                        >
                            <div
                                className={
                                    listActive === 3
                                        ? 'text-nowrap text-center my-1 py-1 active'
                                        : 'text-nowrap text-center my-1 py-1 '
                                }
                            >
                                優惠券管理
                            </div>
                        </Link>
                        <Link
                            to="/admin/customerservice"
                            onClick={() => {
                                setListActive(4);
                            }}
                        >
                            <div
                                className={
                                    listActive === 4
                                        ? 'text-nowrap text-center my-1 py-1 active'
                                        : 'text-nowrap text-center my-1 py-1 '
                                }
                            >
                                客服系統
                            </div>{' '}
                        </Link>
                        <Link
                            to="/admin/members"
                            onClick={() => {
                                setListActive(5);
                            }}
                        >
                            <div
                                className={
                                    listActive === 5
                                        ? 'text-nowrap text-center my-1 py-1 active'
                                        : 'text-nowrap text-center my-1 py-1 '
                                }
                            >
                                會員管理
                            </div>
                        </Link>
                        <Link
                            to="/admin/order"
                            onClick={() => {
                                setListActive(6);
                            }}
                        >
                            <div
                                className={
                                    listActive === 6
                                        ? 'text-nowrap text-center my-1 py-1 active'
                                        : 'text-nowrap text-center my-1 py-1 '
                                }
                            >
                                訂單管理
                            </div>{' '}
                        </Link>
                        <Link
                            to="/admin/product"
                            onClick={() => {
                                setListActive(7);
                            }}
                        >
                            <div
                                className={
                                    listActive === 7
                                        ? 'text-nowrap text-center my-1 py-1 active'
                                        : 'text-nowrap text-center my-1 py-1 '
                                }
                            >
                                商品管理
                            </div>{' '}
                        </Link>
                        <Link
                            to="/admin/teachers"
                            onClick={() => {
                                setListActive(8);
                            }}
                        >
                            <div
                                className={
                                    listActive === 8
                                        ? 'text-nowrap text-center my-1 py-1 active'
                                        : 'text-nowrap text-center my-1 py-1 '
                                }
                            >
                                師資管理
                            </div>{' '}
                        </Link>
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
