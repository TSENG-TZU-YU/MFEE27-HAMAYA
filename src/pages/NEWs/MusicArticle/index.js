import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

// 圖檔
import NewsBanner from '../../../assets/NewsImg/news-banner.jpg';
import NewsImg from '../../../assets/NewsImg/news-img.png';
import NewsImg2 from '../../../assets/NewsImg/news-img2.png';

function MusicArticle(props) {
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
                    <Link to="/news">
                        <p className="News-Breadcrumbs">最新消息</p>
                    </Link>
                    /
                    <Link to="">
                        <p className="News-Breadcrumbs">音樂文章</p>
                    </Link>
                </div>
                {/* 麵包屑 end*/}
                <div className="container">
                    <div className="row text-center ">
                        <button className="col-3 News-word3  News-vector5-Btn ">
                            促銷活動
                        </button>
                        <button className="col-3 News-word3  News-vector5-Btn">
                            活動快訊
                        </button>
                        <button className="col-3 News-word3  News-vector5-Btn">
                            重要通知
                        </button>
                        <button className="col-3 News-word3  News-vector5-Btn News-vector5-Btn-active">
                            音樂文章
                        </button>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-md-6 ">
                            <div className="d-flex mt-3">
                                <img
                                    src={NewsImg2}
                                    alt="art02"
                                    width="100%"
                                    height="100%"
                                    className=""
                                />
                                <span className="col-6 col-md-6 gary-dark-color h4 list-cursor-pinter ">
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
                        </div>
                    </div>
                </div>
            </div>
            <Link to="/news/category">文章詳細</Link>
        </>
    );
}

export default MusicArticle;
