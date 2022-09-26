import './index.scss';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_URL } from '../../../utils/config';
import { v4 as uuidv4 } from 'uuid';
// 圖檔
import NewsBanner from '../../../assets/NewsImg/news-banner.jpg';

import arrow from '../../../assets/svg/arrow_back_ios_new.svg';

//分頁
import _ from 'lodash';

//元件
import PaginationBar from '../../../components/PaginationBar/PaginationBar';
import { clearConfigCache } from 'prettier';

//TODO:頁碼還沒有做
//TODO:類別顏色切換，四個選項的顏色切換
//TODO:連結到下一頁的變數

function MusicArticle() {
    const [data, setData] = useState([]);
    const [activeText, setActiveText] = useState(1);

    // 畫面上目前呈現用狀態
    const [articleDisplay, setArticleDisplay] = useState([]);

    //分頁用;
    const [pageNow, setPageNow] = useState(1); // 目前頁號
    const [perPage, setPerPage] = useState(5); // 每頁多少筆資料
    const [pageTotal, setPageTotal] = useState(0); //總共幾頁，在didMount時要決定
    const [pageProducts, setPageProducts] = useState([]);

    const location = useLocation();

    useEffect(() => {
        let params = new URLSearchParams(location.search);
        let categoryList = params.get('categoryList');
        let getMusicArticle = async () => {
            let response = await axios.get(
                `${API_URL}/news/section?categoryList=${categoryList}`
            );
            setData(response.data.data);
            setActiveText(response.data.data[0].categoryId);
            const pageList = _.chunk(response.data.data, perPage);
            console.log(pageList);

            if (pageList.length > 0) {
                setPageTotal(pageList.length);
                //設定到state中;
                setPageProducts(pageList);
            }
        };
        getMusicArticle();
    }, [location]);

    // console.log(data);

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

    //文章分類的標籤切換
    const colorChange = (categoryId) => {
        switch (categoryId) {
            case 1:
                return 'News-music-article small';
            case 2:
                return 'News-music-article-color2 small';

            case 3:
                return 'News-music-article-color3 small';
            case 4:
                return 'News-music-article-color4 small';

            default:
                return '';
        }
    };

    const id = ListItems.filter((v) => v.id === activeText);
    // const Breadcrumbs = id.slice(0);
    // console.log('麵包屑', Breadcrumbs);
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
                <Link
                    data={data}
                    activeText={activeText}
                    to={`/news/section?categoryList=${activeText.id}`}
                >
                    <p className="News-Breadcrumbs">{id[0].name}</p>
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
                    {pageProducts.length > 0 &&
                        pageProducts[pageNow - 1].map((list) => {
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
                                                <p
                                                    className={colorChange(
                                                        Number(list.categoryId)
                                                    )}
                                                >
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
                                            // 直接設定一個變數抓資料庫的id
                                            to={`/news/${list.id}?mainId=${list.categoryId}`}
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

            {/* 頁碼 */}
            <div className="d-flex justify-content-center align-items-center my-5">
                {console.log('thing', pageProducts)}
                {data.length > perPage ? (
                    <PaginationBar
                        pageNow={pageNow}
                        setPageNow={setPageNow}
                        pageTotal={pageTotal}
                    />
                ) : (
                    ''
                )}
                {/* 不會顯示任何東西 */}
            </div>
            {/* 頁碼 end */}
        </>
    );
}

export default MusicArticle;
