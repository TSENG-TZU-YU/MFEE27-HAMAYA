import React from 'react';
import './place.scss';
import { useState } from 'react';

import banner from '../../assets/PlaceImg/banner.png';
import studioA01 from '../../assets/PlaceImg/studioA01.jpg';
import studioA02 from '../../assets/PlaceImg/studioA02.jpg';
import studioA03 from '../../assets/PlaceImg/studioA03.jpg';
import studioA01min from '../../assets/PlaceImg/studioA01min.jpg';
import studioA02min from '../../assets/PlaceImg/studioA02min.jpg';
import studioA03min from '../../assets/PlaceImg/studioA03min.jpg';
import studioB01 from '../../assets/PlaceImg/studioB01.jpg';
import studioB02 from '../../assets/PlaceImg/studioB02.jpg';
import studioB01min from '../../assets/PlaceImg/studioB01min.jpg';
import studioB02min from '../../assets/PlaceImg/studioB02min.jpg';
import studioC01 from '../../assets/PlaceImg/studioC01.jpg';
import studioC02 from '../../assets/PlaceImg/studioC02.jpg';
import studioC01min from '../../assets/PlaceImg/studioC01min.jpg';
import studioC02min from '../../assets/PlaceImg/studioC02min.jpg';

function Place(props) {
    const [studioA01Hover, setStudioA01Hover] = useState('studioA01');
    const [studioA02Hover, setStudioA02Hover] = useState('studioA02');
    const [studioA03Hover, setStudioA03Hover] = useState('studioA03');
    const [studioB01Hover, setStudioB01Hover] = useState('studioB01');
    const [studioB02Hover, setStudioB02Hover] = useState('studioB02');
    const [studioC01Hover, setStudioC01Hover] = useState('studioC01');
    const [studioC02Hover, setStudioC02Hover] = useState('studioC02');
    return (
        <>
            <div className="p-0">
                <img src={banner} alt="banner" className="w-100" />
            </div>
            <div className="container ">
                <div className="place">
                    <div className="d-flex mt-5">
                        <a href="/">
                            <p>首頁</p>
                        </a>
                        /
                        <a href="/">
                            {' '}
                            <p>場地租借</p>
                        </a>
                    </div>

                    <div className="pb-5 pt-5 d-flex">
                        <h4
                            className="text-nowrap me-2"
                            style={{ color: '#00323d' }}
                        >
                            租借項目
                        </h4>
                        <h4 className="engText text-nowrap me-5">
                            RENTAL ITEM
                        </h4>
                        <div className="vector3 mt-3"></div>
                    </div>

                    {/* studioa */}
                    <div className="row">
                        <div className="col-12 d-block d-md-none">
                            <h5 className="text-center main-color py-3">
                                Studio-A 錄音室
                            </h5>
                        </div>
                        <div className="col-12 col-md-6 order-1 position-relative studioADIV">
                            <img
                                src={studioA01}
                                alt="studioA01"
                                className={studioA01Hover}
                            />
                            <img
                                src={studioA02}
                                alt="studioA02"
                                className={studioA02Hover}
                            />
                            <img
                                src={studioA03}
                                alt="studioA03"
                                className={studioA03Hover}
                            />
                        </div>
                        <div className="col-12 col-md-6 order-3 order-md-2">
                            <h4 className="item1 d-flex justify-content-end d-none d-md-block">
                                Studio-A 錄音室
                            </h4>
                            <div className="intro1">
                                <p>
                                    Studio-A
                                    錄音室，深知每個音樂人都有成名夢，這裡提供給音樂人一個專業錄音空間，將自己的作品完美的輸出成輯。
                                </p>
                                <h6>設備介紹</h6>
                                <p> 8軌A類等級的麥克風前極放大器 </p>
                                <p>3軌A類等級的Di </p>
                                <p>4軌B類等級的麥克風放大器</p>
                                <p>ADAD類比數位轉換器</p>
                                <h6>
                                    時段 08:00 - 21:00　平日 NT $2,000　假日 NT
                                    $2,500
                                </h6>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 d-none d-md-block order-3"></div>
                        <div className="col-12 col-md-6 order-2 order-md-4">
                            <button className="border-0 my-2">
                                <img
                                    src={studioA01min}
                                    alt="studioA01min"
                                    onClick={() => {
                                        setStudioA01Hover('studioA01 hover');
                                        setStudioA02Hover('studioA02');
                                        setStudioA03Hover('studioA03');
                                    }}
                                />
                            </button>
                            <button className="border-0 my-2">
                                <img
                                    src={studioA02min}
                                    alt="studioA02min"
                                    onClick={() => {
                                        setStudioA01Hover('studioA01');
                                        setStudioA02Hover('studioA02 hover');
                                        setStudioA03Hover('studioA03');
                                    }}
                                />
                            </button>
                            <button className="border-0 my-2">
                                <img
                                    src={studioA03min}
                                    alt="studioA03min"
                                    onClick={() => {
                                        setStudioA01Hover('studioA01');
                                        setStudioA02Hover('studioA02');
                                        setStudioA03Hover('studioA03 hover');
                                    }}
                                />
                            </button>
                        </div>
                    </div>
                    <hr className="m-5" />
                    {/* studioB */}
                    <div className="row">
                        <div className="col-12 d-block d-md-none">
                            <h5 className="text-center main-color py-3">
                                Studio-B 練團室
                            </h5>
                        </div>
                        <div className=" col-12 col-md-6 order-3 order-md-1">
                            <h4 className="item2 d-none d-md-block">
                                Studio-B 練團室
                            </h4>
                            <div className="intro2">
                                <p>
                                    精緻練團室出租，希望藉由完善、貼心的服務，使樂團能心無旁鶩的修練音樂技巧。
                                </p>
                                <h6>設備介紹</h6>
                                <p>練團室坪數：5坪 / 容納約7人 </p>
                                <p>吉他音箱：Laney IRT15H + Laney 412cab</p>
                                <p>吉他音箱：Marshall DSL15H + MX212cab</p>
                                <p>貝斯音箱：GK MB112 II </p>
                                <p> 爵士鼓組：Dixon Aritisan Standard 5粒組</p>
                                <h6>
                                    時段 08:00 - 21:00　平日 NT $2,000　假日 NT
                                    $2,500
                                </h6>
                            </div>
                        </div>
                        <div></div>
                        <div className="col-12 col-md-6 order-1 order-md-2 position-relative studioB">
                            <img
                                src={studioB01}
                                alt="studioB01"
                                className={studioB01Hover}
                            />
                            <img
                                src={studioB02}
                                alt="studioB02"
                                className={studioB02Hover}
                            />
                        </div>
                        <div className="col-12 col-md-6 order-md-4 d-none d-md-block"></div>
                        <div className="col-12 col-md-6 order-md-3 order-2 studioBDIV">
                            <button className="border-0 my-2">
                                <img
                                    src={studioB01min}
                                    alt="studioB01min"
                                    onClick={() => {
                                        setStudioB01Hover('studioB01 hover');
                                        setStudioB02Hover('studioB02');
                                    }}
                                />
                            </button>
                            <button className="border-0 my-2">
                                <img
                                    src={studioB02min}
                                    alt="studioB02min"
                                    onClick={() => {
                                        setStudioB01Hover('studioB01');
                                        setStudioB02Hover('studioB02  hover');
                                    }}
                                />
                            </button>
                        </div>
                    </div>

                    <hr className="m-5" />
                    {/* studioC */}
                    <div className="row">
                        <div className="col-12 d-block d-md-none">
                            <h5 className="text-center main-color py-3">
                                Studio-C 小型展演空間
                            </h5>
                        </div>
                        <div className="col-12 col-md-6 order-1 position-relative studioCDIV">
                            <img
                                src={studioC01}
                                alt="studioC01"
                                className={studioC01Hover}
                            />
                            <img
                                src={studioC02}
                                alt="studioC02"
                                className={studioC02Hover}
                            />
                        </div>
                        <div className=" col-12 col-md-6 order-3 order-md-2">
                            <h4 className="item3 d-flex justify-content-end d-none d-md-block">
                                Studio-C 小型展演空間
                            </h4>
                            <div className="intro3">
                                <p>
                                    適合舉辦小型音樂展演、各類型講座、小型企業開會、
                                    產品活動發表會、各類型講座、私人包場與聚會。
                                </p>
                                <h6>設備介紹</h6>
                                <p>免費提供 300M/100M光纖 Wifi</p>
                                <p>
                                    100吋單槍投影幕、無線麥克風、頂級 LD System
                                    音響系統
                                </p>
                                <p>
                                    40張折疊椅、6張折疊桌、休息室、茶水間及衛生間
                                </p>
                                <p>Yamaha C2 平台演奏琴</p>
                                <h6>
                                    時段 08:00 - 21:00　平日 NT $2,000　假日 NT
                                    $2,500
                                </h6>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 order-3 d-none d-md-block"></div>
                        <div className="col-12 col-md-6 order-2 order-md-4">
                            <button className="border-0 my-2">
                                <img
                                    src={studioC01min}
                                    alt="studioC01min"
                                    onClick={() => {
                                        setStudioC01Hover('studioC01 hover');
                                        setStudioC02Hover('studioC02');
                                    }}
                                />
                            </button>
                            <button className="border-0 my-2">
                                <img
                                    src={studioC02min}
                                    alt="studioC02min"
                                    onClick={() => {
                                        setStudioC01Hover('studioC01');
                                        setStudioC02Hover('studioC02 hover');
                                    }}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-main-gary-light-color">
                <div className="container mt-5">
                    <div className="d-flex pt-4 align-items-center">
                        <h4
                            className="me-2 text-nowrap"
                            style={{ color: ' #333333' }}
                        >
                            場地預約
                        </h4>
                        <h4
                            className="engText text-nowrap reservation"
                            style={{ color: ' #333333' }}
                        >
                            VENUE RESERVATION
                        </h4>
                        <div className="vector3 mt-1"></div>
                    </div>

                    <div className="row p-5">
                        <div className="col-12 col-md-6">
                            <p>姓名</p>
                            <input
                                type="text"
                                id="fullName"
                                placeholder="請輸入姓名"
                                className="w-100"
                            />
                        </div>
                        <div className="col-12 col-md-6">
                            <p>使用日期</p>
                            <input type="date" id="usedate" className="w-100" />
                        </div>
                        <div className="col-12 col-md-6">
                            <p>聯絡電話</p>
                            <input
                                type="phone"
                                id="phone"
                                placeholder="請輸入電話/手機"
                                className="w-100"
                            />
                        </div>
                        <div className="col-12 col-md-6">
                            <p>使用時間</p>
                            <input type="time" id="usetime" className="w-100" />
                        </div>
                        <div className="col-12 col-md-6">
                            <p>信箱</p>
                            <input
                                type="mail"
                                id="mail"
                                placeholder="請輸入信箱"
                                className="w-100"
                            />
                        </div>
                        <div className="col-12 col-md-6">
                            <p>使用人數</p>
                            <input type="number" id="users" className="w-100" />
                            {/* 設定不可為0&負 */}
                        </div>
                        <div className="col-12">
                            <p>租借項目</p>
                            <select id="cate-select" className="w-100">
                                <option value="">studio A 錄音室</option>
                                <option value="">studio B 練團室</option>
                                <option value="">studio C 小型展演空間</option>
                            </select>
                        </div>
                        <div className="col-12">
                            <p>留言</p>
                            <textarea
                                type="text"
                                id="comment"
                                placeholder="留言內容"
                                className="w-100"
                            />
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button className="bg-main-light-color accent-light-color border-0 px-5 py-1 mb-5">
                            確認送出
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Place;
