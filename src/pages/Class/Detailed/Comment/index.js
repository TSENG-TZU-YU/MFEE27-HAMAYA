import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { IMAGE_URL } from '../../../../utils/config';
import './index.scss';
import { TbMusicOff } from 'react-icons/tb';

// 元件
import Evaluation from '../../../../components/Evaluation/Evaluation';

function Comment({ evaluation, avg }) {
    return (
        <>
            {/* 用長度判斷是否有資料 */}
            {evaluation.length === 0 ? (
                <div style={{ height: '10vh' }}>
                    <h4 className="mt-5 d-flex w-100 h-100 main-gary-light-color text-center justify-content-center align-items-center">
                        <TbMusicOff
                            className="me-2"
                            style={{
                                width: '30px',
                                height: '30px',
                            }}
                        />
                        暫無評論
                    </h4>
                </div>
            ) : (
                <div className="row">
                    {avg.map((avg) => {
                        return (
                            <div className="d-flex col-md-4 justify-content-md-center">
                                <div className="d-flex   me-3">
                                    <h6 className="mt-5 pt-2 me-2">平均</h6>
                                    <h1>{avg.rating}.0</h1>
                                </div>
                                <div className="mt-1 ">
                                    {/* <Evaluation /> */}

                                    <p className="mt-5 pt-1">
                                        / {avg.member_id} 則評價
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                    <div className="col-md-8  mt-4 mt-md-2  ">
                        {/* TODO:  卷軸or下拉 */}
                        {/* 會員評論 */}
                        {evaluation.map((evaluation) => {
                            return (
                                <div key={evaluation.id}>
                                    <div className="d-flex ">
                                        <div className="me-5">
                                            <img
                                                src={
                                                    IMAGE_URL + evaluation.photo
                                                }
                                                alt=""
                                                style={{
                                                    width: '99px',
                                                    height: '99px',
                                                }}
                                            />
                                            <p className="mt-1">
                                                {evaluation.name}
                                            </p>
                                        </div>
                                        <div>
                                            <Evaluation
                                                rating={evaluation.rating}
                                            />
                                            <p className="mt-2  mb-2">
                                                {evaluation.evaluation_date}
                                            </p>
                                            <p className="comment-text">
                                                {evaluation.content}
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="border-top  border-1 px-3 pt-3 me-2"
                                        style={{ color: '#bababa' }}
                                    ></div>
                                </div>
                            );
                        })}
                        {/* 會員評論 end */}
                    </div>
                </div>
            )}
        </>
    );
}

export default Comment;
