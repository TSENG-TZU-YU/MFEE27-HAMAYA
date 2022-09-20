import React, { useEffect, useState } from 'react';
import './index.scss';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../utils/config';

// 圖檔
import NewsBanner from '../../assets/NewsImg/news-banner.jpg';
import NewsImg from '../../assets/NewsImg/news-img.png';
import NewsImg2 from '../../assets/NewsImg/news-img2.png';
import NewsImg3 from '../../assets/NewsImg/news-img3.png';
import NewsImg4 from '../../assets/NewsImg/news-img4.png';

import NewsActivity from './MusicArticle/components/NewsActivity';
//TODO:類別顏色切換
//TODO:上面一塊尚未拉資料庫
//設定變數換網址
function NEWs(props) {
    //只是在設定avtive的狀態
    const [activeText, setActiveText] = useState(1);
    const [data, setData] = useState([]);

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
        };
        getNews();
    }, [location]);

    //預設的api這個網頁
    useEffect(() => {
        let getNews = async () => {
            let response = await axios.get(`${API_URL}/news`);
            setData(response.data.data);
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
                                    <p className="ms-3">瓦力 － 2022/08/20</p>
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
                                    <p className="ms-3">邢子青 － 2022/08/20</p>
                                </div>
                            </span>
                        </div>
                        <div className="border-top border-secondary border-1 mt-4 mb-3"></div>
                    </div>
                </div>
            </div>

            {/* TODO:底線要有距離，還需要再修 */}

            <div className="container">
                <div className="row text-center ">
                    {menuItems.map((value, index) => {
                        return (
                            <Link
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
