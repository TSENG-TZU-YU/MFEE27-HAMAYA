import React from 'react';
import './styles/MobileFilterNav.scss';

// 圖檔
import arrowDown from '../../../assets/ProductsImg/icon/arrow_down.svg';

function MobileFilterNav() {
  return (
    <div className="mobile-filter-nav d-md-none">
      <div className="d-flex justify-content-center align-items-center">
        <div className="products-filter-nav-item border-end">
          <p className="products-filter-nav-item-name">商品分類</p>
          <button className="products-btn-border-none products-filter-nav-btn p-2 d-flex align-items-center">
            琴鍵樂器
            <img src={arrowDown} alt="arrowDown" />
          </button>
        </div>
        <div className="products-filter-nav-item border-end">
          <p className="products-filter-nav-item-name">進階篩選</p>
          <button className="products-btn-border-none products-filter-nav-btn p-2 d-flex align-items-center">
            篩選條件
            <img src={arrowDown} alt="arrowDown" />
          </button>
        </div>
        <div className="products-filter-nav-item">
          <p className="products-filter-nav-item-name">商品排序</p>
          <button className="products-btn-border-none products-filter-nav-btn p-2 d-flex align-items-center">
            排序條件
            <img src={arrowDown} alt="arrowDown" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MobileFilterNav;
