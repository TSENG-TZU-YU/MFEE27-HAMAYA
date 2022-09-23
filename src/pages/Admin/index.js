import { Outlet } from 'react-router-dom';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuth } from '../../utils/use_auth';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import './index.css';
import { successToast, errorToast, warningToast } from '../../components/Alert';
import visib from '../../assets/svg/visibility.svg';
import unVisib from '../../assets/svg/visibility_off.svg';
import logo from '../../assets/svg/logo.svg';
import logout from '../../assets/svg/logout.svg';
import footerLogo from '../../assets/FooterImg/footer-logo.svg';
import footerConnect from '../../assets/FooterImg/FooterConnect.svg';

function Admin(props) {
    const [listActive, setListActive] = useState('');
    const { sethideHeaderFooter } = useAuth();

    const [isAdminLogin, setAdminIsLogin] = useState(false);
    const [adminMember, setAdminMember] = useState(null);

    const [visibility, setVisibility] = useState(false);

    const navigate = useNavigate();
    function handleChange(e) {
        setLoginMember({ ...loginMember, [e.target.name]: e.target.value });
    }

    const [loginMember, setLoginMember] = useState({
        account: 'admin',
        password: '12345678',
    });
    //登入
    async function loginSubmit(e) {
        e.preventDefault();
        try {
            let response = await axios.post(
                `${API_URL}/admin/login`,
                loginMember,
                {
                    withCredentials: true,
                }
            );
            console.log(response.data);
            setAdminMember(response.data);
            setAdminIsLogin(true);
            successToast('登入成功', '關閉');
        } catch (err) {
            console.log(err.response.data);
            errorToast(err.response.data.message, '關閉');
        }
    }
    useEffect(() => {
        sethideHeaderFooter(true);
    }, []);
    //登出
    async function logoutSubmit(e) {
        e.preventDefault();
        try {
            let response = await axios.get(`${API_URL}/admin/logout`, {
                withCredentials: true,
            });
            console.log(response.data);
            setAdminMember({});
            setAdminIsLogin(false);
            successToast('已登出', '關閉');
        } catch (err) {
            console.log(err.response.data);
            errorToast(err.response.data.message, '關閉');
        }
    }
    //登入頁面
    const loginPage = (
        <div className="loginPage">
            <div className="loginPageInner">
                <img src={logo} width={150} />
                <h5 className="text-center main-color">後臺登入</h5>
                <form className="">
                    <label className="">
                        帳號
                        <br />
                        <input
                            type="text"
                            name="account"
                            value={loginMember.account}
                            onChange={handleChange}
                            placeholder="請輸入帳號"
                            required
                        />
                    </label>
                    <label className="position-relative">
                        密碼
                        <br />
                        <input
                            type={visibility ? 'text' : 'password'}
                            name="password"
                            value={loginMember.password}
                            onChange={handleChange}
                            placeholder="請輸入密碼"
                            required
                        />
                        <button
                            className="loginVisibiImg border-0"
                            onClick={(e) => {
                                e.preventDefault();
                                setVisibility(!visibility);
                            }}
                        >
                            <img src={visibility ? visib : unVisib} alt="" />
                        </button>
                    </label>
                    <br />
                    <br />
                    <button className="subBtn" onClick={loginSubmit}>
                        登入
                    </button>
                </form>
            </div>
        </div>
    );
    //主頁面
    const mainPage = (
        <div className="container adminMainContent">
            <div className="header_space"></div>
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
    const header = (
        <div className="adminHeader">
            <div className="d-flex align-items-center">
                <div className="logo">
                    <img src={logo} width={150} />
                </div>
                <div className="title1">後臺管理</div>
            </div>
            <button className="logoutbtn" onClick={logoutSubmit}>
                <img src={logout} width={25} />
            </button>
        </div>
    );
    const footer = (
        <div className="adminFooter">
            <img src={footerLogo} width={200} className="mx-5" />
            <img src={footerConnect} width={180} />
        </div>
    );
    return (
        <>
            {header}
            {isAdminLogin ? mainPage : loginPage}
            {footer}
        </>
    );
}

export default Admin;
