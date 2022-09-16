import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom'; //抓取Outlet的props
import './index.css';
import axios from 'axios';
import { API_URL } from '../../../../utils/config';
import add_img2 from '../../../../assets/svg/add2.svg';
import { FaBeer  } from 'react-icons/fa';
import { AiOutlineSend } from "react-icons/ai";


function MyCoupon(props) {
    const [setbread] = useOutletContext(); //此CODE為抓取麵包削setbread
    const today = new Date().getTime();
    const [couponSn, setCouponSn] = useState({ sn: '' });
    const [myCoupon, setMyCoupon] = useState([
        {
            coupon_id: '',
            user_id: '',
            name: '',
            sn: '',
            minimum: '',
            discount: '',
            start_time: '',
            end_time: '',
            use: '',
        },
    ]);

    useEffect(() => {
        setbread('我的優惠券'); //載入頁面時 設定麵包削
        loadingMyCoupon();
    }, []);

    //讀取優惠券
    async function loadingMyCoupon() {
        try {
            let response = await axios.get(`${API_URL}/member/mycoupon`, {
                withCredentials: true,
            });
            console.log(response.data);
            setMyCoupon(response.data);

            // alert(response.data.message);
        } catch (err) {
            console.log(err.response.data);
            alert(err.response.data.message);
        }
    }

    //新增優惠券
    async function addCouponSubmit(e) {
        e.preventDefault();
        try {
            let response = await axios.post(
                `${API_URL}/member/addcoupon`,
                couponSn,
                {
                    withCredentials: true,
                }
            );
            console.log(response.data);
            setCouponSn({ sn: '' });
            alert(response.data.message);
        } catch (err) {
            console.log(err.response.data);
            alert(err.response.data.message);
        }
    }

    return (
        <div className="col-12 col-md-8 col-lg-9 MyCoupon">
            <h4 className="main-color m-1">我的優惠券</h4>
            <div className="d-flex justify-content-between m-1 mt-2">
                <div className="d-flex align-items-center">
                    <input
                        type="text "
                        value={couponSn.sn}
                        onChange={(e) => {
                            setCouponSn({ sn: e.target.value });
                        }}
                        placeholder="請輸入您的優惠券領取碼"
                    />
                    <button className="btn1" onClick={addCouponSubmit}>
                        <img alt="add_img" src={add_img2} />
                        新增優惠券
                    </button>
                </div>
                <div>
                    <button className="btn2">去商城逛逛&nbsp;<AiOutlineSend size='20'/></button>
                </div>
            </div>
            <div className="row">
                {myCoupon.map((data) => {
                    return (
                        <div className="col-12 col-lg-6 coupon-card">
                            <div className="row m-1 ">
                                <div
                                    className={
                                        data.discount >= 550
                                            ? 'col-5 coupon-card01 position-relative'
                                            : data.discount >= 250
                                            ? 'col-5 coupon-card02 position-relative'
                                            : data.discount >= 150
                                            ? 'col-5 coupon-card03 position-relative'
                                            : 'col-5 coupon-card04 position-relative'
                                    }
                                >
                                    {data.use == 0 ? (
                                        <div className="card_bg_left"></div>
                                    ) : today -
                                          new Date(data.end_time).getTime() >=
                                      0 ? (
                                        <div className="card_bg_left"></div>
                                    ) : (
                                        ''
                                    )}
                                    <h3>
                                        <span className='NT'>NT</span>${data.discount}
                                    </h3>
                                    <h6>商品折價券</h6>
                                    <p className="text-nowrap p01">
                                        消費滿${data.minimum}可使用
                                    </p>
                                </div>
                                <div className="col-7 p-2 card_right">
                                    {data.use == 0 ? (
                                        <div className="card_bg_right">
                                            <div className="font">已兌換</div>
                                        </div>
                                    ) : today -
                                          new Date(data.end_time).getTime() >=
                                      0 ? (
                                        <div className="card_bg_right">
                                            <div className="font">已到期</div>
                                        </div>
                                    ) : (
                                        ''
                                    )}
                                    <h6 className="main-light-color">
                                        {data.name}
                                    </h6>
                                    <p className="main-light-color m-0 pt-2">
                                        適用樂器商城、音樂教育
                                    </p>
                                    <p className="p02">
                                        有效期限
                                        <span className='text-nowrap'>
                                        {new Date(
                                            data.start_time
                                        ).toLocaleDateString()}
                                        -
                                        {new Date(
                                            data.end_time
                                        ).toLocaleDateString()}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
export default MyCoupon;
