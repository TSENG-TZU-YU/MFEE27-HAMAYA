import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// npm install react-player
import ReactPlayer from 'react-player';

import './index.scss';
// 圖檔
import teacher01 from '../../../assets/ClassImg/teacher01.png';
function Teacher(props) {
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
                <Row className="mt-5 mb-5">
                    <Col md={2}>
                        <img
                            className="cursor-pinter "
                            src={teacher01}
                            alt="teacher01"
                        />
                    </Col>
                    <Col md={9} className="ms-md-5">
                        <h4>蔡侑恬 老師</h4>
                        <div className="article-title-bg p-1 px-2 mt-4">
                            <h6 style={{ color: '#f2f2f2' }}>教學領域</h6>
                        </div>
                        <p className="mt-4 px-2">古典鋼琴</p>
                        <div className="article-title-bg p-1 px-2 mt-4">
                            <h6 style={{ color: '#f2f2f2' }}>教授課程</h6>
                        </div>
                        <p className="mt-4 px-2">
                            成人古典鋼琴課程、成人流行鍵盤課程
                        </p>
                        <div className="article-title-bg p-1 px-2 mt-4">
                            <h6 style={{ color: '#f2f2f2' }}>師資簡介</h6>
                        </div>
                        <p className="mt-4 px-2">
                            恬恬老師，從三歲開始學琴，一路音樂班養成。畢業後開始投入教學與音樂製作，學生跨越各年齡層，同時也參與管弦樂團演出，亦應邀到各單位演出及伴奏。
                            由於對音樂的熱忱，恬恬老師希望透過品牌，為喜愛音樂的朋友們打造一個，屬於漫漫人生路上可以喘息的平台，讓忙碌紛擾的人們有一個可以藉由音樂與自己彈（談）心、抒情的地方。
                        </p>
                        <div className="article-title-bg p-1 px-2 mt-4 mb-5">
                            <h6 style={{ color: '#f2f2f2' }}>師資作品</h6>
                        </div>
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=GALnsi-hBh8"
                            playing={false}
                            volume={0.8}
                            width="962"
                            height="549px"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Teacher;
