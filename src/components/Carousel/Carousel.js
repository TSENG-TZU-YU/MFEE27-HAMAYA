import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Carousel.scss';
import product from '../../assets/ProductsImg/product-detail1.png';

function Carousel() {
    const responsive = {
        0: { items: 1 },
    };
    const items = [
        <div className="item" data-value="1">
            <img src={product} alt="product" />
        </div>,
        <div className="item" data-value="2">
            <img src={product} alt="product" />
        </div>,
        <div className="item" data-value="3">
            <img src={product} alt="product" />
        </div>,
    ];
    return (
        <>
            <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
                // controlsStrategy="alternate"
            />
        </>
    );
}

export default Carousel;
