import React from 'react';
import './styles/MobileFilterNav.scss';

function MobileFilterNav() {
  return (
    <div className="mobile-filter-nav">
      <div className="d-flex justify-content-center align-items-center">
        <div className="filter-nav-item border-end">
          <p className="filter-nav-item-name">商品分類</p>
          <button className="filter-nav-btn p-2">琴鍵樂器</button>
        </div>
        <div className="filter-nav-item border-end">
          <p className="filter-nav-item-name">進階篩選</p>
          <button className="filter-nav-btn p-2">請選擇篩選條件</button>
        </div>
        <div className="filter-nav-item">
          <p className="filter-nav-item-name">商品排序</p>
          <button className="filter-nav-btn p-2">請選擇排序條件</button>
        </div>
      </div>
    </div>
  );
}

export default MobileFilterNav;
