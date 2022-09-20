import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import { API_URL } from '../../../../../utils/config';
import axios from 'axios';
import { useAuth } from '../../../../../utils/use_auth';

// 元件
import PaginationBar from '../../../../../components/PaginationBar/PaginationBar';

function ClassStart(props) {
    // const [data, setData] = useState([]);
    const [buyClass, setBuyClass] = useState([]);
    // 取得會員 ID 資料
    const { member } = useAuth();
    useEffect(() => {
        let getAdultClass = async () => {
            let response = await axios.get(
                `${API_URL}/member/myclass/${member.id}`
            );
            // setData(response.data.data);
            setBuyClass(response.data.buyClass);

            console.log('buyClass', buyClass);
        };
        getAdultClass();
    }, []);
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Link>
            {/* 頁碼 */}
            {/* <div className="pageBar">
                <PaginationBar
                // pageNow={pageNow}
                // setPageNow={setPageNow}
                // pageTotal={pageTotal}
                />
            </div> */}
            {/* 頁碼 end */}
        </div>
    );
}

export default ClassStart;
