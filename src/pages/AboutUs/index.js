import React from 'react';
import { useState } from 'react';
import './about.scss';

import banner from '../../assets/AboutImg/banner.png';
import fb from '../../assets/AboutImg/fb.png';
import line from '../../assets/AboutImg/line.png';
import cat from '../../assets/AboutImg/cat.jpg';
import axios from 'axios';

function About(props) {
    // 表單
    const [ask, setAsk] = useState({
        fullName: '桐谷和人',
        user_id: '',
        phone: '0912348763',
        email: 'kirito@gmail.com',
        q_category: '2',
        title: '幫我撐十秒',
        comment: 'C8763',
    });
    const fieldChange = (e) => {
        const newAsk = { ...ask, [e.target.name]: e.target.value };

        setAsk(newAsk);
    };

    return (
        <>
            <div className="p-0">
                <img src={banner} alt="banner" className="w-100" />
            </div>
            <div className="bg-main-light-color">
                <div className="container">
                    <div className="d-flex" style={{ color: '#f2f2f2' }}>
                        <a href="/">
                            <p style={{ color: '#f2f2f2' }}>首頁</p>
                        </a>
                        /
                        <a href="/">
                            {' '}
                            <p style={{ color: '#f2f2f2' }}>關於我們</p>
                        </a>
                    </div>
                    <div className="row">
                        <div className="pt-5 d-flex">
                            <h4
                                className="me-2 text-nowrap"
                                style={{ color: '#f2f2f2' }}
                            >
                                品牌理念
                            </h4>
                            <h4
                                className="engText text-nowrap me-5"
                                style={{ color: '#f2f2f2' }}
                            >
                                BRAND CONCEPT
                            </h4>
                            <div className="vector1 mt-3"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="pt-5 d-flex">
                    <h4
                        className="me-2 text-nowrap"
                        style={{ color: '#00323d' }}
                    >
                        創辦人
                    </h4>
                    <h4 className="engText text-nowrap me-5">FOUNDER</h4>
                    <div className="vector3 mt-3"></div>
                </div>

                <div className="row mt-5 p-4">
                    <div className="col-md-3 col-6">
                        <div className="founder">
                            <img src={cat} alt="cat" className="" />
                        </div>
                        <h4 style={{ color: '#5b322f' }}>33 范家寧 組長</h4>
                        <h5 style={{ color: '#333333' }}>負責項目</h5>
                        <hr />
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="founder">
                            {' '}
                            <img src={cat} alt="cat" className="" />
                        </div>
                        <h4 style={{ color: '#5b322f' }}>03 黃睿渝 技術長</h4>
                        <h5 style={{ color: '#333333' }}>負責項目</h5>
                        <hr />
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="founder">
                            {' '}
                            <img src={cat} alt="cat" className="" />
                        </div>
                        <h4 style={{ color: '#5b322f' }}>09 黃秀莉</h4>
                        <h5 style={{ color: '#333333' }}>負責項目</h5>
                        <hr />
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="founder">
                            {' '}
                            <img src={cat} alt="cat" className="" />
                        </div>
                        <h4 style={{ color: '#5b322f' }}>15 劉光育</h4>
                        <h5 style={{ color: '#333333' }}>負責項目</h5>
                        <hr />
                    </div>
                    <div className="col-md-3 col-6 d-none d-md-block"></div>
                    <div className="col-md-3 col-6">
                        <div className="founder">
                            {' '}
                            <img src={cat} alt="cat" className="" />
                        </div>
                        <h4 style={{ color: '#5b322f' }}>17 温侑臻</h4>
                        <h5 style={{ color: '#333333' }}>負責項目</h5>
                        <hr />
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="founder">
                            {' '}
                            <img src={cat} alt="cat" className="" />
                        </div>
                        <h4 style={{ color: '#5b322f' }}>27 曾子瑜</h4>
                        <h5 style={{ color: '#333333' }}>負責項目</h5>
                        <hr />
                    </div>
                    <div className="col-md-3 col-6 d-none d-md-block"></div>
                </div>
            </div>

            <div className="bg-main-gary-light-color">
                <div className="container mt-5 askform">
                    <div className="pt-5 d-flex">
                        <h4
                            className="me-2 text-nowrap"
                            style={{ color: ' #333333' }}
                        >
                            聯絡我們
                        </h4>
                        <h4
                            className="engText text-nowrap me-5"
                            style={{ color: ' #333333' }}
                        >
                            CONTACT US
                        </h4>
                        <div className="vector3 mt-3"></div>
                    </div>

                    <div className="row p-5">
                        <div className="d-flex justify-content-between">
                            <p className="">
                                歡迎來到 HAMAYA MUSIC
                                ，若您有任何建議與諮詢，歡迎利用下方表單，我們將由專人儘快回覆您，謝謝。
                            </p>
                            <p className="text-nowrap d-none d-md-block">
                                *為必填項目
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p className="d-flex justify-content-between">
                                姓名*
                                <span className="d-block d-md-none">
                                    *為必填項目
                                </span>
                            </p>

                            <input
                                type="text"
                                name="fullName"
                                value={ask.fullName}
                                placeholder="請輸入姓名"
                                onChange={fieldChange}
                                className="w-100"
                            />
                        </div>
                        <div className="col-12 col-md-6">
                            <p>聯絡電話*</p>
                            <input
                                type="phone"
                                name="phone"
                                value={ask.phone}
                                onChange={fieldChange}
                                placeholder="請輸入電話/手機"
                                className="w-100"
                            />
                        </div>
                        <div className="col-12 col-md-6">
                            <p>信箱*</p>
                            <input
                                type="mail"
                                name="mail"
                                value={ask.email}
                                onChange={fieldChange}
                                placeholder="請輸入信箱"
                                className="w-100"
                            />
                        </div>
                        <div className="col-12 col-md-6">
                            <p>問題類型*</p>
                            <select
                                name="q_category"
                                className="w-100"
                                value={ask.q_category}
                                onChange={fieldChange}
                            >
                                <option value="0">請選擇問題類型</option>
                                <option value="1">門市相關問題</option>
                                <option value="2">商品問題</option>
                                <option value="3">課程問題</option>
                                <option value="4">師資問題</option>
                                <option value="5">文章問題</option>
                                <option value="6">場地租借問題</option>
                                <option value="7">其他問題</option>
                            </select>
                        </div>
                        <div className="col-12">
                            <p>問題主旨*</p>
                            <input
                                type="text"
                                name="title"
                                value={ask.title}
                                placeholder="請輸入問題主旨"
                                className="w-100"
                            />
                        </div>
                        <div className="col-12">
                            <p>提問內容*</p>
                            <textarea
                                type="text"
                                name="comment"
                                value={ask.comment}
                                onChange={fieldChange}
                                placeholder="問題描述"
                                className="w-100"
                                rows="4"
                            />
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button
                            className="bg-main-light-color accent-light-color border-0 px-5 py-1 mb-5"
                            onClick={() => {
                                const data = JSON.parse(JSON.stringify(ask));
                                console.log(data);
                                axios.put(
                                    'http://localhost:3001/api/aboutus/ask',
                                    data
                                    // { withCredentials: true }
                                );
                            }}
                        >
                            確認送出
                        </button>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="mt-2 d-flex">
                    <h4
                        className="me-2 text-nowrap"
                        style={{ color: ' #00323d' }}
                    >
                        門市資訊
                    </h4>
                    <h4
                        className="engText text-nowrap me-5"
                        style={{ color: ' #00323d' }}
                    >
                        STORE INFORMATION
                    </h4>
                    <div className="vector3 mt-3"></div>
                </div>
                <div className="row">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="py-5 d-flex justify-content-between">
                                <div>
                                    <h4
                                        className="text-nowrap"
                                        style={{ color: ' #00323d' }}
                                    >
                                        HAMAYA MUSIC 旗艦門市
                                    </h4>
                                </div>
                                <div className="d-flex">
                                    <img
                                        src={fb}
                                        herf="#"
                                        alt="fb"
                                        className="p-1"
                                    ></img>
                                    <img
                                        src={line}
                                        herf="#"
                                        alt="line"
                                        className="p-1"
                                    ></img>
                                </div>
                            </div>

                            <h6 className="infotitle p-1 px-3">門市電話</h6>
                            <p className="py-3">03-4533013</p>
                            <h6 className="infotitle p-1 px-3">門市地址</h6>
                            <p className="py-3">
                                320 桃園市中壢區新生路二段421號
                            </p>
                            <h6 className="infotitle p-1 px-3">營業時間</h6>
                            <p className="py-3">
                                週一 ～ 週五 12:30 - 21:00 <br />
                                週六　　　　09:00 - 21:00 <br />
                                週日　　　　10:00 - 18:00
                            </p>
                            <h6 className="infotitle p-1 px-3">門市服務</h6>
                            <p className="py-3">
                                門市樂器販售、音樂教育中心、展演空間、練團室、錄音室場地租借
                            </p>
                        </div>
                        <div className="col-12 col-md-6 p-5">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.4376576930626!2d121.21998631524635!3d24.985240346397703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34682183e7b783c3%3A0xf0ebfba2069b6158!2z6IGW5b635Z-6552j5a246Zmi!5e0!3m2!1szh-TW!2stw!4v1662354472718!5m2!1szh-TW!2stw"
                                style={{ border: 0 }}
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                                className="w-100 h-100"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
