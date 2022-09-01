import { Link } from 'react-router-dom';
import './index.scss';
import { Container } from 'react-bootstrap';
import Fb from '../../assets/FooterImg/fb-gray.svg';
import Youtube from '../../assets/FooterImg/youtube-gray.svg';
import Line from '../../assets/FooterImg/line-gray.svg';
import All from '../../assets/FooterImg/All.svg';
import Lines from '../../assets/FooterImg/lines.svg';

function Footer(props) {
  return (
    <>
      <div className="bg-main-light-color footer-height">
        <Container className=" d-flex justify-content-between">
          <div>
            <h4 className="main-gary-light-color letter  pt-5 ms-3">
              HAMAYA{' '}
              <span className="main-gary-light-color h6 pt-2">MUSIC</span>
            </h4>
            <p className="main-gary-light-color ">
              TEL: 06-6946-5820/ FAX: 06-7635-8075 <br />
              MAIL: service@gmail.com <br />
              ON.-FRI. 09:00-12:00 / 13:00-18:00
            </p>
          </div>
          <div className="d-flex flex-column pt-5">
            <Link className="main-gary-light-color h6 " to="product">
              樂器商城
            </Link>
            <Link className="main-gary-light-color small ms-2" to="product">
              最新商品
            </Link>
          </div>
          <div className="d-flex flex-column pt-5">
            <Link className="main-gary-light-color h6 " to="product">
              音樂教育
            </Link>
            <Link className="main-gary-light-color small ms-2" to="product">
              成人課程
            </Link>
            <Link className="main-gary-light-color small ms-2 " to="product">
              兒童課程
            </Link>
            <Link className="main-gary-light-color small ms-2 " to="product">
              師資介紹
            </Link>
          </div>
          <Link className="main-gary-light-color h6 pt-5 " to="product">
            場地租借
          </Link>
          <div className="d-flex flex-column pt-5">
            <Link className="main-gary-light-color h6 " to="product">
              最新消息
            </Link>
            <Link className="main-gary-light-color small ms-2 " to="product">
              促銷活動
            </Link>
            <Link className="main-gary-light-color small ms-2" to="product">
              活動快訊
            </Link>
            <Link className="main-gary-light-color small ms-2 " to="product">
              重要通知
            </Link>
            <Link className="main-gary-light-color small ms-2 " to="product">
              音樂文章
            </Link>
          </div>
          <Link className="main-gary-light-color h6 pt-5  " to="product">
            關於我們
          </Link>
          <div className="padding">
            <Link className="mx-3" to="">
              <img
                src={Fb}
                width="30"
                alt="Logo"
                className=" main-gary-light-colo"
              />
            </Link>
            <Link className="mx-3" to="">
              <img
                src={Youtube}
                width="30"
                alt="Logo"
                className=" main-gary-light-colo"
              />
            </Link>
            <Link className="mx-3" to="">
              <img
                src={Line}
                width="30"
                alt="Logo"
                className=" main-gary-light-colo"
              />
            </Link>
            <br />
            <img src={All} width="200" alt="Logo" className="mr-2" />
          </div>
        </Container>
        <img src={Lines} width="1920" alt="Logo" className="mr-2 pt-5" />
      </div>
    </>
  );
}

export default Footer;
