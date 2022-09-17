import React from 'react';
import '../MyCart.scss';
import axios from 'axios';
import { API_URL } from '../../../../../utils/config';
import { useAuth } from '../../../../../utils/use_auth';
import { useCart } from '../../../../../utils/use_cart';
import { ReactComponent as AshBin } from '../../../../../assets/svg/delete.svg';
import { ReactComponent as FavDefault } from '../../../../../assets/svg/favorite_defaut.svg';
import { RiAddFill } from 'react-icons/ri';
import { RiSubtractFill } from 'react-icons/ri';

function MyCartProduct({ myCart, setMyCart, myCartA, setMyCartA }) {
    const { member, setMember, isLogin, setIsLogin } = useAuth();
    const { shopCartState, setShopCartState, shoppingCart, setShoppingCart } =
        useCart();

    //進行刪除及時更新
    async function handleRemoveItem(itemId) {
        console.log('click');
        if (member !== null && member.id !== '') {
            //讀資料庫 進行刪除 還必須確認資料庫有無東西
            let setItemDataDelete = async () => {
                let response = await axios.delete(`${API_URL}/member/mycart`, {
                    data: {
                        user_id: member.id,
                        product_id: itemId,
                    },
                });
                // console.log('刪除response.data', response.data);
                alert(response.data.message);
                //copy另一個myCart
                let newMyCart = myCart.map((item) => {
                    return { ...item };
                });
                //前端刪除狀態
                let newMyCartAfterDelete = newMyCart.filter((item) => {
                    return item.product_id !== itemId;
                });
                //set狀態回去 TODO:AB再調整
                const myCart_cateA = newMyCartAfterDelete.filter((v) => {
                    return v.category_id === 'A';
                });
                setMyCartA(myCart_cateA);
                setMyCart(newMyCartAfterDelete);
            };
            setItemDataDelete();
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
                                        value=""
                                        id=""
                                    />
                                </div>
                                <div className="flex-lg-grow-1">
                                    <img
                                        className="myCart-Img myCart-contain"
                                        src={require(`../../../../../album/products/${item.image}`)}
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
