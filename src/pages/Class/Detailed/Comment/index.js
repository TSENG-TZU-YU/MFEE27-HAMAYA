import React from 'react';
import { Row, Col } from 'react-bootstrap';

// 子元件
import StarRating from '../../../../components/Star/StarRating';

function Comment(props) {
    return (
        <>
            <div className="d-md-flex ">
                <div className="d-flex me-lg-5 ">
                    <h1 className="me-3">3.0</h1>
                    <div className="mt-1 ">
                        {/* TODO: rwd 中間會會變直的 */}
                        <StarRating />

                        <p className="mt-1 "> 2 人評價</p>
                    </div>
                </div>

                <div className="ms-lg-4">
                    {/* TODO: 前面顯示最新評論 卷軸or下拉 */}
                    {/* 會員評論 */}
                    <div className="d-flex ">
                        <div className="me-5">
                            <img
                                src=""
                                alt=""
                                style={{ width: '99px', height: '99px' }}
                            />
                            <p>Emma</p>
                        </div>
                        <div>
                            <StarRating />
                            <p className="mt-2  mb-2">2022/09/05</p>
                            <p>
                                由淺入深，循序漸進從基礎教導學員，在爭對各個技巧一一擊破，非常推薦任何對學習爵士鋼琴有興趣的朋友們，推!
                            </p>
                        </div>
                    </div>
                    <div
                        className="border-top  border-1 px-3 pt-3 me-2"
                        style={{ color: '#bababa' }}
                    ></div>
                    {/* 會員評論 end */}
                    <div className="d-flex ">
                        <div className="me-5">
                            <img
                                src=""
                                alt=""
                                style={{ width: '99px', height: '99px' }}
                            />
                            <p>Emma</p>
                        </div>
                        <div>
                            <StarRating />
                            <p className="mt-2 mb-2">2022/09/05</p>
                            <p>
                                由淺入深，循序漸進從基礎教導學員，在爭對各個技巧一一擊破，非常推薦任何對學習爵士鋼琴有興趣的朋友們，推!
                            </p>
                        </div>
                    </div>
                    <div
                        className="border-top  border-1 px-3 pt-3 me-2"
                        style={{ color: '#bababa' }}
                    ></div>
                </div>
            </div>
        </>
    );
}

export default Comment;
