import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom'; //抓取Outlet的props

function MyCoupon(props) {
    const [setbread] = useOutletContext(); //此CODE為抓取麵包削setbread
    useEffect(() => {
        setbread('我的優惠券'); //載入頁面時 設定麵包削
    }, []);
    return (
        <div className="col-12 col-md-9 col-lg-10">{/*此className為RWD設定請勿更動*/}
            Coupon
        </div>
    );
}
export default MyCoupon;
