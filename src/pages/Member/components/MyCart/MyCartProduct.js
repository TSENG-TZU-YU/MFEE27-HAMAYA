import React from 'react';
import './MyCart.scss';
import { ReactComponent as AshBin } from '../../../../assets/svg/delete.svg';
import { ReactComponent as FavDefault } from '../../../../assets/svg/favorite_defaut.svg';
import { RiAddFill } from 'react-icons/ri';
import { RiSubtractFill } from 'react-icons/ri';

function MyCartProduct({ myCart }) {
    const myCartList = myCart.myCart;
    const myCart_cateA = myCartList.filter((v) => {
        return v.category_id === 'A';
    });
    console.log(myCart_cateA);
    return (
        <>
            {myCart_cateA.map((item) => {
                return (
                    <tr key={item.product_id}>
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
                                        src={require(`../../../../album/products/${item.image}`)}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </td>
                        <td align="center">
                            <div className="d-flex flex-column align-items-lg-start pt-lg-2">
                                <span className="p main-color">
                                    <b>{item.name}</b>
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
                                <span>NT ${item.price}</span>
                            </div>
                        </td>
                        <td align="center" className="align-middle">
                            <div className="d-inline-block">
                                <button className="btn border-0">
                                    <RiSubtractFill size="20" />
                                </button>
                                <div className="countBox">{item.amount}</div>
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
                );
            })}
        </>
    );
}

export default MyCartProduct;
