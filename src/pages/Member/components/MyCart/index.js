import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom'; //抓取Outlet的props

function MyCart(props) {
    const [setbread] = useOutletContext(); //此CODE為抓取麵包削setbread
    useEffect(() => {
        setbread('購物車'); //載入頁面時 設定麵包削
    }, []);
    return (
        <div className="col-12 col-md-9 col-lg-10">{/*此className為RWD設定請勿更動*/}
            Cart
        </div>
    );
}
export default MyCart;
