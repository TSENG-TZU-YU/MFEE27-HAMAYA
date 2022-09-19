import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import { API_URL } from '../../../../../utils/config';
import axios from 'axios';
import { useAuth } from '../../../../../utils/use_auth';

// 元件
import StarRating from '../../../../../components/Star/StarRating';
import Close from '../../../../../assets/svg/close.svg';

// 圖檔
import Adult_img from '../../../../../assets/ClassImg/Adult img.png';
import rate_review from '../../../../../assets/svg/rate_review.svg';

function ClassEnd(props) {
    const [popup, setPopup] = useState(false);
    const [data, setData] = useState([]);
    const [buyClass, setBuyClass] = useState([]);

    // 取得會員 ID 資料
    const { member } = useAuth();
    // StarRating.js 改放 ClassEnd/index.js 並傳值進去
    const [rating, setRating] = useState(0);

    // 星級、內容狀態
    const [evaluation, setEvaluation] = useState();

    // 評價成功狀態
    // const [success, setSuccess] = useState();
    useEffect(() => {
        let getAdultClass = async () => {
            let response = await axios.get(
                `${API_URL}/member/myclass/${member.id}`
            );
            setData(response.data.data);
            setBuyClass(response.data.finishClass);

            // TODO: 當該課程ID=已評價過的課程ID
        };
        getAdultClass();
    }, []);

    // 記入星級、評價內容
    const evaluationChange = (e) => {
        const newEvaluation = {
            ...evaluation,
            [e.target.name]: e.target.value,
        };

        setEvaluation(newEvaluation);
    };

    async function evaluationSubmit(e) {
        e.preventDefault();
        try {
            let response = await axios.post(
                `${API_URL}/member/myclass`,
                evaluation,
                {
                    withCredentials: true,
                }
            );
            console.log(response.data);
            // TODO: 評價成功後 無法再評價 只能查看
            // setSuccess(true);
            setPopup(false);
            alert('評價成功');
        } catch (err) {
            console.log('評價失敗', err.response.data);
            alert(err.response.data.errors[0].msg);
        }
    }
    return (
        <div>
            <Link to="detailed">
                {buyClass.map((buyClass) => {
                    return (
                        <div
                            key={buyClass.id}
                            className="introduce row mx-2  mb-5 class-shadow text-start"
                        >
                            <img
                                className="col-lg-4  px-0  buyClassImg"
                                src={require(`../../../../../album/class/${buyClass.image_1}`)}
                                alt="Adult img"
                            />
                            <div className="col-lg-8  mt-3 ">
                                <h6
                                    className="ms-1 mb-2 "
                                    style={{ color: '#00323d' }}
                                >
                                    {buyClass.name}
                                </h6>
                                <div className="vector2 me-2"></div>
                                <div className=" mt-2">
                                    <p className=" mb-0 ">
                                        開課時間：{buyClass.start_date} -
                                        {buyClass.end_date}
                                    </p>
                                    <p className=" mb-0 mt-2">
                                        師資： {buyClass.teacher}老師
                                    </p>

                                    <div className="d-lg-flex justify-content-lg-between align-items-lg-center pt-2 ">
                                        <p
                                            className=" fw-bold pt-1"
                                            style={{ color: '#5b322f' }}
                                        >
                                            NT $ {buyClass.price} / 期
                                        </p>

                                        <button
                                            className="btn d-flex pb-0 border-0"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setPopup(true);
                                                setRating(0);
                                                setEvaluation({
                                                    // TODO: 取的該課程id
                                                    classProduct:
                                                        buyClass.product_id,
                                                    memberID: member.id,
                                                });
                                            }}
                                        >
                                            <img
                                                className="me-1 "
                                                src={rate_review}
                                                alt="message"
                                            />
                                            <p>評價課程</p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
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
                            <StarRating
                                evaluationChange={evaluationChange}
                                rating={rating}
                                setRating={setRating}
                            />
                        </div>
                        <p className="mt-1 mb-1">2022/09/05</p>

                        <textarea
                            className="form-control mt-2 mb-2"
                            id="exampleFormControlTextarea1"
                            rows="3"
                            placeholder="評價內容"
                            style={{ resize: 'none', height: '120px' }}
                            name="content"
                            onChange={evaluationChange}
                        />

                        <small>
                            請勿在此輸入任何聯絡資訊、網址或是個人隱私資料。(字數限制：200字)
                        </small>
                        <div className="d-flex justify-content-center">
                            <button
                                className="btn btn-primary myClass-btn mt-4 "
                                onClick={evaluationSubmit}
                            >
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
