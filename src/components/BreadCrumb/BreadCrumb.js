import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// 中文路徑對照陣列，移出到config/index.js中設定
import { pathnameLocale } from '../../config';

function BreadCrumb(props) {
    // change to router v6
    const location = useLocation();

    const formatTextLocale = (pathname) => {
        // '/product/baby/birth' -> ['','product','baby', 'birth']
        const pathArray = pathname.split('/');

        // to ['','產品','嬰兒', '初生兒']
        const pathArrayLocale = pathArray.map((v, i) => {
            if (!v) return '';

            // id類的最後結尾params會忽略
            if (Number(v)) return '';

            return pathnameLocale[v] ? pathnameLocale[v] : v;
        });

        // 轉為bs樣式
        const listArray = pathArrayLocale.map((v, i, array) => {
            // 第一個 與 id類(數字類型)的最後結尾params會忽略, 首頁不需要
            if (i === 0 || v === '') return '';

            // 最後一個
            if (i === array.length - 1) {
                return (
                    <li
                        key={i}
                        className="breadcrumb-item breadcrumb-active"
                        aria-current="page"
                    >
                        {v}
                    </li>
                );
            }

            // 其它中間樣式
            return (
                <li key={i} className="breadcrumb-item">
                    <Link to={pathArray.slice(0, i + 1).join('/')}>{v}</Link>
                </li>
            );
        });

        return listArray;
    };

    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb py-2 m-0">
                    <li className="breadcrumb-item">
                        <Link to="/">首頁</Link>
                    </li>
                    {formatTextLocale(location.pathname)}
                </ol>
            </nav>
        </>
    );
}

export default BreadCrumb;
