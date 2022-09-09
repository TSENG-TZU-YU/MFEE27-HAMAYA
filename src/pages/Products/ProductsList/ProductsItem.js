import React from 'react';
import { Link } from 'react-router-dom';

// 樣式
import './styles/productsItem.scss';

// 元件
import Favorite from '../../../components/Favorite';

// 圖檔
import product from '../../../assets/ProductsImg/product.png';
import cartCheck from '../../../assets/ProductsImg/icon/shopping_cart_check.svg';
import compare from '../../../assets/ProductsImg/icon/compare.svg';

function ProductsItem() {
    return (
        <div className="col product">
            <div className="position-relative">
                {/* 商品照片 */}
                <Link to=":productId" className="product-img d-block">
                    <div className="product-img-mask position-absolute"></div>
                    <img src={product} className="card-img-top" alt="product" />
                </Link>
                <div className="product-like position-absolute top-0 end-0">
                    <Favorite />
                </div>
                <div className="product-compare small d-flex justify-content-center align-items-center position-absolute top-0 start-0 m-1">
                    <img
                        src={compare}
                        alt="compare"
                        className="product-icon me-1"
                    />
                    比較
                </div>
                <button className="btn btn-primary w-100 text-canter product-cart-check-btn position-absolute bottom-0 end-0">
                    <img
                        src={cartCheck}
                        alt="cartCheck"
                        className="product-icon me-1"
                    />
                    加入購物車
                </button>
            </div>
            <div className="product-body">
                {/* 品名 */}
                <Link to=":productId" className="product-name">
                    YAMAHA U系列 U1
                </Link>
                {/* 價格 */}
                <p className="product-price accent-color">NT $5,000</p>
            </div>
        </div>
    );
}

export default ProductsItem;
