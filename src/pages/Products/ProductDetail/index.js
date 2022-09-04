import React from 'react';

function index() {
    return (
        <>
            <div className="container">
                {/* 麵包屑 */}
                <ul className="breadcrumb products-breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="/">首頁</a>
                    </li>
                    <li className="breadcrumb-item">
                        <a href="/">樂器商城 </a>
                    </li>
                    <li className="breadcrumb-item">
                        <a href="/">琴鍵樂器 </a>
                    </li>
                    <li className="breadcrumb-item">YAMAHA U系列 U1</li>
                </ul>
                {/* 麵包屑 end */}
            </div>
        </>
    );
}

export default index;
