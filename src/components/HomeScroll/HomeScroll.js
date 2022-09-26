import React, { useEffect, useState, useParams } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './HomeScroll.scss';

//TODO:輪播按鈕沒有置中需要再調
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

function HomeScroll({ data, slider }) {
    console.log(data);
    console.log(slider);

    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    el: '.swiper-pagination ',
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {slider.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Link to={`/news/${item.id}?mainId=${item.category}`}>
                            <div>
                                <img
                                    className=""
                                    src={require(`../../album/article/${item.image}`)}
                                    alt="home images"
                                />
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                spaceBetween={30}
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
                className="none"
            >
                <div className="container bg-main-gary-light-color ">
                    {slider.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Link
                                to={`/news/${item.id}?mainId=${item.category}`}
                            >
                                <div className="slider-titles">
                                    <span className="home-word ">
                                        NEW &ensp;
                                        <span className="home-word2">
                                            {item.creation_date}&ensp;
                                        </span>
                                        <span className="home-word3">
                                            {item.title}
                                        </span>
                                    </span>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>

            <div className="container d-flex justify-content-end swiper-pagination swiper-pagination-1"></div>
        </>
    );
}

// HomeScroll.propTypes = {
//     images: PropTypes.array.isRequired,
// };

export default HomeScroll;
