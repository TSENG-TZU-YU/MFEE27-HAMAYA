import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// 套件
import { Container } from 'react-bootstrap';

// 樣式
import './index.scss';

// 元件
import ProductCompare from './ProductCompare';

// 元件 FilterNav
import SearchBar from '../../components/SearchBar';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';

// 元件 ProductsItem
import Favorite from '../../components/Favorite';

// 圖檔
import banner from '../../assets/ProductsImg/banner.png';
import compareBtn from '../../assets/ProductsImg/icon/compare_btn.svg';

// 圖檔 ProductsItem
import product from '../../assets/ProductsImg/product.png';
import cartCheck from '../../assets/ProductsImg/icon/shopping_cart_check.svg';
import compare from '../../assets/ProductsImg/icon/compare.svg';

// 圖檔 FilterNav
import filterIcon from '../../assets/ProductsImg/icon/filter_alt.svg';
import sort from '../../assets/ProductsImg/icon/sort.svg';
import search from '../../assets/ProductsImg/icon/search.svg';

// 圖檔 MobileFilterNav
import arrowDown from '../../assets/ProductsImg/icon/arrow_down.svg';

function Products() {
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);

    // 所有商品
    useEffect(() => {
        console.log('Products', 'useEffect []');
        console.log('useEffect[]', data);
        let getProducts = async () => {
            let response = await axios.get(
                `http://localhost:3001/api/products`
            );
            setData(response.data);
            console.log('useEffect[] after set', data);
        };
        getProducts();
    }, []);

    // Toggled
    const [productCompare, setProductCompare] = useState(false);
    const toggleProductCompare = () => setProductCompare(!productCompare);

    // 桌機 篩選 Toggled
    const [filterToggled, setFilterToggled] = useState(false);
    const [sortToggled, setSortToggled] = useState(false);
    const [searchToggled, setSearchToggled] = useState(false);

    // 桌機 篩選 Toggled function
    const toggleFilterToggled = () => {
        if (sortToggled || searchToggled) {
            setSortToggled(false);
            setSearchToggled(false);
        }
        setFilterToggled(!filterToggled);
    };

    // 桌機 排序 Toggled function
    const toggleSortToggled = () => {
        if (filterToggled || searchToggled) {
            setFilterToggled(false);
            setSearchToggled(false);
        }
        setSortToggled(!sortToggled);
    };

    // 桌機 搜尋 Toggled function
    const toggleSearchToggled = () => {
        if (sortToggled || filterToggled) {
            setSortToggled(false);
            setFilterToggled(false);
        }
        setSearchToggled(!searchToggled);
    };

    // 手機 Toggled
    const [categoryToggled, setCategoryToggled] = useState(false);

    // 手機 類別 Toggled function
    const toggleCategoryToggled = () => {
        if (filterToggled || sortToggled) {
            setFilterToggled(false);
            setSortToggled(false);
        }
        setCategoryToggled(!categoryToggled);
    };

    return (
        <>
            <img className="img-fluid" src={banner} alt="banner" />

            {/* 主要內容 */}
            <Container>
                {/* 桌機 篩選 */}
                <div className="d-none d-md-block">
                    <div className="d-flex flex-row-reverse">
                        <div className="col-10 d-flex justify-content-between align-items-center">
                            {/* 麵包屑 */}
                            <BreadCrumb />
                            {/* 麵包屑 end */}
                            {/* <ul className="breadcrumb products-breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/">首頁</Link>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <Link to="/products">樂器商城</Link>
                                    </li>
                                    <Link to="/" className="breadcrumb-item">
                                        琴鍵樂器
                                    </Link>
                                </ul> */}
                            {/* 麵包屑 end */}

                            {/* 進階篩選 */}
                            <div className="filter-nav d-flex position-relative">
                                <button
                                    className="products-btn-border-none main-color me-4 p-0 d-flex"
                                    onClick={toggleFilterToggled}
                                >
                                    進階篩選
                                    <img
                                        className="products-icon-img ms-1"
                                        src={filterIcon}
                                        alt="filterIcon"
                                    ></img>
                                </button>

                                {/* 進階篩選區塊 */}
                                {filterToggled ? (
                                    <div className="products-filter-menu position-absolute">
                                        <div className="p-3">
                                            <p className="mb-0 accent-light-color">
                                                品牌
                                            </p>
                                            <div className="form-check products-form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    defaultValue
                                                />
                                                <label className="form-check-label">
                                                    所有品牌
                                                </label>
                                            </div>
                                            <div className="form-check products-form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    defaultValue
                                                />
                                                <label className="form-check-label">
                                                    CASIO
                                                </label>
                                            </div>
                                            <div className="form-check products-form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    defaultValue
                                                />
                                                <label className="form-check-label">
                                                    KORG
                                                </label>
                                            </div>
                                            <div className="form-check products-form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    defaultValue
                                                />
                                                <label className="form-check-label">
                                                    ROLAND
                                                </label>
                                            </div>
                                            <div className="form-check products-form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    defaultValue
                                                />
                                                <label className="form-check-label">
                                                    YAMAHA
                                                </label>
                                            </div>
                                            <p className="mt-4 mb-0 accent-light-color">
                                                顏色
                                            </p>
                                            <div className="d-flex mt-2">
                                                <div className="cursor-pointer products-filter-color-box products-filter-no-color-box products-filter-color-box-active"></div>
                                                <div className="cursor-pointer products-filter-color-box color"></div>
                                            </div>
                                            <p className="mt-4 mb-0 accent-light-color">
                                                價格
                                            </p>
                                            <input
                                                className="form-range"
                                                type="range"
                                                max="100"
                                                min="0"
                                            />
                                            <p className="accent-light-color small m-0">
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

                                <button
                                    className="products-btn-border-none main-color me-4 position-relative p-0 d-flex"
                                    onClick={toggleSortToggled}
                                >
                                    商品排序
                                    <img
                                        className="products-icon-img ms-1"
                                        src={sort}
                                        alt="sort"
                                    ></img>
                                </button>
                                {/* 商品排序區塊 */}
                                {sortToggled ? (
                                    <div className="products-sort-menu position-absolute">
                                        <ul className="p-2">
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
                                <button
                                    className="products-btn-border-none"
                                    onClick={toggleSearchToggled}
                                >
                                    <img
                                        className="products-icon-img ms-1"
                                        src={search}
                                        alt="search"
                                    ></img>
                                </button>
                                {searchToggled ? (
                                    <div className="products-Search-box position-absolute">
                                        <SearchBar />
                                    </div>
                                ) : (
                                    ''
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                {/* 桌機 end */}

                {/* 手機 篩選 */}
                <div className="d-md-none">
                    <div className="d-flex justify-content-between align-items-center">
                        {/* 麵包屑 */}
                        <ul className="breadcrumb products-breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="/">首頁</a>
                            </li>
                            <li className="breadcrumb-item">
                                <a href="/">樂器商城 </a>
                            </li>
                            <li className="breadcrumb-item">琴鍵樂器</li>
                        </ul>
                        {/* 麵包屑 end */}

                        {/* 搜尋 */}
                        <button
                            className="products-btn-border-none"
                            onClick={toggleSearchToggled}
                        >
                            <img
                                className="products-icon-img ms-1 mb-1"
                                src={search}
                                alt="search"
                            ></img>
                        </button>
                    </div>
                    {searchToggled ? (
                        <div className="products-Search-box">
                            <SearchBar />
                        </div>
                    ) : (
                        ''
                    )}
                    {/* 搜尋 end */}

                    {/* 篩選按鈕 */}
                    <div className="mobile-products-filter-nav position-relative">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="products-filter-nav-item border-end">
                                <p className="products-filter-nav-item-name">
                                    商品分類
                                </p>
                                <button
                                    className="products-btn-border-none products-filter-nav-btn p-2 d-flex align-items-center"
                                    onClick={toggleCategoryToggled}
                                >
                                    琴鍵樂器
                                    <img src={arrowDown} alt="arrowDown" />
                                </button>
                            </div>
                            <div className="products-filter-nav-item border-end">
                                <p className="products-filter-nav-item-name">
                                    進階篩選
                                </p>
                                <button
                                    className="products-btn-border-none products-filter-nav-btn p-2 d-flex align-items-center"
                                    onClick={toggleFilterToggled}
                                >
                                    篩選條件
                                    <img src={arrowDown} alt="arrowDown" />
                                </button>
                            </div>
                            <div className="products-filter-nav-item">
                                <p className="products-filter-nav-item-name">
                                    商品排序
                                </p>
                                <button
                                    className="products-btn-border-none products-filter-nav-btn p-2 d-flex align-items-center"
                                    onClick={toggleSortToggled}
                                >
                                    排序條件
                                    <img src={arrowDown} alt="arrowDown" />
                                </button>
                            </div>
                        </div>
                        {/* 篩選按鈕 end */}

                        {/* 商品類別選項 */}
                        {categoryToggled ? (
                            <select
                                className="products-filter-category-select products-filter-category-scroll-style"
                                size="2"
                            >
                                <option value="1">最新商品</option>
                                <option value="2">琴鍵樂器</option>
                                <option value="3">電子鋼琴</option>
                                <option value="4">數位鋼琴</option>
                                <option value="5">管樂器</option>
                                <option value="6">長笛</option>
                                <option value="7">短笛</option>
                                <option value="8">薩克斯風</option>
                                <option value="9">弓弦樂器</option>
                                <option value="10">小提琴</option>
                                <option value="11">中提琴</option>
                                <option value="12">大提琴</option>
                                <option value="13">吉他/烏克麗麗</option>
                                <option value="14">木吉他</option>
                                <option value="15">電吉他</option>
                                <option value="16">貝斯</option>
                                <option value="17">烏克麗麗</option>
                                <option value="18">打擊樂器</option>
                                <option value="19">爵士鼓</option>
                                <option value="20">電子鼓</option>
                                <option value="21">木箱鼓</option>
                                <option value="22">配件</option>
                                <option value="23">琴鍵樂器</option>
                                <option value="24">管樂器</option>
                                <option value="25">弓弦樂器</option>
                                <option value="26">吉他</option>
                                <option value="27">打擊樂器</option>
                            </select>
                        ) : (
                            ''
                        )}
                        {/* 商品類別選項 end */}

                        {/* 進階篩選區塊 */}
                        {filterToggled ? (
                            <div className="mobile-products-filter-menu">
                                <div className="p-3">
                                    <p className="mb-2 accent-light-color">
                                        品牌
                                    </p>
                                    <div className="row g-1 ">
                                        <div className="col-6 form-check products-form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                defaultValue
                                            />
                                            <label className="form-check-label">
                                                所有品牌
                                            </label>
                                        </div>
                                        <div className="col-6 form-check products-form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                defaultValue
                                            />
                                            <label className="form-check-label">
                                                CASIO
                                            </label>
                                        </div>
                                        <div className="col-6 form-check products-form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                defaultValue
                                            />
                                            <label className="form-check-label">
                                                KORG
                                            </label>
                                        </div>
                                        <div className="col-6 form-check products-form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                defaultValue
                                            />
                                            <label className="form-check-label">
                                                ROLAND
                                            </label>
                                        </div>
                                        <div className="col-6 form-check products-form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                defaultValue
                                            />
                                            <label className="form-check-label">
                                                YAMAHA
                                            </label>
                                        </div>
                                    </div>
                                    <p className="mt-4 mb-0 accent-light-color">
                                        顏色
                                    </p>
                                    <div className="d-flex mt-2">
                                        <div className="cursor-pointer products-filter-color-box products-filter-no-color-box products-filter-color-box-active"></div>
                                        <div className="cursor-pointer products-filter-color-box color"></div>
                                    </div>
                                    <p className="mt-4 mb-0 accent-light-color">
                                        價格
                                    </p>
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
                    {/* 篩選 end */}
                </div>
                {/* 手機 end */}

                <div className="row">
                    {/* 桌機 商品類別選項 */}
                    <div className="col-2 d-none d-md-block">
                        <ul className="products-category-navbar">
                            <li className="products-main-category">最新商品</li>
                            <li className="products-main-category products-main-category-active">
                                琴鍵樂器
                            </li>
                            <ul className="products-sub-category">
                                <li>直立/平台鋼琴</li>
                                <li>電子鋼琴</li>
                                <li>數位鋼琴</li>
                            </ul>
                            <li className="products-main-category">管樂器</li>
                            <ul className="products-sub-category">
                                <li>長笛</li>
                                <li>短笛</li>
                                <li>薩克斯風</li>
                            </ul>
                            <li className="products-main-category">弓弦樂器</li>
                            <ul className="products-sub-category">
                                <li>小提琴</li>
                                <li>中提琴</li>
                                <li>大提琴</li>
                            </ul>
                            <li className="products-main-category">
                                吉他/烏克麗麗
                            </li>
                            <ul className="products-sub-category">
                                <li>木吉他</li>
                                <li>電吉他</li>
                                <li>貝斯</li>
                                <li>烏克麗麗</li>
                            </ul>
                            <li className="products-main-category">打擊樂器</li>
                            <ul className="products-sub-category">
                                <li>爵士鼓</li>
                                <li>電子鼓</li>
                                <li>木箱鼓</li>
                            </ul>
                            <li className="products-main-category">配件</li>
                            <ul className="products-sub-category">
                                <li>琴鍵樂器</li>
                                <li>管樂器</li>
                                <li>弓弦樂器</li>
                                <li>吉他</li>
                                <li>打擊樂器</li>
                            </ul>
                        </ul>
                    </div>
                    {/* 桌機 商品類別選項 end */}

                    <div className="col-12 col-md-10">
                        {/* 商品列 */}
                        <div className=" row row-cols-2 row-cols-md-3 row-cols-xl-4">
                            {error && <div>{error}</div>}
                            {data.map((product) => {
                                return (
                                    <div
                                        className="col product"
                                        key={product.id}
                                    >
                                        <div className="position-relative">
                                            {/* 商品照片 */}
                                            <Link
                                                to=":productId"
                                                className="product-img d-block"
                                            >
                                                <div className="product-img-mask position-absolute"></div>
                                                <img
                                                    src={require(`../../album/products/${product.image}`)}
                                                    className="card-img-top"
                                                    alt="product"
                                                />
                                            </Link>
                                            <div className="product-like position-absolute top-0 end-0">
                                                <Favorite />
                                            </div>
                                            <div className="product-compare small d-flex justify-content-center align-items-center position-absolute top-0 start-0 m-1">
                                                <img
                                                    src={compare}
                                                    alt="compare"
                                                    className="product-icon me-1"
                                                />
                                                比較
                                            </div>
                                            <button className="btn btn-primary w-100 text-canter product-cart-check-btn position-absolute bottom-0 end-0">
                                                <img
                                                    src={cartCheck}
                                                    alt="cartCheck"
                                                    className="product-icon me-1"
                                                />
                                                加入購物車
                                            </button>
                                        </div>
                                        <div className="product-body">
                                            {/* 品名 */}
                                            <Link
                                                to=":productId"
                                                className="product-name"
                                            >
                                                {product.name}
                                            </Link>
                                            {/* 價格 */}
                                            <p className="product-price accent-color">
                                                NT ${product.price}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        {/* 商品列 end */}

                        {/* 頁碼 */}
                        <div className="d-flex justify-content-center align-items-center">
                            <ul className="products-page d-flex">
                                <li>&#x3C;</li>
                                <li className="products-page-active">1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                                <li>&#x3E;</li>
                            </ul>
                        </div>
                        {/* 頁碼 end */}
                    </div>
                </div>

                {/* 商品比較 btn */}
                <img
                    src={compareBtn}
                    alt="compareBtn"
                    className="d-blok compare-btn m-4 cursor-pointer"
                    onClick={toggleProductCompare}
                />
                <div className="compare-quantity">0</div>
                {/* 商品比較 btn end */}
            </Container>

            {/* 比較頁顯示 */}
            {productCompare ? (
                <ProductCompare setProductCompare={setProductCompare} />
            ) : (
                ''
            )}
        </>
    );
}

export default Products;
