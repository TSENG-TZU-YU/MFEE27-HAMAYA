import React from 'react';
import './about.scss';
import banner from '../../assets/AboutImg/banner.png';
import fb from '../../assets/AboutImg/fb.png';
import line from '../../assets/AboutImg/line.png';

function About(props) {
    return (
        <>
            <img src={banner} alt="banner" />

            <div className="session1-bg">
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
                        <div className="col-4 mt-2 d-inline-flex">
                            <h4 className="me-2" style={{ color: '#f2f2f2' }}>
                                品牌理念
                            </h4>
                            <h4
                                className="engText"
                                style={{ color: '#f2f2f2' }}
                            >
                                BRAND CONCEPT
                            </h4>
                        </div>
                        <div className="vector3 mt-4 col-9"></div>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-3 mt-2 d-inline-flex">
                        <h4 className="me-2" style={{ color: '#00323d' }}>
                            創辦人
                        </h4>
                        <h4 className="engText">FOUNDER</h4>
                    </div>
                    <div className="vector3 mt-4 col-9"></div>
                </div>
                <div className="row mt-5 p-4">
                    <div className="col-md-3 col-6">
                        <div className="founder"></div>
                        <h4 style={{ color: '#5b322f' }}>33 范家寧 組長</h4>
                        <h5 style={{ color: '#333333' }}>負責項目</h5>
                        <hr />
                    </div>
                    <div className="col-md-3 col-6 mb-5">
                        <div className="founder"></div>
                        <h4 style={{ color: '#5b322f' }}>03 黃睿渝 技術長</h4>
                        <h5 style={{ color: '#333333' }}>負責項目</h5>
                        <hr />
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="founder"></div>
                        <h4 style={{ color: '#5b322f' }}>09 黃秀莉</h4>
                        <h5 style={{ color: '#333333' }}>負責項目</h5>
                        <hr />
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="founder"></div>
                        <h4 style={{ color: '#5b322f' }}>15 劉光育</h4>
                        <h5 style={{ color: '#333333' }}>負責項目</h5>
                        <hr />
                    </div>
                    <div className="col-md-3 col-6 d-none d-md-block"></div>
                    <div className="col-md-3 col-6 mt-5">
                        <div className="founder"></div>
                        <h4 style={{ color: '#5b322f' }}>17 温侑臻</h4>
                        <h5 style={{ color: '#333333' }}>負責項目</h5>
                        <hr />
                    </div>
                    <div className="col-md-3 col-6 mt-5">
                        <div className="founder"></div>
                        <h4 style={{ color: '#5b322f' }}>27 曾子瑜</h4>
                        <h5 style={{ color: '#333333' }}>負責項目</h5>
                        <hr />
                    </div>
                    <div className="col-md-3 col-6 d-none d-md-block"></div>
                </div>
            </div>

            <div className="session2-bg">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-3 pt-4 d-inline-flex">
                            <h4 className="me-2" style={{ color: ' #333333' }}>
                                聯絡我們
                            </h4>
                            <h4
                                className="engText"
                                style={{ color: ' #333333' }}
                            >
                                CONTACT US
                            </h4>
                        </div>
                        <div className="vector3 mt-5 col-9"></div>
                    </div>
                    <div className="row p-5">
                        <div className="d-flex justify-content-between">
                            <p>
                                歡迎來到 HAMAYA MUSIC
                                ，若您有任何建議與諮詢，歡迎利用下方表單，我們將由專人儘快回覆您，謝謝。
                            </p>
                            <p>*為必填項目</p>
                        </div>
                        <div className="col-12 col-md-6">
                            <p>姓名*</p>
                            <input
                                type="text"
                                id="fullName"
                                placeholder="請輸入姓名"
                                className="w-100"
                            />
                        </div>
                        <div className="col-12 col-md-6">
                            <p>聯絡電話*</p>
                            <input
                                type="phone"
                                id="phone"
                                placeholder="請輸入電話/手機"
                                className="w-100"
                            />
                        </div>
                        <div className="col-12 col-md-6">
                            <p>信箱*</p>
                            <input
                                type="mail"
                                id="mail"
                                placeholder="請輸入信箱"
                                className="w-100"
                            />
                        </div>
                        <div className="col-12 col-md-6">
                            <p>問題類型*</p>
                            <select id="cate-select" className="w-100">
                                <option value="">類型1</option>
                                <option value="">類型1</option>
                                <option value="">類型1</option>
                                <option value="">類型1</option>
                            </select>
                        </div>
                        <div className="col-12">
                            <p>問題主旨*</p>
                            <input
                                type="text"
                                id=""
                                placeholder="請輸入問題主旨"
                                className="w-100"
                            />
                        </div>
                        <div className="col-12">
                            <p>提問內容*</p>
                            <input
                                type="text"
                                id="comment"
                                placeholder="問題描述"
                                className="w-100"
                            />
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button>確認送出</button>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-4 mt-2 d-inline-flex">
                        <h4 className="me-2" style={{ color: ' #00323d' }}>
                            門市資訊
                        </h4>
                        <h4 className="engText" style={{ color: ' #00323d' }}>
                            STORE INFORMATION
                        </h4>
                    </div>
                    <div className="vector3 mt-4 col-8"></div>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="storename py-5 d-flex justify-content-between">
                                <div>
                                    <h4
                                        className="pe-5 me-5"
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
                                        className="px-5 ms-5 d-flex justify-content-end"
                                    ></img>
                                    <img
                                        src={line}
                                        herf="#"
                                        alt="line"
                                        className="d-flex justify-content-end"
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
