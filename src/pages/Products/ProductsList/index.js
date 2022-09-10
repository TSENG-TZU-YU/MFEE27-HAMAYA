import React, { useState } from 'react';

// 樣式
import './styles/index.scss';

import CategoryNav from '../ProductsList/CategoryNav';
import FilterNav from '../ProductsList/FilterNav';
import MobileFilterNav from '../ProductsList/MobileFilterNav';
import ProductsItem from '../ProductsList/ProductsItem';

function ProductsList() {
    return (
        <>
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
        </>
    );
}

export default ProductsList;
