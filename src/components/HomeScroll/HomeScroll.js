import React, { useState } from 'react';
import PropTypes from 'prop-types';

// 樣式
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './HomeScroll.scss';
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper';

function HomeScroll(props) {
    const [activeThumb, setActiveThumb] = useState();

    return (
        <>
            <Swiper
                loop={true}
                spaceBetween={5}
                navigation={true}
                modules={[Navigation, Thumbs]}
                grabCursor={true}
                thumbs={{ swiper: activeThumb }}
                className="home-images-slider scroll-blank-top"
            >
                {/* 上方圖片 */}
                {props.images.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img src={item} alt="home images" />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                onSwiper={setActiveThumb}
                loop={true}
                spaceBetween={5}
                slidesPerView={4}
                modules={[Navigation, Thumbs]}
                className="home-images-slider"
            ></Swiper>
        </>
    );
}

/* 要傳進去的圖片資料 */ HomeScroll.propTypes = {
    images: PropTypes.array.isRequired,
};

export default HomeScroll;
