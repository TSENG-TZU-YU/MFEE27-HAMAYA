import './index.scss';
import { Link, useLocation, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { API_URL } from '../../../utils/config';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

//圖檔

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
                        <>
                            {/* 麵包屑 */}
                            {/* TODO: ＲＷＤ版AI執筆的位置不對 */}
                            <div
                                key={uuidv4()}
                                className="container d-flex mt-5 "
                            >
                                <Link to="/">
                                    <p className="article-Breadcrumbs text-nowrap">
                                        首頁
                                    </p>
                                </Link>
                                /
                                <Link to="/news">
                                    <p className="article-Breadcrumbs text-nowrap">
                                        最新消息
                                    </p>
                                </Link>
                                /
                                <Link
                                    to={`/news/section?categoryList=${article.category}`}
                                >
                                    <p className="article-Breadcrumbs text-nowrap">
                                        {article.articleName}
                                    </p>
                                </Link>
                                /
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
                            <p className="mt-2 text-center">
                                {article.author} － {article.creation_date}
                            </p>
                            <div className="container text-center ">
                                <img
                                    src={require(`../../../album/article/${article.image}`)}
                                    alt="art02"
                                    className=" article-img"
                                />
                            </div>
                            <div className="mt-4 lh-lg">
                                <p className="h4 ">{article.title}</p>
                                <br />
                                <p className="">{article.content}</p>
                                <br />
                                <p className="article-content">
                                    {article.content}
                                </p>
                                <br />
                                <p className="article-content">
                                    {article.content}
                                </p>
                                <br />
                                <p>{article.content}</p>
                                <div className="mt-4 lh-lg">
                                    <p className="h4">{article.title}</p>
                                    <br />
                                    <p className="article-content">
                                        {article.content}
                                    </p>
                                    <br />
                                    <p>{article.title}</p>
                                    <br />
                                    <p className="article-content">
                                        {article.content}
                                    </p>
                                    <p>{article.content}</p>
                                    <br />
                                    <p className="article-content">
                                        {article.content}
                                    </p>
                                    <br />
                                    <p>{article.title}</p>
                                    <br />
                                    <p className="article-content">
                                        {article.content}
                                    </p>
                                    <br />
                                    <p>{article.content}</p>
                                    <br />
                                    <p className="article-content">
                                        {article.content}
                                    </p>
                                    <br />
                                    <p className="h6">{article.title}</p>
                                    <br />
                                    <p className="article-content">
                                        {article.content}
                                    </p>
                                    <br />
                                    <p className="article-content">
                                        {article.content}
                                    </p>
                                    <br />
                                    <p className="article-content">
                                        {article.content}
                                    </p>
                                    <br />
                                </div>
                            </div>
                        </>
                    );
                })}
            </div>

            {/* <div className="mt-4 lh-lg"></div> */}

            <div className="container d-flex article-blank-top">
                <p className="article-word fw-bold article-cursor-pinter me-3 text-nowrap">
                    推薦閱讀
                </p>

                <div className=" mt-3 article-vector3"></div>
            </div>
            <div className="container ">
                <div className="row ">
                    {read.map((recommend) => {
                        return (
                            <>
                                <div
                                    key={uuidv4()}
                                    className="col-12 col-md-4 "
                                >
                                    <div className="mt-4 ">
                                        <Link
                                            to={`/news/${recommend.id}?mainId=${recommend.category}`}
                                        >
                                            <img
                                                src={require(`../../../album/article/${recommend.image}`)}
                                                alt="art02"
                                                className="article-imgs article-img"
                                            />
                                            <span className="gary-dark-color h6 article-cursor-pinter mt-2">
                                                {recommend.title}
                                                <div className=" d-flex mt-2 ">
                                                    <p
                                                        className={colorChange(
                                                            Number(
                                                                recommend.category
                                                            )
                                                        )}
                                                    >
                                                        {recommend.articleName}
                                                    </p>
                                                    <p className="ms-2">
                                                        {recommend.author}－
                                                        {
                                                            recommend.creation_date
                                                        }
                                                    </p>
                                                </div>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Article;
