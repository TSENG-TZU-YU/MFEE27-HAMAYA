import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './index.scss';

// 子元件
import StarRating from '../../../../components/Star/StarRating';
import ToShareCollect from '../../../../components/ToShare';

// 圖檔
import AdultDetailed01 from '../../../../assets/ClassImg/AdultDetailed01.png';
import AdultDetailed02 from '../../../../assets/ClassImg/AdultDetailed02.png';
import AdultDetailed03 from '../../../../assets/ClassImg/AdultDetailed03.png';
import shop_car from '../../../../assets/svg/add_shopping_cart.svg';
import arrow_right from '../../../../assets/svg/arrow-right.svg';
import arrow_left from '../../../../assets/svg/arrow-left.svg';

function Detailed(props) {
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
                    <Link to="/class/classlist">
                        <p className="mb-0 ">成人課程</p>
                    </Link>
                    <Link to="/class/adultDetailed">
                        <p className="mb-0 ">藍調與爵士鋼琴的獨奏技巧與應用</p>
                    </Link>
                </nav>
                <Row className="mt-5 pt-5  text-center">
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

                        <div className="d-flex mt-3 ms-2">
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
                    <Col lg={6}>
                        <div className="">
                            <div className="text-start">
                                <h4
                                    className="ms-1 mb-2"
                                    style={{ color: '#00323d' }}
                                >
                                    藍調與爵士鋼琴的獨奏技巧與應用
                                </h4>
                                <div className="AdultDetailed-vector1"></div>
                                <h6 className="AdultDetailed-introduce-width AdultDetailed-line-height mt-4">
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
                                <Row className="AdultDetailed-line-height AdultDetailed-introduce-width">
                                    <Col lg={3}>
                                        <p>付款方式：</p>
                                    </Col>
                                    {/* TODO: 勾選 樣式 */}
                                    <Col>
                                        <div className=" mt-1">
                                            <div class="form-check d-flex align-items-center">
                                                <input
                                                    className="form-check-input me-2"
                                                    //  type="radio"
                                                    type="checkbox"
                                                    value=""
                                                    name="flexRadioDefault"
                                                    id="flexRadioDefault1"
                                                />
                                                <label
                                                    class="form-check-label"
                                                    for="flexRadioDefault1"
                                                >
                                                    <h6>轉帳匯款</h6>
                                                </label>
                                            </div>
                                            <div class="form-check  d-flex align-items-center mt-3">
                                                <input
                                                    className="d-block me-2"
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
                                                    <h6>信用卡</h6>
                                                </label>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className=" mt-1">
                                            <div class="form-check d-flex align-items-center">
                                                <input
                                                    className="d-block me-2"
                                                    type="radio"
                                                    id="sub"
                                                    name="sub"
                                                />
                                                <label
                                                    class="form-check-label"
                                                    for="flexRadioDefault1"
                                                >
                                                    <h6>LINE Pay</h6>
                                                </label>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <div className="d-flex mt-4 justify-content-between AdultDetailed-introduce-width">
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
                                <Row className="AdultDetailed-introduce-width text-center mt-4">
                                    <Col>
                                        <div className="AdultDetailed-btn d-flex justify-content-center align-items-center">
                                            <img
                                                style={{
                                                    width: '30px',
                                                    height: '30px',
                                                }}
                                                className="me-2"
                                                src={shop_car}
                                                alt="shop_car"
                                            />
                                            <h6 className="AdultDetailed-car-text-color">
                                                立即報名
                                            </h6>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="AdultDetailed-btn d-flex justify-content-center align-items-center">
                                            <img
                                                style={{
                                                    width: '30px',
                                                    height: '30px',
                                                }}
                                                className="me-2"
                                                src={shop_car}
                                                alt="shop_car"
                                            />
                                            <h6 className="AdultDetailed-car-text-color">
                                                加入購物車
                                            </h6>
                                        </div>
                                    </Col>
                                </Row>

                                <ToShareCollect />
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="text-center mt-5 pt-5 mb-5 ">
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
                {/* {selectCourse ? <AdultCourse /> : <ChildrenCourse />} */}
                <div className="d-flex mt-5  justify-content-center">
                    <h4
                        className="me-5 text-nowrap fw-bold"
                        style={{ color: '#00323d' }}
                    >
                        相關課程
                    </h4>

                    <div className="detailed-vector  mt-3"></div>
                </div>
            </Container>
        </div>
    );
}

export default Detailed;
