import { Link } from 'react-router-dom';
import { useState } from 'react'; //睿渝加的CODE不要刪
import { Container } from 'react-bootstrap';
import Logo from '../../assets/HeaderImg/logo.svg';
import Users from '../../assets/HeaderImg/users.svg';
import Cart from '../../assets/HeaderImg/shopping_cart.svg';
import LogoOut from '../../assets/HeaderImg/logout.svg';
import './index.scss';

import LogInSignUp from '../../components/LogInSignUp'; //睿渝加的CODE不要刪
import { Button } from 'bootstrap';

function Header(props) {
  const [loginPopup, setLoginPopup] = useState(false); //睿渝加的CODE不要刪
  return (
    <>
      <div className="bg-main-gary-light-color width">
        <Container className="  d-flex justify-content-between align-items-center height">
          <div className="d-flex align-items-start ">
            <Link className="" to="/">
              <img src={Logo} width="180" alt="Logo" className="mr-2" />
            </Link>
          </div>
          <div className="d-flex align-items-center ">
            <Link className="mx-5 h6" to="news">
              最新消息
            </Link>
            <Link className="mx-5 h6" to="product">
              樂器商城
            </Link>
            <Link className="mx-5 h6" to="class">
              音樂教育
            </Link>
            <Link className="mx-5 h6" to="place">
              場地租借
            </Link>
            <Link className="mx-5 h6" to="aboutus">
              關於我們
            </Link>
          </div>

          <div className="d-flex justify-content-end align-items-end ">
            <button className="mx-3 border-0  btn " to="">
              <img src={Cart} width="25" alt="Logo" className="mr-2" />
            </button>
            {/*會員登入我改成按鈕 如果衝突 原本的會員LINK請刪除*/}
            <button
              className="border-0 btn "
              onClick={() => {
                setLoginPopup(true);
              }}
            >
              <img src={Users} width="25" alt="Logo" className="mr-2 " />
            </button>
            <button className="mx-3 border-0 btn  " to="">
              <img src={LogoOut} width="25" alt="Logo" className="mr-2 " />
            </button>
          </div>

          {
            loginPopup && (
              <LogInSignUp setLoginPopup={setLoginPopup} />
            ) /*睿渝加的CODE不要刪*/
          }
        </Container>
      </div>
    </>
  );
}

export default Header;
