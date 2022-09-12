import { Container, Row, Col } from 'react-bootstrap';
import { useOutletContext } from 'react-router-dom';
// import { useClass } from './UseContext';
import './index.scss';

import { Link } from 'react-router-dom';

// 元件
import Teacher from '../../components/Teacher';
import TeacherMob from '../../components/TeacherMob';

// 圖檔
import banner from '../../assets/ClassImg/banner.png';
import art01 from '../../assets/ClassImg/Rectangle 343.png';
import art02 from '../../assets/ClassImg/Rectangle 344.png';
import art03 from '../../assets/ClassImg/Rectangle 345.png';
import art04 from '../../assets/ClassImg/Rectangle 346.png';
import arrow from '../../assets/svg/arrow_back_ios_new.svg';
import Adult_Course from '../../assets/ClassImg/Adult Course.png';
import Children_Lessons from '../../assets/ClassImg/Children Lessons.png';
import { teacherImages } from '../../album/teacher';

function Class(props) {
    const [selectCourse, setSelectCourse] = useOutletContext();

    return (
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
                    <h4 className="engText me-3 text-nowrap">ARTICLE</h4>
                    <div className="vector3 mt-3"></div>
                </div>
                <Row className=" blank-top-art mt-5">
                    <Col xl={6}>
                        <img
                            className="cursor-pinter img-fluid"
                            style={{ width: '600px', heigh: '400px' }}
                            src={art01}
                            alt="art01"
                        />
                        <h5
                            className="mt-3 cursor-pinter"
                            style={{ color: '#333333' }}
                        >
                            【親子點唱機】孟德爾頌《無言歌》為什麼沒有歌詞？
                        </h5>
                        <div className=" d-flex mt-3 ">
                            <small
                                className="Event me-3"
                                style={{
                                    color: '#f2f2f2',
                                }}
                            >
                                活動快訊
                            </small>
                            <p>李明蒨 － 2022/08/20 </p>
                        </div>
                        <div className="d-flex"></div>
                    </Col>
                    <Col xl={6} className="blank-art-left">
                        <div className="d-flex">
                            <img
                                className="me-4 cursor-pinter"
                                style={{ width: '150px', height: '100px' }}
                                src={art02}
                                alt="art02"
                            />
                            <div>
                                <h5 className=" cursor-pinter">
                                    AI執筆完成貝多芬《第十號交響曲》——AI的創作是否享有著作權法的保護？
                                </h5>

                                <div className=" d-flex mt-2 ">
                                    <small
                                        className="music-article me-3"
                                        style={{
                                            color: '#f2f2f2',
                                        }}
                                    >
                                        音樂文章
                                    </small>
                                    <p>瓦力 － 2022/08/20</p>
                                </div>
                            </div>
                        </div>
                        <div className="border-top border-secondary border-1 px-3 pt-3 mt-4 mb-3"></div>
                        <div className="d-flex">
                            <img
                                className="me-4 cursor-pinter"
                                style={{ width: '150px', height: '100px' }}
                                src={art03}
                                alt="art03"
                            />
                            <div>
                                <h5 className=" cursor-pinter">
                                    廣場上的小提琴手
                                </h5>

                                <div className=" d-flex mt-2 ">
                                    <small
                                        className="important me-3 "
                                        style={{
                                            color: '#f2f2f2',
                                        }}
                                    >
                                        重要通知
                                    </small>
                                    <p>眾博法律事務所 － 2022/08/20</p>
                                </div>
                            </div>
                        </div>
                        <div className="border-top border-secondary border-1 mt-4 mb-3"></div>
                        <div className="d-flex">
                            <img
                                className="me-4 cursor-pinter"
                                style={{ width: '150px', height: '100px' }}
                                src={art04}
                                alt="art04"
                            />
                            <div>
                                <h5 className="h5-art02 cursor-pinter">
                                    莫札特《費加洛的婚禮》——聰明，反被聰明誤？
                                </h5>

                                <div className=" d-flex mt-2 ">
                                    <small
                                        className="Promotions me-3"
                                        style={{
                                            color: '#f2f2f2',
                                        }}
                                    >
                                        促銷活動
                                    </small>
                                    <p>邢子青 － 2022/08/20</p>
                                </div>
                            </div>
                        </div>
                        <div className="border-top border-secondary border-1  mt-4 mb-3"></div>
                    </Col>
                </Row>
                <div className="more-art ">
                    <p className="mb-0 me-1 cursor-pinter">看更多音樂文章</p>
                    <img
                        className="art-arrow"
                        style={{ width: '15px', height: '15px' }}
                        src={arrow}
                        alt="arrow"
                    />
                </div>
            </Container>

            <div className="session-bg ">
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
                    <Row className="mt-5 text-center">
                        <Col lg={6} className="pb-5">
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
                        <Col lg={6} className="pb-5">
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
                    <h4 className="engText me-3 text-nowrap">TEACHER</h4>
                    <div className="vector3  mt-3"></div>
                </div>
                <div className="d-flex  justify-content-center align-items-center mt-5 ">
                    <div
                        style={{
                            width: '100%',
                            height: '100%',
                            padding: '15px',
                        }}
                    >
                        <Teacher images={teacherImages} />
                        <TeacherMob images={teacherImages} />
                    </div>
                </div>
            </Container>
        </>
    );
}

export default Class;
