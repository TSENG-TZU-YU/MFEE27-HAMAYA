import React from 'react';
import './styles/productsItem.scss';
import product from '../../../assets/ProductsImg/product.png';
import cartCheck from '../../../assets/ProductsImg/icon/shopping_cart_check.svg';
import compare from '../../../assets/ProductsImg/icon/compare.svg';
import favoriteDefault from '../../../assets/ProductsImg/icon/favorite_default.svg';

function ProductsItem() {
  return (
    <div className="col product">
      <div className="position-relative">
        {/* 商品照片 */}
        <div className="product-img ">
          <div className="img-mask position-absolute"></div>
          <img src={product} className="card-img-top" alt="product" />
        </div>
        <div className="like position-absolute top-0 end-0">
          <img
            src={favoriteDefault}
            alt="favoriteDefault"
            className="favorite-icon me-1 icon-img"
          />
        </div>
        <div className="compare small d-flex justify-content-center align-items-center position-absolute top-0 start-0 m-1">
          <img src={compare} alt="compare" className="product-icon me-1" />
          比較
        </div>
        <button className="btn btn-primary w-100 text-canter cart-check-btn position-absolute bottom-0 end-0">
          <img src={cartCheck} alt="cartCheck" className="product-icon me-1" />
          加入購物車
        </button>
      </div>
      <div className="product-body">
        {/* 品名 */}
        <p className="product-name mt-2">YAMAHA U系列 U1</p>
        {/* 價格 */}
        <p className="price accent-color">NT $5,000</p>
      </div>
    </div>
  );
}

export default ProductsItem;
