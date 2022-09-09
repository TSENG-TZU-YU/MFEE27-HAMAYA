import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import { Container } from 'react-bootstrap';
import Fb from '../../../assets/FooterImg/fb-gray.svg';
import Youtube from '../../../assets/FooterImg/youtube-gray.svg';
import Line from '../../../assets/FooterImg/line-gray.svg';
import All from '../../../assets/FooterImg/All.svg';
import MobileLines from '../../../assets/FooterImg/mobile-line.svg';
import FooterLogo from '../../../assets/FooterImg/footer-logo.svg';

function MobileFooter(props) {
    return (
        <>
            <div className=" d-md-none d-block bg-main-light-color Mobile-footer-height  text-center pt-4">
                <Container className="d-md-none d-block">
                    <div className="row">
                        <div className="col-md-1">
                            <img
                                src={FooterLogo}
                                alt="Logo"
                                className="Mobile-footerLogo "
                                width="250"
                            />
                        </div>
                        <div className="col-md-10 d-flex justify-content-evenly mt-4 p">
                            <Link className="main-gary-light-color" to="news">
                                最新消息
                            </Link>
                            <Link
                                className=" main-gary-light-color"
                                to="product"
                            >
                                樂器商城
                            </Link>
                            <Link className="main-gary-light-color" to="class">
                                音樂教育
                            </Link>

                            <Link className="main-gary-light-color" to="place">
                                場地租借
                            </Link>

                            <Link
                                className="  main-gary-light-color"
                                to="aboutus"
                            >
                                關於我們
                            </Link>
                        </div>

                        <div className="col-md-1 mt-4 ">
                            <Link className="" to="">
                                <img
                                    src={Fb}
                                    width="30"
                                    alt="Logo"
                                    className="main-gary-light-color me-3 "
                                />
                            </Link>
                            <Link className="" to="">
                                <img
                                    src={Youtube}
                                    width="30"
                                    alt="Logo"
                                    className="main-gary-light-color me-3  "
                                />
                            </Link>
                            <Link className="" to="">
                                <img
                                    src={Line}
                                    width="30"
                                    alt="Logo"
                                    className=" main-gary-light-color me-3 "
                                />
                            </Link>
                        </div>
                        <div>
                            <img
                                src={All}
                                width="250"
                                alt="Logo"
                                className="mt-4 Mobile-all"
                            />
                        </div>
                    </div>
                </Container>
                <div className="d-md-none d-block ">
                    <img
                        src={MobileLines}
                        alt="Logo"
                        className="mt-5 img-fluid"
                        width="100%"
                    />
                </div>
            </div>
        </>
    );
}

export default MobileFooter;
