import React from 'react';
import '../MyCart.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../../../../../utils/config';
import { useAuth } from '../../../../../utils/use_auth';
import { useCart } from '../../../../../utils/use_cart';
import { ReactComponent as AshBin } from '../../../../../assets/svg/delete.svg';
import { ReactComponent as HeartLine } from '../../../../../assets/svg/favorite_defaut.svg';
import { ReactComponent as HeartFill } from '../../../../../assets/svg/favorite_check.svg';
import MyCartCount from './MyCartCount';
import {
    successToast,
    successSmallToast,
} from '../../../../../components/Alert';

function MyCartProduct({
    myCart,
    setMyCart,
    myCartA,
    setMyCartA,
    myCartInfo,
    setMyCartInfo,
    setHiddenState,
    check,
    setCheck,
    handleCheckBox,
    favA,
    setFavA,
}) {
    const { member } = useAuth();
    const { shopCartState, setShopCartState, shoppingCart, setShoppingCart } =
        useCart();
    // console.log('mycart product', myCartInfo);
    //進行刪除
    function handleRemoveItem(itemId) {
        // console.log('click');
        if (member !== null && member.id !== '') {
            //取得localStorage內容
            let shoppingCartLocal = JSON.parse(
                localStorage.getItem('shoppingCart')
            );
            //確保臨時購物車沒有按結帳 以至於購物車刪除臨時購物車卻還存在
            if (shoppingCartLocal) {
                //移除
                let removeItem = shoppingCartLocal.filter((item) => {
                    return item.product_id !== itemId;
                });
                //存回localStorage
                localStorage.setItem(
                    'shoppingCart',
                    JSON.stringify(removeItem)
                );
                setShoppingCart(removeItem);
            }

            //刪除購物車在資料庫的資料 確認資料庫有無東西
            let setItemDataDelete = async () => {
                let response = await axios.delete(`${API_URL}/member/mycart`, {
                    data: [[member.id, itemId]],
                });
                // console.log('刪除response.data', response.data);
                successToast(response.data.message, '關閉');
                //copy另一個myCart
                let newMyCart = myCart.map((item) => {
                    return { ...item };
                });
                //前端刪除狀態
                let newMyCartAfterDelete = newMyCart.filter((item) => {
                    return item.product_id !== itemId;
                });
                //set狀態回去
                const myCart_cateA = newMyCartAfterDelete.filter((v) => {
                    return v.category_id === 'A';
                });
                // console.log('myCart_cateA', myCart_cateA);
                setMyCartA(myCart_cateA);
                setMyCart(newMyCartAfterDelete);
                if (newMyCartAfterDelete.length === 0) {
                    setHiddenState(false);
                }
                if (myCart_cateA.length === 0) {
                    setMyCartInfo({ ...myCartInfo, freight: 0 });
                }
            };
            setItemDataDelete();
        }
    }

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
                    setFavA(products);
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
            setFavA(products);
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
            {myCartA.map((item) => {
                let itemPriceTotal = item.amount * item.price;
                return (
                    <tr key={item.product_id}>
                        <td data-title="樂器商城" align="center">
                            <div className="d-flex justify-content-lg-between p-lg-0 pt-2">
                                <div className="align-self-center">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value={item.product_id}
                                        checked={check.includes(
                                            item.product_id
                                        )}
                                        onChange={(e) => {
                                            handleCheckBox(e);
                                        }}
                                    />
                                </div>
                                <div className="flex-lg-grow-1">
                                    <Link
                                        to={`/products/${item.product_id}?main_id=${item.ins_main_id}`}
                                    >
                                        <img
                                            className="myCart-Img myCart-contain"
                                            src={require(`../../../../../album/products/${item.image}`)}
                                            alt=""
                                        />
                                    </Link>
                                </div>
                            </div>
                        </td>
                        <td align="center">
                            <div className="d-flex flex-column align-items-lg-start pt-lg-2">
                                <div>
                                    <Link
                                        to={`/products/${item.product_id}?main_id=${item.ins_main_id}`}
                                    >
                                        <span className="p main-color">
                                            <b>{item.name}</b>
                                        </span>
                                    </Link>
                                </div>
                                <span className="small">
                                    型號：{item.brand_name}
                                </span>
                                <div className="pt-lg-3 d-flex">
                                    {favA.includes(item.product_id) ? (
                                        <HeartFill
                                            className="CartFavorite cursor-pointer"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleRemoveFavorite(
                                                    item.product_id
                                                );
                                            }}
                                        />
                                    ) : (
                                        <HeartLine
                                            className="CartFavorite cursor-pointer"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleAddFavorite({
                                                    user_id: member.id,
                                                    product_id: item.product_id,
                                                    category_id:
                                                        item.category_id,
                                                });
                                            }}
                                        />
                                    )}
                                    <button
                                        className="btn border-0 p-0 ms-3"
                                        onClick={() => {
                                            handleRemoveItem(item.product_id);
                                        }}
                                    >
                                        <AshBin className="myCartItemIcon" />
                                    </button>
                                </div>
                            </div>
                        </td>
                        <td align="center" className="align-middle">
                            <div className="gary-dark">
                                <span className="d-lg-none myCartPriceTitle accent-color">
                                    <b>價錢：</b>
                                </span>
                                <span>NT ${item.price}</span>
                            </div>
                        </td>
                        <td align="center" className="align-middle">
                            {item.stock !== 0 ? (
                                <>
                                    <div className="d-inline-block">
                                        <MyCartCount
                                            count={item.amount}
                                            setCount={(newCount) => {
                                                const newMyCart = myCart.map(
                                                    (v, i) => {
                                                        return item.id === v.id
                                                            ? {
                                                                  ...v,
                                                                  amount: newCount,
                                                              }
                                                            : { ...v };
                                                    }
                                                );
                                                const newMyCartA = myCartA.map(
                                                    (v, i) => {
                                                        return item.id === v.id
                                                            ? {
                                                                  ...v,
                                                                  amount: newCount,
                                                              }
                                                            : { ...v };
                                                    }
                                                );
                                                setMyCartA(newMyCartA);
                                                setMyCart(newMyCart);
                                            }}
                                        />
                                    </div>
                                    <p className="accent-color minimum m-0">
                                        剩餘庫存:{item.stock}
                                    </p>
                                </>
                            ) : (
                                <h6 className="m-0 accent-color">
                                    <b>熱銷缺貨中</b>
                                </h6>
                            )}
                        </td>
                        <td align="center" className="align-middle ">
                            <div className="gary-dark">
                                <span className="d-lg-none myCartPriceTitle accent-color">
                                    <b>小計：</b>
                                </span>
                                <span>NT ${itemPriceTotal}</span>
                            </div>
                        </td>
                    </tr>
                );
            })}
        </>
    );
}

export default MyCartProduct;
