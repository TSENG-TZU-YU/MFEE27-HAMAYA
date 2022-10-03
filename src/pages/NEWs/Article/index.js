import './index.scss';
import { Link, useLocation, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { API_URL } from '../../../utils/config';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

//圖檔
import arrow from '../../../assets/svg/arrow_back_ios_new.svg';

function Article() {
    const [data, setData] = useState([]);
    const [read, setRead] = useState([]);

    const { content } = useParams();

    const location = useLocation();

    useEffect(() => {
        let params = new URLSearchParams(location.search);
        let mainId = params.get('mainId');
        let getArticle = async () => {
            let response = await axios.get(
                `${API_URL}/news/${content}?mainId=${mainId}`
            );
            setData(response.data.data);
            setRead(response.data.read);
        };
        getArticle();
        window.scrollTo(0, 0);
    }, [location]);

    console.log(data);

    //文章分類的標籤切換
    const colorChange = (categoryId) => {
        switch (categoryId) {
            case 1:
                return 'News-music-article small';
            case 2:
                return 'News-music-article-color2 small';

            case 3:
                return 'News-music-article-color3 small';
            case 4:
                return 'News-music-article-color4 small';

            default:
                return '';
        }
    };

    return (
        <>
            {/* 麵包屑 end*/}
            {/* TODO:底線大小需要再調整 */}
            <div className="container">
                {data.map((article) => {
                    return (
                        <div key={uuidv4()}>
                            {/* 麵包屑 */}
                            {/* TODO: ＲＷＤ版AI執筆的位置不對 */}
                            <div className="container d-flex article-blank-top  ">
                                <Link to="/">
                                    <p className="article-Breadcrumbs text-nowrap">
                                        首頁
                                    </p>
                                </Link>
                                &nbsp;/&nbsp;
                                <Link to="/news">
                                    <p className="article-Breadcrumbs text-nowrap">
                                        最新消息
                                    </p>
                                </Link>
                                &nbsp;/&nbsp;
                                <Link
                                    to={`/news/section?categoryList=${article.category}`}
                                >
                                    <p className="article-Breadcrumbs text-nowrap">
                                        {article.articleName}
                                    </p>
                                </Link>
                                &nbsp;/&nbsp;
                                <Link to="">
                                    <p className="article-Breadcrumbs  ">
                                        {article.title}
                                    </p>
                                </Link>
                            </div>
                            <Link to="">
                                <p className="text-center article-word3  article-vector5-Btn-active">
                                    {article.articleName}
                                </p>
                            </Link>
                            <div className="h3 text-center">
                                {article.title}
                            </div>
                            <p className="mt-2 text-center ">
                                {article.author} － {article.creation_date}
                            </p>
                            <div className="container text-center article-img ">
                                <img
                                    src={require(`../../../album/article/${article.image}`)}
                                    alt="art02"
                                    className=" "
                                />
                            </div>
                            <div className="mt-4 lh-lg">
                                <p className="h4 ">{article.title}</p>
                                <br />
                                <p>{article.content}</p>
                                <br />
                                <p className="article-content">
                                    coupon大放送，百年難得一見超級大優惠，
                                    租琴室大優惠，住外地沒琴房練嗎？想練琴沒地方可練嗎？家裡沒鋼琴想要租琴房？來我們美佳就對了給您完善設備，
                                </p>
                                <br />
                                <p className="article-content">
                                    所謂優惠，關鍵是優惠需要如何解讀。優惠，發生了會如何，不發生又會如何。
                                </p>
                                <br />
                                <p>{article.content}</p>
                                <div className="mt-4 lh-lg">
                                    <p className="h4">發送給全館的優惠券</p>
                                    <br />
                                    <p className="article-content">
                                        {article.content}
                                    </p>
                                    <br />
                                    <p className="h4">優惠券限時大放送</p>
                                    <br />
                                    <p className="article-content">
                                        對我個人而言，coupon不僅僅是一個重大的事件，還可能會改變我的人生。高爾斯華綏說過一句很有意思的話，在一切日常事務中，非常需要堅強果決的行動。這段話看似複雜，其中的邏輯思路卻清晰可見。每個人的一生中，幾乎可說碰到coupon這件事，是必然會發生的。海塞說過，要堅持有一天能變成堅硬的石頭！我們永遠渴望有一天我們的權利得以實現。但留給我們的只有恐懼，在人生旅途上永遠把我們追逐。這段話令我陷入了沈思。既然，一般來說，動機，可以說是最單純的力量。生活中，若coupon出現了，我們就不得不考慮它出現了的事實。貝蒂曾經認為，大家都不聽謊言，說謊的人也就絕跡了。這段話讓我所有的疑惑頓時豁然開朗。本人也是經過了深思熟慮，在每個日日夜夜思考這個問題。經過上述討論，一般來講，我們都必須務必慎重的考慮考慮。
                                        查普曼深信，誰都沒有真正的愛情，而只有一見鍾情。這是撼動人心的。在人生的歷程中，coupon的出現是必然的。克魯普斯卡婭說過一句很有意思的話，凡是想獲得優異成果的人，都應該異常謹慎地珍惜和支配自己的時間。我希望諸位也能好好地體會這句話。楊子說過一句富有哲理的話，修其身而後交，善其謀而後動。這段話讓我的心境提高了一個層次。
                                    </p>
                                    <p>
                                        本人也是經過了深思熟慮，在每個日日夜夜思考這個問題。若到今天結束時我們都還無法釐清優惠券的意義，那想必我們昨天也無法釐清。
                                        從這個角度來看，把優惠券輕鬆帶過，顯然並不適合。我認為，所謂優惠券，關鍵是優惠券需要如何解讀。優惠券絕對是史無前例的。
                                    </p>
                                    <br />
                                    <p className="article-content">
                                        我們要學會站在別人的角度思考。笛卡兒說過一句經典的名言，閱讀一切好書如同和過去最傑出的人談話。這句話看似簡單，但其中的陰鬱不禁讓人深思。不要先入為主覺得coupon很複雜，實際上，coupon可能比你想的還要更複雜。回過神才發現，思考coupon的存在意義，已讓我廢寢忘食。coupon的出現，重寫了人生的意義。一般來講，我們都必須務必慎重的考慮考慮。如果別人做得到，那我也可以做到。coupon對我來說，已經成為了我生活的一部分。老舊的想法已經過時了。對我個人而言，coupon不僅僅是一個重大的事件，還可能會改變我的人生。想必大家都能了解coupon的重要性。那麼，如果此時我們選擇忽略coupon，
                                        那後果可想而知。列寧講過一段深奧的話，免難識朋友。這句話決定了一切。
                                    </p>
                                    <br />
                                    <p>{article.title}</p>
                                    <br />
                                    <p className="article-content">
                                        我們普遍認為，若能理解透徹核心原理，對其就有了一定的了解程度。所謂優惠券，關鍵是優惠券需要如何解讀。儘管如此，我們仍然需要對優惠券保持懷疑的態度。
                                    </p>
                                    <br />
                                    <p>{article.content}</p>
                                    <br />
                                    <p className="article-content">
                                        對於一般人來說，優惠活動究竟象徵著什麼呢？可是，即使是這樣，優惠活動的出現仍然代表了一定的意義。謹慎地來說，我們必須考慮到所有可能。一般來說，不難發現，問題在於該用什麼標準來做決定呢？探討優惠活動時，如果發現非常複雜，那麼想必不簡單。華羅庚說過，要循序漸進！我走過的道路，就是一條循序漸進的道路。這段話非常有意思。若沒有優惠活動的存在，那麼後果可想而知。帶著這些問題，我們一起來審視優惠活動。比克斯塔夫曾講過，人人皆受制於法律。但願諸位理解後能從中有所成長。
                                    </p>
                                    <br />
                                    <p className="h6">{article.title}</p>
                                    <br />
                                    <p className="article-content">
                                        對於優惠活動，我們不能不去想，卻也不能走火入魔。探討優惠活動時，如果發現非常複雜，那麼想必不簡單。從這個角度來看，塞萬提斯說過一句著名的話，重要的不在於你是誰生的，而在於你跟誰交朋友。希望大家能從這段話中有所收穫。瓦萊里曾經提到過，流行聰明人雖然嘲笑它，卻還是服。這段話非常有意思。話雖如此，我們卻也不能夠這麼篤定。我們都知道，只要有意義，那麼就必須慎重考慮。聖經相信，敲吧，門終究會開的。這句話把我們帶到了一個新的維度去思考這個問題。塞萬提斯曾提出，金錢是愛情的基礎，也是戰爭的基。這把視野帶到了全新的高度。這種事實對本人來說意義重大，相信對這個世界也是有一定意義的。領悟其中的道理也不是那麼的困難。謹慎地來說，我們必須考慮到所有可能。每個人都不得不面對這些問題。在面對這種問題時，務必詳細考慮優惠活動的各種可能。
                                    </p>
                                    <br />
                                    <p className="article-content">
                                        孟軻說過一句富有哲理的話，故天將降大任於斯人也，必先苦其心志，勞其筋骨，餓其體膚，空乏其身，行拂亂其所為，所以動心忍性，曾益其所不能。這句話幾乎解讀出了問題的根本。若能夠洞悉優惠活動各種層面的含義，勢必能讓思維再提高一個層級。
                                    </p>
                                    <br />
                                    <p className="article-content">
                                        在這種不可避免的衝突下，我們必須解決這個問題。生活中，若優惠活動出現了，我們就不得不考慮它出現了的事實。現在，正視優惠活動的問題，是非常非常重要的。因為，而這些並不是完全重要，更加重要的問題是，我們都有個共識，若問題很困難，那就勢必不好解決。一般來講，我們都必須務必慎重的考慮考慮。儘管如此，別人往往卻不這麼想。富蘭克林曾經提到過，沒有任何動物比螞蟻更勤奮，然而它卻最沉默寡言。這似乎解答了我的疑惑。
                                    </p>
                                    <br />
                                </div>
                            </div>
                            <div className="container text-center ">
                                <Link
                                    to={`/news/section?categoryList=${article.category}`}
                                    className="mb-0 me-1 list-cursor-pinter"
                                >
                                    回上一頁
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="container d-flex article-blank-top">
                <p className="article-word fw-bold article-cursor-pinter me-3 text-nowrap">
                    推薦閱讀
                </p>

                <div className=" mt-3 article-vector3"></div>
            </div>
            <div className="container  article-blank-top2 ">
                <div className="row ">
                    {read.map((recommend) => {
                        return (
                            <div
                                key={uuidv4()}
                                className="col-12 col-md-4 news-move-up"
                            >
                                <div className="mt-4">
                                    <Link
                                        to={`/news/${recommend.id}?mainId=${recommend.category}`}
                                    >
                                        <img
                                            src={require(`../../../album/article/${recommend.image}`)}
                                            alt="art02"
                                            className="article-imgs article-img"
                                        />
                                        <span className="gary-dark-color h6 article-cursor-pinter mt-2">
                                            <div className="mt-2 ">
                                                {recommend.title}
                                            </div>

                                            <div className=" d-flex mt-2">
                                                <p
                                                    className={colorChange(
                                                        Number(
                                                            recommend.category
                                                        )
                                                    )}
                                                >
                                                    {recommend.articleName}
                                                </p>
                                                <p className="ms-2 mt-1">
                                                    {recommend.author}－
                                                    {recommend.creation_date}
                                                </p>
                                            </div>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Article;
