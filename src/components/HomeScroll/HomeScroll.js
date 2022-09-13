import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import PropTypes from 'prop-types';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './HomeScroll.scss';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

function HomeScroll(props) {
    return (
        <>
            <Swiper
                spaceBetween={10}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    el: '.swiper-pagination',
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {props.images.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img src={item} alt="home images" />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="container d-flex justify-content-end swiper-pagination swiper-pagination-1"></div>
        </>
    );
}

HomeScroll.propTypes = {
    images: PropTypes.array.isRequired,
};

export default HomeScroll;
