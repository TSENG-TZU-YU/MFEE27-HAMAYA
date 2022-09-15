import React, { useState } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

// 分頁
// import _ from 'lodash';

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
    // const [lastPage, setLastPage] = useState(1);
    // const [page, setPage] = useState(1);

    // 只記錄第一次didMount時和伺服器要資料的狀態
    // const [usersRaw, setUsersRaw] = useState([]);

    // 畫面上目前呈現用狀態
    // const [usersDisplay, setUsersDisplay] = useState([]);

    // 分頁用

    const [pageNow, setPageNow] = useState(1); // 目前頁號
    const [perPage, setPerPage] = useState(6); // 每頁多少筆資料
    const [pageTotal, setPageTotal] = useState(0); //總共幾頁，在didMount時要決定
    // 製作分頁按鈕
    // const getPage = () => {
    //     let pages = [];
    //     for (let i = 1; i <= pageTotal; i++) {
    //         //要從陣列後面依序放頁數
    //         pages.push(
    //             <li
    //                 className="pages"
    //                 style={{
    //                     backgroundColor: pageNow === i ? '#00323d' : '',
    //                     color: pageNow === i ? '#f2f2f2' : '#6a777a',
    //                 }}
    //                 key={i}
    //                 onClick={(e) => {
    //                     setPageNow(i);
    //                 }}
    //             >
    //                 {i}
    //             </li>
    //         );
    //     }
    //     return pages;
    // };

    useEffect(() => {
        let getAdultClass = async () => {
            let response = await axios.get(
                //&page=${page}
                `http://localhost:3001/api/class/list?class=1`
            );
            setProducts(response.data);
            setDisplayProducts(response.data);

            // 從後端取得總頁數 (lastPage)
            // setLastPage(response.data.pagination.lastPage);

            console.log('response.data', response.data);
            // 從前端取得總頁數 (lastPage)
            // const pageList = _.chunk(response.data, perPage);

            // console.log('pageList', pageList);
            // console.log('displayProducts', displayProducts);
            // if (pageList.length > 0) {
            //     setPageTotal(pageList.length);
            //     // 設定到state中
            //     setDisplayProducts(pageList);

            //     setProducts(response.data);
            //     console.log('pageList > 0', pageList);
            // }
        };

        // console.log('L-93', 123);
        getAdultClass();
    }, []);

    // console.log('perPage', perPage);
    // console.log('pageNow', pageNow);
    // console.log('pageTotal', pageTotal);

    useEffect(() => {
        console.log('products', products);
    }, [products]);

    // const paginationBar = (
    //     <>
    //         <div className="pagination">
    //             {/* <a
    //             // href="#/"
    //             // onClick={() => {
    //             //     setPageNow(1);
    //             // }}
    //             >
    //                 &laquo;
    //             </a> */}
    //             {Array(pageTotal)
    //                 .fill(1)
    //                 .map((v, i) => {
    //                     return (
    //                         <a
    //                             key={i}
    //                             href="#/"
    //                             className={i + 1 === pageNow ? 'active' : ''}
    //                             onClick={() => {
    //                                 setPageNow(i + 1);
    //                             }}
    //                         >
    //                             {i + 1}
    //                         </a>
    //                     );
    //                 })}
    //             {/* <a
    //                 // href="#/"
    //                 onClick={() => {
    //                     setPageNow(pageTotal);
    //                 }}
    //             >
    //                 &raquo;
    //             </a> */}
    //         </div>
    //     </>
    // );

    // console.log('', products);

    return (
        <div>
            {/* 分頁 */}
            {/* {paginationBar} */}
            {/* 已灌資料庫 */}
            {/* displayProducts[pageNow - 1] */}
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

                                            <Car itemsCart={classAdult} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                );
            })}
            {/* 分頁 */}
            {/* <ul className="text-center">{getPage()}</ul> */}

            {/* 分頁 end*/}
        </div>
    );
}

export default AdultCourse;
