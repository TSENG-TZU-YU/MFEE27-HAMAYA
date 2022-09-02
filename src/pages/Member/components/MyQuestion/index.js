import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom'; //抓取Outlet的props

function MyQuestion(props) {
    const [setbread] = useOutletContext(); //此CODE為抓取麵包削setbread
    useEffect(() => {
        setbread('我的詢問'); //載入頁面時 設定麵包削
    }, []);
    return (
        <div className="col-12 col-md-8 col-lg-9">
            {' '}
            {/*此className為RWD設定請勿更動*/}
            Question
        </div>
    );
}
export default MyQuestion;
