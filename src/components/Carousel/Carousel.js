import React, { useState } from 'react';
import PropTypes from 'prop-types';

// 樣式
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './Carousel.scss';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper';

function Carousel({ dataImg }) {
    const [activeThumb, setActiveThumb] = useState();

    return (
        <>
            <Swiper
                loop={true}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation, Thumbs]}
                grabCursor={true}
                thumbs={{ swiper: activeThumb }}
                className="product-images-slider"
            >
                {/* 上方圖片 */}
                {dataImg.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={require(`../../album/class/${item.dataImg}`)}
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
                {dataImg.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="product-images-slider-thumbs-wrapper">
                            <img src={item} alt="product images" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

/* 要傳進去的圖片資料 */
// Carousel.propTypes = {
//     images: PropTypes.array.isRequired,
// };

export default Carousel;
