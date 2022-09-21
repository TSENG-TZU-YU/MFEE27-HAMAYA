import React from 'react';
//svg
import { ReactComponent as AshBin } from '../../../../../assets/svg/delete.svg';
import { ReactComponent as AddCart } from '../../../../../assets/svg/shopping_cart_check.svg';
function BucketClass({ myBucketB, setMyBucketB }) {
    console.log('myBucketB', myBucketB);
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
            {myBucketB.map((item) => {
                return (
                    <div className="py-2" key={item.id}>
                        <div className="myBucketClass-Item d-lg-flex">
                            <img
                                className="myBucketClass-Img "
                                src={require(`../../../../../album/class/${item.image_1}`)}
                                alt=""
                            />
                            <div className="flex-grow-1 p-2 row">
                                <div className="col-12 d-flex justify-content-between">
                                    <h6>
                                        <b>{item.name}</b>
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
                                        報名期限：{item.deadline}
                                    </span>
                                    <span className="d-inline-block col-md-6 order-3 order-md-0">
                                        師資：{item.teacher}
                                    </span>

                                    <span className="d-inline-block col-md-6 order-2 order-md-0">
                                        上課時間：{item.start_date} -{' '}
                                        {item.end_date}
                                    </span>
                                    <span className="d-inline-block col-md-6 order-4 order-md-0">
                                        名額：{item.stock}人
                                    </span>
                                </div>
                                <div className="col-12 d-flex justify-content-between align-items-center">
                                    <p className="d-inline-flex m-0">
                                        <span className="accent-color">
                                            <b>NT: {item.price}</b>
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
                );
            })}
        </>
    );
}

export default BucketClass;
