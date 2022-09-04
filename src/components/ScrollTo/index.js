import React from 'react';
import pageTop from '../../assets/svg/page-top.svg';
import './index.scss';

function index() {
    return (
        <img
            src={pageTop}
            alt="pageTop"
            className="d-block cursor-pointer m-4 scroll-to"
            onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            }}
        />
    );
}

export default index;
