import './index.scss';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_URL } from '../../../utils/config';
import { v4 as uuidv4 } from 'uuid';
// 圖檔
import NewsBanner from '../../../assets/NewsImg/news-banner.jpg';
import arrow from '../../../assets/svg/arrow_back_ios_new.svg';
import { TbMusicOff } from 'react-icons/tb';
import sort from '../../../assets/svg/sort.svg';
import search from '../../../assets/svg/search.svg';
import arrowDown from '../../../assets/ProductsImg/icon/arrow_down.svg';

//動畫效果
import AOS from 'aos';
import 'aos/dist/aos.css';
//分頁
import _ from 'lodash';

// 項目資料
import { sortByTitle } from '../constants';
//元件
import PaginationBar from '../../../components/PaginationBar/PaginationBar';
import SearchBar from '../../../components/SearchBar';
import { sortByTypes } from '../constants';

function MusicArticle(props) {
    AOS.init();
    const [data, setData] = useState([]);
    const [activeText, setActiveText] = useState(1);

    //分頁用;
    const [pageNow, setPageNow] = useState(1); // 目前頁號
    const [perPage, setPerPage] = useState(5); // 每頁多少筆資料
    const [pageTotal, setPageTotal] = useState(0); //總共幾頁，在didMount時要決定
    const [pageProducts, setPageProducts] = useState([]);

    //  用於網頁上經過各種處理(排序、搜尋、過濾)後的資料
    const [displayData, setDisplayData] = useState([]);
    const [sortBy, setSortBy] = useState('');

    // 排序 Toggled
    const [sortToggled, setSortToggled] = useState(false);
    const toggleSortTrueFalse = (e) => {
        if (sortToggled || searchToggled) {
            setSearchToggled(false);
        }
        e.stopPropagation();
        setSortToggled(!sortToggled);
    };

    // const [filterBy, setFilterBy] = useState('');
    // 排序：處理方法
    const handleSort = (data, sortBy) => {
        let newData = [...data];

        // 以時間排序-新到舊
        if (sortBy === '1') {
            newData = [...newData].sort((a, b) =>
                b.creation_date.localeCompare(a.creation_date)
            );
        }
        // 以時間排序-新到舊
        if (sortBy === '2') {
            newData = [...newData].sort((a, b) =>
                a.creation_date.localeCompare(b.creation_date)
            );
        }

        return newData;
    };

    // 搜尋 Toggled
    const [searchToggled, setSearchToggled] = useState(false);
    const toggleSearchToggled = (e) => {
        if (sortToggled) {
            setSortToggled(false);
        }
        e.stopPropagation();
        setSearchToggled(!searchToggled);
    };

    // 搜尋
    const [searchWord, setSearchWord] = useState('');
    // 搜尋：處理方法
    const handleSearch = (data, searchWord) => {
        let newData = [...data];
        if (searchWord.length) {
            newData = data.filter((data) => {
                return data.title.includes(searchWord);
            });
        }

        return newData;
    };

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
        window.scrollTo(0, 0);
    }, [location]);

    // 假資料對應資料庫的文章分類
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

    // 當過濾表單元素有更動時
    useEffect(() => {
        let newData = [...data];

        // 處理搜尋
        newData = handleSearch(newData, searchWord);

        // 處理排序
        newData = handleSort(newData, sortBy);

        // 篩選後 PageNow = 1 map 才有作用
        setPageNow(1);
        setDisplayData(newData);
        const newPageData = _.chunk(newData, perPage);
        setPageTotal(newPageData.length);
        setPageProducts(newPageData);
    }, [data, sortBy, searchWord]);

    //讓麵包屑也跟切換文章種類
    const id = ListItems.filter((v) => v.id === activeText);

    return (
        <div
            onClick={(e) => {
                e.preventDefault();
                setSortToggled(false);

                setSearchToggled(false);
            }}
        >
            <img src={NewsBanner} alt="banner" className="img-fluid" />
            <div className="container d-flex  justify-content-between align-items-center  ">
                {/* 麵包屑 end */}
                <div className="container d-flex list-blank ">
                    <Link to="/">
                        <p className="News-Breadcrumbs text-nowrap">首頁</p>
                    </Link>
                    &nbsp;/&nbsp;
                    <Link to="/news?categoryId=1">
                        <p className="News-Breadcrumbs text-nowrap">最新消息</p>
                    </Link>
                    &nbsp;/&nbsp;
                    <Link
                        data={data}
                        activeText={activeText}
                        to={`/news/section?categoryList=${activeText.id}`}
                    >
                        <p className="News-Breadcrumbs text-nowrap">
                            {id[0].name}
                        </p>
                    </Link>
                    {/* <SearchBar /> */}
                    {/* 麵包屑 */}
                </div>
                {/* 排序搜尋 pc */}
                <div className="d-flex   d-none d-md-block ">
                    <div className="d-flex me-5 justify-content-between align-items-center position-relative">
                        <div className="d-flex justify-content-between align-items-center position-relative">
                            <p
                                className="mb-0 cursor-pinter News-Breadcrumbs text-nowrap "
                                onClick={toggleSortTrueFalse}
                            >
                                文章排序
                            </p>
                            <img
                                className=" ms-1 cursor-pinter"
                                src={sort}
                                alt="Sort"
                            />
                            <div
                                className={sortToggled ? 'sort-active' : ''}
                                onClick={(e) => e.stopPropagation()}
                            >
                                {sortToggled ? (
                                    <div className="sort-menu-class text-center ">
                                        <ul className="p-2">
                                            {sortByTypes.map((item) => {
                                                return (
                                                    <li
                                                        key={uuidv4()}
                                                        className="py-1"
                                                        onClick={(e) => {
                                                            setSortBy(item.id);
                                                            setSortToggled(
                                                                false
                                                            );
                                                        }}
                                                    >
                                                        {item.name}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                ) : (
                                    ''
                                )}
                            </div>
                        </div>
                        <button
                            className="border-0 position-relative "
                            onClick={toggleSearchToggled}
                        >
                            <img
                                className="ms-5 "
                                src={search}
                                alt="search"
                            ></img>
                        </button>
                        {searchToggled ? (
                            <div
                                className=" position-absolute article-Search-box "
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/*TODO: rwd 搜尋的詞會不見 但條件還在 */}
                                <SearchBar
                                    searchWord={searchWord}
                                    setSearchWord={setSearchWord}
                                />
                            </div>
                        ) : (
                            <div
                                className=" position-absolute class-search "
                                onClick={(e) => e.stopPropagation()}
                                style={{ display: 'none' }}
                            >
                                <SearchBar
                                    searchWord={searchWord}
                                    setSearchWord={setSearchWord}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* 篩選 mob */}
            <div className="d-md-none">
                <div className="mob-search">
                    <button className="border-0" onClick={toggleSearchToggled}>
                        <img className=" " src={search} alt="search"></img>
                    </button>
                </div>

                {searchToggled ? (
                    <div
                        className="mob-class-search text-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <SearchBar
                            searchWord={searchWord}
                            setSearchWord={setSearchWord}
                        />
                    </div>
                ) : (
                    <div
                        className=" mob-class-search "
                        onClick={(e) => e.stopPropagation()}
                        style={{ display: 'none' }}
                    >
                        <SearchBar
                            searchWord={searchWord}
                            setSearchWord={setSearchWord}
                        />
                    </div>
                )}

                {/* 文章排序區塊 */}
                <div className="mobile-class-filter-nav position-relative">
                    <div className="d-flex justify-content-center align-items-center ">
                        <div className="class-filter-nav-item border-end  ">
                            <button className="border-0 class-filter p-2 d-flex align-items-center ">
                                文章排序
                            </button>
                        </div>
                        <div className="class-filter-nav-item">
                            <button
                                className="border-0 class-filter-nav-btn p-2 d-flex align-items-center"
                                onClick={toggleSortTrueFalse}
                            >
                                {sortByTitle(sortBy)}
                                <img src={arrowDown} alt="arrowDown" />
                            </button>
                        </div>
                    </div>
                </div>

                {sortToggled ? (
                    <div
                        className="products-sort-menu"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <ul className="p-3">
                            {sortByTypes.map((item) => {
                                return (
                                    <li
                                        key={uuidv4()}
                                        onClick={(e) => {
                                            setSortBy(item.id);
                                            setSortToggled(false);
                                        }}
                                    >
                                        {item.name}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ) : (
                    ''
                )}
            </div>
            <div className="container">
                <div className="row text-center mt-5">
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
            {/* 文章列表管理 */}
            <div className="container">
                {pageProducts.length > 0 &&
                    pageProducts[pageNow - 1].map((list) => {
                        return (
                            <>
                                <div
                                    key={list.id}
                                    className="row mt-5 d-flex"
                                    data-aos="fade-up"
                                    data-aos-duration="2000"
                                    data-aos-offset="60"
                                >
                                    <div className="col-12 col-md-5 ">
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
                                </div>
                            </>
                        );
                    })}

                {/* 文章選擇 toggle  end*/}
                {pageProducts.length === 0 ? (
                    <div style={{ height: '50vh' }}>
                        <h4 className="mt-5 d-flex w-100 h-100 main-gary-light-color text-center justify-content-center align-items-center">
                            <TbMusicOff
                                className="me-2"
                                style={{
                                    width: '30px',
                                    height: '30px',
                                }}
                            />
                            無符合條件文章
                        </h4>
                    </div>
                ) : (
                    ''
                )}
            </div>
            {/* 頁碼 */}
            <div className="d-flex justify-content-center align-items-center my-5">
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
        </div>
    );
}

export default MusicArticle;
