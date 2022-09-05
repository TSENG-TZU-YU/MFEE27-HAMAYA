import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './index.scss';

// 子元件
import StarRating from '../../../components/Star/StarRating';
import ToShareCollect from '../../../components/ToShare';
import Information from './Information';
import Comment from './Comment';

// 圖檔
import AdultDetailed01 from '../../../assets/ClassImg/AdultDetailed01.png';
import AdultDetailed02 from '../../../assets/ClassImg/AdultDetailed02.png';
import AdultDetailed03 from '../../../assets/ClassImg/AdultDetailed03.png';
import Adult_img from '../../../assets/ClassImg/Adult img.png';

import note from '../../../assets/ClassImg/Note.png';
import shop_car from '../../../assets/svg/add_shopping_cart.svg';
import arrow_right from '../../../assets/svg/arrow-right.svg';
import arrow_left from '../../../assets/svg/arrow-left.svg';

function Detailed() {
    const [detailedSelect, setDetailedSelect] = useState(true);
    return (
        <div>
            <Container>
                <nav className="d-flex mt-5 ">
                    <Link to="/">
                        <p className="mb-0">首頁</p>
                    </Link>
                    /
                    <Link to="/class">
                        <p className="mb-0">音樂教育</p>
                    </Link>
                    /
                    <Link to="/class/list">
                        <p className="mb-0 ">成人課程</p>
                    </Link>
                    <Link to="/class/list/Detailed">
                        <p className="mb-0 ">藍調與爵士鋼琴的獨奏技巧與應用</p>
                    </Link>
                </nav>
                <Row className="mt-5 pt-5  text-center ">
                    <Col lg={6}>
                        <div className="d-flex align-items-center">
                            <img
                                className="AdultDetailed-img01 "
                                src={AdultDetailed01}
                                alt="Adult img"
                            />
                            <div className="detailed-arrow-left cursor-pinter">
                                <img src={arrow_left} alt="arrow_left" />
                            </div>
                            <div className="detailed-arrow-right  cursor-pinter">
                                <img src={arrow_right} alt="arrow_right" />
                            </div>
                        </div>

                        <div className="d-flex mt-3">
                            <img
                                className="AdultDetailed-img02 me-4"
                                src={AdultDetailed02}
                                alt="Adult img"
                            />
                            <img
                                className="AdultDetailed-img02"
                                src={AdultDetailed03}
                                alt="Adult img"
                            />
                        </div>
                    </Col>
                    {/* 品名、規格、購買、評價  */}
                    <Col lg={6}>
                        <div className="d-flex flex-column mb-3 text-start ">
                            <div className="text-start  position-relative">
                                <h4
                                    className="ms-1 mb-2 "
                                    style={{ color: '#00323d' }}
                                >
                                    藍調與爵士鋼琴的獨奏技巧與應用
                                </h4>
                                <div className="border-top border-secondary border-3 px-3 pt-3 "></div>
                                <img
                                    src={note}
                                    alt="note"
                                    className="position-absolute classDetail-note "
                                />
                                <h6 className=" AdultDetailed-line-height mt-4">
                                    課程會教到的爵士和聲、變奏、切分音、Comping、Swing、藍調、Boogie
                                    Woogie
                                    舞曲風格聽起來如何？會彈哪些爵士經典名曲？試聽一下！
                                    你可以學到 ： 1.
                                    看單行的旋律譜即能彈出雙手的變化 2.
                                    學會爵士和聲的應用，讓音樂擁有豐富的色彩 3.
                                    彈出爵士的搖擺與藍調的經典風格 4.
                                    擁有基本的變奏、即興與編曲能力 5.
                                    進化彈奏能力， 感受爵士魅力！
                                </h6>
                                <p className="mb-0 AdultDetailed-line-height mt-3">
                                    名額：10 人{' '}
                                </p>
                                <p className="mb-0 AdultDetailed-line-height">
                                    報名時間：2022/09/20 - 2022/10/01
                                </p>
                                <p className="mb-0 AdultDetailed-line-height">
                                    開課時間：2022/10/19 - 2022/12/10
                                </p>
                                <p className="mb-0 AdultDetailed-line-height">
                                    師資：林宣樣 老師
                                </p>
                                <Row className="AdultDetailed-line-height ">
                                    <Col lg={3}>
                                        <p>付款方式：</p>
                                    </Col>
                                    {/* TODO: 勾選 樣式 */}
                                    <Col>
                                        <div className=" mt-1">
                                            <div class="form-check d-flex align-items-center">
                                                <input
                                                    className="form-check-input d-block me-2"
                                                    //  type="radio"
                                                    type="radio"
                                                    value=""
                                                    name="flexRadioDefault"
                                                    id="flexRadioDefault1"
                                                />
                                                <label
                                                    class="form-check-label"
                                                    for="flexRadioDefault1"
                                                >
                                                    <h6 className="fw-400">
                                                        轉帳匯款
                                                    </h6>
                                                </label>
                                            </div>
                                            <div class="form-check  d-flex align-items-center mt-3">
                                                <input
                                                    className="form-check-input d-block me-2"
                                                    //  type="radio"
                                                    type="radio"
                                                    value=""
                                                    name="flexRadioDefault"
                                                    id="flexRadioDefault1"
                                                />
                                                <label
                                                    class="form-check-label"
                                                    for="flexRadioDefault1"
                                                >
                                                    <h6 className="fw-400">
                                                        {' '}
                                                        信用卡
                                                    </h6>
                                                </label>
                                            </div>
                                            <div class="form-check  d-flex align-items-center mt-3">
                                                <input
                                                    className="form-check-input d-block me-2"
                                                    //  type="radio"
                                                    type="radio"
                                                    value=""
                                                    name="flexRadioDefault"
                                                    id="flexRadioDefault1"
                                                />
                                                <label
                                                    class="form-check-label"
                                                    for="flexRadioDefault1"
                                                >
                                                    <h6 className="fw-400">
                                                        LINE Pay
                                                    </h6>
                                                </label>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <div className="d-flex mt-4 justify-content-between ">
                                    <div className="d-flex">
                                        <h3 className="AdultDetailed-price0">
                                            NT $3,500
                                        </h3>
                                        <h6 className="AdultDetailed-price me-1">
                                            / 期
                                        </h6>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="StarRating">
                                            <StarRating />
                                        </div>
                                        <p className="ms-2 mt-2"> 2 人評價</p>
                                    </div>
                                </div>
                                <Row className=" mt-4">
                                    <button className="col m-2 btn btn-primary AdultDetailed-btn d-flex justify-content-center align-items-center border-0">
                                        <img
                                            style={{
                                                width: '30px',
                                                height: '30px',
                                            }}
                                            className="d-block product-icon me-1"
                                            src={shop_car}
                                            alt="shop_car"
                                        />
                                        <h6 className="AdultDetailed-car-text-color text-center">
                                            立即報名
                                        </h6>
                                    </button>

                                    <button className="col m-2 btn btn-primary AdultDetailed-btn d-flex justify-content-center align-items-center border-0">
                                        <img
                                            style={{
                                                width: '30px',
                                                height: '30px',
                                            }}
                                            className="d-block product-icon me-1"
                                            src={shop_car}
                                            alt="shop_car"
                                        />
                                        <h6 className="AdultDetailed-car-text-color d-block">
                                            加入購物車
                                        </h6>
                                    </button>
                                </Row>

                                <ToShareCollect />
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="text-center mt-5 pt-5 mb-5 px-2">
                    <button
                        className={`cursor-pinter col-6 fw-bold ${
                            detailedSelect
                                ? 'vector5-Btn-active'
                                : 'vector5-Btn'
                        }`}
                        onClick={() => {
                            setDetailedSelect(true);
                        }}
                    >
                        <h4>課程資訊</h4>
                    </button>

                    <button
                        className={`cursor-pinter col-6 fw-bold ${
                            detailedSelect
                                ? 'vector5-Btn'
                                : 'vector5-Btn-active'
                        }`}
                        onClick={() => {
                            setDetailedSelect(false);
                        }}
                    >
                        <h4>課程評價</h4>
                    </button>
                </Row>
                {detailedSelect ? <Information /> : <Comment />}
                {/* TODO: RWD  col 線要滿版*/}
                <div className="  d-flex mt-5  px-0">
                    <h4
                        className=" me-5 text-nowrap fw-bold"
                        style={{ color: '#00323d' }}
                    >
                        相關課程
                    </h4>
                    {/* border-top border-secondary border-3 px-3 pt-3 me-2 */}
                    <div className=" detailed-vector  mt-3 "></div>
                </div>
                {/* 相關課程  */}
                <Row className="mt-5 mb-5">
                    <Col lg={3}>
                        <div class="card" style={{ width: ' 18rem;' }}>
                            <img
                                className="card-img-top img-fluid"
                                src={Adult_img}
                                alt="Adult img"
                            />
                            <div class="card-body">
                                <div className=" mt-3 ">
                                    <p
                                        className="ms-1 mb-2"
                                        style={{ color: '#00323d' }}
                                    >
                                        藍調與爵士鋼琴的獨奏技巧與應用
                                    </p>
                                    <div className="vector2 me-2"></div>
                                    <div className=" mt-2">
                                        <small className="mb-0">
                                            開課時間：2022/10/19 - 2022/12/10
                                        </small>
                                        <p className="mb-0">名額：10 人 </p>

                                        <div className="d-flex mt-2 align-items-center">
                                            <div className="StarRating">
                                                <StarRating />
                                            </div>
                                            <small className="ms-2 mt-2 ">
                                                2 人評價
                                            </small>
                                        </div>
                                        <div className="d-lg-flex justify-content-lg-between align-items-lg-center pt-1">
                                            <h4
                                                className=" fw-bold "
                                                style={{ color: '#5b322f' }}
                                            >
                                                NT $2,500 / 期
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div class="card" style={{ width: ' 18rem;' }}>
                            <img
                                className="card-img-top img-fluid"
                                src={Adult_img}
                                alt="Adult img"
                            />
                            <div class="card-body">
                                <div className=" mt-3 ">
                                    <p
                                        className="ms-1 mb-2"
                                        style={{ color: '#00323d' }}
                                    >
                                        藍調與爵士鋼琴的獨奏技巧與應用
                                    </p>
                                    <div className="vector2 me-2"></div>
                                    <div className=" mt-2">
                                        <small className="mb-0">
                                            開課時間：2022/10/19 - 2022/12/10
                                        </small>
                                        <p className="mb-0">名額：10 人 </p>

                                        <div className="d-flex mt-2 align-items-center">
                                            <div className="StarRating">
                                                <StarRating />
                                            </div>
                                            <small className="ms-2 mt-2 ">
                                                {' '}
                                                2 人評價
                                            </small>
                                        </div>
                                        <div className="d-lg-flex justify-content-lg-between align-items-lg-center pt-1">
                                            <h4
                                                className=" fw-bold "
                                                style={{ color: '#5b322f' }}
                                            >
                                                NT $2,500 / 期
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div class="card" style={{ width: ' 18rem;' }}>
                            <img
                                className="card-img-top img-fluid"
                                src={Adult_img}
                                alt="Adult img"
                            />
                            <div class="card-body">
                                <div className=" mt-3 ">
                                    <p
                                        className="ms-1 mb-2"
                                        style={{ color: '#00323d' }}
                                    >
                                        藍調與爵士鋼琴的獨奏技巧與應用
                                    </p>
                                    <div className="vector2 me-2"></div>
                                    <div className=" mt-2">
                                        <small className="mb-0">
                                            開課時間：2022/10/19 - 2022/12/10
                                        </small>
                                        <p className="mb-0">名額：10 人 </p>

                                        <div className="d-flex mt-2 align-items-center">
                                            <div className="StarRating">
                                                <StarRating />
                                            </div>
                                            <small className="ms-2 mt-2 ">
                                                {' '}
                                                2 人評價
                                            </small>
                                        </div>
                                        <div className="d-lg-flex justify-content-lg-between align-items-lg-center pt-1">
                                            <h4
                                                className=" fw-bold "
                                                style={{ color: '#5b322f' }}
                                            >
                                                NT $2,500 / 期
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div class="card" style={{ width: ' 18rem;' }}>
                            <img
                                className="card-img-top img-fluid"
                                src={Adult_img}
                                alt="Adult img"
                            />
                            <div class="card-body">
                                <div className=" mt-3 ">
                                    <p
                                        className="ms-1 mb-2"
                                        style={{ color: '#00323d' }}
                                    >
                                        藍調與爵士鋼琴的獨奏技巧與應用
                                    </p>
                                    <div className="vector2 me-2"></div>
                                    <div className=" mt-2">
                                        <small className="mb-0">
                                            開課時間：2022/10/19 - 2022/12/10
                                        </small>
                                        <p className="mb-0">名額：10 人 </p>

                                        <div className="d-flex mt-2 align-items-center">
                                            <div className="StarRating">
                                                <StarRating />
                                            </div>
                                            <small className="ms-2 mt-2 ">
                                                {' '}
                                                2 人評價
                                            </small>
                                        </div>
                                        <div className="d-lg-flex justify-content-lg-between align-items-lg-center pt-1">
                                            <h4
                                                className=" fw-bold "
                                                style={{ color: '#5b322f' }}
                                            >
                                                NT $2,500 / 期
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                {/* 相關課程 end */}
            </Container>
        </div>
    );
}

export default Detailed;
