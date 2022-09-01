import React from 'react';
import './place.scss';

function Place(props) {
  return (
    <>
      <div>
        <div>
          <h3>場地租借/Facility Rental Services</h3>
        </div>
        <div>
          <h4 className="title1">租借項目 RENTAL ITEM</h4>
          <div>
            <h4 className="item1">Studio-A 錄音室</h4>
            <p className="intro1">
              Studio-A
              錄音室，深知每個音樂人都有成名夢，這裡提供給音樂人一個專業錄音空間，將自己的作品完美的輸出成輯。
              <h6>設備介紹</h6>
              8軌A類等級的麥克風前極放大器 <br />
              3軌A類等級的Di <br />
              4軌B類等級的麥克風放大器 <br />
              ADAD類比數位轉換器
              <h6>時段 08:00 - 21:00　平日 NT $2,000　假日 NT $2,500</h6>
            </p>
          </div>
          <div>
            <h4 className="item2">Studio-B 練團室</h4>
            <p className="intro2">
              精緻練團室出租，希望藉由完善、貼心的服務，使樂團能心無旁鶩的修練音樂技巧。
              <h6>設備介紹</h6>練團室坪數：5坪 / 容納約7人 <br />
              吉他音箱：Laney IRT15H + Laney 412cab
              <br /> 吉他音箱：Marshall DSL15H + MX212cab
              <br />
              貝斯音箱：GK MB112 II <br />
              爵士鼓組：Dixon Aritisan Standard 5粒組
              <h6>時段 08:00 - 21:00　平日 NT $2,000　假日 NT $2,500</h6>
            </p>
          </div>
          <div>
            <h4 className="item3">Studio-C 小型展演空間</h4>
            <p className="intro3">
              適合舉辦小型音樂展演、各類型講座、小型企業開會、產品活動發表會、各類型講座、私人包場與聚會。
              <h6>設備介紹</h6>免費提供 300M/100M光纖 Wifi
              <br /> 100吋單槍投影幕、無線麥克風、頂級 LD System 音響系統
              <br /> 40張折疊椅、6張折疊桌、休息室、茶水間及衛生間
              <br /> Yamaha C2 平台演奏琴
              <h6>時段 08:00 - 21:00　平日 NT $2,000　假日 NT $2,500</h6>
            </p>
          </div>
        </div>
        <div className="container2">
          <h4 className="title2">場地預約 VENUE RESERVATION</h4>
          <p className="formitem">姓名</p>
          <input type="text" id="fullName" placeholder="請輸入姓名" />
          <p className="formitem">聯絡電話</p>
          <input type="phone" id="phone" placeholder="請輸入電話/手機" />
          <p className="formitem">信箱</p>
          <input type="mail" id="mail" placeholder="請輸入信箱" />
          <p className="formitem">租借項目</p>
          <input type="text" id="item" placeholder="請輸入欲租借場地" />
          <p className="formitem">留言</p>
          <input type="text" id="comment" placeholder="留言內容" />
          <p className="formitem">使用日期</p>
          <input type="date" id="usedate" />
          <p className="formitem">使用時間</p>
          <input type="time" id="usetime" />
          <p className="formitem">使用人數</p>
          <input type="number" id="users" />
          {/* 設定不可為0&負 */}
          <button>確認送出</button>
        </div>
      </div>
    </>
  );
}

export default Place;
