import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom'; //抓取Outlet的props
import './index.css';

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
            discount: '500',
            start_time: '2022-10-1',
            end_time: '2022-10-30',
        },
        {
            coupon_id: '12',
            user_id: '2',
            name: '夏日特賣',
            sn: 'test7777',
            minmum: '500',
            discount: '50',
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
            name: '限時優惠',
            sn: 'test6666',
            minmum: '10000',
            discount: '500',
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
            minmum: '10000',
            discount: '500',
            start_time: '2022-10-1',
            end_time: '2022-10-30',
        },
        {
            coupon_id: '15',
            user_id: '2',
            name: '限時優惠',
            sn: 'test6666',
            minmum: '10000',
            discount: '500',
            start_time: '2022-10-1',
            end_time: '2022-10-30',
        },
    ]);
    return (
        <div className="col-12 col-md-8 col-lg-9">
            <h4 className="main-color ">我的優惠券</h4>
            <div className='d-flex justify-content-between'>
                <div >
                    <input />
                    <button>新增優惠券</button>
                </div>
                <div>
                    <button>去商城逛逛</button>
                </div>
            </div>
            <div className="row">
                {myCoupon.map((data)=>{
                    return(
                        <div className="col-12 col-lg-6">
                            <div className='row p-2'>
                                <div className='col-5 accent-light-color bg-accent-color coupon-card'>
                                    NT${data.discount}商品折價券
                                    消費滿${data.minmum}可使用
                                </div>
                                <div className='col-7 bg-light'>
                                    適用樂器商城、音樂教育
                                    有效期限{data.start_time}~{data.end_time}
                                </div>
                            </div>
                        </div>
                        ) 
                })}
                
            </div>
        </div>
    );
}
export default MyCoupon;
