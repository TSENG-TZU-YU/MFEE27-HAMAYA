import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Logo from '../../assets/HeaderImg/logo.svg';
import Users from '../../assets/HeaderImg/users.svg';
import Cart from '../../assets/HeaderImg/shopping_cart.svg';
import LogoOut from '../../assets/HeaderImg/logout.svg';
import '../../styles/global.scss';

function Header(props) {
  return (
    <>
      <div className="d-flex justify-content-start align-items-start ">
        <Link className="mx-3" to="/">
          <img src={Logo} width="160" alt="Logo" className="mr-2" />
        </Link>
      </div>

      <Container>
        <div className="d-flex justify-content-center align-items-end ">
          <Link className="mx-3" to="news">
            最新消息
          </Link>
          <Link className="mx-3" to="product">
            樂器商城
          </Link>
          <Link className="mx-3" to="class">
            音樂教育
          </Link>
          <Link className="mx-3" to="place">
            場地租借
          </Link>
          <Link className="mx-3" to="aboutus">
            關於我們
          </Link>
        </div>
      </Container>
      <div className="d-flex justify-content-end align-items-end ">
        <Link className="mx-3" to="">
          <img src={Cart} width="25" alt="Logo" className="mr-2" />
        </Link>
        <Link className="mx-3" to="member">
          <img src={Users} width="25" alt="Logo" className="mr-2" />
        </Link>
        <Link className="mx-3" to="">
          <img src={LogoOut} width="25" alt="Logo" className="mr-2" />
        </Link>
      </div>
      <hr />
    </>
  );
}

export default Header;
