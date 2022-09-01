import React from 'react';
import filterIcon from '../../../assets/ProductsImg/icon/filter_alt.svg';
import sort from '../../../assets/ProductsImg/icon/sort.svg';
import search from '../../../assets/ProductsImg/icon/search.svg';

function FilterNav() {
  return (
    <div className="d-flex flex-row-reverse">
      <div className="col-10 d-flex justify-content-between align-items-center">
        {/* 麵包屑 */}
        <ul className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">首頁</a>
          </li>
          <li className="breadcrumb-item">
            <a href="/">樂器商城 </a>
          </li>
          <li className="breadcrumb-item">琴鍵樂器</li>
        </ul>

        {/* 篩選 */}
        <div className="filter-nav d-flex">
          <div className="main-color me-3">
            進階篩選
            <img
              className="icon-img ms-1 mb-1"
              src={filterIcon}
              alt="filterIcon"
            ></img>
          </div>
          <div className="main-color me-3">
            商品排序
            <img className="icon-img ms-1 mb-1" src={sort} alt="sort"></img>
          </div>
          <div>
            <img className="icon-img ms-1 mb-1" src={search} alt="search"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterNav;
