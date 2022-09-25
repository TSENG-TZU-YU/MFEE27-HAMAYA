import React, { Fragment, useEffect, useState } from 'react';
import './index.scss';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import { v4 as uuidv4 } from 'uuid';

// 圖檔
import NewsBanner from '../../assets/NewsImg/news-banner.jpg';

import NewsImg2 from '../../assets/NewsImg/news-img2.png';
import NewsImg3 from '../../assets/NewsImg/news-img3.png';
import NewsImg4 from '../../assets/NewsImg/news-img4.png';

import NewsActivity from './MusicArticle/components/NewsActivity';

//TODO:類別顏色切換
//TODO:上面一塊尚未拉資料庫
//TODO:activeText會出現紅字找不到父層

//設定變數換網址
function NEWs() {
    //只是在設定active的狀態
    const [activeText, setActiveText] = useState(1);
    const [data, setData] = useState([]);
    const [news, setNews] = useState([]);
    const [news2, setNews2] = useState([]);

    //使用useLocation來對應到網址
    const location = useLocation();

    //這是利用useLocation下去抓資料庫的的資料，params是在改變用來改變網址的，
    //categoryId是自己設定好的變數後端也是categoryId

    useEffect(() => {
        let params = new URLSearchParams(location.search);
        let categoryId = params.get('categoryId');
        let getNews = async () => {
            let response = await axios.get(
                `${API_URL}/news?categoryId=${categoryId}`
            );

            setData(response.data.data);
            setNews(response.data.news);
            setNews2(response.data.news2);
        };
        getNews();
    }, [location]);

    //預設的api這個網頁
    useEffect(() => {
        let getNews = async () => {
            let response = await axios.get(`${API_URL}/news?categoryId=1`);
            setData(response.data.data);
            setNews(response.data.news);
            setNews2(response.data.news2);
        };
        getNews();
    }, []);

    //假資料
    const menuItems = [
        {
            id: 1,
            name: '促銷活動',
        },
        {
            id: 2,
            name: '活動快訊',
        },
        {
            id: 3,
            name: '重要通知',
        },
        {
            id: 4,
            name: '音樂文章',
        },
    ];

    return (
        <>
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
                    {/* 活動快訊那一欄 */}
                    {news.map((activity, index) => {
                        return (
                            <>
                                <div key={uuidv4()} className="col-12 col-md-6">
                                    <Link
                                        to={`/news/${activity.id}?mainId=${activity.categoryId}`}
                                    >
                                        <img
                                            src={require(`../../album/article/${activity.image}`)}
                                            alt="banner"
                                            width="600"
                                            height="100%"
                                            className="img-fluid mt-2"
                                        />
                                        <p className="gary-dark-color h5 News-cursor-pinter mt-3">
                                            {activity.title}
                                        </p>
                                        <div className=" d-flex mt-3 ">
                                            <p className="News-music-article small me-2">
                                                {activity.categoryName}
                                            </p>
                                            <p>
                                                {activity.author} －
                                                {activity.creation_date}
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            </>
                        );
                    })}

                    <div className="col-12 col-md-6 News-blank-art-left mt-2  ">
                        {news2.map((article, index) => {
                            return (
                                <div key={index}>
                                    <Link
                                        to={`/news/${article.article_id}?mainId=${article.category}`}
                                    >
                                        <div className="d-flex">
                                            <img
                                                className="me-4 cursor-pinter"
                                                style={{
                                                    width: '150px',
                                                    height: '100px',
                                                }}
                                                src={require(`../../album/article/${article.image}`)}
                                                alt="art02"
                                            />
                                            <div>
                                                <h5 className=" cursor-pinter">
                                                    {article.title}
                                                </h5>

                                                <div className=" d-flex mt-2 ">
                                                    <small
                                                        className="music-article me-3"
                                                        style={{
                                                            color: '#f2f2f2',
                                                        }}
                                                    >
                                                        {article.name}
                                                    </small>
                                                    <p>
                                                        {article.auther} －
                                                        {article.creation_date}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>

                                    <div className="border-top border-secondary border-1  pt-3 mt-4 mb-3"></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* TODO:底線要有距離，還需要再修 */}

            <div className="container mt-5">
                <div className="row text-center ">
                    {menuItems.map((value, index) => {
                        return (
                            <Link
                                // activeText={activeText}
                                // data={data}
                                className={
                                    activeText === value.id
                                        ? 'col-3 News-word3  News-vector5-Btn-active'
                                        : 'col-3 News-word3  News-vector5-Btn'
                                }
                                key={index}
                                to={`/news?categoryId=${value.id}`}
                                onClick={() => {
                                    setActiveText(value.id);
                                }}
                            >
                                <span className=" News-word3 ">
                                    {value.name}
                                </span>
                            </Link>
                        );
                    })}

                    <NewsActivity
                        //將以下資料設定成變數帶到NewsActivity

                        data={data}
                        activeText={activeText}
                        menuItems={menuItems}
                    />
                </div>
            </div>
        </>
    );
}

export default NEWs;
