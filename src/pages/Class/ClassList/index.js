import React from 'react';
import './index.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import filterIcon from '../../../assets/svg/filter_alt.svg';
import sort from '../../../assets/svg/sort.svg';
import search from '../../../assets/svg/search.svg';

function ClassList(props) {
  return (
    <Container>
      <div className="d-flex mt-5 justify-content-between align-items-center">
        <nav className="d-flex">
          <a href="/">
            <p>首頁</p>
          </a>
          /
          <a href="/">
            <p>音樂教育</p>
          </a>
          /
          <a href="/">
            <p>成人課程</p>
          </a>
        </nav>
        <nav className="d-flex ">
          <div className="d-flex me-5 justify-content-between align-items-center">
            <p>進階篩選</p>
            <img className="ms-1 " src={filterIcon} alt="filterIcon"></img>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <p>商品排序</p>
            <img className=" ms-1 " src={sort} alt="Sort"></img>
          </div>
          <img className="ms-5 " src={search} alt="search"></img>
        </nav>
      </div>
      <Row className="text-center mt-5">
        <Col>
          <h4>成人課程</h4>
        </Col>
        <Col>
          <h4>兒童課程</h4>
        </Col>
      </Row>

      <div className="d-flex justify-content-between">
        <div className="vector3-main-light  mt-3 "></div>
        <div className="vector5-main "></div>
      </div>
    </Container>
  );
}

export default ClassList;
