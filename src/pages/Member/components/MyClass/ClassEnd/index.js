import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

// 元件
import StarRating from '../../../../../components/Star/StarRating';
import Close from '../../../../../assets/svg/close.svg';

// 圖檔
import Adult_img from '../../../../../assets/ClassImg/Adult img.png';
import message from '../../../../../assets/svg/message.svg';

function ClassEnd(props) {
    const [popup, setPopup] = useState(false);
    return (
        <div>
            <Link to="detailed">
                <div className="introduce row mx-2  mb-5 class-shadow text-start">
                    <img
                        className="col-lg-4  px-0"
                        src={Adult_img}
                        alt="Adult img"
                        style={{ minWidth: '130px' }}
                    />
                    <div className="col-lg-8  mt-3 ">
                        <h6 className="ms-1 mb-2 " style={{ color: '#00323d' }}>
                            藍調與爵士鋼琴的獨奏技巧與應用
                        </h6>
                        <div className="vector2 me-2"></div>
                        <div className=" mt-2 row">
                            <p className="col-md-6 mb-0 ">
                                開課時間：2022/10/19 - 2022/12/10
                            </p>
                            <p className="col-md-6 mb-0 ">師資：XXX老師</p>

                            <div className="d-lg-flex justify-content-lg-between align-items-lg-center pt-2 ">
                                <p
                                    className=" fw-bold "
                                    style={{ color: '#5b322f' }}
                                >
                                    NT $2,500 / 期
                                </p>
                                <button
                                    className="btn d-flex pb-0 border-0"
                                    onClick={(e) => {
                                        e.preventDefault();
                                    }}
                                >
                                    <img
                                        className="me-1"
                                        src={message}
                                        alt="message"
                                    />
                                    <p
                                        onClick={() => {
                                            setPopup(true);
                                        }}
                                    >
                                        評價課程
                                    </p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>

            {popup ? (
                <>
                    <div
                        className="class-popup"
                        onClick={() => {
                            setPopup(false);
                        }}
                    ></div>
                    <div className="class-popup-inner text-start">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <h6 className="text-start myClass-h6">評價課程</h6>
                            <button
                                className="closeBtn"
                                onClick={() => {
                                    setPopup(false);
                                }}
                            >
                                <img src={Close} alt="close" />
                            </button>
                        </div>

                        <img
                            src={Adult_img}
                            alt="Adult img"
                            style={{ width: '300px' }}
                        />
                        <h6 className="text-start mt-2 myClass-h6">
                            藍調與爵士鋼琴的獨奏技巧與應用
                        </h6>
                        <div className="mt-1">
                            <StarRating />
                        </div>
                        <p className="mt-1 mb-1">2022/09/05</p>

                        <textarea
                            class="form-control mt-2 mb-2"
                            id="exampleFormControlTextarea1"
                            rows="3"
                            placeholder="評價內容"
                            style={{ resize: 'none', height: '120px' }}
                        ></textarea>
                        <small>
                            請勿在此輸入任何聯絡資訊、網址或是個人隱私資料。(字數限制：200字)
                        </small>
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-primary myClass-btn mt-4 ">
                                送出評價
                            </button>
                        </div>
                    </div>
                </>
            ) : (
                ''
            )}
        </div>
    );
}

export default ClassEnd;
