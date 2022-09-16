import React from 'react';

import NewsImg5 from '../../../../assets/NewsImg/news-img5.png';
import NewsImg6 from '../../../../assets/NewsImg/news-img6.png';
import NewsImg7 from '../../../../assets/NewsImg/news-img7.png';
// import NewsImg8 from '../../../../assets/NewsImg/news-img8.png';
// import NewsImg9 from '../../../../assets/NewsImg/news-img9.png';
// import NewsImg10 from '../../../../assets/NewsImg/news-img10.png';

function NewsActivity() {
    return (
        <>
            <div className="container ">
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
                    {/* <div className="col-md-4 col-12">
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
                </div>
            </div>
            {/* </div> */}
        </>
    );
}

export default NewsActivity;
