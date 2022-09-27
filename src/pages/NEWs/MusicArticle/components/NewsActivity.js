import React from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../../../assets/svg/arrow_back_ios_new.svg';
import { v4 as uuidv4 } from 'uuid';
import '../index.scss';
function NewsActivity({ data, activeText, menuItems }) {
    // const [data, setData] = useState([]);
    // const { data } = props;

    console.log(data);
    console.log(menuItems);
    console.log('nnn', activeText);
    const id = menuItems.filter((v) => v.id === activeText);
    console.log(id[0].name);

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

    // TODO:要修圖片的尺寸大小
    return (
        <>
            <div className="container">
                <div className="row  News-articles ">
                    {data.map((activity, index) => {
                        return (
                            <div key={index} className="col-12 col-md-4 ">
                                <div className="mt-4 ">
                                    <Link
                                        to={`/news/${activity.id}?mainId=${activity.categoryId}`}
                                    >
                                        <img
                                            src={require(`../../../../album/article/${activity.image}`)}
                                            alt="art02"
                                            className="All-imgs"
                                        />
                                        <span className="col-md-12 gary-dark-color h6 News-cursor-pinter ">
                                            <div className="mt-2">
                                                {activity.title}
                                            </div>
                                            <div className=" d-flex mt-2  ">
                                                <p
                                                    className={colorChange(
                                                        Number(
                                                            activity.categoryId
                                                        )
                                                    )}
                                                >
                                                    {activity.categoryName}
                                                </p>

                                                <p className="ms-2 mt-1">
                                                    {activity.author} －
                                                    {activity.creation_date}
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
            <div className="container News-more-art ">
                {/* 帶假資料的值到下一頁MusicArticle */}
                <Link
                    data={data}
                    activeText={activeText}
                    to={`/news/section?categoryList=${activeText}`}
                    className="mb-0 me-1 cursor-pinter"
                >
                    看更多{id[0].name}
                    <img
                        className="News-art-arrow"
                        style={{
                            width: '15px',
                            height: '15px',
                        }}
                        src={arrow}
                        alt="arrow"
                    />
                </Link>
            </div>
        </>
    );
}

export default NewsActivity;
