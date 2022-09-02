import React from 'react';
import './index.scss';

// 元件
import CategoryNav from './ProductsList/CategoryNav';
import ProductsItem from './ProductsList/ProductsItem';
import FilterNav from './ProductsList/FilterNav';
import MobileFilterNav from './ProductsList/MobileFilterNav';

// 圖檔
import banner from '../../assets/ProductsImg/banner.png';
import bannerTitle from '../../assets/ProductsImg/icon/banner_title.svg';

function index() {
  return (
    <>
      <div className="products-banner-img position-relative">
        <img
          src={bannerTitle}
          alt="bannerTitle"
          className="products-banner-title position-absolute"
        />
        <img src={banner} alt="banner" />
      </div>
      <div className="container">
        <FilterNav />
        <MobileFilterNav />
        {/* TODO: 再寫手機版元件做替換 */}
        <div className="row">
          {/* TODO: md以下讓它消失 */}
          <CategoryNav />
          <div className="col-12 col-md-10">
            <div className=" row row-cols-2 row-cols-md-4">
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
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
