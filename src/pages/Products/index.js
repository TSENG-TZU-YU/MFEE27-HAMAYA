import React, { useState } from 'react';
import './index.scss';

// 元件
import CategoryNav from './ProductsList/CategoryNav';
import ProductsItem from './ProductsList/ProductsItem';
import FilterNav from './ProductsList/FilterNav';
import MobileFilterNav from './ProductsList/MobileFilterNav';
import Compare from './ProductCompare';

// 圖檔
import banner from '../../assets/ProductsImg/banner.png';
import bannerTitle from '../../assets/ProductsImg/icon/banner_title.svg';
import compareBtn from '../../assets/ProductsImg/icon/compare_btn.svg';

function Products() {
    // Toggled
    const [productCompare, setProductCompare] = useState(false);
    const toggleProductCompare = () => setProductCompare(!productCompare);


    return (
        <>
            {/* banner */}
            <div className="products-banner-img position-relative">
                <img
                    src={bannerTitle}
                    alt="bannerTitle"
                    className="products-banner-title position-absolute"
                />
                <img src={banner} alt="banner" />
            </div>
            {/* banner end */}

            <div className="container">
                {/* 桌機 篩選 */}
                <FilterNav />
                {/* 手機 篩選 */}
                <MobileFilterNav />

                <div className="row">
                    {/* 桌機 商品類別選項 */}
                    <CategoryNav />

                    <div className="col-12 col-md-10">
                        {/* 商品列 */}
                        <div className=" row row-cols-2 row-cols-md-3 row-cols-xl-4">
                            <ProductsItem />
                            <ProductsItem />
                            <ProductsItem />
                            <ProductsItem />
                            <ProductsItem />
                            <ProductsItem />
                            <ProductsItem />
                            <ProductsItem />
                            <ProductsItem />
                            <ProductsItem />
                            <ProductsItem />
                            <ProductsItem />
                            <ProductsItem />
                            <ProductsItem />
                            <ProductsItem />
                            <ProductsItem />
                            <ProductsItem />
                            <ProductsItem />
                            <ProductsItem />
                            <ProductsItem />
                            <ProductsItem />
                            <ProductsItem />
                            <ProductsItem />
                            <ProductsItem />
                        </div>
                        {/* 商品列 end */}
                        {/* 頁碼 */}
                        <div className="d-flex justify-content-center align-items-center flex-fill">
                            <div className="products-page my-3">
                                <a href="/">&#x3C;</a>
                                <a className="products-page-active" href="/">
                                    1
                                </a>
                                <a href="/">2</a>
                                <a href="/">3</a>
                                <a href="/">4</a>
                                <a href="/">&#x3E;</a>
                            </div>
                        </div>
                        {/* 頁碼 end */}

                        {/* 商品比較 btn */}
                        <img
                            src={compareBtn}
                            alt="compareBtn"
                            className="d-blok compare-btn m-4 cursor-pointer"
                            onClick={toggleProductCompare}
                        />
                        <div className="compare-quantity">0</div>
                        {/* 商品比較 btn end */}
                    </div>
                </div>
            </div>
            {productCompare ? (
                <Compare setProductCompare={setProductCompare} />
            ) : (
                ''
            )}
        </>
    );
}

export default Products;
