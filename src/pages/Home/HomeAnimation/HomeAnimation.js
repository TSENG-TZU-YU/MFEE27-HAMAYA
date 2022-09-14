import React from 'react';
import './HomeAnimation.scss';
import PropTypes from 'prop-types';

import Note2 from '../../../assets/HomeImg/note-2.svg';
import Note4 from '../../../assets/HomeImg/note-4.svg';
import Note5 from '../../../assets/HomeImg/note-5.svg';
import Note6 from '../../../assets/HomeImg/note-6.svg';
import Note7 from '../../../assets/HomeImg/note-7.svg';
import HomeVideo2 from '../../../assets/HomeImg/home-video2.mp4';

//TODO:影片跟header間距有一點大要修

function HomeAnimation(props) {
    return (
        <>
            <div id="app">
                <div className="title">
                    <div className="title-inner">
                        <div className="cafe">
                            <div className="cafe-inner ">HAMAYA</div>
                        </div>
                        <div className="mozart">
                            <div className="mozart-inner ">MUSIC</div>
                        </div>
                        <div className="title2">
                            <span className="font5">
                                將光亮從人心靈的深沈中釋放出來，是音樂的神聖使命。
                                ——羅伯特·亞歷山大·舒曼
                            </span>
                        </div>
                    </div>
                </div>

                <div className="home-video home-video2">
                    <video
                        muted
                        src={HomeVideo2}
                        height=""
                        autoPlay
                        loop
                        className=""
                    />
                </div>

                <div className="muzieknootjes">
                    <div className="noot-1">
                        <img src={Note5} alt="" />
                    </div>
                    <div className="noot-2">
                        <img src={Note2} alt="" />
                    </div>
                    <div className="noot-3">
                        <img src={Note7} alt="" />
                    </div>
                    <div className="noot-4">
                        <img src={Note4} alt="" />
                    </div>
                    <div className="noot-5">
                        <img src={Note6} alt="" width="30" />
                    </div>
                </div>
            </div>
        </>
    );
}
export default HomeAnimation;
