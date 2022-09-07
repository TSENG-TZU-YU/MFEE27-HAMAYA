import React, { useState } from 'react';

// 套件
import { Container, Row, Col } from 'react-bootstrap';

// 樣式
import './index.scss';

// 元件
import ToShareCollect from '../../../components/ToShare';
import ProductsItem from '../ProductsList/ProductsItem';
import Compare from '../ProductCompare';
import Carousel from '../../../components/Carousel/Carousel';
import BreadCrumb from '../../../components/BreadCrumb/BreadCrumb';

// 圖檔
import { productImages } from '../../../assets/ProductsImg';
import { FiMinus, FiPlus } from 'react-icons/fi';
import cartCheck from '../../../assets/ProductsImg/icon/shopping_cart_check.svg';
import cartCheckout from '../../../assets/ProductsImg/icon/shopping_cart_checkout.svg';
import compareBtn from '../../../assets/ProductsImg/icon/compare_btn.svg';
import note from '../../../assets/ProductsImg/icon/product_details_note.svg';

function Product() {
    // Toggled
    const [productCompare, setProductCompare] = useState(false);
    const toggleProductCompare = () => setProductCompare(!productCompare);
    return (
        <>
            <Container>
                {/* 麵包屑 */}
                <BreadCrumb />
                {/* 麵包屑 end */}
                {/* <ul className="breadcrumb products-breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="/">首頁</a>
                    </li>
                    <li className="breadcrumb-item">
                        <a href="/">樂器商城 </a>
                    </li>
                    <li className="breadcrumb-item">
                        <a href="/">琴鍵樂器 </a>
                    </li>
                    <li className="breadcrumb-item">YAMAHA U系列 U1</li>
                </ul> */}
                {/* 麵包屑 end */}

                <Row className="mt-5">
                    {/* 商品照片 */}
                    <Col lg={6}>
                        <div
                            style={{
                                height: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <div
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    padding: '15px',
                                }}
                            >
                                <Carousel images={productImages} />
                            </div>
                        </div>
                    </Col>
                    {/* 商品照片 end */}

                    {/* 品名、規格、數量、購買 */}
                    <Col lg={6}>
                        <div className="d-flex flex-column mb-3 text-start">
                            <div>
                                <h4 className="ms-2 mb-2 main-color">
                                    YAMAHA U系列 U1
                                </h4>
                                <img
                                    src={note}
                                    alt="note"
                                    className="productDetail-note position-absolute d-none d-md-block"
                                />
                                <div className="border-top border-secondary border-3 px-3 pt-3">
                                    <h6 className="mb-0 productDetail-line-height fw-400">
                                        品牌：YAMAHA
                                    </h6>
                                    <h6 className="mb-0 productDetail-line-height fw-400">
                                        規格：長度 151公分 / 寬度 146 公分 /
                                        高度 99 公分
                                    </h6>
                                    <div className="d-flex align-items-center">
                                        <h6 className="mb-0 productDetail-line-height fw-400">
                                            顏色：
                                        </h6>
                                        <div className="product-color-box color m-1"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="px-3 pb-3 align-items-stretch">
                                <h6 className="col mb-0 productDetail-line-height fw-400">
                                    運送方式：一般宅配
                                </h6>
                                <div className=" d-flex">
                                    <h6 className="mb-0 productDetail-line-height fw-400">
                                        付款方式：
                                    </h6>
                                    <div className="ms-2">
                                        <div className="form-check m-2">
                                            <input
                                                className="form-check-input d-block me-2"
                                                type="radio"
                                                value=""
                                                name="flexRadioDefault"
                                                id="flexRadioDefault1"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="flexRadioDefault1"
                                            >
                                                <h6 className="fw-400">
                                                    轉帳匯款
                                                </h6>
                                            </label>
                                        </div>
                                        <div className="form-check m-2">
                                            <input
                                                className="form-check-input d-block me-2"
                                                type="radio"
                                                value=""
                                                name="flexRadioDefault"
                                                id="flexRadioDefault1"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="flexRadioDefault1"
                                            >
                                                <h6 className="fw-400">
                                                    信用卡
                                                </h6>
                                            </label>
                                        </div>
                                        <div className="form-check m-2">
                                            <input
                                                className="form-check-input d-block me-2"
                                                type="radio"
                                                value=""
                                                name="flexRadioDefault"
                                                id="flexRadioDefault1"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="flexRadioDefault1"
                                            >
                                                <h6 className="fw-400">
                                                    LINE Pay
                                                </h6>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <h3 className="accent-color fw-bold productDetail-price-letter-spacing my-3">
                                        NT $ 5,000
                                    </h3>
                                    <p className="gary-light-color mb-0 ms-3">
                                        / 售出1件
                                    </p>
                                </div>
                                <div className="d-flex align-items-center mt-2">
                                    <h6 className="mb-0 me-2 productDetail-line-height fw-400">
                                        數量：
                                    </h6>
                                    <FiMinus
                                        size="30px"
                                        className="gary-dark-color cursor-pointer"
                                    />
                                    <div className="product-purchase-quantity border border-2 mx-2">
                                        <h4 className="text-center m-0">0</h4>
                                    </div>
                                    <FiPlus
                                        size="30px"
                                        className="gary-dark-color cursor-pointer"
                                    />
                                    <p className="mb-0 ms-2 gary-light-color">
                                        庫存充足
                                    </p>
                                </div>
                                <div className="row mt-4">
                                    <button className="col m-2 btn btn-primary productDetail-btn d-flex justify-content-center align-items-center">
                                        <img
                                            style={{
                                                width: '30px',
                                                height: '30px',
                                            }}
                                            src={cartCheckout}
                                            alt="cartCheckout"
                                            className="d-block product-icon me-1"
                                        />
                                        <h6 className="accent-light-color text-center">
                                            立即購買
                                        </h6>
                                    </button>
                                    <button className="col m-2 btn btn-secondary productDetail-btn d-flex justify-content-center align-items-center">
                                        <img
                                            style={{
                                                width: '30px',
                                                height: '30px',
                                            }}
                                            src={cartCheck}
                                            alt="cartCheck"
                                            className="d-block product-icon me-1"
                                        />
                                        <h6 className="d-block accent-light-color text-center">
                                            加入購物車
                                        </h6>
                                    </button>
                                </div>
                                <ToShareCollect />
                            </div>
                        </div>
                    </Col>
                    {/* 品名、規格、數量、購買 end*/}
                </Row>
                <div className="d-flex mt-5 align-items-center">
                    <h4 className="text-nowrap fw-bold main-color me-3">
                        商品說明
                    </h4>
                    <div className="productDetail-vector bg-main-light-color"></div>
                </div>
                <div className="my-5 productDetail-description">
                    擁有無與倫比的美麗外型與音域的平台鋼琴，是鋼琴製造藝術的極致表現，Yamaha產品奠基於長達一個世紀毫不妥協的細心謹慎與工藝傳統，並有完整的專業技術、一流的製造設備，以及技術卓越、知識豐富且奉獻心力的工作人員相輔相成。完善強大的全套相關技術，使Yamaha幾乎能自行製造每部鋼琴的每個零件，讓我們能不斷開創重要進展，並設立長久以來備受業界認可的品管標準。尖端科技、創新能力與專業工匠不退時的技藝相互平衡，Yamaha鋼琴的實惠價格與優異品質，愈來愈受讚賞，也使得Yamaha平台鋼琴成為許多世界敏銳鋼琴家的第一選擇
                </div>
                <div className="d-flex mt-5 align-items-center">
                    <h4 className="text-nowrap fw-bold main-color me-3">
                        推薦商品
                    </h4>
                    <div className="productDetail-vector bg-main-light-color"></div>
                </div>
                <Row className="mt-2 mb-5 row-cols-2 row-cols-xl-4">
                    <ProductsItem />
                    <ProductsItem />
                    <ProductsItem />
                    <ProductsItem />
                </Row>
                {/* 商品比較 btn */}
                <img
                    src={compareBtn}
                    alt="compareBtn"
                    className="d-blok compare-btn m-4 cursor-pointer"
                    onClick={toggleProductCompare}
                />
                <div className="compare-quantity">0</div>
                {/* 商品比較 btn end */}
                {productCompare ? (
                    <Compare setProductCompare={setProductCompare} />
                ) : (
                    ''
                )}
            </Container>
        </>
    );
}

export default Product;
