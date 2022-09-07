import React from 'react';
import './index.scss';

import { Link } from 'react-router-dom';
import NewsBanner from '../../assets/NewsImg/news-banner.jpg';

function NEWs(props) {
    return (
        <>
            <div className="">
                <img src={NewsBanner} alt="banner" className="img-fluid" />
                {/* 麵包屑 */}
                <div className="container d-flex mt-5 ">
                    <Link to="/">
                        <p className="News-Breadcrumbs">首頁</p>
                    </Link>
                    /
                    <Link to="/class">
                        <p className="News-Breadcrumbs">最新消息</p>
                    </Link>
                </div>
                {/* 麵包屑 end*/}
                {/* 最新消息 */}
                <div className="container d-flex News-blank-top">
                    <p className="News-word fw-bold News-cursor-pinter me-3 text-nowrap">
                        最新消息
                    </p>
                    <p className="News-word fw-bold News-engText me-3">NEWS</p>
                    <div className=" mt-3 News-vector3"></div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6">1</div>
                        <div className="col-12 col-md-6">
                            <div className="">7</div>
                            <div className="">2</div>
                            <div className="">9</div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className=" row text-center ">
                        <p className="col-3">促銷活動</p>
                        <p className="col-3">活動快訊</p>
                        <p className="col-3">重要通知</p>
                        <p className="col-3">音樂文章</p>
                    </div>
                </div>
                <div className="container">
                    <div className="row ">
                        <div className="col-md-4 col-12">8</div>
                        <div className="col-md-4 col-12">5</div>
                        <div className="col-md-4 col-12">7</div>
                        <div className="col-md-4 col-12">10</div>
                        <div className="col-md-4 col-12">11</div>
                        <div className="col-md-4 col-12">12</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NEWs;
