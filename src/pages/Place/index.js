import React from 'react';
import './place.scss';
import banner from '../../assets/PlaceImg/banner.png';
import studioa1 from '../../assets/PlaceImg/studioa1.png';
import studioa2 from '../../assets/PlaceImg/studioa2.png';
import studioa3 from '../../assets/PlaceImg/studioa3.png';
import studioc1 from '../../assets/PlaceImg/studioc1.png';
import studioc2 from '../../assets/PlaceImg/studioc2.png';
import studioc3 from '../../assets/PlaceImg/studioc3.png';
import studiob1 from '../../assets/PlaceImg/studiob1.png';
import studiob2 from '../../assets/PlaceImg/studiob2.png';
import studiob3 from '../../assets/PlaceImg/studiob3.png';
import studiob4 from '../../assets/PlaceImg/studiob3.png';

function Place(props) {
    return (
        <>
            <div className="p-0">
                <img src={banner} alt="banner" className="w-100" />
            </div>
            <div className="container">
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
                        <div className="col-12 col-md-6 order-1">
                            <img
                                src={studioa1}
                                alt="studioa1"
                                className="img-fluid"
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
                                <img src={studioa2} alt="studioa2" />
                            </button>
                            <button className="border-0 my-2">
                                <img src={studioa3} alt="studioa3" />
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
                        <div className="col-12 col-md-6 order-1 order-md-2">
                            <img
                                src={studiob1}
                                alt="studiob1"
                                className="img-fluid"
                            />
                        </div>
                        <div className="col-12 col-md-6 order-md-4 d-none d-md-block"></div>
                        <div className="col-12 col-md-6 order-md-3 order-2">
                            {' '}
                            <button className="border-0 my-2">
                                <img src={studiob2} alt="studiob2" />
                            </button>
                            <button className="border-0 my-2">
                                <img src={studiob3} alt="studiob3" />
                            </button>
                            <button className="border-0 my-2">
                                <img src={studiob4} alt="studiob4" />
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
                        <div className="col-12 col-md-6 order-1">
                            <img
                                src={studioc1}
                                alt="studioc1"
                                className="img-fluid"
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
                                <img src={studioc2} alt="studioc2" />
                            </button>
                            <button className="border-0 my-2">
                                <img src={studioc3} alt="studioc3" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-main-gary-light-color">
                <div className="container mt-5">
                    <div className="d-flex pt-4">
                        <h4
                            className="me-2 text-nowrap"
                            style={{ color: ' #333333' }}
                        >
                            場地預約
                        </h4>
                        <h4
                            className="engText text-nowrap me-5"
                            style={{ color: ' #333333' }}
                        >
                            VENUE RESERVATION
                        </h4>
                        <div className="vector3 mt-2"></div>
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
