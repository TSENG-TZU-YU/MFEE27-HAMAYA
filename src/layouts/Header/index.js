import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import '../../styles/global.scss';

function Header(props) {
  return (
    <>
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

      <hr />
    </>
  );
}

export default Header;
