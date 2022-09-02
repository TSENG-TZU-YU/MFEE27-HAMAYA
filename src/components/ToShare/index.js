import React from 'react';
import './index.scss';

// 圖檔
import Share from '../../assets/svg/open_in_new.svg';
import heart_plus from '../../assets/svg/heart_plus.svg';

function ToShareCollect(props) {
    return (
        <div className="d-flex mt-2">
            <div className="d-flex justify-content-center align-items-center cursor-pinter me-4">
                <img className="me-2 " src={Share} alt="Share" />
                <p className="mt-2 share">分享</p>
            </div>
            <div className="d-flex justify-content-center align-items-center cursor-pinter">
                <img className="me-2 " src={heart_plus} alt="heart_plus" />
                <p className="mt-2 collect">分享</p>
            </div>
        </div>
    );
}

export default ToShareCollect;
