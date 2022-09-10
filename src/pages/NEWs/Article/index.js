import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

//圖檔
import NewsImg2 from '../../../assets/NewsImg/news-img2.png';
import NewsImg5 from '../../../assets/NewsImg/news-img5.png';
import NewsImg6 from '../../../assets/NewsImg/news-img6.png';
import NewsImg7 from '../../../assets/NewsImg/news-img7.png';
import NewsImg18 from '../../../assets/NewsImg/news-img18.png';

function Article() {
    return (
        <>
            {/* 麵包屑 */} 
            {/* TODO: ＲＷＤ版AI執筆的位置不對 */}
            <div className="container d-flex mt-5 ">
                <Link to="/">
                    <p className="article-Breadcrumbs text-nowrap">首頁</p>
                </Link>
                /
                <Link to="/news">
                    <p className="article-Breadcrumbs text-nowrap">最新消息</p>
                </Link>
                /
                <Link to="">
                    <p className="article-Breadcrumbs text-nowrap">音樂文章</p>
                </Link>
                /
                <Link to="">
                    <p className="article-Breadcrumbs  ">
                        AI執筆完成貝多芬《第十號交響曲》——AI的創作是否享有著作權法的保護？
                    </p>
                </Link>
            </div>
            {/* 麵包屑 end*/}
            {/* TODO:底線大小需要再調整 */}
            <div className="container ">
                <Link to="">
                    <p className="text-center article-word3  article-vector5-Btn">
                        音樂文章
                    </p>
                </Link>
                <div className="h3 text-center">
                    AI執筆完成貝多芬《第十號交響曲》——AI的創作是否享有著作權法的保護？
                </div>
                <p className="mt-2 text-center">瓦力 － 2022/08/20</p>
                <div className="container text-center ">
                    <img src={NewsImg2} alt="art02" className=" article-img" />
                </div>

                <div className="mt-4 lh-lg">
                    <p className="h4 ">貝多芬遺留未完成的《第十號交響曲》</p>
                    <br />
                    <p className="">
                        1817年，路德維希·凡·貝多芬（Ludwig van
                        Beethoven）接受英國皇家愛樂協會（Royal Philharmonic
                        Society）的委託，著手創作兩首交響曲，嗣後，貝多芬於1818年至1824年間完成《第九號交響曲》（Symphony
                        No.9 in D minor,
                        Op.125），至今仍為其永垂不朽的代表作之一。然而，之後因貝多芬的身體狀況惡化，遺留寥寥可數的手稿後，貝多芬即離開人世，未能於生前完成《第十號交響曲》（Symphony
                        No.10），成為後世許多古典樂迷心中的遺憾。
                    </p>
                    <br />
                    <p>
                        為了紀念貝多芬250歲生日，奧地利組織卡拉揚研究所（Karajan
                        Institute）負責人羅德（Matthias
                        Röder）打造了一個由音樂家與人工智慧（Artificial
                        Intelligence，AI）專家組成的團隊，於2019年一同開發「貝多芬人工智慧」（Beethoven
                        AI），利用AI技術完成《第十號交響曲》的創作。
                    </p>
                    <br />
                    <p>
                        為了讓AI學習貝多芬的創作風格，該團隊以貝多芬遺留的作品、筆記、第十號交響曲的手稿以及曾影響貝多芬音樂風格的作品教導AI；同時，團隊也教導AI樂理，讓它理解交響曲的格式、結構以及樂器的搭配方式，最終，AI在逐漸演算與修正後，成功「執筆」完成《第十號交響曲》，並於今（2021）年10月9日在貝多芬的出生地德國波昂市（Bonn）進行全球首演。
                    </p>
                    <br />
                    <p>
                        藝術與科技是否相容？或許每個人的心中都有自己的答案。而AI的創作成果和人類的創作是否在法律上享有相同評價？關於此議題，法律圈也一直存在眾多討論，且各國的看法也未盡相同。今天，就讓我們一探AI的創作與著作權法保護的議題吧！
                    </p>
                </div>

                <div className="container text-center ">
                    <img src={NewsImg18} alt="art02" className=" article-img" />
                </div>

                <div className="mt-4 lh-lg">
                    <p className="h4 ">AI的創作是否可享有著作權法的保護？</p>
                    <br />
                    <p className="">
                        隨著AI於近年興起並逐漸蓬勃發展，「AI的創作是否享有著作權法保護？」此一議題已為各國研究者廣泛討論，然目前多未有明確的結論。以我國主管機關與法院過往的判決來看，目前我國的多數法院認為：AI的創作原則上不得享有著作權法的保護，但若AI只是單純作為創作者的創作工具使用時，則可例外由操作AI的自然人或法人享有著作權：
                    </p>
                    <br />
                    <p className="h6">
                        1. 原則：AI的創作無法享有著作權法的保護
                    </p>
                    <br />
                    <p>(1) AI非「人」</p>
                    <br />
                    <p>
                        經濟部智慧財產局（下稱智財局）認為，依著作權法第10條規定，著作人於著作完成時享有著作權，另依同法第33條規定，法人為著作人之著作，其著作財產權存續至該著作公開發表後50年。由此可知，著作必須以「自然人」或「法人」為權利義務的主體，其所為的創作才有可能受到著作權的保護。AI是由人類製造出來的機器所表現出來的智慧成果，由於AI並不是「自然人」或「法人」，其創作完成的智慧成果，非屬著作權法保護的著作，原則上無法享有著作權。
                    </p>
                    <p>
                        我國法院的判決也有相同見解，智慧財產法院107年度民公訴字第4號民事判決指出：「一項著作物會沒有著作權，主要只有以下幾種可能：…4.非自然人創作的著作，非自然人包括：動物或人工智慧，因不具備法人格，其所創作的著作物也無法產生著作權而有所權利歸屬。」。
                    </p>
                    <br />
                    <p>
                        由上可知，因為AI並非「自然人」或「法人」，所以AI的創作原則上無法享有著作權法的保護。
                    </p>
                    <br />
                    <p>(2) AI創作的著作欠缺「原創性」</p>
                    <br />
                    <p>
                        智財局認為，依著作權法第3條第1項第1款規定，著作是指文學、科學、藝術或其他學術範圍之創作，且必須符合「原創性」（為著作人自行獨立創作，非抄襲他人者）及「創作性」（作品須符合一定之「創作高度」）2種要件。例如使用「自動音樂系統」生成的音樂，如果此種音樂只是機器或系統透過自動運算方式所產生的結果，並無人類「原創性」及「創作性」的投入，就不能算是著作權法保護的著作。
                    </p>
                    <br />
                    <p>
                        我國法院的判決也採相同見解，智慧財產法院107年度刑智上易字第45號刑事判決指出：「所謂創作，即具『原創性』之人類精神上創作，包含『原始性』及『創作性』之概念。『原始性』係指獨立創作，亦即著作人為創作時，並未抄襲他人著作，獨立完成創作。『創作性』則指創作至少具有少量創意，且足以表現作者之個性。」。
                    </p>
                    <br />
                    <p>
                        簡言之，著作權法保護的「著作」必須具有人類的創意表達與精神在內，至於AI透過演算法完成的作品，由於欠缺人類的「原創性」與「創作性」，無法表達人類的性格與創意，故無法享有著作權法的保護。
                    </p>
                    <br />
                    <p className="h6">
                        2.
                        例外：當AI作為創作者的「創作工具」使用時，該創作可受著作權法保護
                    </p>
                    <br />
                    <p>
                        由於AI技術日新月異，亦不乏創作者利用AI技術，加入自身創意或精神後作成作品的情形。智財局進一步說明，如果AI的創作成果有「自然人」或「法人」參與創作，且AI分析於此過程中只是機械式的被操作，此種情形下，該創作成果應可由負責操作AI的「自然人」或「法人」享有著作權。
                    </p>
                    <br />
                    <p>
                        參與創作，且AI分析於此過程中只是機械式的被操作，此種情形下，該創作成果應可由負責操作AI的「自然人」或「法人」享有著作權。
                        以我國過往判決觀察，AI創作是否可受到著作權法的保護，仍須個案判斷，無法一概而論。整體來說，法院判定的標準將以AI在整個創作過程中扮演的角色而定，原則上，如果AI系統本身主導整個創作過程，且其中並沒有投入人的創意或精神在內時，則此類作品將無法受到著作權法的保護；反之，若AI在創作過程中只是擔任數據統計或機械性的計算，且是被動性的被當作創作者的工具使用時，則可例外由操作AI的人或法人享有作品的著作權。然而，國內外學者仍有不同看法，甚至有提議應針對AI創作另行立專法保護的呼聲。
                    </p>
                    <br />
                    <p>
                        在科技日新月異的現代，科技與藝術間的距離正逐漸拉近，兩者是否可相輔相成？抑或兩者間仍存在本質的差異？著作權法的保護是否應限於以人為主體？實為值得深思的問題，你又有什麼樣的想法呢？不妨先睹為快，搶先聽聽看AI完成的《第十號交響曲》第三樂章吧！
                    </p>
                    <br />
                </div>
            </div>
            <div className="container d-flex article-blank-top">
                <p className="article-word fw-bold article-cursor-pinter me-3 text-nowrap">
                    推薦閱讀
                </p>

                <div className=" mt-3 article-vector3"></div>
            </div>
            <div className="container ">
                <div className="row ">
                    <div className="col-12 col-md-4 ">
                        <div className="mt-4 ">
                            <img
                                src={NewsImg5}
                                alt="art02"
                                width="100%"
                                height="100%"
                                className="article-imgs"
                            />
                            <span className="gary-dark-color h6 article-cursor-pinter mt-2">
                                買樂器就交給最專業的HAMAYA吧！
                                <div className=" d-flex mt-2 ">
                                    <p className="article-music4 small">
                                        促銷活動
                                    </p>
                                    <p className="ms-2">May － 2022/08/20</p>
                                </div>
                            </span>
                        </div>
                    </div>
                    <div className="col-12 col-md-4  ">
                        <div className="mt-4">
                            <img
                                src={NewsImg6}
                                alt="art02"
                                width="100%"
                                height="100%"
                                className="article-imgs"
                            />
                            <span className="gary-dark-color h6article-cursor-pinter mt-2 ">
                                樂時代～報名課程拿好康 Let's Music！
                                <div className="d-flex mt-2 ">
                                    <p className="article-music4 small">
                                        促銷活動
                                    </p>
                                    <p className="ms-2">May － 2022/08/20</p>
                                </div>
                            </span>
                        </div>
                    </div>
                    <div className="col-12 col-md-4  ">
                        <div className="mt-4">
                            <img
                                src={NewsImg7}
                                alt="art02"
                                width="100%"
                                height="100%"
                                className="article-imgs"
                            />
                            <span className="gary-dark-color h6 article-cursor-pinter mt-2">
                                學員專屬生日活動！
                                <div className="d-flex mt-2 ">
                                    <p className="article-music4 small">
                                        促銷活動
                                    </p>
                                    <p className="ms-2">May － 2022/08/20</p>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Article;
