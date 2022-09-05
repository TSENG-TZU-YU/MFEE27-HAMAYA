import { Container } from 'react-bootstrap';
import './index.scss';
import Decorate from '../../assets/HomeImg/decorate.svg';
import BrandWord from '../../assets/HomeImg/brandword.svg';
import Note from '../../assets/HomeImg/note.svg';
import Note2 from '../../assets/HomeImg/note-2.svg';
import Note3 from '../../assets/HomeImg/note-3.svg';
import Note4 from '../../assets/HomeImg/note-4.svg';
import Img from '../../assets/HomeImg/homeimg.svg';
import Img2 from '../../assets/HomeImg/homeimg-2.svg';
import Smart from '../../assets/HomeImg/smart-display-2.svg';

function Home(props) {
    return (
        <>
            {/* <div className="bg-main-gary-light-color">
                <img src={Decorate} width="700" alt="Logo" className="mr-2" />
                <Container className="">
                    <div className="row">
                        <div className="col-5">
                            <p className="font ms-3 ">HA</p>
                            <img
                                src={BrandWord}
                                alt="Logo"
                                width="300"
                                className="home-img"
                            />
                            <img
                                src={Note}
                                alt="Logo"
                                width="40"
                                className="note"
                            />
                            <img
                                src={Note2}
                                alt="Logo"
                                width="25"
                                className="note2"
                            />
                            <p className="main-light-color font3 ">
                                將光亮從人心靈的深沈中釋放出來，是音樂的神聖使命。
                                ——羅伯特·亞歷山大·舒曼
                            </p>

                            <p className="font4 ms-3 ">MA</p>
                        </div>
                        <div className="col-2 d-flex justify-content-end ">
                            <img
                                src={Img}
                                alt="Logo"
                                height="247"
                                width="403"
                                className="home-img2"
                            />
                            <button className="border-0  btn">
                                <img
                                    src={Smart}
                                    alt="Logo"
                                    height="50"
                                    width=""
                                    className="video-button"
                                />
                            </button>
                            <img
                                src={Note4}
                                alt="Logo"
                                height=""
                                width=""
                                className="note4"
                            />
                            <img
                                src={Note3}
                                alt="Logo"
                                height=""
                                width=""
                                className="note3"
                            />
                        </div>
                        <div className="d-flex justify-content-end ">
                            <img
                                src={Img2}
                                alt="Logo"
                                height="175"
                                width="285"
                                className=""
                            />
                        </div>
                    </div>
                </Container>
            </div> */}
        </>
    );
}

export default Home;
