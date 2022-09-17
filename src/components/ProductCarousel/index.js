import React, { useState } from 'react';

// 樣式
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './index.scss';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper';

function ProductCarousel(props) {
    const { images } = props;
    const [activeThumb, setActiveThumb] = useState();

    return (
        <>
            <Swiper
                loop={false}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation, Thumbs]}
                grabCursor={true}
                thumbs={{ swiper: activeThumb }}
                className="product-images-slider"
            >
                {/* 上方圖片 */}
                {images.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={require(`../../album/products/${item}`)}
                            alt="product images"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                onSwiper={setActiveThumb}
                loop={true}
                spaceBetween={10}
                slidesPerView={3}
                modules={[Navigation, Thumbs]}
                className="product-images-slider-thumbs"
            >
                {/* 下方圖片按鈕 */}
                {images.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="product-images-slider-thumbs-wrapper">
                            <img
                                src={require(`../../album/products/${item}`)}
                                alt="product images"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

export default ProductCarousel;
