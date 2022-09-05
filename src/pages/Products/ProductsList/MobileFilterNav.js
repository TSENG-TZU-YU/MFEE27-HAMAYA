import React, { useState } from 'react';
import './styles/MobileFilterNav.scss';

// 圖檔
import arrowDown from '../../../assets/ProductsImg/icon/arrow_down.svg';
import search from '../../../assets/ProductsImg/icon/search.svg';

function MobileFilterNav() {
    // Toggled
    const [categoryToggled, setCategoryToggled] = useState(false);
    const toggleCategoryToggled = () => setCategoryToggled(!categoryToggled);
    const [filterToggled, setFilterToggled] = useState(false);
    const toggleFilterToggled = () => setFilterToggled(!filterToggled);
    const [sortToggled, setSortToggled] = useState(false);
    const toggleSortToggled = () => setSortToggled(!sortToggled);

    return (
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
                <button className="products-btn-border-none">
                    <img
                        className="products-icon-img ms-1 mb-1"
                        src={search}
                        alt="search"
                    ></img>
                </button>
                {/* 搜尋 end */}
            </div>

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
                            <p className="mb-2 accent-light-color">品牌</p>
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
                            <p className="mt-4 mb-0 accent-light-color">顏色</p>
                            <div className="d-flex mt-2">
                                <div className="cursor-pointer products-filter-color-box products-filter-no-color-box products-filter-color-box-active"></div>
                                <div className="cursor-pointer products-filter-color-box color"></div>
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
            {/* 篩選 end */}
        </div>
    );
}

export default MobileFilterNav;
