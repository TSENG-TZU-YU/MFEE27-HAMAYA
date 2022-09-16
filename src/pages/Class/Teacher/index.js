import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';

// npm install react-player
import ReactPlayer from 'react-player';

import './index.scss';
// 圖檔
// import teacher01 from '../../../assets/ClassImg/teacher01.png';
function Teacher() {
    const [data, setData] = useState([]);

    // 把網址上的 :detailedID 拿出來
    const { detailedID } = useParams();
    console.log('teacherDetailID', detailedID);
    useEffect(() => {
        let getAdultClass = async () => {
            let response = await axios.get(
                `http://localhost:3001/api/class/teacher/${detailedID}`
            );
            setData(response.data);
            // window.scrollTo({
            //     top: 0,
            //     left: 0,
            //     behavior: 'auto',
            // });
        };
        getAdultClass();
    }, []);

    useEffect(() => {}, [data]);

    return (
        <div>
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
                    /
                    <Link to="/class/article">
                        <p>音樂教育</p>
                    </Link>
                </div>
                {/* 麵包屑 end*/}
                {data.map((teacherDetailed) => {
                    return (
                        <div key={teacherDetailed.id}>
                            <Row className="mt-5 mb-5  ">
                                <Col xl={2} className="mx-md-5 mx-xl-0 ">
                                    <div className="d-flex justify-content-center justify-content-md-start">
                                        <img
                                            className="cursor-pinter justify-content-center"
                                            src={require(`../../../album/teacher/images/${teacherDetailed.image}`)}
                                            alt="teacher01"
                                            style={{
                                                width: '200px',
                                                heigh: '300px',
                                            }}
                                        />
                                    </div>
                                </Col>
                                <Col xl={9} className="mx-md-5">
                                    <h4 className="text-center text-md-start mt-4 mt-xl-0">
                                        {teacherDetailed.name} 老師
                                    </h4>
                                    <div className="article-title-bg p-1 px-2 mt-4">
                                        <h6 style={{ color: '#f2f2f2' }}>
                                            教學領域
                                        </h6>
                                    </div>
                                    <p className="mt-4 px-2">
                                        {teacherDetailed.category}
                                    </p>
                                    <div className="article-title-bg p-1 px-2 mt-4">
                                        <h6 style={{ color: '#f2f2f2' }}>
                                            教授課程
                                        </h6>
                                    </div>
                                    <p className="mt-4 px-2">
                                        {/* TODO:  */}
                                        成人古典鋼琴課程、成人流行鍵盤課程
                                    </p>
                                    <div className="article-title-bg p-1 px-2 mt-4">
                                        <h6 style={{ color: '#f2f2f2' }}>
                                            師資簡介
                                        </h6>
                                    </div>
                                    <p className="mt-4 px-2">
                                        {teacherDetailed.profile}
                                    </p>
                                    <div className="article-title-bg p-1 px-2 mt-4 mb-5">
                                        <h6 style={{ color: '#f2f2f2' }}>
                                            師資作品
                                        </h6>
                                    </div>
                                    <ReactPlayer
                                        url={`${teacherDetailed.video}`}
                                        playing={false}
                                        volume={0.8}
                                        width="962"
                                        height="549px"
                                    />
                                </Col>
                            </Row>
                        </div>
                    );
                })}
            </Container>
        </div>
    );
}

export default Teacher;
