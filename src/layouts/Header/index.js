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
                <Container className="height ">
                    <div className="row">
                        <div className="col-3">
                            <Link className="" to="/">
                                <img
                                    src={Logo}
                                    width="180"
                                    alt="Logo"
                                    className="mr-2 mt-3"
                                />
                            </Link>
                        </div>
                        <div className="col-6 col-md-6 mt-5">
                            <Link
                                className=" header-word fw-bold col "
                                to="news"
                            >
                                最新消息
                            </Link>
                            <Link
                                className=" header-word fw-bold col"
                                to="product"
                            >
                                樂器商城
                            </Link>
                            <Link
                                className=" header-word fw-bold col"
                                to="class"
                            >
                                音樂教育
                            </Link>
                            <Link
                                className=" header-word fw-bold col"
                                to="place"
                            >
                                場地租借
                            </Link>
                            <Link
                                className=" header-word fw-bold col"
                                to="aboutus"
                            >
                                關於我們
                            </Link>
                        </div>

                        <div className="col-3 mt-4">
                            <div className="d-flex justify-content-end align-items-end ">
                                <button
                                    className=" border-0  btn cart-img"
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
                                {/*會員登入我改成按鈕 如果衝突 原本的會員LINK請刪除*/}
                                <button
                                    className="border-0 btn  cart-img"
                                    onClick={() => {
                                        setLoginPopup(true);
                                    }}
                                >
                                    <img
                                        src={Users}
                                        width="25"
                                        alt="Logo"
                                        className="mr-2 "
                                    />
                                </button>
                                <button
                                    className=" border-0 btn cart-img "
                                    to=""
                                >
                                    <img
                                        src={LogoOut}
                                        width="25"
                                        alt="Logo"
                                        className="mr-2 "
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
                </Container>
                <ScrollTo />
                {shoppingCart ? <Cart /> : ''}
            </div>
        </>
    );
}

export default Header;
