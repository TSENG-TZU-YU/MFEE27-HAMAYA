import { Link } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../../assets/HeaderImg/logo.svg';
import Users from '../../assets/HeaderImg/users.svg';
import shopCart from '../../assets/HeaderImg/shopping_cart.svg';
import LogoOut from '../../assets/HeaderImg/logout.svg';
import './index.scss';

import LogInSignUp from '../../components/LogInSignUp';
import ScrollTo from '../../components/ScrollTo';
import Cart from '../Cart/Cart';
import NavbarMobile from '../../components/NavbarMobile';
function Header(props) {
    const [loginPopup, setLoginPopup] = useState(false);
    const [shoppingCart, setShoppingCart] = useState(false); //預設關閉
    return (
        <>
            <NavbarMobile
                shoppingCart={shoppingCart}
                setShoppingCart={setShoppingCart}
            />
            <nav className="bg-main-gary-light-color d-none d-md-block">
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
                                <div className="col p-0 m-1 m-lg-2 text-center header-text ">
                                    <div className="navbaritem">
                                        <Link className="" to="news">
                                            最新消息
                                        </Link>
                                        <ul className="list-unstyled  bg-main-light-color">
                                            <li>
                                                <Link
                                                    to="/"
                                                    className="accent-light-color fw-light"
                                                >
                                                    促銷活動
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/"
                                                    className="accent-light-color fw-light"
                                                >
                                                    活動快訊
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/"
                                                    className="accent-light-color fw-light"
                                                >
                                                    重要通知
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col  p-0 m-1 m-lg-2 text-center header-text">
                                    <div className="navbaritem">
                                        <Link className="" to="products">
                                            樂器商城
                                        </Link>
                                        <ul className="list-unstyled bg-main-light-color">
                                            <li>
                                                <Link
                                                    to="/"
                                                    className="accent-light-color fw-light"
                                                >
                                                    琴鍵樂器
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/"
                                                    className="accent-light-color fw-light"
                                                >
                                                    管樂器
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/"
                                                    className="accent-light-color fw-light"
                                                >
                                                    弓弦樂器
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/"
                                                    className="accent-light-color fw-light"
                                                >
                                                    吉他/
                                                    <br />
                                                    烏克麗麗
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/"
                                                    className="accent-light-color fw-light"
                                                >
                                                    打擊樂器
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/"
                                                    className="accent-light-color fw-light"
                                                >
                                                    配件
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col p-0 m-1 m-lg-2 text-center header-text">
                                    <div className="navbaritem">
                                        <Link className="" to="class">
                                            音樂教育
                                        </Link>
                                        <ul className="list-unstyled bg-main-light-color">
                                            <li>
                                                <Link
                                                    to="/"
                                                    className="accent-light-color fw-light"
                                                >
                                                    音樂文章
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/"
                                                    className="accent-light-color fw-light"
                                                >
                                                    成人課程
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/"
                                                    className="accent-light-color fw-light"
                                                >
                                                    兒童課程
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <Link
                                    className="col p-0 m-1 m-lg-2 text-center header-text"
                                    to="place"
                                >
                                    場地租借
                                </Link>
                                <Link
                                    className="p-0 m-1 m-lg-2 col text-center header-text"
                                    to="aboutus"
                                >
                                    關於我們
                                </Link>
                            </div>
                        </div>

                        <div className="col-2 d-flex justify-content-center align-items-center ">
                            <button
                                className="header-btn border-0 mx-1 mx-lg-2"
                                onClick={() => {
                                    shoppingCart
                                        ? setShoppingCart(false)
                                        : setShoppingCart(true);
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
                                className="header-btn border-0 mx-1 mx-lg-2"
                                onClick={() => {
                                    setLoginPopup(true);
                                }}
                            >
                                <img
                                    src={Users}
                                    width="25"
                                    alt="Logo"
                                    className=""
                                />
                            </button>
                            <button className="header-btn border-0 mx-1 mx-lg-2">
                                <img
                                    src={LogoOut}
                                    width="25"
                                    alt="Logo"
                                    className=""
                                />
                            </button>
                        </div>
                    </div>

                    {loginPopup && (
                        <LogInSignUp setLoginPopup={setLoginPopup} />
                    )}
                    <ScrollTo />
                </div>
            </nav>
            {shoppingCart ? <Cart /> : ''}
        </>
    );
}

export default Header;
