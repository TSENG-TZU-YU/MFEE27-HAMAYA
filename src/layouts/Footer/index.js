import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import { Container } from 'react-bootstrap';
import Fb from '../../assets/FooterImg/fb-gray.svg';
import Youtube from '../../assets/FooterImg/youtube-gray.svg';
import Line from '../../assets/FooterImg/line-gray.svg';
import All from '../../assets/FooterImg/All.svg';
import Lines from '../../assets/FooterImg/lines.svg';
import MobileFooter from './MobileFooter';
import FooterLogo from '../../assets/FooterImg/footer-logo.svg';
import FooterConnect from '../../assets/FooterImg/FooterConnect.svg';

function Footer(props) {
    return (
        <>
            <div className="   bg-main-light-color footer-height page-footer text-center  pt-4">
                <MobileFooter />
                <Container className="d-none d-md-block">
                    <div className="row">
                        <div className="col-md-3">
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

                        <div className="col-md-1  ms-3  d-flex flex-column pt-5">
                            <Link
                                className="main-gary-light-color  word-size text-nowrap col-md-1 "
                                to="products"
                            >
                                樂器商城
                            </Link>
                            <Link
                                className="main-gary-light-color text-nowrap word-size2"
                                to="products"
                            >
                                最新商品
                            </Link>
                        </div>
                        <div className="col-md-1 ms-3 d-flex flex-column pt-5 ">
                            <Link
                                className="main-gary-light-color word-size text-nowrap "
                                to="class"
                            >
                                音樂教育
                            </Link>
                            <Link
                                className="main-gary-light-color text-nowrap word-size2 "
                                to="class"
                            >
                                成人課程
                            </Link>
                            <Link
                                className="main-gary-light-color text-nowrap word-size2"
                                to="class"
                            >
                                兒童課程
                            </Link>
                            <Link
                                className="main-gary-light-color text-nowrap word-size2"
                                to="class"
                            >
                                師資介紹
                            </Link>
                        </div>
                        <Link
                            className="col-md-1 ms-3 main-gary-light-color word-size pt-5 text-nowrap "
                            to="place"
                        >
                            場地租借
                        </Link>
                        <div className="col-md-1 ms-3 d-flex flex-column pt-5">
                            <Link
                                className="main-gary-light-color word-size text-nowrap "
                                to="news"
                            >
                                最新消息
                            </Link>
                            <Link
                                className="main-gary-light-color  text-nowrap  word-size2"
                                to="news"
                            >
                                促銷活動
                            </Link>
                            <Link
                                className="main-gary-light-color text-nowrap word-size2"
                                to="news"
                            >
                                活動快訊
                            </Link>
                            <Link
                                className="main-gary-light-color text-nowrap word-size2"
                                to="news"
                            >
                                重要通知
                            </Link>
                            <Link
                                className="main-gary-light-color  text-nowrap word-size2"
                                to="news"
                            >
                                音樂文章
                            </Link>
                        </div>
                        <Link
                            className="col-md-1 ms-3 main-gary-light-color word-size pt-5 text-nowrap "
                            to="product"
                        >
                            關於我們
                        </Link>
                        <div className="col-md-2 ms-3  picture-height ">
                            <Link className="" to="">
                                <img
                                    src={Fb}
                                    width="30"
                                    alt="Logo"
                                    className="main-gary-light-color me-2 FYL"
                                />
                            </Link>
                            <Link className="" to="">
                                <img
                                    src={Youtube}
                                    width="30"
                                    alt="Logo"
                                    className="main-gary-light-color  me-2 FYL"
                                />
                            </Link>
                            <Link className="" to="">
                                <img
                                    src={Line}
                                    width="30"
                                    alt="Logo"
                                    className=" main-gary-light-color FYL"
                                />
                            </Link>

                            <img
                                src={All}
                                width="160"
                                alt="Logo"
                                className=""
                            />
                        </div>
                    </div>
                </Container>
                <img
                    src={Lines}
                    alt="Logo"
                    className="mt-3 d-none  d-md-block img-fluid"
                />
            </div>
        </>
    );
}

export default Footer;
