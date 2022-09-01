import React from 'react';
import './Cart.scss';
import ashBin from '../../assets/svg/delete.svg';
//修改 CheckOut 顏色
import { ReactComponent as CheckOut } from '../../assets/svg/shopping_cart_checkout.svg';
import img from '../../album/products/mars.jpeg';

function Cart() {
  return (
    <div className="position-relative">
      <div className="shoppingCart p-2">
        <div className="d-flex justify-content-between align-items-baseline shoppingCartTitle pb-2">
          <span className="main-color">
            <b className="">購物車</b>
          </span>
          <span className="minimum main-gary-light-color">共有?件商品</span>
          <span className="minimum">總金額:NT $000000</span>
        </div>
        <div className="scrollStyle overflow-auto pb-2">
          <div className="shoppingCartItem d-flex py-2">
            <img className="shoppingCartItemImg mx-3" src={img} alt="" />
            <div className="d-flex flex-column">
              <span className="small main-color mb-5">YAMAHA U系列 U1...</span>
              <span className="small gary-dark-color">數量:1</span>
              <span className="small gary-dark-color">價錢:5000</span>
            </div>
            <button className="border-0 btn">
              <img src={ashBin} alt="" />
            </button>
          </div>
          <div className="shoppingCartItem d-flex py-2">
            <img className="shoppingCartItemImg mx-3" src={img} alt="" />
            <div className="d-flex flex-column">
              <span className="small main-color mb-5">YAMAHA U系列 U1...</span>
              <span className="small gary-dark-color">數量:1</span>
              <span className="small gary-dark-color">價錢:5000</span>
            </div>
            <button className="border-0 btn">
              <img src={ashBin} alt="" />
            </button>
          </div>
          <div className="shoppingCartItem d-flex py-2">
            <img className="shoppingCartItemImg mx-3" src={img} alt="" />
            <div className="d-flex flex-column">
              <span className="small main-color mb-5">YAMAHA U系列 U1...</span>
              <span className="small gary-dark-color">數量:1</span>
              <span className="small gary-dark-color">價錢:5000</span>
            </div>
            <button className="border-0 btn">
              <img src={ashBin} alt="" />
            </button>
          </div>
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
