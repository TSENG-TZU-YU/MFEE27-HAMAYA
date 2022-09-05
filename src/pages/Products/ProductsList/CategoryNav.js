import React from 'react';
import './styles/categoryNav.scss';

function CategoryNav() {
    const mainCategory = [
        {
            id: 1,
            name: '琴鍵樂器',
        },
        {
            id: 2,
            name: '管樂器',
        },
    ];
    const category = [
        {
            ins_main: 1,
            ins_sub: 1,
        },
        {
            ins_main: 1,
            ins_sub: 2,
        },
        {
            ins_main: 1,
            ins_sub: 3,
        },
        {
            ins_main: 2,
            ins_sub: 4,
        },
        {
            ins_main: 2,
            ins_sub: 5,
        },
        {
            ins_main: 2,
            ins_sub: 6,
        },
    ];

    return (
        <div className="col-2 d-none d-md-block">
            <ul className="products-category-navbar">
                <li className="products-main-category">最新商品</li>
                <li className="products-main-category products-main-category-active">
                    琴鍵樂器
                </li>
                <ul className="products-sub-category">
                    <li>直立/平台鋼琴</li>
                    <li>電子鋼琴</li>
                    <li>數位鋼琴</li>
                </ul>
                <li className="products-main-category">管樂器</li>
                <ul className="products-sub-category">
                    <li>長笛</li>
                    <li>短笛</li>
                    <li>薩克斯風</li>
                </ul>
                <li className="products-main-category">弓弦樂器</li>
                <ul className="products-sub-category">
                    <li>小提琴</li>
                    <li>中提琴</li>
                    <li>大提琴</li>
                </ul>
                <li className="products-main-category">吉他/烏克麗麗</li>
                <ul className="products-sub-category">
                    <li>木吉他</li>
                    <li>電吉他</li>
                    <li>貝斯</li>
                    <li>烏克麗麗</li>
                </ul>
                <li className="products-main-category">打擊樂器</li>
                <ul className="products-sub-category">
                    <li>爵士鼓</li>
                    <li>電子鼓</li>
                    <li>木箱鼓</li>
                </ul>
                <li className="products-main-category">配件</li>
                <ul className="products-sub-category">
                    <li>琴鍵樂器</li>
                    <li>管樂器</li>
                    <li>弓弦樂器</li>
                    <li>吉他</li>
                    <li>打擊樂器</li>
                </ul>
            </ul>
        </div>
    );
}

export default CategoryNav;
