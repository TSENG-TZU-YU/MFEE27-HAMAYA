import React, { useState } from 'react';

// 樣式
import './styles/filterNav.scss';

// 圖檔
import filterIcon from '../../../assets/ProductsImg/icon/filter_alt.svg';
import sort from '../../../assets/ProductsImg/icon/sort.svg';
import search from '../../../assets/ProductsImg/icon/search.svg';

function FilterNav() {
    // Toggled
    const [filterToggled, setFilterToggled] = useState(false);
    const toggleFilterToggled = () => setFilterToggled(!filterToggled);
    const [sortToggled, setSortToggled] = useState(false);
    const toggleSortToggled = () => setSortToggled(!sortToggled);

    return (
        <div className="d-none d-md-block">
            <div className="d-flex flex-row-reverse">
                <div className="col-10 d-flex justify-content-between align-items-center">
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

                    {/* 進階篩選 */}
                    <div className="filter-nav d-flex position-relative">
                        <button
                            className="products-btn-border-none main-color me-4"
                            onClick={toggleFilterToggled}
                        >
                            進階篩選
                            <img
                                className="products-icon-img ms-1 mb-1"
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
                            className="products-btn-border-none main-color me-4 position-relative"
                            onClick={toggleSortToggled}
                        >
                            商品排序
                            <img
                                className="products-icon-img ms-1 mb-1"
                                src={sort}
                                alt="sort"
                            ></img>
                        </button>
                        {/* 商品排序區塊 */}
                        {sortToggled ? (
                            <div className="products-sort-menu position-absolute">
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

                        <button className="products-btn-border-none">
                            <img
                                className="products-icon-img ms-1 mb-1"
                                src={search}
                                alt="search"
                            ></img>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FilterNav;
