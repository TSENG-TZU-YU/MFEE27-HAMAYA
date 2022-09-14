import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../utils/config';

// 套件
import { Container } from 'react-bootstrap';

// 樣式
import './index.scss';

// 項目資料
import { sortByTitle } from './constants';

// 元件
import ProductCompare from './ProductCompare';
import CategoryNav from './components/CategoryNav';
import MobileCategoryNav from './components/MobileCategoryNav';
import SortBar from './components/MobileSortBar';
import MobileSortBar from './components/SortBar';
import FilterBar from './components/FilterBar';

// 元件 FilterNav
import SearchBar from '../../components/SearchBar';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';

// 元件 ProductsItem
import Favorite from '../../components/Favorite';

// 圖檔
import banner from '../../assets/ProductsImg/banner.png';
import compareBtn from '../../assets/ProductsImg/icon/compare_btn.svg';

// 圖檔 ProductsItem
import cartCheck from '../../assets/ProductsImg/icon/shopping_cart_check.svg';
import compare from '../../assets/ProductsImg/icon/compare.svg';

// 圖檔 FilterNav
import filterIcon from '../../assets/ProductsImg/icon/filter_alt.svg';
import sort from '../../assets/ProductsImg/icon/sort.svg';
import search from '../../assets/ProductsImg/icon/search.svg';

// 圖檔 MobileFilterNav
import arrowDown from '../../assets/ProductsImg/icon/arrow_down.svg';

import { useAuth } from '../../utils/use_auth';
//購物車
import { useCart } from '../../utils/use_cart';
// import Cart from '../../layouts/Cart/Cart';
import { RiContactsBookLine } from 'react-icons/ri';

function Products() {
    const [url, setUrl] = useState('');

    const navigate = useNavigate();

    const [error, setError] = useState(null);

    // 商品 伺服器來的原始資料
    const [products, setProducts] = useState([]);

    // 用於網頁上經過各種處理(排序、搜尋、過濾)後的資料
    const [displayProducts, setDisplayProducts] = useState([]);

    // 商品次類別 從資料庫撈
    const [categorySub, setCategorySub] = useState([]);

    // 搜尋
    const [searchWord, setSearchWord] = useState('');

    // 排序
    const [sortBy, setSortBy] = useState('');

    // checkbox
    // 品牌
    const [brandTags, setBrandTags] = useState([]);

    // 顏色
    const [colorTags, setColorTags] = useState('');
    const [colorTagsTypes, setColorTagsTypes] = useState([]);

    // 價格
    const [selectedPrice, setSelectedPrice] = useState([0, 7380000]);

    // 取得商品次類別 api
    useEffect(() => {
        let getCategory = async () => {
            let response = await axios.get(`${API_URL}/products/category`);
            setCategorySub(response.data.categorySub);
        };
        getCategory();
    }, []);

    const location = useLocation();

    // 取得商品 api
    useEffect(() => {
        let params = new URLSearchParams(location.search);
        let mainId = params.get('main_id');
        let subId = params.get('sub_id');
        let getProducts = async () => {
            let response = await axios.get(
                `${API_URL}/products?mainId=${mainId}&subId=${subId}`
            );
            response.data.color.unshift({ color: '' });
            setProducts(response.data.data);
            setColorTagsTypes(response.data.color);
            console.log('顏色', response.data.color);
            console.log('所有產品', response.data.data);
            setDisplayProducts(response.data.data);
        };
        getProducts();
    }, [location]);

    // TODO: 製作頁碼按鈕

    // 搜尋：處理方法
    const handleSearch = (products, searchWord) => {
        let newProducts = [...products];
        if (searchWord.length) {
            newProducts = products.filter((product) => {
                return product.name.includes(searchWord);
            });
        }
        return newProducts;
    };

    // 排序：處理方法
    const handleSort = (products, sortBy) => {
        let newProducts = [...products];

        // 價格排序 低 > 高
        if (sortBy === '1') {
            newProducts = [...newProducts].sort((a, b) => a.price - b.price);
        }

        // 價格排序 高 > 低
        if (sortBy === '2') {
            newProducts = [...newProducts].sort((a, b) => b.price - a.price);
        }

        // 時間排序 新 > 舊
        if (sortBy === '3') {
            newProducts = [...newProducts].sort((a, b) =>
                b.create_time.localeCompare(a.create_time)
            );
        }

        // 時間排序 舊 > 新
        if (sortBy === '4') {
            newProducts = [...newProducts].sort((a, b) =>
                a.create_time.localeCompare(b.create_time)
            );
        }

        return newProducts;
    };

    // 進階篩選方法
    const applyFilters = () => {
        let newProducts = [...products];

        // 顏色：處理方法
        if (colorTags) {
            newProducts = newProducts.filter((product) =>
                product.color.includes(colorTags)
            );
        }

        // const cuisinesChecked = cuisines
        //     .filter((item) => item.checked)
        //     .map((item) => item.label.toLowerCase());

        // if (cuisinesChecked.length) {
        //     updatedList = updatedList.filter((item) =>
        //         cuisinesChecked.includes(item.cuisine)
        //     );
        // }

        // 價格區間
        const minPrice = selectedPrice[0];
        const maxPrice = selectedPrice[1];

        // 價格：篩選方法
        newProducts = newProducts.filter(
            (product) => product.price >= minPrice && product.price <= maxPrice
        );

        setDisplayProducts(newProducts);
    };

    // 當過濾表單元素有更動時
    useEffect(() => {
        applyFilters();
    }, [products, colorTags, selectedPrice]);

    useEffect(() => {
        let newProducts = [];

        // 處理搜尋
        newProducts = handleSearch(products, searchWord);

        setDisplayProducts(newProducts);
    }, [products, searchWord]);

    useEffect(() => {
        let newProducts = [];

        // 處理排序
        newProducts = handleSort(products, sortBy);

        setDisplayProducts(newProducts);
    }, [products, sortBy]);

    // Toggled
    const [productCompare, setProductCompare] = useState(false);
    const toggleProductCompare = () => setProductCompare(!productCompare);

    // 桌機 篩選 Toggled
    const [filterToggled, setFilterToggled] = useState(false);
    const [sortToggled, setSortToggled] = useState(false);
    const [searchToggled, setSearchToggled] = useState(false);

    // 桌機 篩選 Toggled function
    const toggleFilterToggled = () => {
        if (sortToggled || searchToggled || categoryToggled) {
            setSortToggled(false);
            setSearchToggled(false);
            setCategoryToggled(false);
        }
        setFilterToggled(!filterToggled);
    };

    // 桌機 排序 Toggled function
    const toggleSortToggled = () => {
        if (filterToggled || searchToggled || categoryToggled) {
            setFilterToggled(false);
            setSearchToggled(false);
            setCategoryToggled(false);
        }
        setSortToggled(!sortToggled);
    };

    // 桌機 搜尋 Toggled function
    const toggleSearchToggled = () => {
        if (sortToggled || filterToggled || categoryToggled) {
            setSortToggled(false);
            setFilterToggled(false);
            setCategoryToggled(false);
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

    const { member, setMember, isLogin, setIsLogin } = useAuth();
    //購物車
    const { shopCartState, setShopCartState, shoppingCart, setShoppingCart } =
        useCart();
    //存localStorage
    const setNewLocal = (newLocal) => {
        //塞資料進去
        localStorage.setItem('shoppingCart', JSON.stringify(newLocal));
    };

    function getCheck(itemInfo) {
        console.log('get Member', member);
        //確認有沒有重複
        let newItemInfo = shoppingCart.find((v) => {
            return v.product_id === itemInfo.product_id;
        });
        if (!newItemInfo) {
            //臨時購物車
            setShoppingCart([...shoppingCart, { ...itemInfo }]);
            //localStorage
            setNewLocal([...shoppingCart, { ...itemInfo }]);
            //判斷是否為登入
            if (member !== null && member.id !== '') {
                let getNewLocal = JSON.parse(
                    localStorage.getItem('shoppingCart')
                );
                const itemsData = getNewLocal.map((item) => {
                    return {
                        user_id: member.id,
                        product_id: item.product_id,
                        category_id: item.category_id,
                        amount: item.amount,
                    };
                });
                console.log('itemsData', itemsData);
                //寫進資料庫
                setItemsData(itemsData);
            }
        }
    }

    async function setItemsData(itemsData) {
        //TODO:要做資料庫裡是否重複 重複則去購物車修改數量
        try {
            let response = await axios.post(`${API_URL}/cart`, itemsData);
            console.log(response.data.insertId);
            alert(response.data.message);
        } catch (err) {
            console.log(err.response.data.message);
        }
    }

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
                                    <FilterBar
                                        setBrandTags={setBrandTags}
                                        colorTags={colorTagsTypes}
                                        setColorTags={setColorTags}
                                        selectedPrice={selectedPrice}
                                        setSelectedPrice={setSelectedPrice}
                                    />
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
                                    <SortBar
                                        sortBy={sortBy}
                                        setSortBy={setSortBy}
                                        setSortToggled={setSortToggled}
                                    />
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
                                        <SearchBar
                                            searchWord={searchWord}
                                            setSearchWord={setSearchWord}
                                        />
                                    </div>
                                ) : (
                                    ''
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                {/* 桌機 篩選 end */}

                {/* 手機 篩選 */}
                <div className="d-md-none">
                    <div className="d-flex justify-content-between align-items-center">
                        {/* 麵包屑 */}
                        <BreadCrumb />
                        {/* <ul className="breadcrumb products-breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="/">首頁</a>
                            </li>
                            <li className="breadcrumb-item">
                                <a href="/">樂器商城 </a>
                            </li>
                            <li className="breadcrumb-item">琴鍵樂器</li>
                        </ul> */}
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
                            <SearchBar
                                searchWord={searchWord}
                                setSearchWord={setSearchWord}
                            />
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
                                <div
                                    className="products-btn-border-none products-filter-nav-btn p-2 d-flex align-items-center"
                                    onClick={toggleCategoryToggled}
                                >
                                    商品類別
                                    <img
                                        src={arrowDown}
                                        alt="arrowDown"
                                        className="products-mobile-arrowDown-img"
                                    />
                                </div>
                            </div>
                            <div className="products-filter-nav-item border-end">
                                <p className="products-filter-nav-item-name">
                                    進階篩選
                                </p>
                                <div
                                    className="products-btn-border-none products-filter-nav-btn p-2 d-flex align-items-center"
                                    onClick={toggleFilterToggled}
                                >
                                    篩選條件
                                    <img
                                        src={arrowDown}
                                        alt="arrowDown"
                                        className="products-mobile-arrowDown-img"
                                    />
                                </div>
                            </div>
                            <div className="products-filter-nav-item">
                                <p className="products-filter-nav-item-name">
                                    商品排序
                                </p>
                                <div
                                    className="products-btn-border-none products-filter-nav-btn p-2 d-flex align-items-center"
                                    onClick={toggleSortToggled}
                                >
                                    {sortByTitle(sortBy)}
                                    <img
                                        src={arrowDown}
                                        alt="arrowDown"
                                        className="products-mobile-arrowDown-img"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* 篩選按鈕 end */}

                        {/* 商品類別選項 */}
                        {categoryToggled ? (
                            <MobileCategoryNav
                                categorySub={categorySub}
                                navigate={navigate}
                                url={url}
                                setUrl={setUrl}
                            />
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
                                        {brandTags.map((value, index) => {
                                            return (
                                                <div
                                                    className="col-6 form-check products-form-check"
                                                    key={index}
                                                >
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        defaultValue
                                                    />
                                                    <label className="form-check-label">
                                                        {value.name}
                                                    </label>
                                                </div>
                                            );
                                        })}
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
                            <MobileSortBar
                                sortBy={sortBy}
                                setSortBy={setSortBy}
                                setSortToggled={setSortToggled}
                            />
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
                    <CategoryNav
                        categorySub={categorySub}
                        navigate={navigate}
                        url={url}
                        setUrl={setUrl}
                    />
                    {/* 桌機 商品類別選項 end */}

                    <div className="col-12 col-md-10">
                        {/* 商品列 */}
                        <div className=" row row-cols-2 row-cols-md-3 row-cols-xl-4">
                            {error && <div>{error}</div>}
                            {displayProducts.map((product) => {
                                return (
                                    <div
                                        className="col product"
                                        key={product.id}
                                    >
                                        <div className="position-relative">
                                            {/* 商品照片 */}
                                            <Link
                                                to={`/products/${product.product_id}`}
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
                                            <button
                                                className="btn btn-primary w-100 text-canter product-cart-check-btn position-absolute bottom-0 end-0"
                                                onClick={(e) => {
                                                    setShopCartState(true);
                                                    getCheck({
                                                        product_id:
                                                            product.product_id,
                                                        category_id:
                                                            product.category_id,
                                                        image: product.image,
                                                        name: product.name,
                                                        amount: 1,
                                                        price: product.price,
                                                        spec: product.spec,
                                                        shipment:
                                                            product.shipment,
                                                    });
                                                }}
                                            >
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
                                                to={`/products/${product.product_id}`}
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
                        <div className="d-flex justify-content-center align-items-center mt-5">
                            {/* 頁碼 */}
                            {/* <ul className="d-flex">{getPages()}</ul> */}
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
