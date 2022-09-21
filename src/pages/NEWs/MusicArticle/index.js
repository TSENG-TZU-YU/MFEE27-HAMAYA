import './index.scss';
import { Link, useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_URL } from '../../../utils/config';
import { v4 as uuidv4 } from 'uuid';
// 圖檔
import NewsBanner from '../../../assets/NewsImg/news-banner.jpg';

import arrow from '../../../assets/svg/arrow_back_ios_new.svg';

//TODO:頁碼還沒有做
//TODO:類別顏色切換，四個選項的顏色切換
//TODO:連結到下一頁的變數

function MusicArticle() {
    const [data, setData] = useState([]);
    const [activeText, setActiveText] = useState(1);
    const [SmallArticles, setSmallArticles] = useState([]);
    const articleId = useParams();
    const location = useLocation();

    // useEffect(() => {
    //     let params = new URLSearchParams(location.search);
    //     let categoryList = params.get('categoryList');
    //     if (categoryList !== null) {
    //         setActiveText(categoryList);
    //     }
    //     console.log(categoryList);
    // }, []);

    useEffect(() => {
        let params = new URLSearchParams(location.search);
        let categoryList = params.get('categoryList');
        let getMusicArticle = async () => {
            let response = await axios.get(
                `${API_URL}/news/section?categoryList=${categoryList}`
            );
            setData(response.data.data);
            setSmallArticles(response.data.SmallArticles);
            setActiveText(response.data.data[0].categoryId);
        };
        getMusicArticle();
    }, [location]);

    // console.log(data);
    // console.log(SmallArticles);

    // 假資料;
    const ListItems = [
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

    // console.log(activeText);
    return (
        <>
            <img src={NewsBanner} alt="banner" className="img-fluid" />
            {/* 麵包屑 end*/}
            <div className="container d-flex mt-5 ">
                <Link to="/">
                    <p className="News-Breadcrumbs">首頁</p>
                </Link>
                /
                <Link to="/news">
                    <p className="News-Breadcrumbs">最新消息</p>
                </Link>
                /
                <Link to="/class">
                    <p className="News-Breadcrumbs">促銷活動</p>
                </Link>
            </div>
            {/* 麵包屑 */}
            <div className="container">
                <div className="row text-center ">
                    {ListItems.map((value) => {
                        return (
                            <Link
                                className={
                                    activeText === value.id
                                        ? 'col-3 News-word3  News-vector5-Btn-active'
                                        : 'col-3 News-word3  News-vector5-Btn'
                                }
                                key={uuidv4()}
                                to={`/news/section?categoryList=${value.id}`}
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
                </div>
            </div>

            <div className="container">
                <div className="row">
                    {data.map((list) => {
                        return (
                            <>
                                <div
                                    key={uuidv4()}
                                    className="col-12 col-md-5 d-flex mt-4"
                                >
                                    <img
                                        src={require(`../../../album/article/${list.image}`)}
                                        alt="list-images"
                                        className="article-list-images mobile-list-images"
                                    />
                                </div>

                                <div className="col-12 col-md-7 mt-4">
                                    <div className=" gary-dark-color h4 list-cursor-pinter ">
                                        {list.title}
                                        <div className="d-flex mt-2 ">
                                            <p className=" list-music-article2 small  ">
                                                {list.categoryName}
                                            </p>
                                            <p className="ms-2 mt-1 ">
                                                {list.author} －
                                                {list.creation_date}
                                            </p>
                                        </div>
                                    </div>
                                    <p className=" article-list-content ">
                                        {list.content}...
                                    </p>
                                </div>
                                <div className="container list-more-art ">
                                    <Link
                                        // 直接設定一個變數抓資料庫的id不用再一層一層抓
                                        to={`/news/${list.id}`}
                                        className="mb-0 me-1 list-cursor-pinter"
                                    >
                                        閱讀全文
                                    </Link>
                                    <img
                                        className="list-arrow"
                                        style={{
                                            width: '15px',
                                            height: '15px',
                                        }}
                                        src={arrow}
                                        alt="arrow"
                                    />
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {SmallArticles.map((list2) => {
                        return (
                            <>
                                <div
                                    key={uuidv4()}
                                    className="col-md col-sm-12  d-flex mt-3"
                                >
                                    <img
                                        src={require(`../../../album/article/${list2.image}`)}
                                        alt="art02"
                                        className="article-list-images2 mobile-images2"
                                    />
                                </div>
                                <div className="col-md-9  col-sm-12  mt-3">
                                    <span className="ms-2 gary-dark-color h4 list-cursor-pinter ">
                                        {list2.title}
                                        <div className="d-flex mt-2 ">
                                            <p className="ms-2 list-music-article2 small  ">
                                                {list2.categoryName}
                                            </p>
                                            <p className="ms-2 mt-1 ">
                                                {list2.author} －
                                                {list2.creation_date}
                                            </p>
                                        </div>
                                    </span>
                                    <p className=" ms-2 article-list-content ">
                                        {list2.content}...
                                    </p>
                                </div>
                                <div className="container list-more-art ">
                                    <Link
                                        // data={data}
                                        // activeText={activeText}
                                        to={`/news/${list2.id}`}
                                        className="mb-0 me-1 list-cursor-pinter"
                                        data={data}
                                        SmallArticles={list2.categoryId}
                                    >
                                        閱讀全文
                                    </Link>
                                    <img
                                        className="list-arrow"
                                        style={{
                                            width: '15px',
                                            height: '15px',
                                        }}
                                        src={arrow}
                                        alt="arrow"
                                    />
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>

            {/* 頁碼 */}
            <div className="d-flex justify-content-center align-items-center">
                <ul className="articles-pages d-flex">
                    <li>&#x3C;</li>
                    <li className="articles-page-active">1</li>&ensp;
                    <li>2</li>&ensp;
                    <li>3</li>&ensp;
                    <li>4</li>
                    <li>&#x3E;</li>
                </ul>
            </div>
            {/* 頁碼 end */}
        </>
    );
}

export default MusicArticle;
