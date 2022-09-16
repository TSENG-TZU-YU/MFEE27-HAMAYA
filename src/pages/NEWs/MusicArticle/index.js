import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

// 圖檔
import NewsBanner from '../../../assets/NewsImg/news-banner.jpg';
import NewsImg2 from '../../../assets/NewsImg/news-img2.png';
import NewsImg11 from '../../../assets/NewsImg/news-img11.png';
import NewsImg12 from '../../../assets/NewsImg/news-img12.png';
import NewsImg13 from '../../../assets/NewsImg/news-img13.png';
import NewsImg14 from '../../../assets/NewsImg/news-img14.png';
import NewsImg15 from '../../../assets/NewsImg/news-img15.png';
import NewsImg16 from '../../../assets/NewsImg/news-img16.png';
import NewsImg17 from '../../../assets/NewsImg/news-img17.png';

import arrow from '../../../assets/svg/arrow_back_ios_new.svg';
function MusicArticle(props) {
    return (
        <>
            <img src={NewsBanner} alt="banner" className="img-fluid" />
            {/* 麵包屑 */}
            <div className="container d-flex mt-5 ">
                <Link to="/">
                    <p className="News-Breadcrumbs">首頁</p>
                </Link>
                /
                <Link to="/news">
                    <p className="News-Breadcrumbs">最新消息</p>
                </Link>
                /
                <Link to="">
                    <p className="News-Breadcrumbs">音樂文章</p>
                </Link>
            </div>
            {/* 麵包屑 end*/}
            <div className="container">
                <div className="row text-center ">
                    <Link
                        to="section"
                        className="col-3 News-word3  News-vector5-Btn"
                    >
                        <span>促銷活動</span>
                    </Link>
                    <Link
                        to="section"
                        className="col-3 News-word3  News-vector5-Btn"
                    >
                        <span>活動快訊</span>
                    </Link>
                    <Link
                        to="section"
                        className="col-3 News-word3  News-vector5-Btn"
                    >
                        <span> 重要通知</span>
                    </Link>
                    <Link
                        to="section"
                        className="col-3 News-word3  News-vector5-Btn-active"
                    >
                        <span>音樂文章</span>
                    </Link>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12  col-md-6 d-flex mt-3">
                        <img src={NewsImg2} alt="art02" className="list-img" />
                    </div>
                    <div className="col-12 col-md-6  mt-3">
                        <span className="ms-2 gary-dark-color h4 list-cursor-pinter ">
                            AI執筆完成貝多芬《第十號交響曲》——AI的創作是否享有著作權法的保護？
                            <div className="d-flex mt-2 ">
                                <p className="ms-2 list-music-article2 small  ">
                                    音樂文章
                                </p>
                                <p className="ms-2 mt-1 ">瓦力 － 2022/08/20</p>
                            </div>
                        </span>
                        <p className="col-md-12 ms-2">
                            1817年，路德維希·凡·貝多芬（Ludwig van
                            Beethoven）接受英國皇家愛樂協會（Royal Philharmonic
                            Society）的委託，著手創作兩首交響曲，嗣後，貝多芬於1818年至1824年間完成《第九號交響曲》（Symphony
                            No.9 in D minor,
                            Op.125），至今仍為其永垂不朽的代表作之一。然而，之後因貝多芬的身體狀況惡化，遺留寥寥可數的手稿後，貝多芬即離開人世，未能於生前完成《第十號交響曲》（Symphony
                            No.10），成為後世許多古典樂迷心中的遺憾。
                            為了紀念貝多芬250歲生日，奧地利組織卡拉揚研究所（Karajan
                            Institute）負責人羅德（Matthias
                            Röder）打造了一個由音樂家與人工智慧（Artificial
                            Intelligence，AI）...
                        </p>
                        <div className="container list-more-art ">
                            <Link
                                to="/news/category"
                                className="mb-0 me-1 list-cursor-pinter"
                            >
                                閱讀全文
                            </Link>
                            <img
                                className="list-arrow"
                                style={{ width: '15px', height: '15px' }}
                                src={arrow}
                                alt="arrow"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12  col-md-6 d-flex mt-3">
                        <img src={NewsImg11} alt="art02" className="list-img" />
                    </div>
                    <div className="col-12 col-md-6  mt-3">
                        <span className="ms-2 gary-dark-color h4 list-cursor-pinter ">
                            蕭邦模仿秀
                            <div className="d-flex mt-2 ">
                                <p className="ms-2 list-music-article2 small  ">
                                    音樂文章
                                </p>
                                <p className="ms-2 mt-1 ">瓦力 － 2022/08/20</p>
                            </div>
                        </span>
                        <p className="col-md-12 ms-2 ">
                            音樂院第一年的樂理課，老師發改好的考卷，最高分是一位金髮長腿的女鋼琴學生，她對著全班還有老師回眸一笑，好像世界小姐介紹完自己時的表情。後來才知道，她是如假包換選美出身的美國丹佛小姐！
                            顏值，這個如今在表演藝術最在意的條件，是否在古典音樂圈裡也適用？
                            五年一度的國際波蘭蕭邦鋼琴大賽已經正式在這個月開始，看到這群年輕的鋼琴家
                            ，會覺得比選世界小姐還要精彩，因為也有男生。在黑白鋼琴鍵之間，能彈出大珠小珠落玉盤的音樂，又能在表情上贏得評審的青睞，
                            到底要有什麼樣的魅力？在繁複的音樂比賽規則裡，除了演奏的曲目、年紀還有推薦函，其他如穿著、外表，都沒有限制，也許這才是細節裡藏的秘密...
                        </p>
                    </div>
                    <div className="container list-more-art ">
                        <Link
                            to="/news/category"
                            className="mb-0 me-1 list-cursor-pinter"
                        >
                            閱讀全文
                        </Link>
                        <img
                            className="list-arrow"
                            style={{ width: '15px', height: '15px' }}
                            src={arrow}
                            alt="arrow"
                        />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md col-sm-12  d-flex mt-3">
                        <img
                            src={NewsImg12}
                            alt="art02"
                            width="300"
                            height="180"
                            className="list-img"
                        />
                    </div>
                    <div className="col-md-9  col-sm-12  mt-3">
                        <span className="ms-2 gary-dark-color h4 list-cursor-pinter ">
                            木村拓哉的鋼琴課
                            <div className="d-flex mt-2 ">
                                <p className="ms-2 list-music-article2 small  ">
                                    音樂文章
                                </p>
                                <p className="ms-2 mt-1 ">瓦力 － 2022/08/20</p>
                            </div>
                        </span>
                        <p className=" ms-2 ">
                            最近日劇上演的終極保鑣二，女兒出道，自己又再度瘦身成功的木村拓哉飾演單親帶著兒子的一人保鑣公司。在第二集，他以前的同事跑來加入他，而且立了大功，最後木村說了一句話：「還好你會彈鋼琴，你是何時學的啊...
                        </p>
                    </div>
                    <div className="container list-more-art ">
                        <Link
                            to="/news/category"
                            className="mb-0 me-1 list-cursor-pinter"
                        >
                            閱讀全文
                        </Link>
                        <img
                            className="list-arrow"
                            style={{ width: '15px', height: '15px' }}
                            src={arrow}
                            alt="arrow"
                        />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md col-sm-12  d-flex mt-3">
                        <img
                            src={NewsImg13}
                            alt="art02"
                            width="300"
                            height="180"
                            className="list-img"
                        />
                    </div>
                    <div className="col-md-9  col-sm-12  mt-3">
                        <span className="ms-2 gary-dark-color h4 list-cursor-pinter ">
                            舒曼同意克拉拉將其未出版之作品公諸於世——著作人格權
                            <div className="d-flex mt-2 ">
                                <p className="ms-2 list-music-article2 small  ">
                                    音樂文章
                                </p>
                                <p className="ms-2 mt-1 ">瓦力 － 2022/08/20</p>
                            </div>
                        </span>
                        <p className=" ms-2 ">
                            眾所週知，羅伯特‧舒曼（Robert Schumann,
                            1810-1856）是浪漫樂派作曲家的代表之一，其一生之中創作並發表過許多著名的作品，包括四部交響曲、鋼琴曲《狂歡節》、連篇歌曲《詩人之戀》、《女人的愛與生命》等；此外，對於尚未發表的作品，舒曼於在世時曾留下一份文...
                        </p>
                    </div>
                    <div className="container list-more-art ">
                        <Link
                            to="/news/category"
                            className="mb-0 me-1 list-cursor-pinter"
                        >
                            閱讀全文
                        </Link>
                        <img
                            className="list-arrow"
                            style={{ width: '15px', height: '15px' }}
                            src={arrow}
                            alt="arrow"
                        />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md col-sm-12  d-flex mt-3">
                        <img
                            src={NewsImg14}
                            alt="art02"
                            width="300"
                            height="180"
                            className="list-img"
                        />
                    </div>
                    <div className="col-md-9  col-sm-12  mt-3">
                        <span className="ms-2 gary-dark-color h4 list-cursor-pinter ">
                            將經典音樂劇《歌劇魅影》翻拍成電影
                            <div className="d-flex mt-2 ">
                                <p className="ms-2 list-music-article2 small  ">
                                    音樂文章
                                </p>
                                <p className="ms-2 mt-1 ">瓦力 － 2022/08/20</p>
                            </div>
                        </span>
                        <p className=" ms-2 ">
                            知名音樂劇《歌劇魅影》 (The Phantom of the Opera)
                            是由安德魯·洛伊·韋伯 (Andrew Lloyd Webber)
                            作曲，劇本則是改編自法國著名的愛情驚悚小說《歌劇魅影》(Le
                            Fantôme de
                            l’Opéra)。其刻骨銘心的故事情節與動人心弦的音樂旋律
                            ，使其成為至今仍永垂不朽的經典...
                        </p>
                    </div>
                    <div className="container list-more-art ">
                        <Link
                            to="/news/category"
                            className="mb-0 me-1 list-cursor-pinter"
                        >
                            閱讀全文
                        </Link>
                        <img
                            className="list-arrow"
                            style={{ width: '15px', height: '15px' }}
                            src={arrow}
                            alt="arrow"
                        />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md col-sm-12  d-flex mt-3">
                        <img
                            src={NewsImg15}
                            alt="art02"
                            width="300"
                            height="180"
                            className="list-img"
                        />
                    </div>
                    <div className="col-md-9  col-sm-12  mt-3">
                        <span className="ms-2 gary-dark-color h4 list-cursor-pinter ">
                            新寫的舊歌
                            <div className="d-flex mt-2 ">
                                <p className="ms-2 list-music-article2 small  ">
                                    音樂文章
                                </p>
                                <p className="ms-2 mt-1 ">瓦力 － 2022/08/20</p>
                            </div>
                        </span>
                        <p className=" ms-2 ">
                            這首作品編號64之1的降D大調圓舞曲，全長雖然不到兩分鐘，彈奏起來卻有一定的難度。「琴之森」漫畫中，蹺課跑到音樂教室玩耍的一之瀨海，被阿字野老師逮到...
                        </p>
                    </div>
                    <div className="container list-more-art ">
                        <Link
                            to="/news/category"
                            className="mb-0 me-1 list-cursor-pinter"
                        >
                            閱讀全文
                        </Link>
                        <img
                            className="list-arrow"
                            style={{ width: '15px', height: '15px' }}
                            src={arrow}
                            alt="arrow"
                        />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md col-sm-12  d-flex mt-3">
                        <img
                            src={NewsImg16}
                            alt="art02"
                            width="300"
                            height="180"
                            className="list-img"
                        />
                    </div>
                    <div className="col-md-9  col-sm-12  mt-3">
                        <span className="ms-2 gary-dark-color h4 list-cursor-pinter ">
                            舉辦線上直播音樂會、分享音樂會影片會侵害別人的著作權嗎？
                            <div className="d-flex mt-2 ">
                                <p className="ms-2 list-music-article2 small  ">
                                    音樂文章
                                </p>
                                <p className="ms-2 mt-1 ">瓦力 － 2022/08/20</p>
                            </div>
                        </span>
                        <p className=" ms-2 ">
                            由於新冠肺炎疫情升溫，各地的藝術表演活動均遭到限制，因此，世界各地的表演者紛紛利用網路無遠弗屆的傳播力，舉辦各種線上演出。無論是透過網路直播音樂會演出，或先錄影再上傳表演影片供樂迷觀賞，都為傳統的藝術表演帶來多元的新氣象...
                        </p>
                    </div>
                    <div className="container list-more-art ">
                        <Link
                            to="/news/category"
                            className="mb-0 me-1 list-cursor-pinter"
                        >
                            閱讀全文
                        </Link>
                        <img
                            className="list-arrow"
                            style={{ width: '15px', height: '15px' }}
                            src={arrow}
                            alt="arrow"
                        />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md col-sm-12  d-flex mt-3">
                        <img
                            src={NewsImg17}
                            alt="art02"
                            width="300"
                            height="180"
                            className="list-img"
                        />
                    </div>
                    <div className="col-md-9  col-sm-12  mt-3">
                        <span className="ms-2 gary-dark-color h4 list-cursor-pinter ">
                            提琴名城甜蜜蜜：義大利三大名琴與牛札糖
                            <div className="d-flex mt-2 ">
                                <p className="ms-2 list-music-article2 small  ">
                                    音樂文章
                                </p>
                                <p className="ms-2 mt-1 ">瓦力 － 2022/08/20</p>
                            </div>
                        </span>
                        <p className=" ms-2 ">
                            提琴的製造歷史已經有五百多年了，卻只有來自義大利北部克雷蒙納的三大名琴家族阿瑪蒂、瓜奈里，以及史特拉底瓦里能夠昇華成為傳奇。這些名琴家族一手打造的提琴，經過幾百年的歲月洗禮，音色竟然保持完美，透過演奏者高超的技巧...
                        </p>
                    </div>
                    <div className="container list-more-art ">
                        <Link
                            to="/news/category"
                            className="mb-0 me-1 list-cursor-pinter"
                        >
                            閱讀全文
                        </Link>
                        <img
                            className="list-arrow"
                            style={{ width: '15px', height: '15px' }}
                            src={arrow}
                            alt="arrow"
                        />
                    </div>
                </div>
            </div>
            {/* 頁碼 */}
            <div className="d-flex justify-content-center align-items-center">
                <ul className="articles-pages d-flex">
                    <li>&#x3C;</li>
                    <li className="articles-page-active">1</li>&ensp;
                    <li>2</li>&ensp;
                    <li>3</li>&ensp;
                    <li>4</li>
                    <li>&#x3E;</li>
                </ul>
            </div>
            {/* 頁碼 end */}
        </>
    );
}

export default MusicArticle;
