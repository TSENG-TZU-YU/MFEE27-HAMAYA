import React from 'react';
import './index.scss';
import CategoryNav from './ProductsList/CategoryNav';
import ProductsItem from './ProductsList/ProductsItem';
import FilterNav from './ProductsList/FilterNav';
import banner from '../../assets/ProductsImg/banner.png';
import bannerTitle from '../../assets/ProductsImg/icon/banner_title.svg';

function index() {
  return (
    <>
      <div className="banner-img position-relative">
        <img
          src={bannerTitle}
          alt="bannerTitle"
          className="banner-title position-absolute"
        />
        <img src={banner} alt="banner" />
      </div>
      <div className="container">
        <FilterNav />
        <div className="row">
          <div className="col-2">
            <CategoryNav />
          </div>
          <div className="col-10 row row-cols-2 row-cols-md-4">
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
            {/* 頁碼 */}
            <div className="d-flex justify-content-center align-items-center flex-fill">
              <div className="page my-3">
                <a href="/">&#x3C;</a>
                <a className="page-active" href="/">
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
