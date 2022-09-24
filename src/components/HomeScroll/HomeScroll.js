import React, { useEffect, useState, useParams } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import PropTypes from 'prop-types';
import { API_URL } from '../../utils/config';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './HomeScroll.scss';

//TODO:輪播按鈕沒有置中需要再調
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

function HomeScroll(props) {
    // const [data, setData] = useState([]);
    // const [slider, setSlider] = useState([]);

    // const { content } = useParams();

    // const location = useLocation();

    // useEffect(() => {
    //     // let params = new URLSearchParams(location.search);
    //     // let mainId = params.get('mainId');
    //     let getArticle = async () => {
    //         let response = await axios.get(
    //             `${API_URL}/home/${content}?mainId=${1}`
    //         );
    //         setData(response.data.data);
    //         setSlider(response.data.slider);
    //     };
    //     getArticle();
    // }, [location]);

    // console.log(data);

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
