import React from 'react';
import { Row, Col } from 'react-bootstrap';

// 子元件
import StarRating from '../../../../components/Star/StarRating';

function Comment(props) {
    return (
        <>
            {/*     
            <div className="row col-12">
                <div className="col-3 d-flex ">
                    <h1 className="me-3">3.0</h1>
                    <div className="mt-1 ">
                        <StarRating />
                        <p className="mt-1 "> 2 人評價</p>
                    </div>
                </div>

                <div className="col-8 ">
                    <div className="d-flex">
                        <div className="me-5">
                            <img
                                src=""
                                alt=""
                                style={{ width: '99px', height: '99px' }}
                            />
                            <p>Emma</p>
                        </div>
                        <div className="">
                            <StarRating />
                            <p>
                                由淺入深，循序漸進從基礎教導學員，在爭對各個技巧一一擊破，非常推薦任何對學習爵士鋼琴有興趣的朋友們，推!
                            </p>
                        </div>
                    </div>
                    <div className="border-top border-secondary border-3 px-3 pt-3 me-2"></div>
                </div>
            </div> */}
            {/*flex  */}
            <div className="d-md-flex ">
                <div className="d-flex me-lg-5 ">
                    <h1 className="me-3">3.0</h1>
                    <div className="mt-1 ">
                        <StarRating />
                        <p className="mt-1 "> 2 人評價</p>
                    </div>
                </div>

                <div className="ms-lg-4">
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
                            <p>
                                由淺入深，循序漸進從基礎教導學員，在爭對各個技巧一一擊破，非常推薦任何對學習爵士鋼琴有興趣的朋友們，推!
                            </p>
                        </div>
                    </div>
                    <div className="border-top border-secondary border-3 px-3 pt-3 me-2"></div>
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
                        <div className="">
                            <StarRating />
                            <p>
                                由淺入深，循序漸進從基礎教導學員，在爭對各個技巧一一擊破，非常推薦任何對學習爵士鋼琴有興趣的朋友們，推!
                            </p>
                        </div>
                    </div>
                    <div className="border-top border-secondary border-3 px-3 pt-3 me-2"></div>
                </div>
            </div>
        </>
    );
}

export default Comment;
