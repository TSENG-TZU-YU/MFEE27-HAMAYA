import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import PropTypes from 'prop-types';

// 樣式
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './index.scss';

import { Link } from 'react-router-dom';
// Swiper
import { Pagination, Navigation } from 'swiper';

function Teacher(props) {
    return (
        <>
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                slidesPerGroup={5}
                loop={true}
                loopFillGroupWithBlank={true}
                // 小圓
                // pagination={{
                //     clickable: true,
                // }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="teacher-bar"
            >
                {/* 上方圖片 */}

                {props.images.map((item, index) => (
                    <SwiperSlide
                        key={index}
                        style={{ width: '200px', height: '300px' }}
                    >
                        <Link
                            to="teacher"
                            style={{ width: '300px', height: '300px' }}
                        >
                            <img src={item} alt="product images" />
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

/* 要傳進去的圖片資料 */
Teacher.propTypes = {
    images: PropTypes.array.isRequired,
};

export default Teacher;
