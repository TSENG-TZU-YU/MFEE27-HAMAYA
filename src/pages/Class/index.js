import { Container, Row, Col } from 'react-bootstrap';
import './index.scss';

import banner from '../../assets/ClassImg/banner.png';
import art01 from '../../assets/ClassImg/Rectangle 343.png';
import art02 from '../../assets/ClassImg/Rectangle 344.png';
import art03 from '../../assets/ClassImg/Rectangle 345.png';
import art04 from '../../assets/ClassImg/Rectangle 346.png';
import arrow from '../../assets/svg/arrow_back_ios_new.svg';
import Adult_Course from '../../assets/ClassImg/Adult Course.png';
import Children_Lessons from '../../assets/ClassImg/Children Lessons.png';
import arrow_right from '../../assets/svg/arrow-right.svg';
import arrow_left from '../../assets/svg/arrow-left.svg';
import teacher01 from '../../assets/ClassImg/teacher01.png';
import teacher02 from '../../assets/ClassImg/teacher02.png';
import teacher03 from '../../assets/ClassImg/teacher03.png';
import teacher04 from '../../assets/ClassImg/teacher04.png';
import teacher05 from '../../assets/ClassImg/teacher05.png';

function Class(props) {
  return (
    <>
      <img src={banner} alt="banner" />
      <Container>
        <div className="d-flex mt-5">
          <a href="/">
            {' '}
            <p>首頁</p>
          </a>
          /
          <a href="/">
            {' '}
            <p>音樂教育</p>
          </a>
        </div>
        <div className="d-flex blank-top ">
          <h4 className="me-3" style={{ color: '#00323d' }}>
            音樂文章
          </h4>
          <h4 className="engText me-3">ARTICLE</h4>
          <div className="vector3  mt-3"></div>
        </div>
        <Row className="blank-top-art mt-5">
          <Col md={6}>
            <img
              style={{ width: '600px', height: '400px' }}
              src={art01}
              alt="art01"
            />
            <h5 className="mt-3" style={{ color: '#333333' }}>
              【親子點唱機】孟德爾頌《無言歌》為什麼沒有歌詞？
            </h5>
            <div className=" d-flex mt-3 ">
              <small
                className="Event me-3"
                style={{
                  color: '#f2f2f2',
                }}
              >
                活動快訊
              </small>
              <p>李明蒨 － 2022/08/20 </p>
            </div>
            <div className="d-flex"></div>
          </Col>
          <Col md={5} className="blank-art-left">
            <div className="d-flex">
              <img
                className="me-4"
                style={{ width: '150px', height: '100px' }}
                src={art02}
                alt="art02"
              />
              <div>
                <h5 className="h5-art02">
                  AI執筆完成貝多芬《第十號交響曲》——AI的創作是否享有著作權法的保護？
                </h5>

                <div className=" d-flex mt-3 ">
                  <small
                    className="music-article me-3"
                    style={{
                      color: '#f2f2f2',
                    }}
                  >
                    音樂文章
                  </small>
                  <p>瓦力 － 2022/08/20</p>
                </div>
              </div>
            </div>
            <div className="vector1  mt-4 mb-3"></div>
            <div className="d-flex">
              <img
                className="me-4"
                style={{ width: '150px', height: '100px' }}
                src={art03}
                alt="art03"
              />
              <div>
                <h5 className="h5-art02">廣場上的小提琴手</h5>

                <div className=" d-flex mt-3 ">
                  <small
                    className="important me-3 "
                    style={{
                      color: '#f2f2f2',
                    }}
                  >
                    重要通知
                  </small>
                  <p>眾博法律事務所 － 2022/08/20</p>
                </div>
              </div>
            </div>
            <div className="vector1  mt-4 mb-3"></div>
            <div className="d-flex">
              <img
                className="me-4"
                style={{ width: '150px', height: '100px' }}
                src={art04}
                alt="art04"
              />
              <div>
                <h5 className="h5-art02">
                  莫札特《費加洛的婚禮》——聰明，反被聰明誤？
                </h5>

                <div className=" d-flex mt-3 ">
                  <small
                    className="Promotions me-3"
                    style={{
                      color: '#f2f2f2',
                    }}
                  >
                    促銷活動
                  </small>
                  <p>邢子青 － 2022/08/20</p>
                </div>
              </div>
            </div>
            <div className="vector1  mt-4 mb-3"></div>
          </Col>
        </Row>
        <div className="more-art ">
          <p className="mb-0 me-1" style={{ color: '#00323d' }}>
            看更多音樂文章
          </p>
          <img
            className="art-arrow"
            style={{ width: '15px', height: '15px' }}
            src={arrow}
            alt="arrow"
          />
        </div>
      </Container>

      <div className="session-bg">
        <Container>
          <div className="d-flex pt-5">
            <h4 className="me-3" style={{ color: '#f2f2f2' }}>
              音樂教育
            </h4>
            <h4 className="engText me-3" style={{ color: '#f2f2f2' }}>
              MUSICAL EDUCATION
            </h4>
            <div className="vector3  mt-3"></div>
          </div>
          <Row className="mt-5 text-center">
            <Col>
              <img src={Adult_Course} alt="Adult Course" />
              <h3 className="adult-course ">成人課程</h3>
            </Col>
            <Col>
              <img src={Children_Lessons} alt="Children Lessons" />
              <h3 className="children-lessons ">兒童課程</h3>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <div className="d-flex mt-5 ">
          <h4 className="me-3" style={{ color: '#00323d' }}>
            嚴選師資
          </h4>
          <h4 className="engText me-3">ARTICLE</h4>
          <div className="vector3  mt-3"></div>
        </div>
        <div className="d-flex  justify-content-center align-items-center mt-5">
          <div className="teacher-arrow me-3">
            <img src={arrow_left} alt="arrow_left" />
          </div>
          <Row>
            <Col>
              <img src={teacher01} alt="teacher01" />
            </Col>
            <Col>
              <img src={teacher02} alt="teacher02" />
            </Col>
            <Col>
              <img src={teacher03} alt="teacher03" />
            </Col>
            <Col>
              <img src={teacher04} alt="teacher04" />
            </Col>
            <Col>
              <img src={teacher05} alt="teacher05" />
            </Col>
          </Row>
          <div className="teacher-arrow ms-3">
            <img src={arrow_right} alt="arrow_right" />
          </div>
        </div>
      </Container>
    </>
  );
}

export default Class;
