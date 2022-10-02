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
                        <div className="col-md footer-list ">
                            <Link
                                className="main-gary-light-color word-size text-nowrap "
                                to="news"
                            >
                                最新消息
                            </Link>
                            <div className="d-flex  align-items-start flex-column "></div>
                        </div>

                        <div className="col-md  d-flex  align-items-start flex-column footer-list">
                            <Link
                                className="main-gary-light-color  word-size text-nowrap col-md-1 "
                                to="products"
                            >
                                樂器商城
                            </Link>
                        </div>
                        <div className="col-md footer-list">
                            <Link
                                className="main-gary-light-color word-size text-nowrap "
                                to="/class"
                            >
                                音樂教育
                            </Link>
                        </div>
                        <div className="col-md text-nowrap footer-list">
                            <Link
                                className="main-gary-light-color word-size"
                                to="place"
                            >
                                場地租借
                            </Link>
                        </div>

                        <div className="col-md  text-nowrap footer-list">
                            <Link
                                className="main-gary-light-color word-size"
                                to="aboutus"
                            >
                                關於我們
                            </Link>
                        </div>

                        <div className="col-md picture-height ">
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
