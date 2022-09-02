import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom'; //抓取Outlet的props

function MyClass(props) {
    const [setbread] = useOutletContext(); //此CODE為抓取麵包削setbread
    useEffect(() => {
        setbread('我的課程'); //載入頁面時 設定麵包削
    }, []);
    return (
        <div className="col-12 col-md-8 col-lg-9">{/*此className為RWD設定請勿更動*/}
            Class
        </div>
    );
}
export default MyClass;
