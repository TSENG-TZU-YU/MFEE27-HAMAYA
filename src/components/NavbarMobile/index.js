import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './index.css';
import { useAuth } from '../../utils/use_auth';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import LogInSignUp from '../LogInSignUp';
import menubtn from './menubtn.svg';
import logo from './logo.svg';
import shopping_cart from './shopping_cart.svg';
import users from './users.svg';
import logout from './logout.svg';
import drop_down_menu from './drop_down_menu.svg';
import drop_up_menu from './drop_up_menu.svg';
import ScrollTo from '../ScrollTo';
import { useCart } from '../../utils/use_cart';

function NavbarMobile({ shoppingCart, setShoppingCart }) {
    const [loginPopup, setLoginPopup] = useState(false);
    const [showMenu, setShowMenu] = useState('list');
    const [showBackground, setShowBackground] = useState('background');
    const [showSublist, setShowSublist] = useState('list-unstyled sublist');
    const [showSublist02, setShowSublist02] = useState('list-unstyled sublist');
    const [showSublist03, setShowSublist03] = useState('list-unstyled sublist');

    const { member, setMember, isLogin, setIsLogin } = useAuth();
    const { shopCartState, setShopCartState } = useCart();
    const navigate = useNavigate();

    const closeList = () => {
        setShowMenu('list');
        setShowBackground('background');
    };
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

    async function logoutSubmit(e) {
        e.preventDefault();
        let response = await axios.get(`${API_URL}/auth/logout`, {
            withCredentials: true,
        });
        console.log(response.data);
        setIsLogin(false);
        setMember(null);

        navigate('/');
        alert(response.data.message);
    }
    return (
        <>
            {loginPopup && <LogInSignUp setLoginPopup={setLoginPopup} />}
            <nav className="NavbarMobile list-unstyled d-block d-md-none ">
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
                        <button title="購物車" className="">
                            <img
                                src={shopping_cart}
                                alt="shopping_cart"
                                className="menubtn"
                                onClick={() => {
                                    shopCartState
                                        ? setShopCartState(false)
                                        : setShopCartState(true);
                                }}
                            />
                        </button>
                        <button
                            title="會員專區登入/註冊"
                            className=""
                            onClick={getMember}
                        >
                            <img src={users} alt="users" className="menubtn" />
                        </button>
                        {isLogin && (
                            <button
                                title="登出"
                                className="me-2"
                                onClick={logoutSubmit}
                            >
                                <img
                                    src={logout}
                                    alt="logout"
                                    className="menubtn"
                                />
                            </button>
                        )}
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
                            <div className="d-flex justify-content-center align-items-center">
                                <Link
                                    className="accent-light-color text-nowrap"
                                    to="news"
                                    onClick={closeList}
                                >
                                    最新消息
                                </Link>
                                <button
                                    onClick={() => {
                                        showSublist === 'list-unstyled sublist'
                                            ? setShowSublist(
                                                  'list-unstyled sublist show'
                                              )
                                            : setShowSublist(
                                                  'list-unstyled sublist'
                                              );
                                    }}
                                >
                                    <img
                                        src={
                                            showSublist ===
                                            'list-unstyled sublist'
                                                ? drop_down_menu
                                                : drop_up_menu
                                        }
                                        alt="drop_down_menu"
                                        className="drop_down_menu"
                                    />
                                </button>
                            </div>
                            <ul className={showSublist}>
                                <li>
                                    <Link
                                        to="/"
                                        className="accent-light-color fw-light text-nowrap"
                                        onClick={closeList}
                                    >
                                        促銷活動
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/"
                                        className="accent-light-color fw-light text-nowrap"
                                        onClick={closeList}
                                    >
                                        活動快訊
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/"
                                        className="accent-light-color fw-light text-nowrap"
                                        onClick={closeList}
                                    >
                                        重要通知
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <div className="d-flex justify-content-center align-items-center">
                                <Link
                                    className="accent-light-color text-nowrap"
                                    to="products"
                                    onClick={closeList}
                                >
                                    樂器商城
                                </Link>
                                <button
                                    onClick={() => {
                                        showSublist02 ===
                                        'list-unstyled sublist'
                                            ? setShowSublist02(
                                                  'list-unstyled sublist show'
                                              )
                                            : setShowSublist02(
                                                  'list-unstyled sublist'
                                              );
                                    }}
                                >
                                    <img
                                        src={
                                            showSublist02 ===
                                            'list-unstyled sublist'
                                                ? drop_down_menu
                                                : drop_up_menu
                                        }
                                        alt="drop_down_menu"
                                        className="drop_down_menu"
                                    />
                                </button>
                            </div>
                            <ul className={showSublist02}>
                                <li>
                                    <Link
                                        to="products"
                                        className="accent-light-color fw-light text-nowrap"
                                        onClick={closeList}
                                    >
                                        最新商品
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/products?main_id=1"
                                        className="accent-light-color fw-light text-nowrap"
                                        onClick={closeList}
                                    >
                                        琴鍵樂器
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/products?main_id=2"
                                        className="accent-light-color fw-light text-nowrap"
                                        onClick={closeList}
                                    >
                                        管樂器
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/products?main_id=3"
                                        className="accent-light-color fw-light text-nowrap"
                                        onClick={closeList}
                                    >
                                        弓弦樂器
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/products?main_id=4"
                                        className="accent-light-color fw-light text-nowrap"
                                        onClick={closeList}
                                    >
                                        吉他/
                                        <br />
                                        烏克麗麗
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/products?main_id=5"
                                        className="accent-light-color fw-light text-nowrap"
                                        onClick={closeList}
                                    >
                                        打擊樂器
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/products?main_id=6"
                                        className="accent-light-color fw-light text-nowrap"
                                        onClick={closeList}
                                    >
                                        配件
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <div className="d-flex justify-content-center align-items-center">
                                <Link
                                    className="accent-light-color text-nowrap"
                                    to="class"
                                    onClick={closeList}
                                >
                                    音樂教育
                                </Link>
                                <button
                                    onClick={() => {
                                        showSublist03 ===
                                        'list-unstyled sublist'
                                            ? setShowSublist03(
                                                  'list-unstyled sublist show'
                                              )
                                            : setShowSublist03(
                                                  'list-unstyled sublist'
                                              );
                                    }}
                                >
                                    <img
                                        src={
                                            showSublist03 ===
                                            'list-unstyled sublist'
                                                ? drop_down_menu
                                                : drop_up_menu
                                        }
                                        alt="drop_down_menu"
                                        className="drop_down_menu"
                                    />
                                </button>
                            </div>
                            <ul className={showSublist03}>
                                <li>
                                    <Link
                                        to="/"
                                        className="accent-light-color fw-light text-nowrap"
                                        onClick={closeList}
                                    >
                                        音樂文章
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/"
                                        className="accent-light-color fw-light text-nowrap"
                                        onClick={closeList}
                                    >
                                        成人課程
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/"
                                        className="accent-light-color fw-light text-nowrap"
                                        onClick={closeList}
                                    >
                                        兒童課程
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link
                                className="accent-light-color text-nowrap space"
                                to="place"
                                onClick={closeList}
                            >
                                場地租借
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="accent-light-color text-nowrap space"
                                to="aboutus"
                                onClick={closeList}
                            >
                                關於我們
                            </Link>
                        </li>
                    </ul>
                    <ScrollTo />
                </div>
            </nav>
        </>
    );
}

export default NavbarMobile;
