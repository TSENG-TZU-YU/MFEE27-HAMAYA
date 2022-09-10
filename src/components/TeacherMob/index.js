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
        <div className="d-lg-none">
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                slidesPerGroup={1}
                loop={true}
                loopFillGroupWithBlank={true}
                // 小圓
                // pagination={{
                //     clickable: true,
                // }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="teacher-bar "
            >
                {/* 上方圖片 */}

                {props.images.map((item, index) => (
                    <SwiperSlide
                        key={index}
                        style={{ width: '200px', height: '100%' }}
                    >
                        <Link
                            to="teacher"
                            style={{ width: '230px', height: '360px' }}
                        >
                            <img
                                src={item}
                                alt="product images"
                                style={{ width: '100%', height: '300px' }}
                            />
                            <div className="text-center mt-1">
                                <h5 className="teacher-h5">蔡侑恬 老師</h5>
                                <p className="teacher-p mt-1">古典鋼琴</p>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

/* 要傳進去的圖片資料 */
Teacher.propTypes = {
    images: PropTypes.array.isRequired,
};

export default Teacher;
