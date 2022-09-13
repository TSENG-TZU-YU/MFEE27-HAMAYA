import React, { useState } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

// 元件
import StarRating from '../../../../components/Star/StarRating';
import Car from '../../../../components/Car/Car';
import Favorite from '../../../../components/Favorite';

function AdultCourse({ products, setProducts, setDisplayProducts }) {
    // const [error, setError] = useState(null);
    //撈原始資料
    // const [data, setData] = useState([]);
    // const [active, setActive] = useState(null);

    // 分頁  Toggled
    const [lastPage, setLastPage] = useState(1);
    const [page, setPage] = useState(1);
    // 製作分頁按鈕
    const getPage = () => {
        let pages = [];
        for (let i = 1; i <= lastPage; i++) {
            //要從陣列後面依序放頁數
            pages.push(
                <li
                    className="pages"
                    style={{
                        backgroundColor: page === i ? '#00323d' : '',
                        color: page === i ? '#f2f2f2' : '#6a777a',
                    }}
                    key={i}
                    onClick={(e) => {
                        setPage(i);
                    }}
                >
                    {i}
                </li>
            );
        }
        return pages;
    };

    useEffect(() => {
        let getAdultClass = async () => {
            let response = await axios.get(
                `http://localhost:3001/api/class/list?class=1&page=${page}`
            );
            setProducts(response.data.data);
            setDisplayProducts(response.data.data);

            // 從後端取得總頁數 (lastPage)
            setLastPage(response.data.pagination.lastPage);
            // console.log(response.data.pagination.lastPage);
        };
        getAdultClass();
    }, [page]);

    useEffect(() => {
        console.log('products', products);
    }, [products]);

    return (
        <div>
            {/* 已灌資料庫 */}
            {products.map((classAdult) => {
                return (
                    <div
                        key={classAdult.id}
                        className="d-lg-flex justify-content-lg-center align-items-lg-center  mb-5"
                    >
                        <Link to={`${classAdult.id}`}>
                            <div className="introduce row mx-0 mb-5 class-shadow">
                                <div className="d-flex col-lg-6  px-lg-0  position-relative">
                                    <img
                                        className=" col-12 class-course-image"
                                        // require(`../../../../album/class/${classAdult.image}`)
                                        src={require(`../../../../album/class/${classAdult.image}`)}
                                        alt="Adult img"
                                    />
                                    <div className="class-like px-lg-0">
                                        <Favorite />
                                    </div>
                                </div>
                                <div className="col-lg-6  mt-1 mb-2">
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
                                            開課時間：{classAdult.start_date} ~
                                            {classAdult.end_date}
                                        </p>
                                        <div className="d-flex mt-2 align-items-center">
                                            <div className="StarRating">
                                                <StarRating />
                                            </div>
                                            <p className="ms-2 mt-2">
                                                {' '}
                                                2 人評價
                                            </p>
                                        </div>
                                        <div className="d-lg-flex justify-content-lg-between align-items-lg-center pt-1">
                                            <h4
                                                className=" fw-bold"
                                                style={{ color: '#5b322f' }}
                                            >
                                                NT ${classAdult.price} / 期
                                            </h4>

                                            <Car />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                );
            })}
            {/* 分頁 */}
            <ul className="text-center">{getPage()}</ul>

            {/* 分頁 end*/}
        </div>
    );
}

export default AdultCourse;
