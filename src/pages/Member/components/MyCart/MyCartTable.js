import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../../../utils/config';
import { useAuth } from '../../../../utils/use_auth';

import productImg from '../../../../album/products/FP-90-3.png';
import classPic from '../../../../assets/ClassImg/Adult img.png';
import './MyCart.scss';
import { ReactComponent as AshBin } from '../../../../assets/svg/delete.svg';
import { ReactComponent as FavDefault } from '../../../../assets/svg/favorite_defaut.svg';
import { RiAddFill } from 'react-icons/ri';
import { RiSubtractFill } from 'react-icons/ri';
import MyCartProduct from './MyCartProduct';

function MyCartTable() {
    const { member, setMember, isLogin, setIsLogin } = useAuth();
    const [myCart, setMyCart] = useState(null);

    const id = member.id;
    useEffect(() => {
        async function getMyCart() {
            try {
                let response = await axios.get(`${API_URL}/cart/${id}`);
                console.log('mycart', response.data);

                setMyCart(response.data);
            } catch (err) {
                console.log('錯誤', err.response.data.message);
            }
        }
        getMyCart();
    }, []);
    if (myCart) {
        console.log('資料大於0有資料 等於0則無', myCart.items_amount);
        console.log('list', myCart.myCart);
        const myCartList = myCart.myCart;
        // const myCart_cateA = myCartList.filter((v) => {
        //     return v.category_id === 'A';
        // });
        // console.log(myCart_cateA);
        const myCart_cateB = myCartList.filter((v) => {
            return v.category_id === 'B';
        });
        console.log(myCart_cateB);
    }
    return (
        <>
            <table className="table m-0 myCartTable">
                <thead>
                    <tr className="text-center accent-light-color bg-main-color">
                        <th className="myCartThWidth">樂器商城</th>
                        <th>商品名稱</th>
                        <th>價格</th>
                        <th>數量</th>
                        <th>小計</th>
                    </tr>
                </thead>
                <tbody>
                    {myCart ? (
                        <MyCartProduct myCart={myCart} />
                    ) : (
                        '樂器商城購物車沒有產品'
                    )}
                    {/* <tr>
                        <td data-title="樂器商城" align="center">
                            <div className="d-flex justify-content-lg-between p-lg-0 pt-2">
                                <div className="align-self-center">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id=""
                                    />
                                </div>
                                <div className="flex-lg-grow-1">
                                    <img
                                        className="myCart-Img myCart-contain"
                                        src={productImg}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </td>
                        <td align="center">
                            <div className="d-flex flex-column align-items-lg-start pt-lg-2">
                                <span className="p main-color">
                                    <b></b>
                                </span>
                                <span className="small">型號：aNueNue-M2</span>
                                <div className="pt-lg-3 d-inline">
                                    <button className="btn border-0 p-0">
                                        <FavDefault className="myCartItemIconFav " />
                                    </button>
                                    <button className="btn border-0 p-0 ms-3">
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
                                <span>NT $item.price</span>
                            </div>
                        </td>
                        <td align="center" className="align-middle">
                            <div className="d-inline-block">
                                <button className="btn border-0">
                                    <RiSubtractFill size="20" />
                                </button>
                                <div className="countBox">item.amount</div>
                                <button className=" btn border-0">
                                    <RiAddFill size="20" />
                                </button>
                            </div>
                        </td>
                        <td align="center" className="align-middle ">
                            <div className="gary-dark">
                                <span className="d-lg-none myCartPriceTitle accent-color">
                                    <b>小計：</b>
                                </span>
                                <span>NT $100000</span>
                            </div>
                        </td>
                    </tr> */}
                </tbody>
            </table>
            <table className="table m-0 myCartTable myCartTableClass">
                <thead>
                    <tr className="text-center accent-light-color bg-main-color">
                        <th className="myCartThWidth">音樂教育</th>
                        <th>商品名稱</th>
                        <th>價格</th>
                        <th>數量</th>
                        <th>小計</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td data-title="音樂課程" align="center">
                            <div className="d-flex justify-content-lg-between p-lg-0 pt-2">
                                <div className="align-self-center">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id=""
                                    />
                                </div>
                                <div className="flex-lg-grow-1">
                                    <img
                                        className="myCart-Img myCart-contain"
                                        src={classPic}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </td>
                        <td align="center">
                            <div className="d-flex flex-column align-items-lg-start pt-lg-2">
                                <span className="p main-color">
                                    <b> YAMAHA U系列 U1</b>
                                </span>
                                <div className="pt-lg-3 d-inline">
                                    <button className="btn border-0 p-0">
                                        <FavDefault className="myCartItemIconFav " />
                                    </button>
                                    <button className="btn border-0 p-0 ms-3">
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
                                <span>NT $100000</span>
                            </div>
                        </td>
                        <td align="center" className="align-middle">
                            <div className="d-inline-block">
                                <button className="btn border-0">
                                    <RiSubtractFill size="20" />
                                </button>
                                <div className="countBox">1</div>
                                <button className=" btn border-0">
                                    <RiAddFill size="20" />
                                </button>
                            </div>
                        </td>
                        <td align="center" className="align-middle ">
                            <div className="gary-dark">
                                <span className="d-lg-none myCartPriceTitle accent-color">
                                    <b>小計：</b>
                                </span>
                                <span>NT $100000</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td data-title="音樂課程" align="center">
                            <div className="d-flex justify-content-lg-between p-lg-0 pt-2">
                                <div className="align-self-center">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id=""
                                    />
                                </div>
                                <div className="flex-lg-grow-1">
                                    <img
                                        className="myCart-Img myCart-contain"
                                        src={classPic}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </td>
                        <td align="center">
                            <div className="d-flex flex-column align-items-lg-start pt-lg-2">
                                <span className="p main-color">
                                    <b> YAMAHA U系列 U1</b>
                                </span>
                                <div className="pt-lg-3 d-inline">
                                    <button className="btn border-0 p-0">
                                        <FavDefault className="myCartItemIconFav " />
                                    </button>
                                    <button className="btn border-0 p-0 ms-3">
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
                                <span>NT $100000</span>
                            </div>
                        </td>
                        <td align="center" className="align-middle">
                            <div className="d-inline-block">
                                <button className="btn border-0">
                                    <RiSubtractFill size="20" />
                                </button>
                                <div className="countBox">1</div>
                                <button className=" btn border-0">
                                    <RiAddFill size="20" />
                                </button>
                            </div>
                        </td>
                        <td align="center" className="align-middle ">
                            <div className="gary-dark">
                                <span className="d-lg-none myCartPriceTitle accent-color">
                                    <b>小計：</b>
                                </span>
                                <span>NT $100000</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default MyCartTable;
