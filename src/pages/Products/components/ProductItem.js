import React from 'react';
import { Link } from 'react-router-dom';

import Favorite from '../../../components/Favorite';
import compare from '../../../assets/ProductsImg/icon/compare.svg';
import cartCheck from '../../../assets/ProductsImg/icon/shopping_cart_check.svg';

function ProductItem(props) {
    const { products, error } = props;

    return (
        <>
            <div className=" row row-cols-2 row-cols-md-3 row-cols-xl-4">
                {error && <div>{error}</div>}
                {products.map((product, i) => {
                    return (
                        <div key={product.id}>
                            <div className="position-relative">
                                {/* 商品照片 */}
                                <Link
                                    to={`/products/${product.product_id}`}
                                    className="product-img d-block"
                                >
                                    <div className="product-img-mask position-absolute"></div>
                                    <img
                                        src={require(`../../../album/products/${product.image}`)}
                                        className="card-img-top"
                                        alt="product"
                                    />
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
                                <Link
                                    to={`/products/${product.product_id}`}
                                    className="product-name"
                                >
                                    {product.name}
                                </Link>
                                {/* 價格 */}
                                <p className="product-price accent-color">
                                    NT ${product.price}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default ProductItem;
