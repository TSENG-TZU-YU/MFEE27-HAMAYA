import React, { useState } from 'react';

// 樣式
import './index.scss';

// 元件
import ProductsList from './ProductsList';
import ProductCompare from './ProductCompare';

// 圖檔
import banner from '../../assets/ProductsImg/banner.png';
import compareBtn from '../../assets/ProductsImg/icon/compare_btn.svg';

function Products() {
    // Toggled
    const [productCompare, setProductCompare] = useState(false);
    const toggleProductCompare = () => setProductCompare(!productCompare);

    return (
        <>
            <img className="img-fluid" src={banner} alt="banner" />

            <div className="container">
                <ProductsList />

                {/* 商品比較 btn */}
                <img
                    src={compareBtn}
                    alt="compareBtn"
                    className="d-blok compare-btn m-4 cursor-pointer"
                    onClick={toggleProductCompare}
                />
                <div className="compare-quantity">0</div>
                {/* 商品比較 btn end */}
            </div>
            {productCompare ? (
                <ProductCompare setProductCompare={setProductCompare} />
            ) : (
                ''
            )}
        </>
    );
}

export default Products;
