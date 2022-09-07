import React from 'react';
import './index.scss';

import { Link } from 'react-router-dom';
import NewsBanner from '../../assets/NewsImg/news-banner.jpg';
import NewsImg from '../../assets/NewsImg/news-img.png';
import NewsImg2 from '../../assets/NewsImg/news-img2.png';
import NewsImg3 from '../../assets/NewsImg/news-img3.png';
import NewsImg4 from '../../assets/NewsImg/news-img4.png';

function NEWs(props) {
    return (
        <>
            <div className="">
                <img src={NewsBanner} alt="banner" className="img-fluid" />
                {/* 麵包屑 */}
                <div className="container d-flex mt-5 ">
                    <Link to="/">
                        <p className="News-Breadcrumbs">首頁</p>
                    </Link>
                    /
                    <Link to="/class">
                        <p className="News-Breadcrumbs">最新消息</p>
                    </Link>
                </div>
                {/* 麵包屑 end*/}
                {/* 最新消息 */}
                <div className="container d-flex News-blank-top">
                    <p className="News-word fw-bold News-cursor-pinter me-3 text-nowrap">
                        最新消息
                    </p>
                    <p className="News-word fw-bold News-engText me-3">NEWS</p>
                    <div className=" mt-3 News-vector3"></div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <img
                                src={NewsImg}
                                alt="banner"
                                width="600"
                                height="400"
                                className="img-fluid mt-2"
                            />
                            <p className="gary-dark-color h5 News-cursor-pinter mt-3">
                                【親子點唱機】孟德爾頌《無言歌》為什麼沒有歌詞？
                            </p>
                            <div className=" d-flex mt-3 ">
                                <p className="News-music-article small me-2">
                                    活動快訊
                                </p>
                                <p>李明蒨 － 2022/08/20</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 News-blank-art-left  ">
                            <div className="d-flex mt-2 ">
                                <img
                                    src={NewsImg2}
                                    alt="art02"
                                    width="150"
                                    height="100"
                                    className=""
                                />
                                <p className="gary-dark-color h5 News-cursor-pinter ms-2 ">
                                    AI執筆完成貝多芬《第十號交響曲》——AI的創作是否享有著作權法的保護？
                                    <div className=" d-flex mt-2 ">
                                        <p className="News-music-article2 small  ">
                                            音樂文章
                                        </p>
                                        <p className="ms-3">
                                            瓦力 － 2022/08/20
                                        </p>
                                    </div>
                                </p>
                            </div>
                            <div className="border-top border-secondary border-1 px-3 pt-3 mt-4 mb-3"></div>
                            <div className="d-flex mt-2 ">
                                <img
                                    src={NewsImg3}
                                    alt="art02"
                                    width="150"
                                    height="100"
                                    className=""
                                />
                                <p className="gary-dark-color h5 News-cursor-pinter ms-2 ">
                                    廣場上的小提琴手
                                    <div className=" d-flex mt-2 ">
                                        <p className="News-music-article3 small  ">
                                            重要通知
                                        </p>
                                        <p className="ms-3">
                                            眾博法律事務所 － 2022/08/20
                                        </p>
                                    </div>
                                </p>
                            </div>
                            <div className="border-top border-secondary border-1 mt-4 mb-3"></div>
                            <div className="d-flex mt-2 ">
                                <img
                                    src={NewsImg4}
                                    alt="art02"
                                    width="150"
                                    height="100"
                                    className=""
                                />
                                <p className="gary-dark-color h5 News-cursor-pinter ms-2 ">
                                    莫札特《費加洛的婚禮》——聰明，反被聰明誤？
                                    <div className=" d-flex mt-2 ">
                                        <p className="News-music-article4 small">
                                            促銷活動
                                        </p>
                                        <p className="ms-3">
                                            邢子青 － 2022/08/20
                                        </p>
                                    </div>
                                </p>
                            </div>
                            <div className="border-top border-secondary border-1  mt-4 mb-3"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className=" row text-center ">
                    <p className="col-3">促銷活動</p>
                    <p className="col-3">活動快訊</p>
                    <p className="col-3">重要通知</p>
                    <p className="col-3">音樂文章</p>
                </div>
            </div>
            <div className="container">
                <div className="row ">
                    <div className="col-md-4 col-12">8</div>
                    <div className="col-md-4 col-12">5</div>
                    <div className="col-md-4 col-12">7</div>
                    <div className="col-md-4 col-12">10</div>
                    <div className="col-md-4 col-12">11</div>
                    <div className="col-md-4 col-12">12</div>
                </div>
            </div>
        </>
    );
}

export default NEWs;
