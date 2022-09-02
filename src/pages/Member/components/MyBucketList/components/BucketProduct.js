import React from 'react';
import { ReactComponent as AshBin } from '../../../../../assets/svg/delete.svg';
import { ReactComponent as AddCart } from '../../../../../assets/svg/shopping_cart_check.svg';
import productImg from '../../../../../album/products/FP-90-3.png';
function BucketProduct() {
  return (
    <>
      <div className="row p-2">
        <div className="row col-5 align-items-center ">
          <div class="col-3 d-inline-flex justify-content-evenly form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" for="flexCheckDefault">
              全選
            </label>
          </div>
          <button className="btn btn-primary col mx-2 p-0">取消收藏</button>
          <button className="btn btn-primary col mx-2 p-0">加入購物車</button>
        </div>
      </div>
      <div className="row">
        <div className="col-6 py-2">
          <div className="myBucketItem d-flex">
            <img className="myBucketImg" src={productImg} alt="" />
            <div className="itemFlex m-2 d-flex flex-column">
              <div className="d-flex justify-content-between">
                <h6>
                  <b>YAMAHA</b>
                </h6>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
              </div>
              <div className="d-flex justify-content-between align-items-center mt-auto">
                <p className="d-inline-flex m-0">
                  <span className="itemPrice">NT: 2500</span>/期
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
        <div className="col-6 py-2">
          <div className="myBucketItem d-flex">
            <img className="myBucketImg" src={productImg} alt="" />
            <div className="itemFlex m-2 d-flex flex-column">
              <div className="d-flex justify-content-between">
                <h6>
                  <b>YAMAHA</b>
                </h6>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
              </div>
              <div className="d-flex justify-content-between align-items-center mt-auto">
                <p className="d-inline-flex m-0">
                  <span className="itemPrice">NT: 2500</span>/期
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
        <div className="col-6 py-2">
          <div className="myBucketItem d-flex">
            <img className="myBucketImg" src={productImg} alt="" />
            <div className="itemFlex m-2 d-flex flex-column">
              <div className="d-flex justify-content-between">
                <h6>
                  <b>YAMAHA</b>
                </h6>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
              </div>
              <div className="d-flex justify-content-between align-items-center mt-auto">
                <p className="d-inline-flex m-0">
                  <span className="itemPrice">NT: 2500</span>/期
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
      </div>
    </>
  );
}

export default BucketProduct;
