import { Container, Row, Col } from 'react-bootstrap';
import { useOutletContext } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './index.scss';
import { API_URL } from '../../utils/config';

import { Link } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';

// 元件
import Teacher from '../../components/Teacher';
import TeacherMob from '../../components/TeacherMob';

// 圖檔
import banner from '../../assets/ClassImg/banner.png';
import arrow from '../../assets/svg/arrow_back_ios_new.svg';
import Adult_Course from '../../assets/ClassImg/Adult Course.png';
import Children_Lessons from '../../assets/ClassImg/Children Lessons.png';
import decorate1 from '../../assets/ClassImg/音樂裝飾1.png';
import decorate2 from '../../assets/ClassImg/音樂裝飾2.png';
import decorate3 from '../../assets/ClassImg/音樂裝飾3.png';
// import { useAuth } from '../../utils/use_auth';

function Class(props) {
    AOS.init();
    const [selectCourse, setSelectCourse] = useOutletContext();

    const [data, setData] = useState([]);
    const [article, setArticle] = useState([]);
    const [article1, setArticle1] = useState([]);

    // 是否正在載入資料的旗標, true = 載入資料中
    const [isLoading, setIsLoading] = useState(false);

    // 取得會員 ID 資料
    // const { member } = useAuth();

    useEffect(() => {
        //開啟載入指示動畫
        setIsLoading(true);
        let getAdultClass = async () => {
            let response = await axios.get(`${API_URL}/class`);
            setData(response.data.teacher);
            setArticle(response.data.article);
            setArticle1(response.data.article1);
        };
        getAdultClass();

        // 2秒後關起動畫呈現資料
        setTimeout(() => {
            setIsLoading(false);
        }, 800);
    }, []);

    useEffect(() => {}, [data]);

    const loader = (
        <div className="sk-chase ">
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
        </div>
    );

    return (
        <>
            {isLoading ? (
                loader
            ) : (
                <>
                    <img className=" w-100" src={banner} alt="banner" />
                    <Container>
                        {/* 麵包屑 */}
                        <div className="d-flex mt-5">
                            <Link to="/">
                                <p>首頁</p>
                            </Link>
                            /
                            <Link to="/class">
                                <p>音樂教育</p>
                            </Link>
                        </div>
                        {/* 麵包屑 end*/}
                        <div className="d-flex blank-top ">
                            <h4
                                className="me-3 cursor-pinter text-nowrap"
                                style={{ color: '#00323d' }}
                            >
                                音樂文章
                            </h4>
                            <h4 className="engText me-3 text-nowrap">
                                ARTICLE
                            </h4>
                            <div className="vector3 mt-3"></div>
                        </div>
                        <Row className=" blank-top-art mt-5">
                            <Col xl={6}>
                                {article1.map((article1, index) => {
                                    return (
                                        <div key={index}>
                                            <img
                                                className="cursor-pinter img-fluid"
                                                style={{
                                                    width: '600px',
                                                    heigh: '400px',
                                                }}
                                                src={require(`../../album/article/${article1.image}`)}
                                                alt="art01"
                                            />
                                            <h5
                                                className="mt-3 cursor-pinter"
                                                style={{ color: '#333333' }}
                                            >
                                                {article1.title}
                                            </h5>
                                            <div className=" d-flex mt-3 ">
                                                <small
                                                    className="Event me-3"
                                                    style={{
                                                        color: '#f2f2f2',
                                                    }}
                                                >
                                                    {article1.name}
                                                </small>
                                                <p>
                                                    {article1.auther} －
                                                    {article1.creation_date}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </Col>
                            <Col xl={6}>
                                {article.map((article, index) => {
                                    return (
                                        <div key={index}>
                                            <div className="d-flex">
                                                <img
                                                    className="me-4 cursor-pinter"
                                                    style={{
                                                        width: '150px',
                                                        height: '100px',
                                                    }}
                                                    src={require(`../../album/article/${article.image}`)}
                                                    alt="art02"
                                                />
                                                <div>
                                                    <h5 className=" cursor-pinter">
                                                        {article.title}
                                                    </h5>

                                                    <div className=" d-flex mt-2 ">
                                                        <small
                                                            className="music-article me-3"
                                                            style={{
                                                                color: '#f2f2f2',
                                                            }}
                                                        >
                                                            {article.name}
                                                        </small>
                                                        <p>
                                                            {' '}
                                                            {article.auther} －
                                                            {
                                                                article.creation_date
                                                            }
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="border-top border-secondary border-1  pt-3 mt-4 mb-3"></div>
                                        </div>
                                    );
                                })}
                            </Col>
                        </Row>
                        <div className="more-art ">
                            <p className="mb-0 me-1 cursor-pinter">
                                看更多音樂文章
                            </p>
                            <img
                                className="art-arrow"
                                style={{ width: '15px', height: '15px' }}
                                src={arrow}
                                alt="arrow"
                            />
                        </div>
                    </Container>
                    <div className="session-bg ">
                        {/* TODO: background-size */}
                        <img
                            className="decorate1 d-none d-lg-block  img-fluid"
                            src={decorate1}
                            alt="decorate1"
                        />
                        <img
                            className="decorate2  img-fluid"
                            src={decorate2}
                            alt="decorate2"
                        />
                        <img
                            className="decorate3 d-none d-lg-block "
                            src={decorate3}
                            alt="decorate3"
                        />
                        <Container>
                            <div className="d-flex pt-5 ">
                                <h4
                                    className="me-3 text-nowrap"
                                    style={{ color: '#f2f2f2' }}
                                >
                                    音樂教育
                                </h4>
                                <h4
                                    className="engText me-3 text-nowrap"
                                    style={{ color: '#f2f2f2' }}
                                >
                                    MUSICAL EDUCATION
                                </h4>
                                <div className="vector4 mt-3"></div>
                            </div>
                            <Row className="mt-5 text-center pb-md-5 ">
                                <Col
                                    lg={6}
                                    className="pb-5 mb-md-5 "
                                    data-aos="flip-left"
                                >
                                    <Link to="list?class=1">
                                        <img
                                            src={Adult_Course}
                                            alt="Adult Course"
                                            className="cursor-pinter img-fluid "
                                            onClick={() => {
                                                setSelectCourse(true);
                                            }}
                                        />
                                        <h3 className="adult-course cursor-pinter">
                                            成人課程
                                        </h3>
                                    </Link>
                                </Col>
                                <Col
                                    lg={6}
                                    className="pb-5 "
                                    data-aos="flip-left"
                                >
                                    <Link to="list?class=2">
                                        <img
                                            className="cursor-pinter img-fluid"
                                            src={Children_Lessons}
                                            alt="Children Lessons"
                                            onClick={() => {
                                                setSelectCourse(false);
                                            }}
                                        />
                                        <h3 className="children-lessons cursor-pinter ">
                                            兒童課程
                                        </h3>
                                    </Link>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <Container>
                        <div className="d-flex mt-5 ">
                            <h4
                                className="me-3 text-nowrap"
                                style={{ color: '#00323d' }}
                            >
                                嚴選師資
                            </h4>
                            <h4 className="engText me-3 text-nowrap">
                                TEACHER
                            </h4>
                            <div className="vector3  mt-3"></div>
                        </div>
                        <div className="d-flex  justify-content-center align-items-center mt-5 mb-5">
                            <div
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    padding: '15px',
                                }}
                            >
                                {/* images={teacherImages} */}
                                <Teacher data={data} />
                                <TeacherMob data={data} />
                            </div>
                        </div>
                    </Container>
                </>
            )}
        </>
    );
}

export default Class;
