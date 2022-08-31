import { Container } from 'react-bootstrap';
import './index.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import banner from '../../assets/ClassImg/banner.png';

function Class(props) {
  return (
    <>
      <img src={banner} alt="banner" />
      <Container>
        <div className="d-flex blank-top">
          <h4 className="me-3">音樂文章</h4>
          <h4 className="engText me-3">ARTICLE</h4>
          <div className="vector3  mt-3"></div>
        </div>
      </Container>
    </>
  );
}

export default Class;
