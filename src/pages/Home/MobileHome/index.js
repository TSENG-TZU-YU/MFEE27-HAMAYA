import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

import MobileImg from '../../../assets/HomeImg/mobile-img.jpg';
import MobileImg2 from '../../../assets/HomeImg/mobile-img2.jpg';
import MobileImg3 from '../../../assets/HomeImg/mobile-img3.jpg';
import Vector25 from '../../../assets/HomeImg/Vector25.svg';

function MobileHome(props) {
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
                <div className="mobile-pushed-content mobile-pushed-box ">
                    <Link to="products">
                        <span className="item-word">樂器商城</span>
                        <img
                            src={Vector25}
                            width="150"
                            alt="Logo"
                            className="vector25"
                        />
                        {/* <span className="item-word2">Instrumental Store</span> */}
                    </Link>
                </div>
            </div>

            <div className="container pushed-wrapper home-blank-top2 d-md-none d-block">
                <div className="row pushed-box4 pushed-box5">
                    <Link to="products">
                        <span className="item-word3">音樂教育</span>
                        <img
                            src={Vector25}
                            width="150"
                            alt="Logo"
                            className="vector25-2"
                        />
                        <span className="item-word4">Musical Education</span>
                    </Link>
                </div>
                <div className="  home-blank-top ">
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
            <div className="container pushed-wrapper home-blank-top3 d-md-none d-block ">
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
                <div className=" pushed-content pushed-box  ">
                    <Link to="products">
                        <span className="item-word">場地租借</span>
                        <img
                            src={Vector25}
                            width="150"
                            alt="Logo"
                            className="vector25"
                        />
                        {/* <span className="item-word2">
                            Facility Rental Services
                        </span> */}
                    </Link>
                </div>
            </div>
        </>
    );
}

export default MobileHome;
