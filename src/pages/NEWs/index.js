import React, { useState } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
// import { useState } from 'react';

// 圖檔
import NewsBanner from '../../assets/NewsImg/news-banner.jpg';
import NewsImg from '../../assets/NewsImg/news-img.png';
import NewsImg2 from '../../assets/NewsImg/news-img2.png';
import NewsImg3 from '../../assets/NewsImg/news-img3.png';
import arrow from '../../assets/svg/arrow_back_ios_new.svg';
import NewsImg4 from '../../assets/NewsImg/news-img4.png';
// import NewsImg5 from '../../assets/NewsImg/news-img5.png';
// import NewsImg6 from '../../assets/NewsImg/news-img6.png';
// import NewsImg7 from '../../assets/NewsImg/news-img7.png';
// import NewsImg8 from '../../assets/NewsImg/news-img8.png';
// import NewsImg9 from '../../assets/NewsImg/news-img9.png';
// import NewsImg10 from '../../assets/NewsImg/news-img10.png';
import NewsPromotion from './MusicArticle/components/NewsPromotion';
import NewsActivity from './MusicArticle/components/NewsActivity';

function NEWs(props) {
    //TODO: 狀態設定1234
    const [setArticle, setSelectArticle] = useState(true);
    const [setArticle2, setSelectArticle2] = useState(false);

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
                                height="100%"
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
                                <span className="gary-dark-color h5 News-cursor-pinter ms-2 ">
                                    AI執筆完成貝多芬《第十號交響曲》——AI的創作是否享有著作權法的保護？
                                    <div className=" d-flex mt-2 ">
                                        <p className="News-music-article2 small  ">
                                            音樂文章
                                        </p>
                                        <p className="ms-3">
                                            瓦力 － 2022/08/20
                                        </p>
                                    </div>
                                </span>
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
                                <span className="gary-dark-color h5 News-cursor-pinter ms-2 ">
                                    廣場上的小提琴手
                                    <div className=" d-flex mt-2 ">
                                        <p className="News-music-article3 small  ">
                                            重要通知
                                        </p>
                                        <p className="ms-3">
                                            眾博法律事務所 － 2022/08/20
                                        </p>
                                    </div>
                                </span>
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
                                <span className="gary-dark-color h5 News-cursor-pinter ms-2 ">
                                    莫札特《費加洛的婚禮》——聰明，反被聰明誤？
                                    <div className=" d-flex mt-2 ">
                                        <p className="News-music-article4 small">
                                            促銷活動
                                        </p>
                                        <p className="ms-3">
                                            邢子青 － 2022/08/20
                                        </p>
                                    </div>
                                </span>
                            </div>
                            <div className="border-top border-secondary border-1 mt-4 mb-3"></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* TODO:底線要有距離，還需要再修 */}
            <div className="container">
                <div className="row text-center ">
                    <button
                        className={`col-3 ${
                            setArticle
                                ? 'News-vector5-Btn-active'
                                : 'News-vector5-Btn'
                        }`}
                        onClick={() => {
                            setSelectArticle(true);
                            setSelectArticle2(false);
                        }}
                    >
                        <span className=" News-word3 ">促銷活動</span>
                    </button>

                    <button
                        className={`col-3 ${
                            setArticle2
                                ? 'News-vector5-Btn-active'
                                : 'News-vector5-Btn'
                        }`}
                        onClick={() => {
                            setSelectArticle(false);
                            setSelectArticle2(true);
                        }}
                    >
                        <span className=" News-word3 ">活動快訊</span>
                    </button>

                    <button className="col-3 News-word3  News-vector5-Btn">
                        重要通知
                    </button>
                    <button className="col-3 News-word3  News-vector5-Btn">
                        音樂文章
                    </button>
                </div>
                {setArticle ? <NewsPromotion /> : <NewsActivity />}
            </div>
            {/* <div className="container ">
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
                                    <p className="ms-2">May － 2022/08/20</p>
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
                                    <p className="ms-2">May － 2022/08/20</p>
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
                                    <p className="ms-2">May － 2022/08/20</p>
                                </div>
                            </span>
                        </div>
                    </div>
                    <div className="col-md-4 col-12">
                        <div className="mt-2">
                            <img
                                src={NewsImg8}
                                alt="art02"
                                width="100%"
                                height="100%"
                                className="News-imgs"
                            />
                            <span className="gary-dark-color h6 News-cursor-pinter me-1 mt-2">
                                買樂器就交給最專業的HAMAYA吧！
                                <div className="d-flex mt-2 ">
                                    <p className="News-music-article4 small">
                                        促銷活動
                                    </p>
                                    <p className="ms-2">May － 2022/08/20</p>
                                </div>
                            </span>
                        </div>
                    </div>
                    <div className="col-md-4 col-12">
                        <div className="mt-2">
                            <img
                                src={NewsImg9}
                                alt="art02"
                                width="100%"
                                height="100%"
                                className="News-imgs"
                            />
                            <span className="gary-dark-color h6 News-cursor-pinter me-1 mt-2 ">
                                樂時代～報名課程拿好康 Let's Music！
                                <div className="d-flex mt-2 ">
                                    <p className="News-music-article4 small">
                                        促銷活動
                                    </p>
                                    <p className="ms-2">May － 2022/08/20</p>
                                </div>
                            </span>
                        </div>
                    </div>
                    <div className="col-md-4 col-12">
                        <div className="mt-2">
                            <img
                                src={NewsImg10}
                                alt="art02"
                                width="100%"
                                height="100%"
                                className="News-imgs"
                            />
                            <span className="gary-dark-color h6 News-cursor-pinter me-1 mt-2 ">
                                學員專屬生日活動！
                                <div className="d-flex mt-2 ">
                                    <p className="News-music-article4 small">
                                        促銷活動
                                    </p>
                                    <p className="ms-2">May － 2022/08/20</p>
                                </div>
                            </span>
                        </div> */}
            <div className="container News-more-art ">
                <Link to="section" className="mb-0 me-1 cursor-pinter">
                    看更多音樂文章
                </Link>
                <img
                    className="News-art-arrow"
                    style={{ width: '15px', height: '15px' }}
                    src={arrow}
                    alt="arrow"
                />
            </div>
            {/* </div>
                </div>
            </div> */}
        </>
    );
}

export default NEWs;
