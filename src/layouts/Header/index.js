import { Link } from 'react-router-dom';
import { useState } from 'react'; //睿渝加的CODE不要刪
import { Container } from 'react-bootstrap';
import Logo from '../../assets/HeaderImg/logo.svg';
import Users from '../../assets/HeaderImg/users.svg';
import shopCart from '../../assets/HeaderImg/shopping_cart.svg';
import LogoOut from '../../assets/HeaderImg/logout.svg';
import './index.scss';

import LogInSignUp from '../../components/LogInSignUp'; //睿渝加的CODE不要刪
import ScrollTo from '../../components/ScrollTo';
import Cart from '../Cart/Cart';
import { Button } from 'bootstrap';
import NavbarMobile from '../../components/NavbarMobile';
function Header(props) {
    const [loginPopup, setLoginPopup] = useState(false); //睿渝加的CODE不要刪
    const [shoppingCart, setShoppingCart] = useState(false); //預設關閉
    return (
        <>
            <NavbarMobile />
            <div className="bg-main-gary-light-color d-none d-md-block">
                <div className="container header-height ">
                    <div className="row">
                        <div className="col-2 col-lg-3 ">
                            <div className="d-flex justify-content-center align-items-center  header-height">
                                <Link className="" to="/">
                                    <img
                                        src={Logo}
                                        alt="Logo"
                                        className="hrader-logo"
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="col-8 col-lg-6  ">
                            <div className="d-flex justify-content-center align-items-center  header-height">
                                <div className="row">
                                    <Link
                                        className="fw-bold col text-center header-text"
                                        to="news"
                                    >
                                        最新消息
                                    </Link>
                                    <Link
                                        className="fw-bold col text-center header-text"
                                        to="products"
                                    >
                                        樂器商城
                                    </Link>
                                    <Link
                                        className="fw-bold col text-center header-text"
                                        to="class"
                                    >
                                        音樂教育
                                    </Link>
                                    <Link
                                        className="fw-bold col text-center header-text"
                                        to="place"
                                    >
                                        場地租借
                                    </Link>
                                    <Link
                                        className="fw-bold  col text-center header-text"
                                        to="aboutus"
                                    >
                                        關於我們
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-2 col-lg-3">
                            <div className="d-flex justify-content-center align-items-center  header-height">
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
                    </div>

                    {
                        loginPopup && (
                            <LogInSignUp setLoginPopup={setLoginPopup} />
                        ) /*睿渝加的CODE不要刪*/
                    }
                    <ScrollTo />
                </div>
                {shoppingCart ? <Cart /> : ''}
            </div>
        </>
    );
}

export default Header;
