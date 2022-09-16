import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

// 套件

import { homeImages } from '../../album/home';

//TODO:首頁ＲＷＤ要再排版
//TODO:卷軸要做
//TODO:點擊輪播時會跑版要修

import MobileHome from './MobileHome';
import HomeScroll from '../../components/HomeScroll/HomeScroll';

//圖檔
// import MobileHome from './MobileHome';
import ServiceItem from '../../assets/HomeImg/service-item.jpg';
import ServiceItem2 from '../../assets/HomeImg/service-item2.jpg';
import ServiceItem3 from '../../assets/HomeImg/service-item3.jpg';

import NewsImg5 from '../../assets/NewsImg/news-img5.png';
import NewsImg6 from '../../assets/NewsImg/news-img6.png';
import NewsImg7 from '../../assets/NewsImg/news-img7.png';
import Vector25 from '../../assets/HomeImg/Vector25.svg';

import Note6 from '../../assets/HomeImg/note-6.svg';
import Note3 from '../../assets/HomeImg/note-3.svg';
import Note4 from '../../assets/HomeImg/note-4.svg';
import Note8 from '../../assets/HomeImg/note-8.svg';
import Note9 from '../../assets/HomeImg/note-9.svg';

import HomeAnimation from './HomeAnimation/HomeAnimation';

function Home(props) {
    return (
        <>
            <HomeAnimation />

            <div className="bg-main-gary-light-color ">
                <div className="">
                    <HomeScroll images={homeImages} />
                </div>

                <div className="container bg-main-gary-light-color ">
                    <span className="home-word">
                        NEW &ensp;
                        <span className="home-word2">2022.08.25&ensp;</span>
                        <span className="home-word3">九月琴房租借優惠中</span>
                    </span>
                </div>
                <MobileHome />
                <div className="container d-flex home-blank-top">
                    <p className=" d-none d-md-block home-word4 fw-bold home-cursor-pinter me-3 text-nowrap">
                        服務項目
                    </p>
                    <p className="d-none d-md-block home-word4 fw-bold home-engText me-3">
                        SERVICE
                    </p>

                    <div className=" d-none d-md-block mt-3 home-vector3"></div>
                </div>
                <div className="container pushed-wrapper home-blank-top d-none d-md-block ">
                    <div className="row">
                        <div className="">
                            <img
                                src={ServiceItem}
                                width="700"
                                alt="Logo"
                                className="item-img"
                            />
                        </div>
                    </div>
                    <div className=" pushed-content pushed-box  ">
                        <Link to="products">
                            <span className="item-word">樂器商城</span>
                            <img
                                src={Vector25}
                                width="150"
                                alt="Logo"
                                className="vector25"
                            />
                            <span className="item-word2">
                                Instrumental Store
                            </span>
                        </Link>
                    </div>
                </div>

                <div className="container pushed-wrapper home-blank-top2 d-none d-md-block">
                    <div className="row pushed-box4 pushed-box5">
                        <Link Link className="" to="class">
                            <span className="item-word3">音樂教育</span>
                            <img
                                src={Vector25}
                                width="150"
                                alt="Logo"
                                className="vector25-2"
                            />
                            <span className="item-word4">
                                Musical Education
                            </span>
                        </Link>
                    </div>
                    <div className="pushed-box2  home-blank-top ">
                        <div className="">
                            <img
                                src={ServiceItem2}
                                width="700"
                                alt="Logo"
                                className="item-img"
                            />
                        </div>
                    </div>
                </div>
                <div className="container pushed-wrapper home-blank-top3 d-none d-md-block ">
                    <div className="row">
                        <div className="">
                            <img
                                src={ServiceItem3}
                                width="700"
                                alt="Logo"
                                className="item-img"
                            />
                        </div>
                    </div>
                    <div className=" pushed-content pushed-box  ">
                        <Link to="place">
                            <span className="item-word">場地租借</span>
                            <img
                                src={Vector25}
                                width="150"
                                alt="Logo"
                                className="vector25"
                            />
                            <span className="item-word2">
                                Facility Rental Services
                            </span>
                        </Link>
                    </div>
                </div>

                <div className="parallax parallax2  home-blank-top2">
                    <div className="parallax-inner parallax-inner ">
                        <br />
                        <h1 className="scroll-word scroll-word2">
                            音樂之目的有二，一是以純淨之和聲愉悅人的感官，二是令人感動或激發人的熱情。—羅傑·諾斯
                        </h1>
                        <br />
                    </div>
                </div>

                {/* 音符裝飾 */}
                <div className="container  d-none d-xxl-block ">
                    <img src={Note3} width="30" alt="Logo" className="note3" />
                    <img src={Note6} width="50" alt="Logo" className="note6" />
                    <img src={Note4} width="30" alt="Logo" className="note4" />
                    <img src={Note8} width="40" alt="Logo" className="note8" />
                    <img src={Note9} width="15" alt="Logo" className="note9" />
                </div>

                <div className="container d-flex home-blank-top4 ">
                    <p className="home-word4 fw-bold home-cursor-pinter me-3 text-nowrap">
                        音樂文章
                    </p>
                    <p className="home-word4 fw-bold home-engText me-3">
                        ARTICLE
                    </p>
                    <div className=" mt-3 home-vector3"></div>
                </div>
                <div className="container bg-main-gary-light-color ">
                    <div className="row  News-articles">
                        <div className="col-12 col-md-4 ">
                            <div className="mt-4 ">
                                <img
                                    src={NewsImg5}
                                    alt="art02"
                                    width="100%"
                                    height="100%"
                                    className="News-imgs"
                                />
                                <span className="gary-dark-color h6 News-cursor-pinter mt-2">
                                    買樂器就交給最專業的HAMAYA吧！
                                    <div className=" d-flex mt-2 ">
                                        <p className="News-music-article4 small">
                                            促銷活動
                                        </p>
                                        <p className="ms-2 mt-1">
                                            May － 2022/08/20
                                        </p>
                                    </div>
                                </span>
                            </div>
                        </div>
                        <div className="col-12 col-md-4  ">
                            <div className="mt-4">
                                <img
                                    src={NewsImg6}
                                    alt="art02"
                                    width="100%"
                                    height="100%"
                                    className="News-imgs"
                                />
                                <span className="gary-dark-color h6 News-cursor-pinter ">
                                    樂時代～報名課程拿好康 Let's Music！
                                    <div className="d-flex mt-2 ">
                                        <p className="News-music-article4 small News-label">
                                            促銷活動
                                        </p>
                                        <p className="ms-2 mt-1">
                                            May － 2022/08/20
                                        </p>
                                    </div>
                                </span>
                            </div>
                        </div>
                        <div className="col-12 col-md-4  ">
                            <div className="mt-4">
                                <img
                                    src={NewsImg7}
                                    alt="art02"
                                    width="100%"
                                    height="100%"
                                    className="News-imgs"
                                />
                                <span className="gary-dark-color h6 News-cursor-pinter mt-2">
                                    學員專屬生日活動！
                                    <div className="d-flex mt-2 ">
                                        <p className="News-music-article4 small News-label">
                                            促銷活動
                                        </p>
                                        <p className="ms-2 mt-1">
                                            May － 2022/08/20
                                        </p>
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
