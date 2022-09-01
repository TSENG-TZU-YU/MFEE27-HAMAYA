import React, { useState } from 'react';
import './index.scss';
import { Container, Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// 子頁面
import AdultCourse from './AdultCourse';
import ChildrenCourse from './ChildrenCourse';

// 圖檔
import filterIcon from '../../../assets/svg/filter_alt.svg';
import sort from '../../../assets/svg/sort.svg';
import search from '../../../assets/svg/search.svg';

function ClassList(props) {
  const [course, setCourse] = useState(true);
  const [vector, setVector] = useState(true);

  // Toggled
  const [filterToggled, setFilterToggled] = useState(false);
  const toggleFilterTrueFalse = () => setFilterToggled(!filterToggled);

  const [sortToggled, setSortToggled] = useState(false);
  const toggleSortTrueFalse = () => setSortToggled(!sortToggled);

  const [lastPage] = useState(3);
  const [page, setPage] = useState(3);

  // 製作分頁按鈕
  const getPage = () => {
    let pages = [];
    for (let i = 1; i < lastPage; i++) {
      //要從陣列後面依序放頁數
      pages.push(
        <li
          className="pages"
          style={{
            backgroundColor: page === i ? '#00323d' : '',
            color: page === i ? '#f2f2f2' : '#6a777a',
          }}
          key={i}
          onClick={(e) => {
            setPage(i);
          }}
        >
          {i}
        </li>
      );
    }
    return pages;
  };

  return (
    <Container>
      <div className="d-flex mt-5 justify-content-between align-items-center">
        <nav className="d-flex">
          <a href="/">
            <p className="mb-0">首頁</p>
          </a>
          /
          <a href="/">
            <p className="mb-0">音樂教育</p>
          </a>
          /
          <a href="/">
            <p className="mb-0 ">成人課程</p>
          </a>
        </nav>
        <nav className="d-flex  ">
          <div className="d-flex me-5 justify-content-between align-items-center position-relative">
            <p className="mb-0">進階篩選</p>
            <img
              className="ms-1  "
              src={filterIcon}
              alt="filterIcon"
              onClick={toggleFilterTrueFalse}
            ></img>
            <div className={filterToggled ? 'filter-active' : ''}>
              {filterToggled ? (
                <div className=" ms-3 mt-1 ">
                  <p className="toggled-p mb-0 " style={{ color: '#f2f2f2' }}>
                    類型
                  </p>
                  <select className="mt-1">
                    <option className="opacity-50">所有課程</option>
                  </select>
                  <p
                    className="toggled-p mb-0  mt-1 "
                    style={{ color: '#f2f2f2' }}
                  >
                    費用
                  </p>
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center position-relative">
            <p className="mb-0">商品排序</p>
            <img
              className=" ms-1 "
              src={sort}
              alt="Sort"
              onClick={toggleSortTrueFalse}
            ></img>
            <div className={sortToggled ? 'sort-active' : ''}></div>
          </div>
          <img className="ms-5 " src={search} alt="search"></img>
        </nav>
      </div>
      <Row className="text-center mt-5 pt-5">
        <Col>
          <h4
            className="cursor-pinter"
            onClick={() => {
              setVector(true);
              setCourse(true);
            }}
          >
            成人課程
          </h4>
        </Col>
        <Col>
          <h4
            className="cursor-pinter"
            onClick={() => {
              setVector(false);
              setCourse(false);
            }}
          >
            兒童課程
          </h4>
        </Col>
      </Row>
      <div className="d-flex justify-content-between mb-5">
        <div className="vector3-main-light  mt-3  z-index"></div>
        <div
          className={vector ? 'vector5-active-left' : 'vector5-active-right'}
        ></div>
      </div>
      {course ? <AdultCourse /> : <ChildrenCourse />}
      <ul className="text-center">{getPage()}</ul>
    </Container>
  );
}

export default ClassList;
