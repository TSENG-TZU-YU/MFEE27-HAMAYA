import React, { useEffect, useState } from 'react';
import axios from 'axios';

import NewsImg5 from '../../../../assets/NewsImg/news-img5.png';
// import NewsImg6 from '../../../../assets/NewsImg/news-img6.png';
// import NewsImg7 from '../../../../assets/NewsImg/news-img7.png';
// import NewsImg8 from '../../../../assets/NewsImg/news-img8.png';
// import NewsImg9 from '../../../../assets/NewsImg/news-img9.png';
// import NewsImg10 from '../../../../assets/NewsImg/news-img10.png';

function NewsActivity(props) {
    const [data, setData] = useState([]);
    const [news2, setNews2] = useState([]);

    useEffect(() => {
        console.log('News', 'useEffect []');
        console.log('useEffect[]', data);
        let getNews = async () => {
            let response = await axios.get('http://localhost:3001/api/news');
            setNews2(response.data.news2);
            console.log('useEffect[] after set', data);
        };
        getNews();
    }, []);

    useEffect(() => {
        console.log('News', 'useEffect [data]');
    }, [data]);

    return (
        <>
            <div>
                {news2.map((news2, index) => {
                    return (
                        <div key={index} className="container">
                            <div className="row  News-articles ">
                                <div className="col-4 col-md-4 ">
                                    <div className="mt-4 ">
                                        <img
                                            src={NewsImg5}
                                            alt="art02"
                                            width="100%"
                                            height="100%"
                                            className="News-imgs"
                                        />
                                        <span className="gary-dark-color h6 News-cursor-pinter mt-2">
                                            {news2.title}
                                            <div className=" d-flex mt-2 ">
                                                <p className="News-music-article4 small">
                                                    {news2.name}
                                                </p>
                                                <p className="ms-2">
                                                    {news2.creation_dat}
                                                </p>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default NewsActivity;
