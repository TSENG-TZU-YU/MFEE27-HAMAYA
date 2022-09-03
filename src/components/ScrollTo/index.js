import React from 'react';
import pageTop from '../../assets/svg/page_top.svg';
import './index.scss';

function index() {
    return (
        <div
            className="float-right cursor-pointer sticky-bottom"
            onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            }}
        >
            <img src={pageTop} alt="pageTop" />
        </div>
    );
}

export default index;
