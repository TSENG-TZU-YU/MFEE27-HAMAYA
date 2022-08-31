import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Logo from '../../assets/HeaderImg/logo.svg';
import Users from '../../assets/HeaderImg/users.svg';
import Cart from '../../assets/HeaderImg/shopping_cart.svg';
import LogoOut from '../../assets/HeaderImg/logout.svg';
import './index.scss';

function Header(props) {
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
          <div className="d-flex align-items-end">
            <Link className="mx-3" to="">
              <img src={Cart} width="25" alt="Logo" className="" />
            </Link>
            <Link className="mx-3" to="member">
              <img src={Users} width="25" alt="Logo" className="" />
            </Link>
            <Link className="mx-3" to="">
              <img src={LogoOut} width="25" alt="Logo" className="" />
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Header;
