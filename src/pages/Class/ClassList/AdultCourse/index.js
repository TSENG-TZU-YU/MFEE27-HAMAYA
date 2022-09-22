import React, { useState } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../../../utils/config';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

// 分頁
import _ from 'lodash';

// 元件
import Evaluation from '../../../../components/Evaluation/Evaluation';
import Car from '../../../../components/Car/Car';
import Favorite from '../../../../components/Favorite';
import PaginationBar from '../../../../components/PaginationBar/PaginationBar';

// 圖檔
import doc_music from '../../../../assets/ClassImg/doc-music.png';

function AdultCourse({
    products,
    setProducts,
    setDisplayProducts,
    pageProducts,
    setPageProducts,
    perPage,
    setPageTotal,
    setPageNow,
    pageTotal,
    pageNow,
    displayProducts,
}) {
    AOS.init();
    useEffect(() => {
        let getAdultClass = async () => {
            let response = await axios.get(
                //&page=${page}
                `${API_URL}/class/list?class=1`
            );
            setProducts(response.data);
            setDisplayProducts(response.data);
            // setAvg(response.data.avg);

            // 從前端取得總頁數 (lastPage)
            const pageList = _.chunk(response.data, perPage);
            // 預設1頁
            setPageNow(1);
            if (pageList.length > 0) {
                setPageTotal(pageList.length);

                // 設定到state中
                setPageProducts(pageList);
            }
            window.scrollTo(0, 0);
        };

        getAdultClass();
    }, []);

    useEffect(() => {
        console.log('products', products);
    }, [products]);

    return (
        <div>
            {/* 已灌資料庫 */}
            {pageProducts.length > 0 &&
                pageProducts[pageNow - 1].map((classAdult) => {
                    return (
                        <div
                            key={classAdult.id}
                            className="d-lg-flex justify-content-lg-center align-items-lg-center  mb-5"
                        >
                            <Link
                                to={`${classAdult.product_id}?class=${classAdult.ins_main_id}`}
                            >
                                <div
                                    className="introduce row mx-0 mb-5 class-shadow position-relative  "
                                    data-aos="fade-right"
                                >
                                    <div className="d-flex col-lg-6  px-lg-0  position-relative">
                                        <img
                                            className=" col-12 class-course-image"
                                            src={require(`../../../../album/class/${classAdult.image_1}`)}
                                            alt="Adult img"
                                        />

                                        <div className="class-like px-lg-0">
                                            <Favorite />
                                        </div>
                                    </div>
                                    <div className="col-lg-6  mt-1 mb-2">
                                        <div className="d-none d-lg-block">
                                            <img
                                                className="doc-music "
                                                data-aos="fade-down-left"
                                                src={doc_music}
                                                alt="doc_music"
                                            />
                                        </div>

                                        <h4
                                            className="ms-1 mb-2"
                                            style={{ color: '#00323d' }}
                                        >
                                            {classAdult.name}
                                        </h4>
                                        <div className="vector2"></div>
                                        <div className="ms-2 mt-2">
                                            <p className="class-text mb-3">
                                                {classAdult.course_intro}
                                            </p>
                                            <p className="mb-0">名額：10 人 </p>
                                            <p className="mb-0">
                                                報名截止：{classAdult.deadline}
                                            </p>
                                            <p className="mb-0">
                                                開課時間：
                                                {classAdult.start_date} ~
                                                {classAdult.end_date}
                                            </p>
                                            <div className="d-flex mt-2 align-items-center">
                                                <div className="StarRating">
                                                    <Evaluation
                                                        rating={
                                                            classAdult.rating
                                                        }
                                                    />
                                                </div>
                                                <p className="ms-2 mt-2">
                                                    {classAdult.member} 人評價
                                                </p>
                                            </div>

                                            <div className="d-lg-flex justify-content-lg-between align-items-lg-center pt-1">
                                                <h4
                                                    className=" fw-bold"
                                                    style={{ color: '#5b322f' }}
                                                >
                                                    NT ${classAdult.price} / 期
                                                </h4>

                                                <Car itemsCart={classAdult} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    );
                })}

            {/* 頁碼 */}
            <div className="d-flex justify-content-center align-items-center my-5">
                {displayProducts.length > perPage ? (
                    <PaginationBar
                        pageNow={pageNow}
                        setPageNow={setPageNow}
                        pageTotal={pageTotal}
                    />
                ) : (
                    ''
                )}
            </div>
            {/* 頁碼 end */}
        </div>
    );
}

export default AdultCourse;
