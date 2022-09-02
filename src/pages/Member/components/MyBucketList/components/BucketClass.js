import React from 'react';
//svg
import { ReactComponent as AshBin } from '../../../../../assets/svg/delete.svg';
import { ReactComponent as AddCart } from '../../../../../assets/svg/shopping_cart_check.svg';
//暫時的img
import classPic from '../../../../../assets/ClassImg/Adult img.png';
function BucketClass() {
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
      <div className="py-2">
        <div className="myBucketItem d-flex">
          <img className="myBucketImg" src={classPic} alt="" />
          <div className="itemFlex m-2">
            <div className="d-flex justify-content-between">
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
            <div className="pt-2">
              <div>
                <span>報名時間：2022/09/20 - 2022/10/01</span>
                <span className="mx-3">師資：XXX老師</span>
              </div>
              <div>
                <span>上課時間：2022/09/20 - 2022/10/01</span>
                <span className="mx-3">名額：10人</span>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <p className="d-inline-flex m-0">
                <span className="itemPrice">NT: 2500 </span>/期
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
        <div className="myBucketItem d-flex">
          <img className="myBucketImg" src={classPic} alt="" />
          <div className="itemFlex m-2">
            <div className="d-flex justify-content-between">
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
            <div className="pt-2">
              <div>
                <span>報名時間：2022/09/20 - 2022/10/01</span>
                <span className="mx-3">師資：XXX老師</span>
              </div>
              <div>
                <span>上課時間：2022/09/20 - 2022/10/01</span>
                <span className="mx-3">名額：10人</span>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <p className="d-inline-flex m-0">
                <span className="itemPrice">NT: 2500 </span>/期
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
        <div className="myBucketItem d-flex">
          <img className="myBucketImg" src={classPic} alt="" />
          <div className="itemFlex m-2">
            <div className="d-flex justify-content-between">
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
            <div className="pt-2">
              <div>
                <span>報名時間：2022/09/20 - 2022/10/01</span>
                <span className="mx-3">師資：XXX老師</span>
              </div>
              <div>
                <span>上課時間：2022/09/20 - 2022/10/01</span>
                <span className="mx-3">名額：10人</span>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <p className="d-inline-flex m-0">
                <span className="itemPrice">NT: 2500 </span>/期
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
