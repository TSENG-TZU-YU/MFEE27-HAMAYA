import React from 'react';
import './index.css';

function Place(props) {
  return (
    <>
      <div>
        <div>
          <h3>場地租借/Facility Rental Services</h3>
        </div>
        <div>
          <h4>租借項目 RENTAL ITEM</h4>
          <div>
            <h4>Studio-A 錄音室</h4>
            <p>
              Studio-A
              錄音室，深知每個音樂人都有成名夢，這裡提供給音樂人一個專業錄音空間，將自己的作品完美的輸出成輯。
              設備介紹 8軌A類等級的麥克風前極放大器 3軌A類等級的Di
              4軌B類等級的麥克風放大器 ADAD類比數位轉換器 時段 08:00 -
              21:00　平日 NT $2,000　假日 NT $2,500
            </p>
          </div>
          <div>
            <h5>Studio-B 練團室</h5>
            <p>
              精緻練團室出租，希望藉由完善、貼心的服務，使樂團能心無旁鶩的修練音樂技巧。設備介紹練團室坪數：5坪
              / 容納約7人 吉他音箱：Laney IRT15H + Laney 412cab
              吉他音箱：Marshall DSL15H + MX212cab 貝斯音箱：GK MB112 II
              爵士鼓組：Dixon Aritisan Standard 5粒組時段 08:00 - 21:00　平日 NT
              $2,000　假日 NT $2,500
            </p>
          </div>
          <div>
            <h5>Studio-C 小型展演空間</h5>
            <p>
              適合舉辦小型音樂展演、各類型講座、小型企業開會、產品活動發表會、各類型講座、私人包場與聚會。設備介紹免費提供
              300M/100M光纖 Wifi 100吋單槍投影幕、無線麥克風、頂級 LD System
              音響系統 40張折疊椅、6張折疊桌、休息室、茶水間及衛生間 Yamaha C2
              平台演奏琴時段 08:00 - 21:00　平日 NT $2,000　假日 NT $2,500
            </p>
          </div>
        </div>
        <div>
          <h4>場地預約 VENUE RESERVATION</h4>
          <p>姓名</p>
          <input type="text" id="fullName" placeholder="請輸入姓名" />
          <p>聯絡電話</p>
          <input type="phone" id="phone" placeholder="請輸入電話/手機" />
          <p>信箱</p>
          <input type="mail" id="mail" placeholder="請輸入信箱" />
          <p>租借項目</p>
          <input type="text" id="item" placeholder="請輸入欲租借場地" />
          <p>留言</p>
          <input type="text" id="comment" placeholder="留言內容" />
          <p>使用日期</p>
          <input type="date" id="usedate" />
          <p>使用時間</p>
          <input type="time" id="usetime" />
          <p>使用人數</p>
          <input type="number" id="users" />
          {/* 設定不可為0&負 */}
          <button>確認送出</button>
        </div>
      </div>
      ;
    </>
  );
}

export default Place;
