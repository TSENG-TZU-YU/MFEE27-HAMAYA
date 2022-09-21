import React from 'react';
//svg
import { ReactComponent as AshBin } from '../../../../../assets/svg/delete.svg';
import { ReactComponent as AddCart } from '../../../../../assets/svg/shopping_cart_check.svg';
//暫時的img
import classPic from '../../../../../assets/ClassImg/Adult img.png';
import pic1 from '../../../../../assets/ClassImg/images/成人大提琴課程B.jpg';
function BucketClass() {
    return (
        <>
            <div className="row p-2">
                <div className="row col-lg-5 align-items-center ">
                    <div className="col-3 d-inline-flex justify-content-evenly form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                        />
                        <label
                            className="form-check-label"
                            for="flexCheckDefault"
                        >
                            全選
                        </label>
                    </div>
                    <button className="btn btn-primary col mx-2 p-0 text-nowrap">
                        取消收藏
                    </button>
                    <button className="btn btn-primary col mx-2 p-0 text-nowrap">
                        加入購物車
                    </button>
                </div>
            </div>
            <div className="py-2">
                <div className="myBucketClass-Item d-lg-flex">
                    <img className="myBucketClass-Img " src={pic1} alt="" />
                    <div className="flex-grow-1 p-2 row">
                        <div className="col-12 d-flex justify-content-between">
                            <h6>
                                <b>藍調與爵士鋼琴的獨奏技巧與應用</b>
                            </h6>
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                            />
                        </div>
                        <div className="col-12 row">
                            <span className="d-inline-block col-md-6 order-1 order-md-0">
                                報名時間：2022/09/20 - 2022/10/01
                            </span>
                            <span className="d-inline-block col-md-6 order-3 order-md-0">
                                師資：XXX老師
                            </span>

                            <span className="d-inline-block col-md-6 order-2 order-md-0">
                                上課時間：2022/09/20 - 2022/10/01
                            </span>
                            <span className="d-inline-block col-md-6 order-4 order-md-0">
                                名額：10人
                            </span>
                        </div>
                        <div className="col-12 d-flex justify-content-between align-items-center">
                            <p className="d-inline-flex m-0">
                                <span className="accent-color">
                                    <b>NT: 2500</b>
                                </span>
                                /期
                            </p>
                            <div>
                                <button className="btn border-0 p-0 mx-3">
                                    <AddCart className="myBucketItemIcon" />
                                </button>
                                <button className="btn border-0 p-0">
                                    <AshBin className="myBucketItemIcon" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-2">
                <div className="myBucketClass-Item d-lg-flex">
                    <img className="myBucketClass-Img " src={classPic} alt="" />
                    <div className="flex-grow-1 p-2 row">
                        <div className="col-12 d-flex justify-content-between">
                            <h6>
                                <b>藍調與爵士鋼琴的獨奏技巧與應用</b>
                            </h6>
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                            />
                        </div>
                        <div className="col-12 row">
                            <span className="d-inline-block col-md-6 order-1 order-md-0">
                                報名時間：2022/09/20 - 2022/10/01
                            </span>
                            <span className="d-inline-block col-md-6 order-3 order-md-0">
                                師資：XXX老師
                            </span>

                            <span className="d-inline-block col-md-6 order-2 order-md-0">
                                上課時間：2022/09/20 - 2022/10/01
                            </span>
                            <span className="d-inline-block col-md-6 order-4 order-md-0">
                                名額：10人
                            </span>
                        </div>
                        <div className="col-12 d-flex justify-content-between align-items-center">
                            <p className="d-inline-flex m-0">
                                <span className="accent-color">
                                    <b>NT: 2500</b>
                                </span>
                                /期
                            </p>
                            <div>
                                <button className="btn border-0 p-0 mx-3">
                                    <AddCart className="myBucketItemIcon" />
                                </button>
                                <button className="btn border-0 p-0">
                                    <AshBin className="myBucketItemIcon" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-2">
                <div className="myBucketClass-Item d-lg-flex">
                    <img className="myBucketClass-Img " src={classPic} alt="" />
                    <div className="flex-grow-1 p-2 row">
                        <div className="col-12 d-flex justify-content-between">
                            <h6>
                                <b>藍調與爵士鋼琴的獨奏技巧與應用</b>
                            </h6>
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                            />
                        </div>
                        <div className="col-12 row">
                            <span className="d-inline-block col-md-6 order-1 order-md-0">
                                報名時間：2022/09/20 - 2022/10/01
                            </span>
                            <span className="d-inline-block col-md-6 order-3 order-md-0">
                                師資：XXX老師
                            </span>

                            <span className="d-inline-block col-md-6 order-2 order-md-0">
                                上課時間：2022/09/20 - 2022/10/01
                            </span>
                            <span className="d-inline-block col-md-6 order-4 order-md-0">
                                名額：10人
                            </span>
                        </div>
                        <div className="col-12 d-flex justify-content-between align-items-center">
                            <p className="d-inline-flex m-0">
                                <span className="accent-color">
                                    <b>NT: 2500</b>
                                </span>
                                /期
                            </p>
                            <div>
                                <button className="btn border-0 p-0 mx-3">
                                    <AddCart className="myBucketItemIcon" />
                                </button>
                                <button className="btn border-0 p-0">
                                    <AshBin className="myBucketItemIcon" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BucketClass;
