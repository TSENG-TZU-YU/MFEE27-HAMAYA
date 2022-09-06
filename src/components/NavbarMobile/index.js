import { Link } from 'react-router-dom';
import { useState } from 'react';
import './index.css';
import LogInSignUp from '../LogInSignUp';
import menubtn from './menubtn.svg';
import logo from './logo.svg';
import shopping_cart from './shopping_cart.svg';
import users from './users.svg';
import logout from './logout.svg';
import ScrollTo from '../ScrollTo';

function NavbarMobile({ shoppingCart, setShoppingCart }) {
    const [loginPopup, setLoginPopup] = useState(false);
    const [showMenu, setShowMenu] = useState('list');
    const [showBackground, setShowBackground] = useState('background');
    return (
        <>
            {loginPopup && <LogInSignUp setLoginPopup={setLoginPopup} />}
            <div className="NavbarMobile list-unstyled d-block d-md-none ">
                <div className="space-block"></div>
                <div className="header d-flex justify-content-between align-items-center px-2">
                    <div className="">
                        <button
                            className="me-2"
                            onClick={() => {
                                if (showMenu === 'list') {
                                    setShowMenu('list show ');
                                    setShowBackground('background show');
                                } else {
                                    setShowMenu('list');
                                    setShowBackground('background');
                                }
                            }}
                        >
                            <img
                                src={menubtn}
                                alt="menubtn"
                                className="menubtn"
                            />
                        </button>
                        <Link
                            className=""
                            to=""
                            onClick={() => {
                                setShowMenu('list');
                                setShowBackground('background');
                            }}
                        >
                            <img src={logo} alt="logo" className="logo" />
                        </Link>
                    </div>
                    <div className="">
                        <button className="">
                            <img
                                src={shopping_cart}
                                alt="shopping_cart"
                                className="menubtn"
                                onClick={() => {
                                    shoppingCart
                                        ? setShoppingCart(false)
                                        : setShoppingCart(true);
                                }}
                            />
                        </button>
                        <button
                            className=""
                            onClick={() => {
                                setLoginPopup(true);
                            }}
                        >
                            <img src={users} alt="users" className="menubtn" />
                        </button>
                        <button className="me-2">
                            <img
                                src={logout}
                                alt="logout"
                                className="menubtn"
                            />
                        </button>
                    </div>
                </div>
                <div
                    className={showBackground}
                    onClick={() => {
                        setShowMenu('list');
                        setShowBackground('background');
                    }}
                ></div>
                <div className={showMenu}>
                    <ul className="list-unstyled text-center ">
                        <li>
                            <Link
                                className="accent-light-color text-nowrap"
                                to="news"
                                onClick={() => {
                                    setShowMenu('p-0 list');
                                    setShowBackground('background');
                                }}
                            >
                                最新消息
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="accent-light-color text-nowrap"
                                to="product"
                                onClick={() => {
                                    setShowMenu('list');
                                    setShowBackground('background');
                                }}
                            >
                                樂器商城
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="accent-light-color text-nowrap"
                                to="class"
                                onClick={() => {
                                    setShowMenu('list');
                                    setShowBackground('background');
                                }}
                            >
                                音樂教育
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="accent-light-color text-nowrap"
                                to="place"
                                onClick={() => {
                                    setShowMenu('list');
                                    setShowBackground('background');
                                }}
                            >
                                場地租借
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="accent-light-color text-nowrap"
                                to="aboutus"
                                onClick={() => {
                                    setShowMenu('list');
                                    setShowBackground('background');
                                }}
                            >
                                關於我們
                            </Link>
                        </li>
                    </ul>
                    <ScrollTo />
                </div>
            </div>
        </>
    );
}

export default NavbarMobile;
