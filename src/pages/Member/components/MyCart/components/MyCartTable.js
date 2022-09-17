import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../../../../utils/config';
import { useAuth } from '../../../../../utils/use_auth';
import '../MyCart.scss';
import MyCartProduct from './MyCartProduct';
import MyCartClass from './MyCartClass';

function MyCartTable({
    myCart,
    setMyCart,
    myCartA,
    setMyCartA,
    myCartB,
    setMyCartB,
}) {
    return (
        <>
            <div className="p-2">
                <div className="row col-lg-5 align-items-center ">
                    <div class="col-3 d-inline-flex justify-content-evenly form-check">
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
                        移除品項
                    </button>
                    <button className="btn btn-primary col mx-2 p-0 text-nowrap">
                        加入收藏
                    </button>
                </div>
            </div>
            <div>
                <table className="table m-0 myCartTable">
                    <thead>
                        <tr className="text-center accent-light-color bg-main-color">
                            <th className="myCartThWidth">樂器商城</th>
                            <th className="w-25">商品名稱</th>
                            <th>價格</th>
                            <th>數量</th>
                            <th>小計</th>
                        </tr>
                    </thead>
                    <tbody>
                        <MyCartProduct
                            myCart={myCart}
                            setMyCart={setMyCart}
                            myCartA={myCartA}
                            setMyCartA={setMyCartA}
                        />
                    </tbody>
                </table>
                <table className="table m-0 myCartTable myCartTableClass">
                    <thead>
                        <tr className="text-center accent-light-color bg-main-color">
                            <th className="myCartThWidth">音樂教育</th>
                            <th className="w-25">商品名稱</th>
                            <th>價格</th>
                            <th>數量</th>
                            <th>小計</th>
                        </tr>
                    </thead>
                    <tbody>
                        <MyCartClass
                            myCart={myCart}
                            setMyCart={setMyCart}
                            myCartB={myCartB}
                            setMyCartB={setMyCartB}
                        />
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default MyCartTable;
