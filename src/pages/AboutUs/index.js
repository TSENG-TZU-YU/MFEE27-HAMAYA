import React from 'react';
import './index.scss';

function About(props) {
  return (
    <>
      <div className>
        <div>
          <h3>關於我們/About</h3>
        </div>
        <div>
          <h4>品牌理念 BRAND CONCEPT</h4>
        </div>
        <div>
          <h4>創辦人 FOUNDER</h4>
          <div>33 范家寧 組長</div>
          <div>03 黃睿渝 技術長</div>
          <div>09 黃秀莉</div>
          <div>15 劉光育</div>
          <div>17 温侑臻</div>
          <div>27 曾子瑜</div>
        </div>
        <div>
          <h4>聯絡我們 CONTACT US</h4>
          <p>姓名</p>
          <input type="text" id="fullName" placeholder="請輸入姓名" />
          <p>聯絡電話</p>
          <input type="phone" id="phone" placeholder="請輸入電話/手機" />
          <p>信箱</p>
          <input type="mail" id="mail" placeholder="請輸入信箱" />
          <p>問題類型</p>
          <select id="cate-select">
            <option value="">類型1</option>
            <option value="">類型1</option>
            <option value="">類型1</option>
            <option value="">類型1</option>
          </select>
          <p>問題主旨</p>
          <input type="text" id="comment" placeholder="請輸入問題主旨" />
          <p>提問內容</p>
          <input type="text" id="comment" placeholder="問題描述" />
          <button>確認送出</button>
        </div>
        <div>
          <h4>門市資訊 STORE INFORMATION</h4>
        </div>
      </div>
    </>
  );
}

export default About;
