import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../utils/use_auth';
import { useCart } from '../../utils/use_cart';
import { useOutletContext } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import Logo from '../../assets/HeaderImg/logo.svg';
import Users from '../../assets/HeaderImg/users.svg';
import shopCart from '../../assets/HeaderImg/shopping_cart.svg';
import LogoOut from '../../assets/HeaderImg/logout.svg';
import './index.scss';

import LogInSignUp from '../../components/LogInSignUp';
import ScrollTo from '../../components/ScrollTo';
import Cart from '../Cart/Cart';
import NavbarMobile from '../../components/NavbarMobile';

import { successToast, errorToast, warningToast } from '../../components/Alert';
function Header(props) {
    const { member, setMember, isLogin, setIsLogin, hideHeaderFooter } =
        useAuth();
    const [loginPopup, setLoginPopup] = useState(false);

    const { shopCartState, setShopCartState } = useCart();
    const navigate = useNavigate();
    // 課程 Toggled
    // const [setSelectCourse] = useOutletContext();

    async function getMember() {
        try {
            console.log('檢查是否登入');
            let response = await axios.get(`${API_URL}/auth`, {
                withCredentials: true,
            });
            console.log('已登入', response.data);
            await setIsLogin(true);
            setMember(response.data);
            setLoginPopup(false);
            navigate('/member');
        } catch (err) {
            setLoginPopup(true);
            console.log(err.response.data.message);
        }
    }
    async function logoutSubmit() {
        try {
            let response = await axios.get(`${API_URL}/auth/logout`, {
                withCredentials: true,
            });
            console.log(response.data.message);
            setIsLogin(false);
            setMember({
                id: '',
                fullName: '',
                email: '',
                phone: '',
                city: '',
                dist: '',
                address: '',
                birthday: '',
                photo: '',
                sub: '',
                loginDt: '',
            });
            navigate('/');
            successToast(response.data.message, '關閉');
            // alert(response.data.message);
        } catch (err) {
            console.log(err.response.data.message);
            // alert(err.response.data.message);
        }
    }

    return (
        <div className={hideHeaderFooter && 'd-none'}>
            <NavbarMobile
            // shoppingCart={shoppingCart}
            // setShoppingCart={setShoppingCart}
            />
            <nav className="bg-main-gary-light-color d-none d-md-block fixed-top header1">
                <div className="container">
                    <div className="row header-height ">
                        <div className="col-2 p-0 d-flex justify-content-center align-items-center ">
                            <Link className="" to="/">
                                <img
                                    src={Logo}
                                    alt="Logo"
                                    className="header-logo"
                                />
                            </Link>
                        </div>
                        <div className="col-8 d-flex justify-content-center align-items-center position-relative">
                            <div className="row navbar-center">
                                <div className="col p-0 m-2 m-lg-3 text-center header-text">
                                    <div className="navbaritem fw-bold">
                                        <Link className="" to="news">
                                            最新消息
                                        </Link>
                                        <ul className="list-unstyled bg-main-light-color py-1 mt-2 ">
                                            <li>
                                                <Link
                                                    to="/news/section?categoryList=1"
                                                    className="accent-light-color fw-light"
                                                >
                                                    促銷活動
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/news/section?categoryList=2"
                                                    className="accent-light-color fw-light"
                                                >
                                                    活動快訊
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/news/section?categoryList=3"
                                                    className="accent-light-color fw-light"
                                                >
                                                    重要通知
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col p-0 m-2 m-lg-3 text-center header-text">
                                    <div className="navbaritem fw-bold">
                                        <Link className="" to="products">
                                            樂器商城
                                        </Link>
                                        <ul className="list-unstyled bg-main-light-color py-1 mt-2">
                                            <li>
                                                <Link
                                                    to="products"
                                                    className="accent-light-color fw-light"
                                                >
                                                    最新商品
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/products?main_id=1"
                                                    className="accent-light-color fw-light"
                                                >
                                                    琴鍵樂器
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/products?main_id=2"
                                                    className="accent-light-color fw-light"
                                                >
                                                    管樂器
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/products?main_id=3"
                                                    className="accent-light-color fw-light"
                                                >
                                                    弓弦樂器
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/products?main_id=4"
                                                    className="accent-light-color fw-light"
                                                >
                                                    吉他/
                                                    <br />
                                                    烏克麗麗
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/products?main_id=5"
                                                    className="accent-light-color fw-light"
                                                >
                                                    打擊樂器
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/products?main_id=6"
                                                    className="accent-light-color fw-light"
                                                >
                                                    配件
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col p-0 m-2 m-lg-3 text-center header-text">
                                    <div className="navbaritem fw-bold">
                                        <Link className="" to="/class">
                                            音樂教育
                                        </Link>
                                        <ul className="list-unstyled bg-main-light-color py-1 mt-2">
                                            <li>
                                                <Link
                                                    to="/class"
                                                    className="accent-light-color fw-light"
                                                >
                                                    音樂文章
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/class/list?class=1"
                                                    className="accent-light-color fw-light"
                                                >
                                                    成人課程
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/class/list?class=2"
                                                    className="accent-light-color fw-light"
                                                >
                                                    兒童課程
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col p-0 m-2 m-lg-3 text-center header-text">
                                    <div className="navbaritem fw-bold">
                                        <Link className="" to="place">
                                            場地租借
                                        </Link>
                                    </div>
                                </div>
                                <div className="col p-0 m-2 m-lg-3 text-center header-text">
                                    <div className="navbaritem fw-bold">
                                        <Link className="" to="aboutus">
                                            關於我們
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-2 d-flex justify-content-center align-items-center ">
                            <button
                                title="購物車"
                                className="header-btn border-0 mx-1 mx-lg-2"
                                onClick={() => {
                                    console.log('click');
                                    shopCartState
                                        ? setShopCartState(false)
                                        : setShopCartState(true);
                                    // shoppingCart
                                    //     ? setShoppingCart(false)
                                    //     : setShoppingCart(true);
                                }}
                            >
                                <img
                                    src={shopCart}
                                    width="25"
                                    alt="Logo"
                                    className=""
                                />
                            </button>
                            <button
                                title="會員專區登入/註冊"
                                className="header-btn border-0 mx-1 mx-lg-2"
                                onClick={getMember}
                            >
                                <img
                                    src={Users}
                                    width="25"
                                    alt="Logo"
                                    className=""
                                />
                            </button>
                            {isLogin && (
                                <button
                                    title="登出"
                                    className="header-btn border-0 mx-1 mx-lg-2"
                                    onClick={logoutSubmit}
                                >
                                    <img
                                        src={LogoOut}
                                        width="25"
                                        alt="Logo"
                                        className=""
                                    />
                                </button>
                            )}
                        </div>
                    </div>

                    {loginPopup && (
                        <LogInSignUp setLoginPopup={setLoginPopup} />
                    )}
                    <ScrollTo />
                </div>
                {shopCartState ? <Cart className="sticky-top" /> : ''}
            </nav>
        </div>
    );
}

export default Header;
