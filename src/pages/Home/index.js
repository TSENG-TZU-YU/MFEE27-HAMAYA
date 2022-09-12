import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

// 套件
import { Container, Row, Col } from 'react-bootstrap';

import { homeImages } from '../../album/home';

//TODO:會空一大格需要處理
//TODO:首頁ＲＷＤ要再排版
//TODO:首頁的音樂文章裝飾音符要用上去

import HomeScroll from '../../components/HomeScroll/HomeScroll';

//圖檔
import MobileHome from './MobileHome';
import Decorate from '../../assets/HomeImg/decorate.svg';
import Decorate2 from '../../assets/HomeImg/decorate-2.svg';
import ServiceItem from '../../assets/HomeImg/service-item.jpg';
import ServiceItem2 from '../../assets/HomeImg/service-item2.jpg';
import ServiceItem3 from '../../assets/HomeImg/service-item3.jpg';
import ServiceItem4 from '../../assets/HomeImg/service-item4.jpg';
import NewsImg5 from '../../assets/NewsImg/news-img5.png';
import NewsImg6 from '../../assets/NewsImg/news-img6.png';
import NewsImg7 from '../../assets/NewsImg/news-img7.png';
import Vector25 from '../../assets/HomeImg/Vector25.svg';
import BrandWord from '../../assets/HomeImg/brandword.svg';
import Note from '../../assets/HomeImg/note.svg';
import Note2 from '../../assets/HomeImg/note-2.svg';
import Note3 from '../../assets/HomeImg/note-3.svg';
import Note4 from '../../assets/HomeImg/note-4.svg';
import Img from '../../assets/HomeImg/homeimg.jpg';
import Img2 from '../../assets/HomeImg/homeimg-2.jpg';
import Play from '../../assets/HomeImg/smart-display.svg';

import Smart from '../../assets/HomeImg/smart-display-2.svg';

function Home(props) {
    return (
        <>
            <MobileHome />
            {/* TODO:for下面的className d-none d-md-block  */}
            <div className=" bg-main-gary-light-color  ">
                <div className=" d-none d-md-block">
                    <img
                        src={Decorate}
                        width="800"
                        alt="Logo"
                        className="Decorate"
                    />
                </div>
                <div className="container d-none d-md-block text-center">
                    <div className="row">
                        <div className="col-4">
                            <span className="font">HA</span>
                            <img
                                src={BrandWord}
                                alt="Logo"
                                height="100"
                                width=""
                                className="home-img5"
                            />
                            <img
                                src={Note}
                                alt="Logo"
                                height="50"
                                width=""
                                className="home-img6"
                            />
                            <img
                                src={Note2}
                                alt="Logo"
                                height="50"
                                width=""
                                className="home-img7"
                            />
                            <span className="font5">
                                將光亮從人心靈的深沈中釋放出來，是音樂的神聖使命。
                                ——羅伯特·亞歷山大·舒曼
                            </span>
                        </div>
                        <div className="col-4">
                            <span className="font4">MA</span>
                        </div>
                        <div className="col-4">
                            <img
                                src={Img}
                                alt="Logo"
                                height="247"
                                width=""
                                className="home-img2"
                            />

                            <img
                                src={Smart}
                                alt="Logo"
                                height="50"
                                width=""
                                className="video-button"
                            />
                            <img
                                src={Note4}
                                alt="Logo"
                                height=""
                                width=""
                                className="note4"
                            />
                            <img
                                src={Note3}
                                alt="Logo"
                                height=""
                                width=""
                                className="note3"
                            />
                            <img
                                src={Img2}
                                alt="Logo"
                                height="150"
                                width=""
                                className="home-img3"
                            />
                            <img
                                src={Play}
                                alt="Logo"
                                height="50"
                                width=""
                                className="home-img4"
                            />
                            <span className="font6">YA</span>
                        </div>
                    </div>
                    <div className="">
                        <img
                            src={Decorate2}
                            alt="Logo"
                            height="150"
                            width=""
                            className="Decorate2 "
                        />
                    </div>
                </div>

                <div className="container  d-none d-md-block ">
                    <div className="row">
                        <div className="col"></div>
                    </div>
                </div>
                <HomeScroll images={homeImages} />
                {/* 
                <div
                    className=""
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                ></div> */}

                <div className="container">
                    <span className="home-word">
                        NEW &ensp;
                        <span className="home-word2">2022.08.25&ensp;</span>
                        <span className="home-word3">九月琴房租借優惠中</span>
                    </span>
                </div>

                <div className="container d-flex home-blank-top">
                    <p className="home-word4 fw-bold home-cursor-pinter me-3 text-nowrap">
                        服務項目
                    </p>
                    <p className="home-word4 fw-bold home-engText me-3">
                        SERVICE
                    </p>
                    <div className=" mt-3 home-vector3"></div>
                </div>

                <div className="container bg-main-gary-light-color">
                    <div className="wrap  bg-main-gary-light-color">
                        {/* 第一塊 */}
                        <div className="item">
                            <div className="pic">
                                <img
                                    src={ServiceItem}
                                    width="800"
                                    alt="Logo"
                                    className="item-img"
                                />
                            </div>
                            <div className="txt">
                                <Link to="products">
                                    <span className="item-word">樂器商城</span>
                                    <img
                                        src={Vector25}
                                        width="180"
                                        alt="Logo"
                                        className="vector25"
                                    />
                                    <span className="item-word2 ">
                                        Instrumental Store
                                    </span>
                                </Link>
                            </div>
                        </div>

                        {/* 第二塊 */}
                        <div className="item">
                            <div className="txt">
                                <Link to="products">
                                    <span className="item-word3">音樂教育</span>
                                    <img
                                        src={Vector25}
                                        width="180"
                                        alt="Logo"
                                        className="vector25-2"
                                    />
                                    <span className="item-word4">
                                        Musical Education
                                    </span>
                                </Link>
                            </div>
                            <div className="pic">
                                <img
                                    src={ServiceItem2}
                                    width="800"
                                    alt="Logo"
                                    className="item-img second-img"
                                />
                            </div>
                        </div>

                        {/* 第三塊 */}
                        <div className="item">
                            <div className="pic">
                                <img
                                    src={ServiceItem3}
                                    width="800"
                                    alt="Logo"
                                    className="item-img"
                                />
                            </div>
                            <div className="txt">
                                <Link to="products">
                                    <span className="item-word">場地租借</span>
                                    <img
                                        src={Vector25}
                                        width="180"
                                        alt="Logo"
                                        className="vector25"
                                    />
                                    <span className="item-word2">
                                        Facility Rental Services
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <img
                        src={ServiceItem4}
                        width="100%"
                        alt="Logo"
                        className=""
                    />
                </div>

                <div className="container d-flex home-blank-top bg-main-gary-light-color">
                    <p className="home-word4 fw-bold home-cursor-pinter me-3 text-nowrap">
                        音樂文章
                    </p>
                    <p className="home-word4 fw-bold home-engText me-3">
                        ARTICLE
                    </p>
                    <div className=" mt-3 News-vector3"></div>
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
                                        <p className="ms-2">
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
                                <span className="gary-dark-color h6 News-cursor-pinter mt-2 ">
                                    樂時代～報名課程拿好康 Let's Music！
                                    <div className="d-flex mt-2 ">
                                        <p className="News-music-article4 small News-label">
                                            促銷活動
                                        </p>
                                        <p className="ms-2">
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
                                        <p className="ms-2">
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
