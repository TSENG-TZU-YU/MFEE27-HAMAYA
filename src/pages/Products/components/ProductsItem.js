import React from 'react';
import { Link } from 'react-router-dom';

// 樣式
// import './styles/productsItem.scss';

// 元件
import Favorite from '../../../components/Favorite';

// 圖檔
import product from '../../../assets/ProductsImg/product.png';
import cartCheck from '../../../assets/ProductsImg/icon/shopping_cart_check.svg';
import compare from '../../../assets/ProductsImg/icon/compare.svg';

//購物車
import { useCart } from '../../../utils/use_cart';

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
        create_time,
    },
    getCompare,
}) {
    //購物車
    const { shopItemCart, setShopItemCart } = useCart();
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
                    <Favorite />
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
                        setShopItemCart(true);
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
