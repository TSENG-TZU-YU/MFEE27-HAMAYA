import React, { useEffect, useState } from 'react';
import './index.scss';
import { useOutletContext } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Slider from 'rc-slider';
import _ from 'lodash';

// 項目資料
import { sortByTitle } from '../constants';

// 子頁面
import AdultCourse from './AdultCourse';
import ChildrenCourse from './ChildrenCourse';

// 元件
import SearchBar from '../../../components/SearchBar';
import { sortByTypes } from '../constants';

// 圖檔
import filterIcon from '../../../assets/svg/filter_alt.svg';
import sort from '../../../assets/svg/sort.svg';
import search from '../../../assets/svg/search.svg';
import arrowDown from '../../../assets/ProductsImg/icon/arrow_down.svg';

function ClassList(props) {
    // 課程 Toggled
    const [selectCourse, setSelectCourse] = useOutletContext();

    //  篩選 Toggled
    const [filterToggled, setFilterToggled] = useState(false);
    const toggleFilterTrueFalse = () => {
        if (filterToggled || searchToggled || sortToggled) {
            setSortToggled(false);
            setSearchToggled(false);
        }
        setFilterToggled(!filterToggled);
    };

    // 排序 Toggled
    const [sortToggled, setSortToggled] = useState(false);
    const toggleSortTrueFalse = () => {
        if (sortToggled || filterToggled || searchToggled) {
            setFilterToggled(false);
            setSearchToggled(false);
        }
        setSortToggled(!sortToggled);
    };

    // 搜尋 Toggled
    const [searchToggled, setSearchToggled] = useState(false);
    const toggleSearchToggled = () => {
        if (sortToggled || filterToggled) {
            setSortToggled(false);
            setFilterToggled(false);
        }
        setSearchToggled(!searchToggled);
    };
    // 搜尋
    const [searchWord, setSearchWord] = useState('');

    // 價格
    const [selectedPrice, setSelectedPrice] = useState([2500, 2800]);

    // 樂器
    const [subIns, setSubIns] = useState('');

    // 產品用的資料
    // 1. 從伺服器來的原始資料
    const [products, setProducts] = useState([]);
    // 2. 用於網頁上經過各種處理(排序、搜尋、過濾)後的資料
    const [displayProducts, setDisplayProducts] = useState([]);

    const [sortBy, setSortBy] = useState('');
    // const [filterBy, setFilterBy] = useState('');

    // 設定 page_.chunk
    const [pageProducts, setPageProducts] = useState([]);
    // 分頁
    const [pageNow, setPageNow] = useState(1); // 目前頁號
    const [perPage] = useState(6); // 每頁多少筆資料
    const [pageTotal, setPageTotal] = useState(0); //總共幾頁

    // TODO: 評價塞選

    // 排序：處理方法
    const handleSort = (products, sortBy) => {
        let newProducts = [...products];

        // TODO: 預設用id 大至小
        // if (sortBy === '' && newProducts.length > 0) {
        //     newProducts = [...newProducts].sort((a, b) => a.id - b.id);
        // }

        // 以價格排序-低到高
        if (sortBy === '1') {
            newProducts = [...newProducts].sort((a, b) => a.price - b.price);
        }
        // 以價格排序-高到低
        if (sortBy === '2') {
            newProducts = [...newProducts].sort((a, b) => b.price - a.price);
        }
        // 以時間排序-新到舊
        if (sortBy === '3') {
            newProducts = [...newProducts].sort((a, b) =>
                b.start_date.localeCompare(a.start_date)
            );
        }
        // 以時間排序-新到舊
        if (sortBy === '4') {
            newProducts = [...newProducts].sort((a, b) =>
                a.start_date.localeCompare(b.start_date)
            );
        }

        return newProducts;
    };

    // 搜尋：處理方法
    const handleSearch = (products, searchWord) => {
        let newProducts = [...products];
        if (searchWord.length) {
            newProducts = products.filter((product) => {
                return product.name.includes(searchWord);
            });
            setSubIns('');
        }
        console.log('search', newProducts);
        return newProducts;
    };

    // 樂器:處理方法
    const handleSubIns = (products, subIns) => {
        let newProducts = [...products];

        if (subIns === '1') {
            newProducts = [...newProducts].filter(
                (product) => product.ins_sub_id === 1
            );
        }
        if (subIns === '2') {
            newProducts = [...newProducts].filter(
                (product) => product.ins_sub_id === 2
            );
        }
        if (subIns === '3') {
            newProducts = [...newProducts].filter(
                (product) => product.ins_sub_id === 3
            );
        }
        if (subIns === '4') {
            newProducts = [...newProducts].filter(
                (product) => product.ins_sub_id === 4
            );
        }
        if (subIns === '5') {
            newProducts = [...newProducts].filter(
                (product) => product.ins_sub_id === 5
            );
        }
        if (subIns === '6') {
            newProducts = [...newProducts].filter(
                (product) => product.ins_sub_id === 6
            );
        }
        if (subIns === '7') {
            newProducts = [...newProducts].filter(
                (product) => product.ins_sub_id === 7
            );
        }
        return newProducts;
    };

    // 價格：篩選方法
    const applyFilters = (products, selectedPrice) => {
        let newProducts = [...products];

        // 價格區間
        const minPrice = selectedPrice[0];
        const maxPrice = selectedPrice[1];

        // 價格：篩選方法
        newProducts = newProducts.filter(
            (product) => product.price >= minPrice && product.price <= maxPrice
        );

        // [[page1],[page2]]
        // need chunk to display

        return newProducts;
    };

    // 當過濾表單元素有更動時
    // useEffect(() => {
    //     let newProducts = [];

    //     // 處理排序
    //     newProducts = handleSort(products, sortBy);
    //     setDisplayProducts(newProducts);
    // }, [products, sortBy]);

    // useEffect(() => {
    //     let newProducts = [];

    //     // 處理搜尋
    //     newProducts = handleSearch(products, searchWord);
    //     console.log('search', newProducts);
    //     setDisplayProducts(newProducts);
    // }, [products, searchWord]);

    // useEffect(() => {
    //     let newProducts = [];

    //     // 處理樂器
    //     newProducts = handleSubIns(products, subIns);

    //     //setDisplayProducts(newProducts);
    // }, [products, subIns]);

    useEffect(() => {
        let newProducts = [...products];

        // 處理搜尋
        newProducts = handleSearch(newProducts, searchWord);

        // 處理樂器
        newProducts = handleSubIns(newProducts, subIns);

        // 處理排序
        newProducts = handleSort(newProducts, sortBy);

        // 處理價格區間選項
        newProducts = applyFilters(newProducts, selectedPrice);

        setDisplayProducts(newProducts);
        const newPageProducts = _.chunk(newProducts, perPage);
        setPageTotal(pageProducts.length);
        setPageProducts(newPageProducts);
        console.log('newProductsClass', newProducts);
    }, [products, selectedPrice, sortBy, searchWord, subIns]);

    return (
        <Container>
            <div className="d-flex mt-5 justify-content-between align-items-center">
                {/* 麵包屑 */}
                <nav className="d-flex">
                    <Link to="/">
                        <p className="mb-0">首頁</p>
                    </Link>
                    /
                    <Link to="/class">
                        <p className="mb-0">音樂教育</p>
                    </Link>
                    /
                    <Link to="/class/list">
                        <p className="mb-0 ">
                            {selectCourse ? '成人課程' : '兒童課程'}
                        </p>
                    </Link>
                </nav>
                {/* 麵包屑 end*/}
                {/* 篩選 pc */}
                <div className="d-none d-md-block">
                    <nav className="d-flex  ">
                        <div className="d-flex me-5 justify-content-between align-items-center position-relative">
                            <p className="mb-0">進階篩選</p>
                            <img
                                className="ms-1  "
                                src={filterIcon}
                                alt="filterIcon"
                                onClick={toggleFilterTrueFalse}
                            ></img>
                            <div
                                className={filterToggled ? 'filter-active' : ''}
                            >
                                {filterToggled ? (
                                    <div className=" mx-3 mt-1 ">
                                        <p
                                            className="toggled-p mb-0 "
                                            style={{ color: '#f2f2f2' }}
                                        >
                                            樂器類型
                                        </p>
                                        <select
                                            className="select-class mt-1 border-0"
                                            value={subIns}
                                            onChange={(e) => {
                                                setSubIns(e.target.value);
                                                setSearchWord('');
                                            }}
                                        >
                                            <option value="0">所有樂器</option>
                                            <option value="1">琴鍵樂器</option>
                                            <option value="2">管樂器</option>
                                            <option value="3">弓弦樂器</option>
                                            <option value="4">
                                                吉他/烏克麗麗
                                            </option>
                                            <option value="5">打擊樂器</option>
                                            {selectCourse ? (
                                                ''
                                            ) : (
                                                <>
                                                    <option value="6">
                                                        音樂啟蒙
                                                    </option>{' '}
                                                    <option value="7">
                                                        音樂體驗
                                                    </option>
                                                </>
                                            )}
                                        </select>
                                        <p
                                            className="toggled-p mb-0  mt-1 mb-1"
                                            style={{ color: '#f2f2f2' }}
                                        >
                                            價格
                                        </p>
                                        <div className=" mb-1">
                                            <div className="input-group">
                                                <Slider
                                                    className="slider"
                                                    range
                                                    onChange={(value) =>
                                                        setSelectedPrice(value)
                                                    }
                                                    value={selectedPrice}
                                                    // TODO: 從資料庫讀取最低最高價錢
                                                    min={2600}
                                                    max={2800}
                                                />
                                            </div>
                                        </div>
                                        <p className="accent-light-color small m-0">
                                            NT ${String(selectedPrice[0])} ~{' '}
                                            {String(selectedPrice[1])}
                                        </p>
                                        <p
                                            className=" mt-2 mb-3"
                                            style={{ color: '#f2f2f2' }}
                                        >
                                            {/* TODO: 評價塞選 */}
                                            課程評價
                                        </p>
                                    </div>
                                ) : (
                                    ''
                                )}
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center position-relative">
                            <p className="mb-0">商品排序</p>
                            <img
                                className=" ms-1 "
                                src={sort}
                                alt="Sort"
                                onClick={toggleSortTrueFalse}
                            />
                            <div className={sortToggled ? 'sort-active' : ''}>
                                {sortToggled ? (
                                    <div className="sort-menu-class text-center ">
                                        <ul className="p-2">
                                            {sortByTypes.map((item, index) => {
                                                return (
                                                    <li
                                                        className="py-1"
                                                        key={index}
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
                            <div className=" position-absolute class-search ">
                                <SearchBar
                                    searchWord={searchWord}
                                    setSearchWord={setSearchWord}
                                />
                            </div>
                        ) : (
                            ''
                        )}
                    </nav>
                </div>
            </div>
            {/* 篩選 mob */}
            <div className="d-md-none">
                <div className=" d-flex justify-content-end mob-search">
                    <button className="border-0 " onClick={toggleSearchToggled}>
                        <img className="" src={search} alt="search"></img>
                    </button>
                </div>
                {searchToggled ? (
                    <div className=" mob-class-search ">
                        <SearchBar
                            searchWord={searchWord}
                            setSearchWord={setSearchWord}
                        />
                    </div>
                ) : (
                    ''
                )}

                <div className="mobile-class-filter-nav position-relative">
                    <div className="d-flex justify-content-center align-items-center mt-4">
                        <div className="class-filter-nav-item border-end  ">
                            <p className="class-filter-nav-item-name text-center pe-5 me-1">
                                進階篩選
                            </p>
                            <button
                                className="border-0 class-filter-nav-btn p-2 d-flex align-items-center "
                                onClick={toggleFilterTrueFalse}
                            >
                                篩選條件
                                <img src={arrowDown} alt="arrowDown" />
                            </button>
                        </div>
                        <div className="class-filter-nav-item">
                            <p className="products-filter-nav-item-name text-center pe-5 me-1">
                                商品排序
                            </p>
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
                {/* 進階篩選區塊 */}
                {filterToggled ? (
                    <div className="mobile-products-filter-menu">
                        <div className="p-3">
                            <p className="mb-2 accent-light-color"> 樂器類型</p>
                            <div className="row g-1 ">
                                <select
                                    className="select-class mt-1 border-0"
                                    value={subIns}
                                    onChange={(e) => setSubIns(e.target.value)}
                                >
                                    <option value="0">所有樂器</option>
                                    <option value="1">琴鍵樂器</option>
                                    <option value="2">管樂器</option>
                                    <option value="3">弓弦樂器</option>
                                    <option value="4">吉他/烏克麗麗</option>
                                    <option value="5">打擊樂器</option>
                                    {selectCourse ? (
                                        ''
                                    ) : (
                                        <>
                                            <option value="6">音樂啟蒙</option>{' '}
                                            <option value="7">音樂體驗</option>
                                        </>
                                    )}
                                </select>
                            </div>

                            <p className="mt-4 mb-0 accent-light-color">價格</p>
                            <div className=" mb-1">
                                <div className="input-group">
                                    <Slider
                                        className="slider"
                                        range
                                        onChange={(value) =>
                                            setSelectedPrice(value)
                                        }
                                        value={selectedPrice}
                                        // TODO: 從資料庫讀取最低最高價錢
                                        min={2600}
                                        max={2800}
                                    />
                                </div>
                            </div>
                            <p className="accent-light-color small m-0">
                                NT ${String(selectedPrice[0])} ~{' '}
                                {String(selectedPrice[1])}
                            </p>
                            <p
                                className=" mt-2 mb-3"
                                style={{ color: '#f2f2f2' }}
                            >
                                {/* TODO: 評價塞選 */}
                                課程評價
                            </p>
                        </div>
                    </div>
                ) : (
                    ''
                )}
                {/* 進階篩選區塊 end */}
                {/* 商品排序區塊 */}
                {sortToggled ? (
                    <div className="products-sort-menu">
                        <ul className="p-3">
                            {sortByTypes.map((item, index) => {
                                return (
                                    <li
                                        key={index}
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
                {/* 商品排序區塊 end */}
            </div>
            {/* 篩選 end*/}

            {/* <SliderAntd /> */}

            {/* 課程選擇 toggle */}
            <Row className="text-center mt-md-5 pt-5 mb-5 ">
                <button
                    className={`cursor-pinter col-6 ${
                        selectCourse ? 'vector5-Btn-active' : 'vector5-Btn'
                    }`}
                    onClick={() => {
                        setSelectCourse(true);
                    }}
                >
                    <Link to="/class/list?class=1">
                        <h4
                            className={`${
                                selectCourse
                                    ? 'class-h4-color-active'
                                    : 'class-h4-color'
                            }`}
                            onClick={() => {
                                setSelectCourse(true);
                            }}
                        >
                            成人課程
                        </h4>
                    </Link>
                </button>

                <button
                    className={`cursor-pinter col-6 ${
                        selectCourse ? 'vector5-Btn' : 'vector5-Btn-active'
                    }`}
                    onClick={() => {
                        setSelectCourse(false);
                    }}
                >
                    <Link to="/class/list?class=2">
                        <h4
                            className={`${
                                selectCourse
                                    ? 'class-h4-color'
                                    : 'class-h4-color-active'
                            }`}
                            onClick={() => {
                                setSelectCourse(false);
                            }}
                        >
                            兒童課程
                        </h4>
                    </Link>
                </button>
            </Row>
            {/* 課程選擇 toggle  end*/}
            {/* 課程選擇 頁面*/}
            {selectCourse ? (
                <AdultCourse
                    products={products}
                    // 原始資料 跟 改動資料都要傳入子層
                    setProducts={setProducts}
                    pageProducts={pageProducts}
                    setPageProducts={setPageProducts}
                    setDisplayProducts={setDisplayProducts}
                    perPage={perPage}
                    setPageTotal={setPageTotal}
                    setPageNow={setPageNow}
                    pageTotal={pageTotal}
                    pageNow={pageNow}
                    displayProducts={displayProducts}
                />
            ) : (
                <ChildrenCourse
                    products={products}
                    setProducts={setProducts}
                    pageProducts={pageProducts}
                    setPageProducts={setPageProducts}
                    setDisplayProducts={setDisplayProducts}
                    perPage={perPage}
                    setPageTotal={setPageTotal}
                    setPageNow={setPageNow}
                    pageTotal={pageTotal}
                    pageNow={pageNow}
                    displayProducts={displayProducts}
                />
            )}
            {/* 課程選擇 頁面 end*/}
        </Container>
    );
}

export default ClassList;
