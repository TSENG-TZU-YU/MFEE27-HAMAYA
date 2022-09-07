import React from 'react';
import { Link } from 'react-router-dom';

// 圖檔
import Adult_img from '../../../../../assets/ClassImg/Adult img.png';

function ClassStart(props) {
    return (
        <div>
            <Link to="detailed">
                <div className="introduce row me-0 mb-5 class-shadow">
                    <img
                        className="col-lg-6  px-lg-0"
                        src={Adult_img}
                        alt="Adult img"
                    />
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
                                <p className="ms-2 mt-2 "> 2 人評價</p>
                            </div>
                            <div className="d-lg-flex justify-content-lg-between align-items-lg-center pt-1">
                                <h4
                                    className=" fw-bold "
                                    style={{ color: '#5b322f' }}
                                >
                                    NT $2,500 / 期
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default ClassStart;