import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';
import MobileImg from '../../../assets/HomeImg/mobile-img.jpg';
import MobileImg2 from '../../../assets/HomeImg/mobile-img2.jpg';
import MobileImg3 from '../../../assets/HomeImg/mobile-img3.jpg';
import Vector25 from '../../../assets/HomeImg/Vector25.svg';

function MobileHome(props) {
    AOS.init();
    return (
        <>
            <div className="container d-flex mobile-blank-top d-md-none d-block">
                <p className="mobile-word4 fw-bold mobile-cursor-pinter me-3 text-nowrap">
                    服務項目
                </p>
                <p className="mobile-word4 fw-bold mobile-engText me-3">
                    SERVICE
                </p>
                <div className=" mt-3 mobile-vector3"></div>
            </div>
            <div className="container mobile-pushed-wrapper mobile-blank-top d-md-none d-block">
                <div className="row">
                    <div className="">
                        <img
                            src={MobileImg}
                            width="200"
                            alt="Logo"
                            className="item-img"
                        />
                    </div>
                </div>
                <div
                    className="mobile-pushed-content mobile-pushed-box "
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-offset="100"
                >
                    <Link to="products">
                        <span className="mobile-word">樂器商城</span>
                        <img
                            src={Vector25}
                            width="200"
                            alt="Logo"
                            className="mobile-vector25"
                        />
                        <span className="mobile-word2">Instrumental Store</span>
                    </Link>
                    <span className="mobile-word6">
                        各項高品質鋼琴、電子琴、各種管樂器、弦樂器、打擊樂器及數位樂器之銷售。
                    </span>
                </div>
            </div>

            <div className="container pushed-wrapper home-blank-top2 d-md-none d-block">
                <div
                    className="row mobile-pushed-content mobile-pushed-box2"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-offset="100"
                >
                    <Link to="class">
                        <span className="mobile-word">音樂教育</span>
                        <img
                            src={Vector25}
                            width="200"
                            alt="Logo"
                            className="mobile-vector25"
                        />
                        <span className="mobile-word2">Musical Education</span>
                    </Link>
                    <span className="mobile-word6">
                        教材、指導法經歷50年以上的研究，世界通用，在全國教室皆可銜接課程。
                    </span>
                </div>
                <div className="">
                    <div className="">
                        <img
                            src={MobileImg2}
                            width=""
                            alt="Logo"
                            className="item-img2"
                        />
                    </div>
                </div>
            </div>
            <div className="container pushed-wrapper mobile-blank-top3 d-md-none d-block ">
                <div className="row">
                    <div className="">
                        <img
                            src={MobileImg3}
                            width="200"
                            alt="Logo"
                            className="item-img"
                        />
                    </div>
                </div>
                <div
                    className=" mobile-pushed-content  mobile-pushed-box"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-offset="100"
                >
                    <Link to="place">
                        <span className="mobile-word">場地租借</span>
                        <img
                            src={Vector25}
                            width="200"
                            alt="Logo"
                            className="mobile-vector25"
                        />
                        <span className="mobile-word5">
                            Facility Rental Services
                        </span>
                    </Link>
                    <span className="mobile-word6">
                        提供表演場所供學員租借使用，家中不方便練習的學員也可以租借練習室，盡情沉浸在音樂中。
                    </span>
                </div>
            </div>
        </>
    );
}

export default MobileHome;
