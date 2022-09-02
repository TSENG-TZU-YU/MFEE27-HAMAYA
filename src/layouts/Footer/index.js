import { Link } from 'react-router-dom';
import './index.scss';
import { Container } from 'react-bootstrap';
import Fb from '../../assets/FooterImg/fb-gray.svg';
import Youtube from '../../assets/FooterImg/youtube-gray.svg';
import Line from '../../assets/FooterImg/line-gray.svg';
import All from '../../assets/FooterImg/All.svg';
// import FooterImage from '../../assets/FooterImg/footer-informtion.svg';   // assets/FooterImg 裡面沒有這個svg會出錯 git 的時候要注意
import Lines from '../../assets/FooterImg/lines.svg';

function Footer(props) {
    return (
        <>
            <div className="bg-main-light-color footer-height">
                <Container className=" d-flex justify-content-between">
                    {/* <img
                        src={FooterImage}
                        alt="Logo"
                        width="50"
                        className=" col-md-3"
                    /> */}

                    <div className="">
                        <p className=" main-gary-light-color l footer-word   ">
                            HAMAYA
                            <span className=" main-gary-light-color  footer-word2  ms-1">
                                MUSIC
                            </span>
                        </p>
                        <p className=" main-gary-light-color footer-word3 ">
                            TEL: 06-6946-5820/ FAX: 06-7635-8075 <br />
                            MAIL: service@gmail.com <br />
                            ON.-FRI. 09:00-12:00 / 13:00-18:00
                        </p>
                    </div>
                    <div className="d-flex flex-column pt-5 p">
                        <Link
                            className="main-gary-light-color h6 "
                            to="product"
                        >
                            樂器商城
                        </Link>
                        <Link className="main-gary-light-color" to="product">
                            最新商品
                        </Link>
                    </div>
                    <div className=" d-flex flex-column pt-5 ">
                        <Link
                            className="main-gary-light-color h6 "
                            to="product"
                        >
                            音樂教育
                        </Link>
                        <Link className="main-gary-light-color  " to="product">
                            成人課程
                        </Link>
                        <Link className="main-gary-light-color   " to="product">
                            兒童課程
                        </Link>
                        <Link className="main-gary-light-color   " to="product">
                            師資介紹
                        </Link>
                    </div>
                    <Link
                        className=" main-gary-light-color h6 pt-5 "
                        to="product"
                    >
                        場地租借
                    </Link>
                    <div className=" d-flex flex-column pt-5">
                        <Link
                            className="main-gary-light-color h6 "
                            to="product"
                        >
                            最新消息
                        </Link>
                        <Link className="main-gary-light-color  " to="product">
                            促銷活動
                        </Link>
                        <Link className="main-gary-light-color " to="product">
                            活動快訊
                        </Link>
                        <Link className="main-gary-light-color   " to="product">
                            重要通知
                        </Link>
                        <Link className="main-gary-light-color   " to="product">
                            音樂文章
                        </Link>
                    </div>
                    <Link
                        className=" main-gary-light-color h6 pt-5  "
                        to="product"
                    >
                        關於我們
                    </Link>
                    <div className=" picture-height">
                        <Link className="" to="">
                            <img
                                src={Fb}
                                width="20"
                                alt="Logo"
                                className="col-md-2 main-gary-light-colo me-1"
                            />
                        </Link>
                        <Link className="" to="">
                            <img
                                src={Youtube}
                                width="20"
                                alt="Logo"
                                className="col-md-2 main-gary-light-colo  me-1"
                            />
                        </Link>
                        <Link className="" to="">
                            <img
                                src={Line}
                                width="20"
                                alt="Logo"
                                className="col-md-2 main-gary-light-colo "
                            />
                        </Link>

                        <img
                            src={All}
                            width="100"
                            alt="Logo"
                            className="col-9"
                        />
                    </div>
                </Container>
                <img src={Lines} alt="Logo" className="mr-2 pt-5 img-fluid " />
            </div>
        </>
    );
}

export default Footer;
