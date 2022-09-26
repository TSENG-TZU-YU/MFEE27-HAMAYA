import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import Fb from '../../assets/FooterImg/fb-gray.svg';
import Youtube from '../../assets/FooterImg/youtube-gray.svg';
import Line from '../../assets/FooterImg/line-gray.svg';
import All from '../../assets/FooterImg/All.svg';
import Lines from '../../assets/FooterImg/lines.svg';
import MobileFooter from './MobileFooter';
import FooterLogo from '../../assets/FooterImg/footer-logo.svg';
import FooterConnect from '../../assets/FooterImg/FooterConnect.svg';
import { useAuth } from '../../utils/use_auth';

function Footer(props) {
    const { hideHeaderFooter } = useAuth();
    return (
        <div className={hideHeaderFooter && 'd-none'}>
            <div className="bg-main-light-color footer-height pt-4">
                <MobileFooter />
                <div className="container d-none d-md-block ">
                    <div className="row">
                        <div className="col-md">
                            <img
                                src={FooterLogo}
                                alt="Logo"
                                className="footerLogo footer-imgs"
                            />
                            <img
                                src={FooterConnect}
                                alt="Logo"
                                className="footerConnect footer-imgs2"
                            />
                        </div>
                        <div className="col-md  pt-3 ">
                            <Link
                                className="main-gary-light-color word-size text-nowrap "
                                to="news"
                            >
                                最新消息
                            </Link>
                            <div className="d-flex  align-items-start flex-column ">
                                <Link
                                    className="ms-1 main-gary-light-color  text-nowrap  word-size2"
                                    to="news"
                                >
                                    促銷活動
                                </Link>
                                <Link
                                    className="ms-1 main-gary-light-color text-nowrap word-size2"
                                    to="news"
                                >
                                    活動快訊
                                </Link>
                                <Link
                                    className="ms-1 main-gary-light-color text-nowrap word-size2"
                                    to="news"
                                >
                                    重要通知
                                </Link>
                                <Link
                                    className="ms-1 main-gary-light-color  text-nowrap word-size2"
                                    to="news/section"
                                >
                                    音樂文章
                                </Link>
                            </div>
                        </div>

                        <div className="col-md pt-3 d-flex  align-items-start flex-column">
                            <Link
                                className="main-gary-light-color  word-size text-nowrap col-md-1 "
                                to="products"
                            >
                                樂器商城
                            </Link>
                            <Link
                                className="ms-1 main-gary-light-color text-nowrap word-size2"
                                to="/products"
                            >
                                最新商品
                            </Link>
                            <Link
                                className="ms-1 main-gary-light-color text-nowrap word-size2"
                                to="/products?main_id=1"
                            >
                                琴鍵樂器
                            </Link>
                            <Link
                                className="ms-1 main-gary-light-color text-nowrap word-size2"
                                to="/products?main_id=2"
                            >
                                管樂器
                            </Link>
                            <Link
                                className="ms-1 main-gary-light-color text-nowrap word-size2"
                                to="/products?main_id=3"
                            >
                                弓弦樂器
                            </Link>
                            <Link
                                className="ms-1 main-gary-light-color text-nowrap word-size2"
                                to="/products?main_id=4"
                            >
                                吉他/烏克麗麗
                            </Link>
                            <Link
                                className="ms-1 main-gary-light-color text-nowrap word-size2"
                                to="/products?main_id=5"
                            >
                                打擊樂器
                            </Link>
                            <Link
                                className="ms-1 main-gary-light-color text-nowrap word-size2"
                                to="/products?main_id=6"
                            >
                                配件
                            </Link>
                        </div>
                        <div className="col-md pt-3">
                            <Link
                                className="main-gary-light-color word-size text-nowrap "
                                to="/class"
                            >
                                音樂教育
                            </Link>
                            <div className="d-flex  align-items-start flex-column ">
                                <Link
                                    className="ms-1 main-gary-light-color text-nowrap word-size2 "
                                    to="/class/list?class=1"
                                >
                                    成人課程
                                </Link>
                                <Link
                                    className="ms-1 main-gary-light-color text-nowrap word-size2"
                                    to="/class/list?class=2"
                                >
                                    兒童課程
                                </Link>
                                <Link
                                    className="ms-1 main-gary-light-color text-nowrap word-size2"
                                    to="/class"
                                >
                                    師資介紹
                                </Link>
                            </div>
                        </div>
                        <div className="col-md   pt-3 text-nowrap">
                            <Link
                                className="main-gary-light-color word-size"
                                to="place"
                            >
                                場地租借
                            </Link>
                        </div>

                        <div className="col-md pt-3 text-nowrap ">
                            <Link
                                className="main-gary-light-color word-size"
                                to="aboutus"
                            >
                                關於我們
                            </Link>
                        </div>

                        <div className="col-md picture-height">
                            <Link className="" to="">
                                <img
                                    src={Fb}
                                    width="40"
                                    alt="Fb"
                                    className="main-gary-light-color me-2 FYL"
                                />
                            </Link>
                            <Link className="" to="">
                                <img
                                    src={Youtube}
                                    width="40"
                                    alt="Youtube"
                                    className="main-gary-light-color me-2 FYL"
                                />
                            </Link>
                            <Link className="" to="">
                                <img
                                    src={Line}
                                    width="40"
                                    alt="Line"
                                    className="main-gary-light-color FYL"
                                />
                            </Link>
                            <img src={All} width="160" alt="All" className="" />
                        </div>
                    </div>
                </div>
                {/* TODO:拉到某一個尺寸，底邊會跑版需再調整 */}
                <div>
                    <img
                        src={Lines}
                        alt="Lines"
                        width="100%"
                        className="mt-3 d-none d-md-block img-fluid"
                    />
                </div>
            </div>
        </div>
    );
}

export default Footer;
