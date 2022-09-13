import React, { useState } from 'react';
import { useCart } from '../../utils/use_cart';
import './Cart.scss';
import ashBin from '../../assets/svg/delete.svg';
//修改 CheckOut 顏色
import { ReactComponent as CheckOut } from '../../assets/svg/shopping_cart_checkout.svg';
import img from '../../album/products/mars.jpeg';

function Cart() {
    // const { productArr } = useCart();
    const { shopCartState, setShopCartState, shoppingCart, setShoppingCart } =
        useCart();
    console.log('shoppingCart in Cart', shoppingCart);

    // console.log(testShoppingCart);
    // let newShoppingCart = testShoppingCart.index
    // category_id:"A"
    // image:"StageCustomBirch-01.webp"
    // name:"Stage-Custom-Birch"
    // price:42000
    // product_id:"A345"
    // shipment:1
    // spec:"材質:樺木"

    // let newShoppingCart = testShoppingCart.find((item, index, arr) => {

    // });
    // console.log('test newShoppingCart', newShoppingCart);

    function handleRemoveItem(itemId) {
        //取得localStorage內容
        let shoppingCartLocal = JSON.parse(
            localStorage.getItem('shoppingCart')
        );
        // console.log('shoppingCart', shoppingCartLocal);
        //移除
        let removeItem = shoppingCartLocal.filter((item) => {
            return item.product_id !== itemId;
        });
        //存回localStorage
        localStorage.setItem('shoppingCart', JSON.stringify(removeItem));
        setShoppingCart(removeItem);
    }
    //如果臨時購物車商品為0 則關閉
    if (shoppingCart.length === 0) {
        setShopCartState(false);
    }
    return (
        <div className="position-relative">
            <div className="shoppingCart p-2">
                <div className="d-flex justify-content-between align-items-baseline shoppingCartTitle pb-2">
                    <span className="main-color">
                        <b className="">購物車</b>
                    </span>
                    <span className="minimum main-gary-light-color">
                        共有{shoppingCart.length}件商品
                    </span>
                    <span className="minimum">總金額:NT $000000</span>
                </div>
                <div className="scrollStyle overflow-auto pb-2">
                    {shoppingCart.map((item, index) => {
                        return (
                            <div
                                className="shoppingCartItem d-flex py-2"
                                key={Math.random()
                                    .toString(36)
                                    .replace('3.', '')}
                            >
                                {/* <img
                                    className="shoppingCartItemImg mx-3"
                                    src={require(`../../album/products/${item.image}`)}
                                    alt=""
                                /> */}
                                <div className="d-flex flex-column">
                                    <span className="small main-color mb-5">
                                        {item.name}
                                    </span>
                                    <span className="small gary-dark-color">
                                        數量:{1}
                                    </span>
                                    <span className="small gary-dark-color">
                                        價錢:{item.price}
                                    </span>
                                </div>
                                <button
                                    className="border-0 btn ms-auto"
                                    onClick={() => {
                                        // console.log(item.product_id);
                                        handleRemoveItem(item.product_id);
                                    }}
                                >
                                    <img src={ashBin} alt="" />
                                </button>
                            </div>
                        );
                    })}
                    {/* <div className="shoppingCartItem d-flex py-2">
                        <img
                            className="shoppingCartItemImg mx-3"
                            src={img}
                            alt=""
                        />
                        <div className="d-flex flex-column">
                            <span className="small main-color mb-5">
                                YAMAHA U系列 U1...
                            </span>
                            <span className="small gary-dark-color">
                                數量:1
                            </span>
                            <span className="small gary-dark-color">
                                價錢:5000
                            </span>
                        </div>
                        <button className="border-0 btn">
                            <img src={ashBin} alt="" />
                        </button>
                    </div> */}
                </div>
                <div className="pt-2">
                    <button className="border-0 bg-main-color checkOutBtn py-2">
                        <CheckOut className="checkOutIcon" />
                        <span className="px-2">訂單結帳</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Cart;
