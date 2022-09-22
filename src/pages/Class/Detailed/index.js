import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { API_URL } from '../../../utils/config';
import { useAuth } from '../../../utils/use_auth';
import {
    successToast,
    warningToast,
    basicAlert,
} from '../../../components/Alert';
//購物車
import { useCart } from '../../../utils/use_cart';
import {
    successToast,
    warningToast,
    errorToast,
} from '../../../components/Alert';
import './index.scss';

// 收藏
import { useLiked } from '../../../utils/use_liked';

// 子元件
import StarRating from '../../../components/Star/StarRating';
import Information from './Information';
import Comment from './Comment';
import Carousel from '../../../components/Carousel/Carousel';

// 元件
import note from '../../../assets/ClassImg/Note.png';
import shop_car from '../../../assets/svg/shopping_cart.svg';
import cartCheckout from '../../../assets/svg/shopping_cart_checkout.svg';
import Evaluation from '../../../components/Evaluation/Evaluation';

// 圖檔
import { RiHeartAddFill } from 'react-icons/ri';
import { RiHeartAddLine } from 'react-icons/ri';
import Share from '../../../assets/svg/open_in_new.svg';

function Detailed({ ins_main_id }) {
    // 課程 Toggle
    const [detailedSelect, setDetailedSelect] = useState(true);

    // 資料庫 課程
    const [data, setData] = useState([]);
    const [dataImg, setDataImg] = useState([]);
    const [recommendClass, setRecommendClass] = useState([]);

    // 資料庫 評論
    const [evaluation, setEvaluation] = useState([]);

    // 資料庫 評論 平均數
    const [avg, setAvg] = useState([]);

    // 把網址上的 :detailedID 拿出來
    const { detailedID } = useParams();
    // 當 URL 網址改變時useState()會返回一個新的包含有關目前URL的狀態和位置的物件函數。每當URL網址有變更，則 useLocation 資訊也將更新
    const location = useLocation();
    useEffect(() => {
        // 從網址上抓到關鍵字
        let params = new URLSearchParams(location.search);
        let selectClass = params.get('class');
        let getClassDetail = async () => {
            let response = await axios.get(
                `${API_URL}/class/list/${detailedID}?class=${selectClass}`
            );
            setData(response.data.data);
            setRecommendClass(response.data.recommendClass);
            setEvaluation(response.data.evaluation);
            setAvg(response.data.avg);

            let imgData = response.data.dataImg[0];
            // 圖片拆陣列
            imgData = Object.keys(imgData).map((key) => {
                return imgData[key];
            });
            setDataImg(imgData);
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'auto',
            });
        };
        getClassDetail();
    }, [location]);

    useEffect(() => {}, [data]);

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
        console.log('itemInfo class detail', itemInfo);
        //確認有沒有重複
        let newItemInfo = shoppingCart.find((v) => {
            return v.product_id === itemInfo.product_id;
        });

        if (!newItemInfo) {
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
                        amount: 1,
                    };
                });
                console.log('itemsData', itemsData);
                //寫進資料庫
                setItemsData(itemsData);
                async function setItemsData(itemsData) {
                    //要做後端資料庫裡是否重複 重複則請去去購物車修改數量
                    try {
                        let response = await axios.post(
                            `${API_URL}/member/mycart`,
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
            successToast('加入購物車', '關閉');
            //臨時購物車
            setShoppingCart([{ ...itemInfo }, ...shoppingCart]);
            return;
        }
        warningToast('已加入臨時購物車', '關閉');
    }
    //立即報名
    function getImmediate(itemInfo) {
        if (member === null || member.id === '') {
            basicAlert('請先登入', '關閉');
            return;
        }
        // console.log('itemInfo fff', itemInfo);

        console.log('itemsData', itemInfo);
        setItemsData(itemInfo);
        async function setItemsData(itemsData) {
            //要做後端資料庫裡是否重複 重複則請去去購物車修改數量
            try {
                let response = await axios.post(
                    `${API_URL}/member/mycart`,
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

    // 會員收藏的資料
    useEffect(() => {
        let getAllFavProducts = async () => {
            let response = await axios.get(
                `${API_URL}/member/mybucketlist/${member.id}`,
                { withCredentials: true }
            );

            let products = response.data.class.map((item) => item.product_id);
            console.log(products);
            setFavProducts(products);
        };
        if (member.id) {
            getAllFavProducts();
        }
    }, [member]);

    // 新增收藏
    const handleAddFavorite = (itemsData) => {
        console.log(itemsData);
        if (itemsData.user_id !== null && itemsData.user_id !== '') {
            setItemsData(itemsData);
            async function setItemsData(itemsData) {
                try {
                    let response = await axios.post(
                        `${API_URL}/member/mybucketlist`,
                        [itemsData]
                    );
                    let products = response.data.class.map(
                        (item) => item.product_id
                    );
                    successToast(response.data.message, '關閉');
                    setFavProducts(products);
                } catch (err) {
                    errorToast(err.response.data.message, '關閉');
                }
            }
        }
    };

    // 取消收藏
    async function handleRemoveFavorite(product_id) {
        console.log('handleRemoveFavorite', product_id);
        try {
            let response = await axios.delete(
                `${API_URL}/member/mybucketlist/${product_id}`,
                {
                    withCredentials: true,
                }
            );
            let products = response.data.class.map((item) => item.product_id);
            successToast(response.data.message, '關閉');
            setFavProducts(products);
        } catch (err) {
            errorToast(err.response.data.message, '關閉');
        }
    }

    return (
        <div>
            <Container>
                {/* 麵包屑 */}
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
                    /
                    <Link to="/class/list/Detailed">
                        {data.map((classDetailed) => {
                            return (
                                <p className="mb-0 ">{classDetailed.name}</p>
                            );
                        })}
                    </Link>
                </nav>
                {/* 麵包屑 end */}
                {data.map((classDetailed) => {
                    return (
                        <div key={classDetailed.id}>
                            <Row className="mt-5 pt-5  text-center ">
                                {/* 圖檔 */}
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
                                            className="pt-0"
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                padding: '15px',
                                            }}
                                        >
                                            {/* data={data}  */}
                                            {/* images={classImages} */}
                                            <Carousel dataImg={dataImg} />
                                        </div>
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
                                                {classDetailed.name}
                                            </h4>
                                            <div className="border-top border-secondary border-3 px-3 pt-3 "></div>
                                            <img
                                                src={note}
                                                alt="note"
                                                className="position-absolute classDetail-note "
                                            />
                                            <h6 className=" AdultDetailed-line-height mt-4">
                                                {classDetailed.course_intro}
                                            </h6>
                                            <p className="mb-0 AdultDetailed-line-height mt-3">
                                                名額：10 人
                                            </p>
                                            <p className="mb-0 AdultDetailed-line-height">
                                                報名截止：
                                                {classDetailed.deadline}
                                            </p>
                                            <p className="mb-0 AdultDetailed-line-height">
                                                開課時間：{' '}
                                                {classDetailed.start_date} ~
                                                {classDetailed.end_date}
                                            </p>
                                            <p className="mb-0 AdultDetailed-line-height">
                                                師資：{classDetailed.teacher}
                                                老師
                                            </p>
                                            <div className="AdultDetailed-line-height d-flex">
                                                <p className="me-3">
                                                    付款方式：
                                                </p>

                                                <div className=" mt-1 ">
                                                    <div className="form-check d-flex align-items-center">
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
                                                    <div className="form-check  d-flex align-items-center mt-3">
                                                        <input
                                                            className="form-check-input d-block me-2"
                                                            //  type="radio"
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
                                                                {' '}
                                                                信用卡
                                                            </h6>
                                                        </label>
                                                    </div>
                                                    <div className="form-check  d-flex align-items-center mt-3">
                                                        <input
                                                            className="form-check-input d-block me-2"
                                                            //  type="radio"
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
                                            <div className="d-flex mt-4 justify-content-between ">
                                                <div className="d-flex">
                                                    <h3 className="AdultDetailed-price0">
                                                        NT $
                                                        {classDetailed.price}
                                                    </h3>
                                                    <h6 className="AdultDetailed-price me-1">
                                                        / 期
                                                    </h6>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    {avg.map((avg) => {
                                                        return (
                                                            <>
                                                                <div className="StarRating">
                                                                    <Evaluation
                                                                        rating={
                                                                            avg.rating
                                                                        }
                                                                    />
                                                                </div>
                                                                <p className="ms-2 mt-2">
                                                                    {
                                                                        avg.member_id
                                                                    }
                                                                    人評價
                                                                </p>
                                                            </>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                            <Row className=" mt-4">
                                                <button
                                                    className="col m-2 btn btn-primary AdultDetailed-btn d-flex justify-content-center align-items-center border-0"
                                                    onClick={() => {
                                                        getImmediate([
                                                            {
                                                                user_id:
                                                                    member.id,
                                                                product_id:
                                                                    classDetailed.product_id,
                                                                category_id:
                                                                    classDetailed.category_id,
                                                                amount: 1,
                                                            },
                                                        ]);
                                                    }}
                                                >
                                                    <img
                                                        style={{
                                                            width: '30px',
                                                            height: '30px',
                                                        }}
                                                        className="d-block product-icon me-3"
                                                        src={cartCheckout}
                                                        alt="cartCheckout"
                                                    />
                                                    <h6 className="AdultDetailed-car-text-color text-center">
                                                        立即報名
                                                    </h6>
                                                </button>

                                                <button
                                                    className="col m-2 btn btn-primary AdultDetailed-btn d-flex justify-content-center align-items-center border-0"
                                                    onClick={() => {
                                                        setShopCartState(true);
                                                        getCheck(classDetailed);
                                                    }}
                                                >
                                                    <img
                                                        style={{
                                                            width: '30px',
                                                            height: '30px',
                                                        }}
                                                        className="d-block product-icon me-3"
                                                        src={shop_car}
                                                        alt="shop_car"
                                                    />
                                                    <h6 className="AdultDetailed-car-text-color d-block">
                                                        加入購物車
                                                    </h6>
                                                </button>
                                            </Row>

                                            {/* 收藏、分享、比較 btn */}
                                            <div className="d-flex">
                                                {/* 收藏 */}
                                                {member.id ? (
                                                    favProducts.includes(
                                                        classDetailed.product_id
                                                    ) ? (
                                                        <div
                                                            className="d-flex justify-content-center align-items-center cursor-pinter me-5"
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                handleRemoveFavorite(
                                                                    classDetailed.product_id
                                                                );
                                                            }}
                                                        >
                                                            <RiHeartAddFill
                                                                className="me-2 main-color"
                                                                style={{
                                                                    fontSize:
                                                                        '30px',
                                                                }}
                                                            />
                                                            <p className="mt-3 collect">
                                                                收藏
                                                            </p>
                                                        </div>
                                                    ) : (
                                                        <div
                                                            className="d-flex justify-content-center align-items-center cursor-pinter me-5"
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                handleAddFavorite(
                                                                    {
                                                                        user_id:
                                                                            member.id,
                                                                        product_id:
                                                                            classDetailed.product_id,
                                                                        category_id:
                                                                            classDetailed.category_id,
                                                                    }
                                                                );
                                                            }}
                                                        >
                                                            <RiHeartAddLine
                                                                className="me-2 main-color"
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
                                            </div>
                                            {/* 收藏、分享、比較 btn end*/}
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    );
                })}

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
                {detailedSelect ? (
                    <Information data={data} />
                ) : (
                    <Comment evaluation={evaluation} avg={avg} />
                )}
                <div className="  d-flex mt-5  px-0">
                    <h4
                        className=" me-5 text-nowrap fw-bold"
                        style={{ color: '#00323d' }}
                    >
                        推薦課程
                    </h4>
                    {/* border-top border-secondary border-3 px-3 pt-3 me-2 */}
                    <div className=" detailed-vector  mt-3 "></div>
                </div>

                <Row className="mt-5 mb-5 row-cols-1 row-cols-md-2  row-cols-xl-4 ">
                    {recommendClass.map((recommend) => {
                        return (
                            <Link
                                to={`/class/list/${recommend.product_id}?class=${recommend.ins_main_id}`}
                                key={recommend.id}
                            >
                                <Col>
                                    <div
                                        className="card mb-4 mx-auto"
                                        style={{ width: ' 19rem' }}
                                    >
                                        <img
                                            className="card-img-top img-fluid"
                                            style={{
                                                width: '280px',
                                                height: '175px',
                                            }}
                                            src={require(`../../../album/class/${recommend.image_1}`)}
                                            alt="Adult img"
                                        />
                                        <div className="card-body">
                                            <div className=" mt-3 ">
                                                <p
                                                    className="ms-1 mb-2"
                                                    style={{ color: '#00323d' }}
                                                >
                                                    {recommend.name}
                                                </p>
                                                <div className="vector2 me-2"></div>
                                                <div className=" mt-2">
                                                    <small className="mb-0">
                                                        開課時間：
                                                        {recommend.start_date} ~
                                                        {recommend.end_date}
                                                    </small>
                                                    <p className="mb-0">
                                                        名額：10 人
                                                    </p>

                                                    <div className="d-flex mt-2 align-items-center">
                                                        <div className="StarRating">
                                                            <StarRating />
                                                        </div>
                                                        <small className="ms-2  ">
                                                            2 人評價
                                                        </small>
                                                    </div>
                                                    <div className="d-lg-flex justify-content-lg-between align-items-lg-center pt-1">
                                                        <h4
                                                            className=" fw-bold "
                                                            style={{
                                                                color: '#5b322f',
                                                            }}
                                                        >
                                                            NT $
                                                            {recommend.price} /
                                                            期
                                                        </h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Link>
                        );
                    })}
                </Row>

                {/* 相關課程 end */}
            </Container>
        </div>
    );
}

export default Detailed;
