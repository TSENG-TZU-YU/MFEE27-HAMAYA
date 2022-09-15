import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom'; //抓取Outlet的props
import './index.css';
import add_img2 from '../../../../assets/svg/add2.svg';

function MyCoupon(props) {
    const [setbread] = useOutletContext(); //此CODE為抓取麵包削setbread
    useEffect(() => {
        setbread('我的優惠券'); //載入頁面時 設定麵包削
    }, []);

    const [myCoupon, setMyCoupon] = useState([
        {
            coupon_id: '5',
            user_id: '2',
            name: '夏日特賣',
            sn: 'test7777',
            minmum: '500',
            discount: '50',
            start_time: '2022-09-05',
            end_time: '2022-09-30',
        },
        {
            coupon_id: '6',
            user_id: '2',
            name: '秋冬特賣',
            sn: 'test8888',
            minmum: '2500',
            discount: '250',
            start_time: '2022-10-1',
            end_time: '2022-10-15',
        },
        {
            coupon_id: '7',
            user_id: '2',
            name: '限時優惠',
            sn: 'test6666',
            minmum: '10000',
            discount: '550',
            start_time: '2022-10-1',
            end_time: '2022-10-30',
        },
        {
            coupon_id: '12',
            user_id: '2',
            name: '海洋音樂祭',
            sn: 'test7777',
            minmum: '1500',
            discount: '150',
            start_time: '2022-09-05',
            end_time: '2022-09-30',
        },
        {
            coupon_id: '11',
            user_id: '2',
            name: '秋冬特賣',
            sn: 'test8888',
            minmum: '2500',
            discount: '250',
            start_time: '2022-10-1',
            end_time: '2022-10-15',
        },
        {
            coupon_id: '10',
            user_id: '2',
            name: '10周年慶',
            sn: 'test6666',
            minmum: '10000',
            discount: '1000',
            start_time: '2022-10-1',
            end_time: '2022-10-30',
        },
        {
            coupon_id: '9',
            user_id: '2',
            name: '夏日特賣',
            sn: 'test7777',
            minmum: '500',
            discount: '50',
            start_time: '2022-09-05',
            end_time: '2022-09-30',
        },
        {
            coupon_id: '13',
            user_id: '2',
            name: '秋冬特賣',
            sn: 'test8888',
            minmum: '2500',
            discount: '250',
            start_time: '2022-10-1',
            end_time: '2022-10-15',
        },
        {
            coupon_id: '14',
            user_id: '2',
            name: '限時優惠',
            sn: 'test6666',
            minmum: '2000',
            discount: '200',
            start_time: '2022-10-1',
            end_time: '2022-10-30',
        },
        {
            coupon_id: '15',
            user_id: '2',
            name: '限時優惠',
            sn: 'test6666',
            minmum: '3000',
            discount: '150',
            start_time: '2022-10-1',
            end_time: '2022-10-30',
        },
    ]);
    return (
        <div className="col-12 col-md-8 col-lg-9 MyCoupon">
            <h4 className="main-color ">我的優惠券</h4>
            <div className="d-flex justify-content-between ">
                <div className="d-flex align-items-center">
                    <input type="text " placeholder="請輸入您的優惠券領取碼" />
                    <button className="btn1  ">
                        <img src={add_img2} />
                        新增優惠券
                    </button>
                </div>
                <div>
                    <button className="btn2  ">去商城逛逛</button>
                </div>
            </div>
            <div className="row">
                {myCoupon.map((data) => {
                    return (
                        <div className="col-12 col-lg-6 coupon-card">
                            <div className="row p-1">
                                <div
                                    className={
                                        data.discount >= 550
                                            ? 'col-5 coupon-card01'
                                            : data.discount >= 250
                                            ? 'col-5 coupon-card02'
                                            : data.discount >= 150
                                            ? 'col-5 coupon-card03'
                                            : 'col-5 coupon-card04'
                                    }
                                >   
                                    <h5 className='fst-italic'>{data.name}</h5>
                                    <h3><span>NT</span>${data.discount}</h3>
                                    <h6>商品折價券</h6>
                                    <p className='text-nowrap p01'>消費滿${data.minmum}可使用</p>
                                </div>
                                <div className="col-7 bg-light p-2 d-flex flex-column justify-content-around">
                                    <h6>適用樂器商城、音樂教育 </h6>
                                    <p className=' p02'>有效期限{data.start_time}~{data.end_time}</p>
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
