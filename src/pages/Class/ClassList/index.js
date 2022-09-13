import React, { useEffect, useState } from 'react';
import './index.scss';
import { useOutletContext } from 'react-router-dom';
// import { useClass } from '../UseContext';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

// 子頁面
import AdultCourse from './AdultCourse';
import ChildrenCourse from './ChildrenCourse';
import SearchBar from '../../../components/SearchBar';

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
    const toggleFilterTrueFalse = () => setFilterToggled(!filterToggled);

    // 排序 Toggled
    const [sortToggled, setSortToggled] = useState(false);
    const toggleSortTrueFalse = () => setSortToggled(!sortToggled);

    // 搜尋 Toggled
    const [searchToggled, setSearchToggled] = useState(false);
    const toggleSearchToggled = () => {
        if (sortToggled || filterToggled) {
            setSortToggled(false);
            setFilterToggled(false);
        }
        setSearchToggled(!searchToggled);
    };

    // 產品用的資料
    // 1. 從伺服器來的原始資料
    const [products, setProducts] = useState([]);
    // 2. 用於網頁上經過各種處理(排序、搜尋、過濾)後的資料
    const [displayProducts, setDisplayProducts] = useState([]);
    console.log('displayProducts', displayProducts);
    const [sortBy, setSortBy] = useState('');
    console.log('sortBy', sortBy);

    const handleSort = (products, sortBy) => {
        let newProducts = [...products];

        // 預設用id 小至大
        if (sortBy === '' && newProducts.length > 0) {
            newProducts = [...newProducts].sort((a, b) => a.id - b.id);
        }

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
            newProducts = [...newProducts].sort(
                (a, b) => a.start_date - b.start_date
            );
        }
        // 以時間排序-新到舊
        if (sortBy === '4') {
            newProducts = [...newProducts].sort(
                (a, b) => b.start_date - a.start_date
            );
        }

        console.log(newProducts, products, sortBy);

        return newProducts;
    };

    useEffect(() => {
        let newProducts = [];

        // 處理排序
        newProducts = handleSort(products, sortBy);
        setDisplayProducts(newProducts);
    }, [products, sortBy]);

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
                                    <div className=" ms-3 mt-1 ">
                                        <p
                                            className="toggled-p mb-0 "
                                            style={{ color: '#f2f2f2' }}
                                        >
                                            樂器類型
                                        </p>
                                        <select className="select-class mt-1 border-0">
                                            <option value="1">所有樂器</option>
                                            <option value="2">琴鍵樂器</option>
                                            <option value="3">管樂器</option>
                                            <option value="4">弓弦樂器</option>
                                            <option value="5">
                                                吉他/烏克麗麗
                                            </option>
                                            <option value="6">打擊樂器</option>
                                            {selectCourse ? (
                                                ''
                                            ) : (
                                                <>
                                                    <option value="6">
                                                        音樂啟蒙
                                                    </option>{' '}
                                                    <option value="6">
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

                                        <button className="filter-btn-class mt-3 mb-3">
                                            篩選
                                        </button>
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
                            ></img>
                            <div className={sortToggled ? 'sort-active' : ''}>
                                {sortToggled ? (
                                    <div className="sort-menu-class text-center">
                                        <ul className="p-2">
                                            <li onClick={(e) => setSortBy('1')}>
                                                價格：低到高
                                            </li>
                                            <li onClick={(e) => setSortBy('2')}>
                                                價格：高到低
                                            </li>
                                            <li onClick={(e) => setSortBy('3')}>
                                                上架：新到舊
                                            </li>
                                            <li onClick={(e) => setSortBy('4')}>
                                                上架：舊到新
                                            </li>
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
                                <SearchBar />
                            </div>
                        ) : (
                            ''
                        )}
                    </nav>
                </div>
            </div>
            {/* 篩選 mob */}
            <div className="d-md-none">
                <div className="mobile-class-filter-nav position-relative">
                    <div className="d-flex justify-content-center align-items-center  ">
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
                                排序條件
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
                                <select className="select-class mt-1 border-0">
                                    <option value="1">所有樂器</option>
                                    <option value="2">琴鍵樂器</option>
                                    <option value="3">管樂器</option>
                                    <option value="4">弓弦樂器</option>
                                    <option value="5">吉他/烏克麗麗</option>
                                    <option value="6">打擊樂器</option>
                                </select>
                            </div>

                            <p className="mt-4 mb-0 accent-light-color">價格</p>
                            <input
                                className="form-range"
                                type="range"
                                max="100"
                                min="0"
                            />
                            <p className="accent-light-color m-0">
                                NT$0 ~ 190,000
                            </p>
                            <button className="products-btn-border-none products-filter-btn mt-3 w-100">
                                篩選
                            </button>
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
                            <li>價格：低到高</li>
                            <li>價格：高到低</li>
                            <li>上架：新到舊</li>
                            <li>上架：舊到新</li>
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
                    products={displayProducts}
                    // 原始資料 跟 改動資料都要傳入子層
                    setProducts={setProducts}
                    setDisplayProducts={setDisplayProducts}
                />
            ) : (
                <ChildrenCourse
                    products={displayProducts}
                    setProducts={setProducts}
                    setDisplayProducts={setDisplayProducts}
                />
            )}
            {/* 課程選擇 頁面 end*/}
        </Container>
    );
}

export default ClassList;
