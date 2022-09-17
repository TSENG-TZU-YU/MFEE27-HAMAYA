import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../../utils/config';

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

import { useAuth } from '../../../utils/use_auth';
//購物車
import { useCart } from '../../../utils/use_cart';

function Product() {
    // 商品 伺服器來的資料
    const [product, setProduct] = useState([]);
    const [productImg, setProductImg] = useState([]);

    // 網址上的商品id
    const { productId } = useParams();

    // 取得商品 api
    useEffect(() => {
        let getProductDetail = async () => {
            let response = await axios.get(`${API_URL}/products/${productId}`);
            setProduct(response.data.data);
            setProductImg(response.data.dataImg);
        };
        getProductDetail();
    }, []);

    // Toggled
    const [productCompare, setProductCompare] = useState(false);
    const toggleProductCompare = () => setProductCompare(!productCompare);
    //會員
    const { member, setMember, isLogin, setIsLogin } = useAuth();

    //購物車
    const { shopCartState, setShopCartState, shoppingCart, setShoppingCart } =
        useCart();
    //存localStorage
    const setNewLocal = (newLocal) => {
        //塞資料進去
        localStorage.setItem('shoppingCart', JSON.stringify(newLocal));
    };

    function getCheck(itemInfo) {
        console.log('get Member', member);
        //確認有沒有重複
        let newItemInfo = shoppingCart.find((v) => {
            return v.product_id === itemInfo.product_id;
        });
        if (!newItemInfo) {
            // //臨時購物車
            // setShoppingCart([{ ...itemInfo }, ...shoppingCart]);
            //localStorage
            setNewLocal([{ ...itemInfo }, ...shoppingCart]);
            //判斷是否為登入
            if (member !== null && member.id !== '') {
                let getNewLocal = JSON.parse(
                    localStorage.getItem('shoppingCart')
                );
                // console.log('getNewLocal', getNewLocal);

                const itemsData = getNewLocal.map((item) => {
                    return {
                        user_id: member.id,
                        product_id: item.product_id,
                        category_id: item.category_id,
                        amount: item.amount,
                    };
                });
                // console.log('itemsData', itemsData);
                //寫進資料庫
                setItemsData(itemsData);
                async function setItemsData(itemsData) {
                    //要做後端資料庫裡是否重複 重複則請去去購物車修改數量
                    try {
                        let response = await axios.post(
                            `${API_URL}/cart`,
                            itemsData
                        );
                        // console.log('duplicate', response.data.duplicate);
                        alert(response.data.message);
                        if (response.data.duplicate === 1) {
                            setShoppingCart([...shoppingCart]);
                            return;
                        }
                    } catch (err) {
                        console.log(err.response.data.message);
                    }
                }
            }
            //臨時購物車
            setShoppingCart([{ ...itemInfo }, ...shoppingCart]);
        }
    }
    console.log(productImg);

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

                <Row>
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
                                {/* TODO: 還沒撈到照片 */}
                                <Carousel images={productImages} />
                            </div>
                        </div>
                    </Col>
                    {/* 商品照片 end */}

                    {/* 品名、規格、數量、購買 */}
                    <Col lg={6}>
                        {product.map((value, index) => {
                            console.log('詳細頁裡的product', product);
                            return (
                                <div
                                    className="d-flex flex-column m-3 text-start"
                                    key={index}
                                >
                                    <div>
                                        <h4 className="ms-2 mb-2 main-color">
                                            {value.name}
                                        </h4>
                                        <img
                                            src={note}
                                            alt="note"
                                            className="productDetail-note position-absolute d-none d-md-block"
                                        />
                                        <div className="border-top border-secondary border-3 pt-3">
                                            <h6 className="mb-0 productDetail-line-height fw-400">
                                                品牌：{value.brandName}
                                            </h6>
                                            <h6 className="mb-0 productDetail-line-height fw-400">
                                                規格：{value.spec}
                                            </h6>
                                            <div className="d-flex align-items-center">
                                                <h6 className="mb-0 productDetail-line-height fw-400">
                                                    顏色：
                                                </h6>
                                                <div
                                                    className="product-color-box m-1"
                                                    style={{
                                                        backgroundColor: `${value.color}`,
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pb-3 align-items-stretch">
                                        <h6 className="col mb-0 productDetail-line-height fw-400">
                                            運送方式：{value.shipmentName}
                                        </h6>
                                    </div>

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
                                            NT $ {value.price}
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
                                            <h4 className="text-center m-0">
                                                0
                                            </h4>
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
                                        <button
                                            className="col m-2 btn btn-secondary productDetail-btn d-flex justify-content-center align-items-center"
                                            onClick={() => {
                                                setShopCartState(true);
                                                getCheck({
                                                    product_id:
                                                        value.product_id,
                                                    category_id:
                                                        value.category_id,
                                                    image: value.image,
                                                    name: value.name,
                                                    amount: 1,
                                                    price: value.price,
                                                    spec: value.spec,
                                                    shipment: value.shipment,
                                                });
                                            }}
                                        >
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
                            );
                        })}
                    </Col>
                    {/* 品名、規格、數量、購買 end*/}
                </Row>
                <div className="d-flex mt-5 align-items-center">
                    <h4 className="text-nowrap fw-bold main-color me-3">
                        商品說明
                    </h4>
                    <div className="productDetail-vector bg-main-light-color"></div>
                </div>
                {product.map((value, index) => {
                    return (
                        <div
                            className="my-5 productDetail-description"
                            key={Math.random().toString(36).replace('3.', '')}
                        >
                            {value.intro}
                        </div>
                    );
                })}
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
