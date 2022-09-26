import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../../utils/config';

// 元件
import {
    successToast,
    warningToast,
    errorToast,
    successSmallToast,
} from '../../../components/Alert';

// 圖檔
import cartCheck from '../../../assets/ProductsImg/icon/shopping_cart_check.svg';
import compare from '../../../assets/ProductsImg/icon/compare.svg';
import { ReactComponent as HeartLine } from '../../../assets/svg/favorite_defaut.svg';
import { ReactComponent as HeartFill } from '../../../assets/svg/favorite_check.svg';

//會員
import { useAuth } from '../../../utils/use_auth';

//購物車
import { useCart } from '../../../utils/use_cart';

// 收藏
import { useLiked } from '../../../utils/use_liked';

function ProductsItem({
    value: {
        product_id,
        category_id,
        ins_main_id,
        image,
        name,
        price,
        brandName,
        color,
        spec,
        stock,
        create_time,
    },
    getCompare,
}) {
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

    //加入購物車
    function getCheck(itemInfo) {
        // console.log('get Member', member);
        // console.log('itemInfo', itemInfo);
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
            //臨時購物車
            setShoppingCart([{ ...itemInfo }, ...shoppingCart]);
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
                console.log('itemsData', itemsData);
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
                        setShopCartState(true);
                        successToast(response.data.message, '關閉');
                    } catch (err) {
                        console.log(err.response.data.message);
                    }
                }
            }
            successToast('成功加入購物車', '關閉');
            //臨時購物車
            setShoppingCart([{ ...itemInfo }, ...shoppingCart]);
            return;
        }
        successToast('成功加入購物車', '關閉');
    }

    // 收藏
    const { favProducts, setFavProducts } = useLiked();

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
        <div className="col product">
            <div className="position-relative">
                {/* 商品照片 */}
                <Link
                    to={`/products/${product_id}?main_id=${ins_main_id}`}
                    className="product-img d-block"
                >
                    <div className="product-img-mask position-absolute"></div>
                    <img
                        src={require(`../../../album/products/${image}`)}
                        className="card-img-top"
                        alt="product"
                    />
                </Link>
                <div className="product-like position-absolute top-0 end-0">
                    {member.id ? (
                        favProducts.includes(product_id) ? (
                            <div
                                className="favorite-box bg-accent-light-color rounded-circle position-relative"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleRemoveFavorite(product_id);
                                }}
                            >
                                <HeartFill className="favorite-icon-color favorite-icon-size position-absolute top-50 start-50 translate-middle" />
                            </div>
                        ) : (
                            <div
                                className="favorite-box bg-accent-light-color rounded-circle position-relative"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleAddFavorite({
                                        user_id: member.id,
                                        product_id: product_id,
                                        category_id: category_id,
                                    });
                                }}
                            >
                                <HeartLine className="favorite-icon-color favorite-icon-size position-absolute top-50 start-50 translate-middle" />
                            </div>
                        )
                    ) : (
                        ''
                    )}
                </div>
                <div
                    className="product-compare small d-flex justify-content-center align-items-center position-absolute top-0 start-0 m-2"
                    onClick={() =>
                        getCompare({
                            product_id: product_id,
                            category_id: category_id,
                            image: image,
                            name: name,
                            brand: brandName,
                            color: color,
                            price: price,
                            spec: spec,
                            mainId: ins_main_id,
                            create_time: create_time,
                            stock: stock,
                        })
                    }
                >
                    <img
                        src={compare}
                        alt="compare"
                        className="product-icon me-1"
                    />
                    比較
                </div>
                <button
                    className="btn btn-primary w-100 text-canter product-cart-check-btn position-absolute bottom-0 end-0"
                    onClick={() => {
                        getCheck({
                            product_id: product_id,
                            category_id: category_id,
                            image: image,
                            name: name,
                            amount: 1,
                            price: price,
                            spec: spec,
                            stock: stock,
                        });
                    }}
                >
                    <img
                        src={cartCheck}
                        alt="cartCheck"
                        className="product-icon me-1"
                    />
                    加入購物車
                </button>
            </div>
            <div className="product-body py-2">
                {/* 品名 */}
                <Link
                    to={`/products/${product_id}?main_id=${ins_main_id}`}
                    className="product-name"
                >
                    {name}
                </Link>
                {/* 價格 */}
                <h1 className="product-price accent-color">NT ${price}</h1>
            </div>
        </div>
    );
}

export default ProductsItem;
