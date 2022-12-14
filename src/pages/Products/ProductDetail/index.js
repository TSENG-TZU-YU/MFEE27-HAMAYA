import React, { useState, useEffect } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../../utils/config';
import { v4 as uuidv4 } from 'uuid';

// 套件
import { Container, Row, Col } from 'react-bootstrap';
import Swal from 'sweetalert2';

// 樣式
import './index.scss';

// 元件
import ProductsItem from '../components/ProductsItem';
import ProductCompare from '../ProductCompare';
import ProductCarousel from '../../../components/ProductCarousel';
import BreadCrumb from '../../../components/BreadCrumb/BreadCrumb';
import CompareBtn from '../components/CompareBtn';
import {
    successToast,
    warningToast,
    basicAlert,
    errorToast,
    successSmallToast,
} from '../../../components/Alert';
import Loader from '../../../components/Loader';

// 圖檔
import { FiMinus, FiPlus } from 'react-icons/fi';
import cartCheck from '../../../assets/ProductsImg/icon/shopping_cart_check.svg';
import cartCheckout from '../../../assets/ProductsImg/icon/shopping_cart_checkout.svg';
import note from '../../../assets/ProductsImg/icon/product_details_note.svg';
import { ReactComponent as CompareButton } from '../../../assets/svg/sync_alt.svg';
import { RiHeartAddFill } from 'react-icons/ri';
import { RiHeartAddLine } from 'react-icons/ri';
import Share from '../../../assets/svg/open_in_new.svg';

// 會員
import { useAuth } from '../../../utils/use_auth';

// 購物車
import { useCart } from '../../../utils/use_cart';

// 收藏
import { useLiked } from '../../../utils/use_liked';

function Product() {
    // 是否正在載入資料的旗標, true = 載入資料中
    const [isLoading, setIsLoading] = useState(false);
    // 商品 伺服器來的資料
    const [product, setProduct] = useState([]);
    const [productImgs, setProductImgs] = useState([]);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [count, setCount] = useState(1);

    // 網址上的商品id
    const { productId } = useParams();

    const location = useLocation();

    //會員登入狀態判斷
    useEffect(() => {
        async function getMember() {
            try {
                // console.log('檢查是否登入');
                let response = await axios.get(`${API_URL}/auth`, {
                    withCredentials: true,
                });
                // console.log('已登入', response.data);
                setIsLogin(true);
                setMember(response.data);
            } catch (err) {
                // navigate('/');
                console.log(err.response.data.message);
            }
        }
        getMember();
    }, []);

    // 取得商品 api
    useEffect(() => {
        // 開啟載入指示動畫
        setIsLoading(true);
        try {
            let params = new URLSearchParams(location.search);
            let mainId = params.get('main_id');
            let getProductDetail = async () => {
                let response = await axios.get(
                    `${API_URL}/products/${productId}?mainId=${mainId}`
                );
                setProduct(response.data.data);
                let imgData = response.data.dataImg[0];
                imgData = Object.keys(imgData).map((key) => {
                    return imgData[key];
                });
                // console.log(imgData);
                setProductImgs(imgData);
                setRelatedProducts(response.data.relatedProducts);
                window.scrollTo({
                    top: 0,
                    left: 0,
                });
            };
            getProductDetail();
        } catch (err) {
            console.log(err.response.data.message);
        }
        // 2秒後關起動畫呈現資料
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, [location]);

    const productCount = (props) => {
        const {
            user_id,
            product_id,
            category_id,
            image,
            name,
            price,
            spec,
            shipment,
            stock,
        } = props;
        if (stock !== 0) {
            return (
                <>
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
                                    <h6 className="fw-400">轉帳匯款</h6>
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
                                    <h6 className="fw-400">信用卡</h6>
                                </label>
                            </div>
                            <div className="form-check m-2">
                                <input
                                    className="form-check-input d-block me-2"
                                    type="radio"
                                    value=""
                                    name="flexRadioDefault"
                                    id="flexRadioDefault1"
                                    checked
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="flexRadioDefault1"
                                >
                                    <h6 className="fw-400">LINE Pay</h6>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <h3 className="accent-color fw-bold productDetail-price-letter-spacing my-3">
                            NT $ {price}
                        </h3>
                    </div>
                    <div className="d-flex align-items-center mt-2 flex-row justify-content-center justify-content-md-start">
                        <div className="d-flex align-items-center mt-2">
                            <h6 className="mb-0 me-2 productDetail-line-height fw-400">
                                數量：
                            </h6>
                            <div className="d-flex  align-items-center">
                                <FiMinus
                                    size="30px"
                                    className="gary-dark-color cursor-pointer"
                                    onClick={() =>
                                        count > 0
                                            ? setCount(count - 1)
                                            : setCount(0)
                                    }
                                />
                                <div className="product-purchase-quantity border border-2 mx-2">
                                    <h4 className="text-center m-0">{count}</h4>
                                </div>
                                <FiPlus
                                    size="30px"
                                    className="gary-dark-color cursor-pointer"
                                    onClick={() =>
                                        stock > count
                                            ? setCount(count + 1)
                                            : setCount(count)
                                    }
                                />
                            </div>
                            <p className="mb-0 ms-2 gary-light-color">
                                {stock === count
                                    ? '目前為庫存上限'
                                    : '庫存充足'}
                            </p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <button
                            className="col m-2 btn btn-primary productDetail-btn d-flex justify-content-center align-items-center"
                            onClick={() => {
                                getImmediate([
                                    {
                                        user_id,
                                        product_id,
                                        category_id,
                                        stock,
                                        amount: count,
                                    },
                                ]);
                            }}
                        >
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
                                getCheck({
                                    product_id,
                                    category_id,
                                    image,
                                    name,
                                    amount: count,
                                    price,
                                    spec,
                                    shipment,
                                    stock,
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
                </>
            );
        } else {
            return (
                <>
                    <button
                        className="col my-2 py-2 btn btn-danger productDetail-btn d-flex justify-content-center align-items-center"
                        disabled="disabled"
                    >
                        <h6 className="d-block accent-light-color text-center">
                            熱銷缺貨中
                        </h6>
                    </button>
                </>
            );
        }
    };

    // Toggled
    const [productCompare, setProductCompare] = useState(false);
    const toggleProductCompare = () => setProductCompare(!productCompare);

    // 比較
    let compareLocal = JSON.parse(localStorage.getItem('compare'));
    // 存入比較的商品資料
    const [compareProduct, setCompareProduct] = useState(compareLocal);
    // 存localStorage
    const setNewCompareLocal = (newCompareLocal) => {
        //塞資料進去
        localStorage.setItem('compare', JSON.stringify(newCompareLocal));
    };
    if (!localStorage.getItem('compare')) {
        localStorage.setItem('compare', JSON.stringify([]));
        setCompareProduct([]);
    }
    function getCompare(compareItem) {
        let newCompareItem = [];
        // 確認有沒有重複，有重複則不加入
        newCompareItem = compareProduct.find((value) => {
            return value.product_id === compareItem.product_id;
        });
        if (!newCompareItem) {
            // 存入比較的商品資料
            setNewCompareLocal([{ ...compareItem }, ...compareProduct]);
            // 存localStorage
            setCompareProduct([{ ...compareItem }, ...compareProduct]);
            successSmallToast.fire({
                icon: 'success',
                iconColor: '#86a8ae',
                color: '#00323d',
                title: '加入比較項目成功!',
            });
        }
        if (newCompareItem) {
            successSmallToast.fire({
                icon: 'warning',
                iconColor: '#767676',
                color: '#00323d',
                title: '已加入比較項目中!',
            });
        }
    }

    //會員
    const { member, setMember, isLogin, setIsLogin } = useAuth();
    const navigate = useNavigate();
    //購物車
    const { shopCartState, setShopCartState, shoppingCart, setShoppingCart } =
        useCart();
    //存localStorage
    const setNewLocal = (newLocal) => {
        //塞資料進去
        localStorage.setItem('shoppingCart', JSON.stringify(newLocal));
    };
    //加入購物車
    function getCheck(itemInfo) {
        // console.log('get Member', member);
        // console.log('itemInfo detail', itemInfo);
        let stock = itemInfo.stock;
        let amount = itemInfo.amount;
        if (stock < amount) {
            setShopCartState(false);
            return errorToast('暫無庫存', '關閉');
        }
        //確認有沒有重複
        let newItemInfo = shoppingCart.find((v) => {
            return v.product_id === itemInfo.product_id;
        });

        if (!newItemInfo) {
            setShopCartState(true);
            //臨時購物車
            // setShoppingCart([{ ...itemInfo }, ...shoppingCart]);
            //localStorage;
            setNewLocal([{ ...itemInfo }, ...shoppingCart]);
            //判斷是否為登入;
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
                            `${API_URL}/member/mycart/single`,
                            itemsData
                        );
                        // console.log('duplicate', response.data.duplicate);
                        if (response.data.duplicate === 1) {
                            warningToast(response.data.message, '關閉');
                            setShoppingCart([...shoppingCart]);
                            return;
                        }
                        successToast(response.data.message, '關閉');
                    } catch (err) {
                        console.log(err.response.data.message);
                    }
                }
            }
            //未登入者提示
            successToast('成功加入購物車', '關閉');
            //臨時購物車
            setShoppingCart([{ ...itemInfo }, ...shoppingCart]);
            return;
        }
        successToast('成功加入購物車', '關閉');
    }
    //立即購買
    function getImmediate(itemInfo) {
        if (member === null || member.id === '') {
            basicAlert('請先登入', '關閉');
            return;
        }
        let stock = itemInfo[0].stock;
        let amount = itemInfo[0].amount;
        if (stock < amount) {
            return errorToast('暫無庫存', '關閉');
        }
        // console.log('itemsData', itemInfo);
        setItemsData(itemInfo);
        async function setItemsData(itemsData) {
            //要做後端資料庫裡是否重複 重複則請去去購物車修改數量
            try {
                let response = await axios.post(
                    `${API_URL}/member/mycart/single`,
                    itemsData
                );
                // console.log('duplicate', response.data.duplicate);
                if (response.data.duplicate === 1) {
                    warningToast(response.data.message, '關閉');
                    setShoppingCart([...shoppingCart]);
                    return;
                }
                successToast(response.data.message, '關閉');
                navigate('/member/mycart');
            } catch (err) {
                console.log(err.response.data.message);
            }
        }
    }

    // 收藏
    const { favProducts, setFavProducts } = useLiked();

    // 新增收藏
    const handleAddFavorite = (itemsData) => {
        if (itemsData.user_id !== null && itemsData.user_id !== '') {
            setItemsData(itemsData);
            async function setItemsData(itemsData) {
                try {
                    let response = await axios.post(
                        `${API_URL}/member/mybucketlist`,
                        [itemsData]
                    );
                    let products = response.data.product.map(
                        (item) => item.product_id
                    );
                    successSmallToast.fire({
                        icon: 'success',
                        iconColor: '#86a8ae',
                        color: '#00323d',
                        title: response.data.message,
                    });
                    setFavProducts(products);
                } catch (err) {
                    successSmallToast.fire({
                        icon: 'error',
                        iconColor: '#c59894',
                        color: '#5b322f',
                        title: err.response.data.message,
                    });
                }
            }
        }
    };

    // 取消收藏
    async function handleRemoveFavorite(product_id) {
        let itemsData = [{ user_id: member.id, product_id: product_id }];
        try {
            let response = await axios.delete(
                `${API_URL}/member/mybucketlist/delete`,
                {
                    withCredentials: true,
                    data: itemsData,
                }
            );
            let products = response.data.product.map((item) => item.product_id);
            successSmallToast.fire({
                icon: 'success',
                iconColor: '#86a8ae',
                color: '#00323d',
                title: response.data.message,
            });
            setFavProducts(products);
        } catch (err) {
            successSmallToast.fire({
                icon: 'error',
                iconColor: '#c59894',
                color: '#5b322f',
                title: err.response.data.message,
            });
        }
    }

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <Container className="productDetail-mobile">
                    {/* 麵包屑 */}
                    <div className="d-flex px-3">
                        <BreadCrumb />
                        {product.map((value) => {
                            return (
                                <p
                                    className="m-0 py-2 d-block align-items-center"
                                    key={uuidv4()}
                                >
                                    &nbsp; {value.name}
                                </p>
                            );
                        })}
                    </div>
                    {/* 麵包屑 end */}
                    <Row>
                        {/* 商品照片 */}
                        <Col lg={6}>
                            <div className="d-flex h-100 align-items-center justify-content-center">
                                <div className="w-100 h-100 p-3">
                                    <ProductCarousel images={productImgs} />
                                </div>
                            </div>
                        </Col>
                        {/* 商品照片 end */}

                        {/* 品名、規格、數量、購買 */}
                        <Col lg={6}>
                            {product.map((value, index) => {
                                return (
                                    <div
                                        className="d-flex flex-column m-3 text-start position-relative"
                                        key={index}
                                    >
                                        <div>
                                            <h4 className="ms-2 mb-2 main-color">
                                                {value.name}
                                            </h4>
                                            <img
                                                src={note}
                                                alt="note"
                                                className="productDetail-note position-absolute d-none d-lg-block"
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
                                                {value.sales ? (
                                                    <h6 className="mb-0 productDetail-line-height fw-400">
                                                        售出件數：{value.sales}
                                                        件
                                                    </h6>
                                                ) : (
                                                    ''
                                                )}
                                            </div>
                                        </div>
                                        <div className="pb-3 align-items-stretch">
                                            <h6 className="col mb-0 productDetail-line-height fw-400">
                                                運送方式：{value.shipmentName}
                                            </h6>
                                        </div>
                                        {productCount({
                                            user_id: member.id,
                                            product_id: value.product_id,
                                            category_id: value.category_id,
                                            image: productImgs[0],
                                            name: value.name,
                                            price: value.price,
                                            spec: value.spec,
                                            shipment: value.shipment,
                                            stock: value.stock,
                                        })}

                                        {/* 收藏、分享、比較 btn */}
                                        <div className="d-flex justify-content-center justify-content-md-start">
                                            {/* 收藏 */}
                                            {member.id ? (
                                                favProducts.includes(
                                                    value.product_id
                                                ) ? (
                                                    <div
                                                        className="d-flex justify-content-center align-items-center cursor-pinter me-5"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            handleRemoveFavorite(
                                                                value.product_id
                                                            );
                                                        }}
                                                    >
                                                        <RiHeartAddFill
                                                            className="plus-icon-size me-2 plus-icon-color  main-color"
                                                            style={{
                                                                fontSize:
                                                                    '30px',
                                                            }}
                                                        />
                                                        <p className="mt-3 collect">
                                                            取消收藏
                                                        </p>
                                                    </div>
                                                ) : (
                                                    <div
                                                        className="d-flex justify-content-center align-items-center cursor-pinter me-5"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            handleAddFavorite({
                                                                user_id:
                                                                    member.id,
                                                                product_id:
                                                                    value.product_id,
                                                                category_id:
                                                                    value.category_id,
                                                            });
                                                        }}
                                                    >
                                                        <RiHeartAddLine
                                                            className="plus-icon-size me-2 plus-icon-color  main-color"
                                                            style={{
                                                                fontSize:
                                                                    '30px',
                                                            }}
                                                        />
                                                        <p className="mt-3 collect">
                                                            收藏
                                                        </p>
                                                    </div>
                                                )
                                            ) : (
                                                ''
                                            )}
                                            {/* 分享 */}
                                            <div className="d-flex justify-content-center align-items-center cursor-pinter ">
                                                <img
                                                    className="me-2 mt-1"
                                                    src={Share}
                                                    alt="Share"
                                                />
                                                <p className="mt-3 share">
                                                    分享
                                                </p>
                                            </div>
                                            {/* 比較 */}
                                            <div
                                                className="d-flex justify-content-center align-items-center cursor-pinter my-3 mx-4"
                                                onClick={() =>
                                                    getCompare({
                                                        product_id:
                                                            value.product_id,
                                                        category_id:
                                                            value.category_id,
                                                        image: productImgs[0],
                                                        name: value.name,
                                                        brand: value.brandName,
                                                        color: value.color,
                                                        price: value.price,
                                                        spec: value.spec,
                                                        mainId: value.ins_main_id,
                                                        create_time:
                                                            value.create_time,
                                                        stock: value.stock,
                                                        sales: value.sales,
                                                    })
                                                }
                                            >
                                                <CompareButton className="me-2 mt-1" />
                                                <p className="mt-3 share">
                                                    比較
                                                </p>
                                            </div>
                                        </div>
                                        {/* 收藏、分享、比較 btn end*/}
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
                                key={Math.random()
                                    .toString(36)
                                    .replace('3.', '')}
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
                        {relatedProducts.map((value, index) => {
                            return (
                                <ProductsItem
                                    getCompare={getCompare}
                                    key={uuidv4()}
                                    value={value}
                                />
                            );
                        })}
                    </Row>
                    {/* 商品比較 btn */}
                    <CompareBtn
                        toggleProductCompare={toggleProductCompare}
                        compareProduct={compareProduct}
                    />
                    {/* 比較頁顯示 */}
                    {productCompare ? (
                        <ProductCompare
                            compareProduct={compareProduct}
                            setCompareProduct={setCompareProduct}
                            setProductCompare={setProductCompare}
                        />
                    ) : (
                        ''
                    )}
                </Container>
            )}
        </>
    );
}

export default Product;
