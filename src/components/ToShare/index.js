import React, { useState } from 'react';
import './index.scss';
import { RiHeartAddFill } from 'react-icons/ri';
import { RiHeartAddLine } from 'react-icons/ri';

// 圖檔
import Share from '../../assets/svg/open_in_new.svg';

function ToShareCollect(props) {
    const [plusToggled, setPlus] = useState(false);
    const toggle = () => setPlus(!plusToggled);
    return (
        <div className="d-flex mt-2">
            {/* 收藏 */}
            <div className="d-flex justify-content-center align-items-center cursor-pinter me-4">
                {plusToggled ? (
                    <RiHeartAddFill
                        className="plus-icon-size me-2 plus-icon-color "
                        onClick={toggle}
                    />
                ) : (
                    <RiHeartAddLine
                        className="plus-icon-size me-2 plus-icon-color "
                        onClick={toggle}
                    />
                )}
                <p className="mt-3 collect">收藏</p>
            </div>
            {/* 分享 */}
            <div className="d-flex justify-content-center align-items-center cursor-pinter ">
                <img className="me-2 " src={Share} alt="Share" />
                <p className="mt-3 share">分享</p>
            </div>
        </div>
    );
}

export default ToShareCollect;
