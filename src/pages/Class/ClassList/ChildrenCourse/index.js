import React, { useState } from 'react';
import '../AdultCourse/index.scss';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

// 分頁
import _ from 'lodash';

// 子元件
import StarRating from '../../../../components/Star/StarRating';
import Car from '../../../../components/Car/Car';
import Favorite from '../../../../components/Favorite';
import PaginationBar from '../../../../components/PaginationBar/PaginationBar';

// 圖檔
// import Adult_img from '../../../../assets/ClassImg/Adult img.png';

function ChildrenCourse({
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
    const [itemId, setItemId] = useState();

    useEffect(() => {
        let getAdultClass = async () => {
            let response = await axios.get(
                `http://localhost:3001/api/class/list?class=2`
            );
            setProducts(response.data);
            setDisplayProducts(response.data);
            // 從前端取得總頁數 (lastPage)
            const pageList = _.chunk(response.data, perPage);
            setPageNow(1);
            if (pageList.length > 0) {
                setPageTotal(pageList.length);

                // 設定到state中
                setPageProducts(pageList);
                console.log('pageProducts', pageProducts);
            }
        };
        getAdultClass();
    }, []);

    useEffect(() => {}, [products]);
    // 製作分頁按鈕
    const getPage = () => {
        let pages = [];
        for (let i = 1; i <= pageTotal; i++) {
            //要從陣列後面依序放頁數
            pages.push(
                <li
                    className="pages"
                    style={{
                        backgroundColor: pageNow === i ? '#00323d' : '',
                        color: pageNow === i ? '#f2f2f2' : '#6a777a',
                    }}
                    key={i}
                    onClick={(e) => {
                        setPageNow(i);
                    }}
                >
                    {i}
                </li>
            );
        }
        return pages;
    };

    return (
        <div>
            {/* 已灌資料庫 */}
            {pageProducts.length > 0 &&
                pageProducts[pageNow - 1].map((classChild) => {
                    return (
                        <div
                            key={classChild.id}
                            className="d-lg-flex justify-content-lg-center align-items-lg-center  mb-5"
                        >
                            <Link
                                to={`${classChild.id}?class=${classChild.ins_main_id}`}
                            >
                                <div className="introduce row mx-0 mb-5 class-shadow">
                                    <div className="d-flex col-lg-6  px-lg-0  position-relative">
                                        <img
                                            className=" col-12 class-course-image"
                                            src={require(`../../../../album/class/${classChild.image_1}`)}
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
                                            {classChild.name}
                                        </h4>
                                        <div className="vector2"></div>
                                        <div className="ms-2 mt-2">
                                            <p className="class-text mb-3">
                                                {classChild.course_intro}
                                            </p>
                                            <p className="mb-0">名額：10 人 </p>
                                            <p className="mb-0">
                                                報名截止：{classChild.deadline}
                                            </p>
                                            <p className="mb-0">
                                                開課時間：
                                                {classChild.start_date} ~
                                                {classChild.end_date}
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
                                                    NT ${classChild.price} / 期
                                                </h4>

                                                <Car itemsCart={classChild} />
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

export default ChildrenCourse;
