import React, { useState } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

// 子元件
import StarRating from '../../../../components/Star/StarRating';
import Car from '../../../../components/Car/Car';
import Favorite from '../../../../components/Favorite';

// 圖檔
import Adult_img from '../../../../assets/ClassImg/Adult img.png';

function ChildrenCourse(props) {
    const [data, setData] = useState([]);
    // 分頁  Toggled
    const [lastPage] = useState(3);
    const [page, setPage] = useState(3);
    // 製作分頁按鈕
    const getPage = () => {
        let pages = [];
        for (let i = 1; i < lastPage; i++) {
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
        console.log('classAdult', 'useEffect []');
        let getAdultClass = async () => {
            let response = await axios.get(
                `http://localhost:3001/api/class/list?class=2`
            );
            setData(response.data);
        };
        getAdultClass();
    }, []);

    useEffect(() => {
        console.log('useEffect[data]', data);
    }, [data]);

    return (
        <div>
            <Link to=":classDetailID">
                {/* <div className="introduce row mx-0 mb-5 class-shadow ">
                    <div className="d-flex col-lg-6  px-lg-0  position-relative">
                        <img
                            className=" col-12"
                            src={Adult_img}
                            alt="Adult img"
                        />
                        <div className="class-like px-lg-0">
                            <Favorite />
                        </div>
                    </div>
                    <div className="col-lg-6  mt-3 ">
                        <h4 className="ms-1 mb-2" style={{ color: '#00323d' }}>
                            藍調與爵士鋼琴的獨奏技巧與應用
                        </h4>
                        <div className="vector2 me-2"></div>
                        <div className=" mt-2">
                            <p className="text-p mb-3">
                                這門課程希望能以我自身的鋼琴學習經驗和逾 20
                                年的教學心得引導大家進入爵士鋼琴的世界，彈出爵士的節奏、即興與風格，ㄧ起感受爵士音樂的魅力～
                            </p>
                            <p className="mb-0">名額：10 人 </p>
                            <p className="mb-0">
                                報名時間：2022/09/20 - 2022/10/01
                            </p>
                            <p className="mb-0">
                                開課時間：2022/10/19 - 2022/12/10
                            </p>
                            <div className="d-flex mt-2 align-items-center">
                                <div className="StarRating">
                                    <StarRating />
                                </div>
                                <p className="ms-2 mt-2 "> 2 人評價</p>
                            </div>
                            <div className="d-lg-flex justify-content-lg-between align-items-lg-center pt-1">
                                <h4
                                    className=" fw-bold "
                                    style={{ color: '#5b322f' }}
                                >
                                    NT $2,500 / 期
                                </h4>
                                <Car />
                            </div>
                        </div>
                    </div>
                </div> */}
            </Link>
            {/* 已灌資料庫 */}
            {data.map((classChild) => {
                return (
                    <div
                        key={classChild.id}
                        className="d-lg-flex justify-content-lg-center align-items-lg-center  mb-5"
                    >
                        <Link to={`${classChild.id}`}>
                            <div className="introduce row mx-0 mb-5 class-shadow">
                                <div className="d-flex col-lg-6  px-lg-0  position-relative">
                                    <img
                                        className=" col-12 class-course-image"
                                        // require(`../../../../album/class/${classAdult.image}`)
                                        src={require(`../../../../album/class/${classChild.image}`)}
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

export default ChildrenCourse;
