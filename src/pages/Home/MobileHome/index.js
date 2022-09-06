import React from 'react';
import './index.scss';

import Decorate from '../../../assets/HomeImg/decorate.svg';
import BrandWord from '../../../assets/HomeImg/brandword.svg';
import Note from '../../../assets/HomeImg/note.svg';
import Note2 from '../../../assets/HomeImg/note-2.svg';
import Note3 from '../../../assets/HomeImg/note-3.svg';
import Note4 from '../../../assets/HomeImg/note-4.svg';
import Img from '../../../assets/HomeImg/homeimg.jpg';
import Img2 from '../../../assets/HomeImg/homeimg-2.jpg';
import Smart from '../../../assets/HomeImg/smart-display-2.svg';

function MobileHome(props) {
    return (
        <>
            <div className="d-md-none d-block bg-main-gary-light-color ">
                <img
                    src={Decorate}
                    width="800"
                    alt="Logo"
                    className="Mobile-Decorate"
                />
                <div className="d-md-none d-block container d-sm-none ">
                    <div className="row position-relative ">
                        <div className="col">
                            <p className="Mobile-font ">HA</p>
                        </div>
                        <div className="col">
                            <p className="Mobile-font4">MA</p>
                            <img
                                src={BrandWord}
                                alt="Logo"
                                width="200"
                                className="home-img"
                            />
                            <img
                                src={Note}
                                alt="Logo"
                                width="40"
                                className="note"
                            />
                            <img
                                src={Note2}
                                alt="Logo"
                                width="25"
                                className="note2"
                            />
                            <p className="main-light-color font3 ">
                                將光亮從人心靈的深沈中釋放出來，是音樂的神聖使命。
                                ——羅伯特·亞歷山大·舒曼
                            </p>
                        </div>
                        <div className=" d-flex justify-content-end ">
                            <img
                                src={Img}
                                alt="Logo"
                                height="247"
                                width=""
                                className="home-img2"
                            />
                            <button className="border-0  btn">
                                <img
                                    src={Smart}
                                    alt="Logo"
                                    height="50"
                                    width=""
                                    className="video-button"
                                />
                            </button>
                            <img
                                src={Note4}
                                alt="Logo"
                                height=""
                                width=""
                                className="note4"
                            />
                            <img
                                src={Note3}
                                alt="Logo"
                                height=""
                                width=""
                                className="note3"
                            />
                        </div>
                        <div className=" d-flex justify-content-end ">
                            <img
                                src={Img2}
                                alt="Logo"
                                height="175"
                                width="285"
                                className=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MobileHome;
