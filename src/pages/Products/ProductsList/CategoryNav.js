import React from 'react';

function CategoryNav() {
  const category = [
    {
      main: '最新商品',
    },
    {
      main: '琴鍵樂器',
      sub: ['直立/平台鋼琴', '電子鋼琴', '數位鋼琴'],
    },
    {
      main: '管樂器',
      sub: ['長笛', '短笛', '薩克斯風'],
    },
    {
      main: '吉他/烏克麗麗',
      sub: ['木吉他', '電吉他', '貝斯', '烏克麗麗'],
    },
    {
      main: '打擊樂器',
      sub: ['爵士鼓', '電子鼓', '木箱鼓'],
    },
    {
      main: '配件',
      sub: ['琴鍵樂器', '管樂器', '弓弦樂器', '吉他', '打擊樂器'],
    },
  ];

  return (
    <ul className="category-navbar">
      <li className="product-main-category">最新商品</li>
      <li className="product-main-category product-main-category-active">
        琴鍵樂器
      </li>
      <ul className="product-sub-category">
        <li>直立/平台鋼琴</li>
        <li>電子鋼琴</li>
        <li>數位鋼琴</li>
      </ul>
      <li className="product-main-category">管樂器</li>
      <ul className="product-sub-category">
        <li>長笛</li>
        <li>短笛</li>
        <li>薩克斯風</li>
      </ul>
      <li className="product-main-category">弓弦樂器</li>
      <ul className="product-sub-category">
        <li>小提琴</li>
        <li>中提琴</li>
        <li>大提琴</li>
      </ul>
      <li className="product-main-category">吉他/烏克麗麗</li>
      <ul className="product-sub-category">
        <li>木吉他</li>
        <li>電吉他</li>
        <li>貝斯</li>
        <li>烏克麗麗</li>
      </ul>
      <li className="product-main-category">打擊樂器</li>
      <ul className="product-sub-category">
        <li>爵士鼓</li>
        <li>電子鼓</li>
        <li>木箱鼓</li>
      </ul>
      <li className="product-main-category">配件</li>
      <ul className="product-sub-category">
        <li>琴鍵樂器</li>
        <li>管樂器</li>
        <li>弓弦樂器</li>
        <li>吉他</li>
        <li>打擊樂器</li>
      </ul>
    </ul>
  );
}

export default CategoryNav;
