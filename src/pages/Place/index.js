import React from 'react';
import './place.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../utils/use_auth';
import { API_URL } from '../../utils/config';
import { successToast, warningToast } from '../../components/Alert';

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
    const [editRent, setEditRent] = useState(false);
    // 表單狀態
    const [memberLogin, setMemberLogin] = useState(false);

    const [rent, setRent] = useState({
        fullName: '',
        user_id: '',
        date: '',
        phone: '',
        time: '',
        usercount: '0',
        email: '',
        item: '0',
        comment: '',
    });

    // 錯誤訊息狀態
    const [renterros, setAskErros] = useState({
        fullName: '',
        date: '',
        user_id: '',
        phone: '',
        time: '',
        email: '',
        usercount: '',
        item: '',
    });

    //會員登入狀態判斷
    const { member, setMember, isLogin, setIsLogin } = useAuth();
    useEffect(() => {
        async function getMember() {
            try {
                console.log('檢查是否登入');
                let response = await axios.get(`${API_URL}/auth`, {
                    withCredentials: true,
                });
                console.log('已登入', response.data);
                setIsLogin(true);
                setMember(response.data);
                setMemberLogin(true);
                setEditRent(true);
                setRent({
                    ...rent,
                    fullName: response.data.fullName,
                    user_id: response.data.id,
                    phone: response.data.phone,
                    email: response.data.email,
                });
            } catch (err) {
                // navigate('/');
                console.log(err.response.data.message);
            }
        }
        getMember();
    }, []);

    // 整個表單用，用於當使用者輸入時，暫時先清空某欄位的錯誤訊息
    const handleFormChange = (e) => {
        setAskErros({
            ...renterros,
            [e.target.name]: '',
        });
    };

    //一鍵填寫資料
    function setDemo(e) {
        e.preventDefault();
        setRent({
            ...rent,
            date: '2022-10-15',
            time: '18:00',
            usercount: '5',
            item: 'studio C 小型展演空間',
            comment: '你好，我想租用這個空間',
        });
    }

    // 送出表單
    async function rentsubmit(e) {
        e.preventDefault();
        try {
            const response = await axios.post(
                'http://localhost:3001/api/place/rent',
                rent,
                { withCredentials: true }
            );
            console.log(response.data);
            setRent({
                user_id: '',
                date: '',
                time: '',
                usercount: '0',
                item: '0',
                comment: '',
            });
            successToast('表單已送出', '關閉');
        } catch (err) {
            console.log(err.response.data);
            warningToast('請填寫完整表單', '關閉');

            setAskErros({
                fullName: err.response.data.fullName,
                date: err.response.data.date,
                user_id: err.response.data.user_id,
                phone: err.response.data.phone,
                time: err.response.data.time,
                email: err.response.data.email,
                usercount: err.response.data.usercount,
                item: err.response.data.item,
            });
        }
    }

    const fieldChange = (e) => {
        const newRent = { ...rent, [e.target.name]: e.target.value };

        setRent(newRent);
    };

    // 照片輪播
    const [studioAImg, setStudioAImg] = useState('studioA01');
    const [studioBImg, setStudioBImg] = useState('studioB01');
    const [studioCImg, setStudioCImg] = useState('studioC01');
    const [studioAImgBtn, setStudioAImgBtn] = useState('studioA01');
    const [studioBImgBtn, setStudioBImgBtn] = useState('studioB01');
    const [studioCImgBtn, setStudioCImgBtn] = useState('studioC01');

    return (
        <>
            <div className="p-0">
                <img src={banner} alt="banner" className="w-100" />
            </div>
            <div className="container ">
                <div className="">
                    <div className="d-flex mt-5">
                        <a href="/">
                            <p>首頁</p>
                        </a>
                        &nbsp;/&nbsp;
                        <a href="/">
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
                    {/*  輪播 */}
                    <div className="place">
                        {/* studioa */}
                        <div className="row">
                            <div className="col-12 d-block d-md-none">
                                <h5 className="text-center main-color py-3">
                                    Studio-A 錄音室
                                </h5>
                            </div>
                            <div className="col-12 col-md-6 order-1 d-flex align-items-center">
                                <div className="position-relative p-3 studioImgDIV">
                                    <img
                                        src={studioA01}
                                        alt="studioA01"
                                        className={
                                            studioAImg === 'studioA01'
                                                ? 'studio hover'
                                                : 'studio'
                                        }
                                    />
                                    <img
                                        src={studioA02}
                                        alt="studioA02"
                                        className={
                                            studioAImg === 'studioA02'
                                                ? 'studio hover'
                                                : 'studio'
                                        }
                                    />
                                    <img
                                        src={studioA03}
                                        alt="studioA03"
                                        className={
                                            studioAImg === 'studioA03'
                                                ? 'studio hover'
                                                : 'studio'
                                        }
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-md-6 order-3 order-md-2 ">
                                <h4 className="item1 d-none d-md-block">
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
                                        時段 08:00 - 21:00　平日 NT $2,000　假日
                                        NT $2,500
                                    </h6>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 d-none d-md-block order-3"></div>
                            <div className="col-12 col-md-6 order-2 order-md-4">
                                <button
                                    className={
                                        studioAImgBtn === 'studioA01'
                                            ? 'p-0 m-1 studioBtn hover'
                                            : 'p-0 m-1 studioBtn '
                                    }
                                >
                                    <img
                                        src={studioA01min}
                                        alt="studioA01min"
                                        onClick={() => {
                                            setStudioAImg('studioA01');
                                            setStudioAImgBtn('studioA01');
                                        }}
                                    />
                                </button>
                                <button
                                    className={
                                        studioAImgBtn === 'studioA02'
                                            ? 'p-0 m-1 studioBtn hover'
                                            : 'p-0 m-1 studioBtn '
                                    }
                                >
                                    <img
                                        src={studioA02min}
                                        alt="studioA02min"
                                        onClick={() => {
                                            setStudioAImg('studioA02');
                                            setStudioAImgBtn('studioA02');
                                        }}
                                    />
                                </button>
                                <button
                                    className={
                                        studioAImgBtn === 'studioA03'
                                            ? 'p-0 m-1 studioBtn hover'
                                            : 'p-0 m-1 studioBtn'
                                    }
                                >
                                    <img
                                        src={studioA03min}
                                        alt="studioA03min"
                                        onClick={() => {
                                            setStudioAImg('studioA03');
                                            setStudioAImgBtn('studioA03');
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
                                    <p>
                                        爵士鼓組：Dixon Aritisan Standard 5粒組
                                    </p>
                                    <h6>
                                        時段 08:00 - 21:00　平日 NT $2,000　假日
                                        NT $2,500
                                    </h6>
                                </div>
                            </div>
                            <div></div>
                            <div className="col-12 col-md-6 order-1 order-md-2 ">
                                <div className="position-relative p-3 studioImgDIV">
                                    <img
                                        src={studioB01}
                                        alt="studioB01"
                                        className={
                                            studioBImg === 'studioB01'
                                                ? 'studio hover'
                                                : 'studio'
                                        }
                                    />
                                    <img
                                        src={studioB02}
                                        alt="studioB02"
                                        className={
                                            studioBImg === 'studioB02'
                                                ? 'studio hover'
                                                : 'studio'
                                        }
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-md-6 order-md-4 d-none d-md-block"></div>
                            <div className="col-12 col-md-6 order-md-3 order-2 studioBMinImg">
                                <button
                                    className={
                                        studioBImgBtn === 'studioB01'
                                            ? 'p-0 m-1 studioBtn hover'
                                            : 'p-0 m-1 studioBtn '
                                    }
                                >
                                    <img
                                        src={studioB01min}
                                        alt="studioB01min"
                                        onClick={() => {
                                            setStudioBImg('studioB01');
                                            setStudioBImgBtn('studioB01');
                                        }}
                                    />
                                </button>
                                <button
                                    className={
                                        studioBImgBtn === 'studioB02'
                                            ? 'p-0 m-1 studioBtn hover'
                                            : 'p-0 m-1 studioBtn '
                                    }
                                >
                                    <img
                                        src={studioB02min}
                                        alt="studioB02min"
                                        onClick={() => {
                                            setStudioBImg('studioB02');
                                            setStudioBImgBtn('studioB02');
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
                            <div className="col-12 col-md-6 order-1 ">
                                <div className="position-relative p-3 studioImgDIV">
                                    <img
                                        src={studioC01}
                                        alt="studioC01"
                                        className={
                                            studioCImg === 'studioC01'
                                                ? 'studio hover'
                                                : 'studio'
                                        }
                                    />
                                    <img
                                        src={studioC02}
                                        alt="studioC02"
                                        className={
                                            studioCImg === 'studioC02'
                                                ? 'studio hover'
                                                : 'studio'
                                        }
                                    />
                                </div>
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
                                        100吋單槍投影幕、無線麥克風、頂級 LD
                                        System 音響系統
                                    </p>
                                    <p>
                                        40張折疊椅、6張折疊桌、休息室、茶水間及衛生間
                                    </p>
                                    <p>Yamaha C2 平台演奏琴</p>
                                    <h6>
                                        時段 08:00 - 21:00　平日 NT $2,000　假日
                                        NT $2,500
                                    </h6>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 order-3 d-none d-md-block"></div>
                            <div className="col-12 col-md-6 order-2 order-md-4">
                                <button
                                    className={
                                        studioCImgBtn === 'studioC01'
                                            ? 'p-0 m-1 studioBtn hover'
                                            : 'p-0 m-1 studioBtn'
                                    }
                                >
                                    <img
                                        src={studioC01min}
                                        alt="studioC01min"
                                        onClick={() => {
                                            setStudioCImg('studioC01');
                                            setStudioCImgBtn('studioC01');
                                        }}
                                    />
                                </button>
                                <button
                                    className={
                                        studioCImgBtn === 'studioC02'
                                            ? 'p-0 m-1 studioBtn hover'
                                            : 'p-0 m-1 studioBtn'
                                    }
                                >
                                    <img
                                        src={studioC02min}
                                        alt="studioC02min"
                                        onClick={() => {
                                            setStudioCImg('studioC02');
                                            setStudioCImgBtn('studioC02');
                                        }}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 表單 */}
            <div className="bg-main-gary-light-color">
                <form
                    className="container mt-5 placeform"
                    onChange={handleFormChange}
                    id="rent"
                >
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
                        <div className="col-12 col-md-6 my-2">
                            <p className="d-flex m-0">
                                姓名*
                                <span className="error">
                                    {renterros.fullName}
                                </span>
                            </p>
                            <input
                                type="text"
                                name="fullName"
                                value={rent.fullName}
                                placeholder="請輸入姓名"
                                onChange={fieldChange}
                                className="w-100"
                                disabled={editRent}
                            />
                        </div>
                        <div className="col-12 col-md-6 my-2">
                            <p className="d-flex m-0">
                                預計租借日期*
                                <span className="error">{renterros.date}</span>
                            </p>
                            <input
                                type="date"
                                name="date"
                                value={rent.date}
                                onChange={fieldChange}
                                className="w-100"
                            />
                        </div>
                        <div className="col-12 col-md-6 my-2">
                            <p className="d-flex m-0">
                                聯絡電話*
                                <span className="error">{renterros.phone}</span>
                            </p>
                            <input
                                type="text"
                                name="phone"
                                value={rent.phone}
                                onChange={fieldChange}
                                placeholder="請輸入電話/手機"
                                className="w-100"
                                disabled={editRent}
                            />
                        </div>
                        <div className="col-12 col-md-6 my-2">
                            <p className="d-flex m-0">
                                預計租借時間*
                                <span className="error">{renterros.time}</span>
                            </p>
                            <input
                                type="time"
                                name="time"
                                value={rent.time}
                                onChange={fieldChange}
                                className="w-100"
                            />
                        </div>
                        <div className="col-12 col-md-6 my-2">
                            <p className="d-flex m-0">
                                信箱*
                                <span className="error">{renterros.email}</span>
                            </p>
                            <input
                                type="mail"
                                name="email"
                                value={rent.email}
                                onChange={fieldChange}
                                placeholder="請輸入信箱"
                                className="w-100"
                                disabled={editRent}
                            />
                        </div>
                        <div className="col-12 col-md-6 my-2">
                            <p className="d-flex m-0">
                                使用人數*
                                <span className="error">
                                    {renterros.usercount}
                                </span>
                            </p>
                            <input
                                type="number"
                                name="usercount"
                                value={rent.usercount}
                                onChange={fieldChange}
                                className="w-100"
                                min="0"
                            />
                            {/* 設定不可為0&負 */}
                        </div>
                        <div className="col-12 my-2">
                            <p className="d-flex m-0">
                                租借項目*
                                <span className="error">{renterros.item}</span>
                            </p>
                            <select
                                name="item"
                                className="w-100"
                                value={rent.item}
                                onChange={fieldChange}
                            >
                                <option value="0">請選擇場地</option>
                                <option value="studio A 錄音室">
                                    studio A 錄音室
                                </option>
                                <option value="studio B 練團室">
                                    studio B 練團室
                                </option>
                                <option value="studio C 小型展演空間">
                                    studio C 小型展演空間
                                </option>
                            </select>
                        </div>
                        <div className="col-12 my-2">
                            <p className="d-flex m-0">
                                留言
                                <span className="error">
                                    {renterros.comment}
                                </span>
                            </p>
                            <textarea
                                type="text"
                                name="comment"
                                placeholder="留言內容"
                                value={rent.comment}
                                onChange={fieldChange}
                                className="w-100"
                                rows="4"
                            />
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button
                            className="bg-main-light-color accent-light-color border-0 px-5 py-1 mb-5"
                            onClick={rentsubmit}
                        >
                            確認送出
                        </button>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button
                            className="bg-main-light-color accent-light-color border-0 px-5 py-1 mb-5"
                            onClick={setDemo}
                        ></button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Place;
