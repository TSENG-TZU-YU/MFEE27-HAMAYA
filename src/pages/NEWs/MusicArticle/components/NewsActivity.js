import React from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../../../assets/svg/arrow_back_ios_new.svg';
import { v4 as uuidv4 } from 'uuid';

function NewsActivity({ data, activeText, menuItems }) {
    // const [data, setData] = useState([]);
    // const { data } = props;

    console.log(data);
    console.log(menuItems);
    console.log('nnn', activeText);
    const id = menuItems.filter((v) => v.id === activeText);
    console.log(id[0].name);

    // useEffect(() => {
    //     console.log('News', 'useEffect []');
    //     console.log('useEffect[]', data);
    //     let getNewsActivity = async () => {
    //         let response = await axios.get(
    //             'http://localhost:3001/api/news/section?news=1'
    //         );
    //         setData(response.data);
    //         console.log('useEffect[] after set', data);
    //     };
    //     getNewsActivity();
    // }, []);

    // useEffect(() => {
    //     console.log('News', 'useEffect [data]');
    // }, [data]);

    // TODO:要修圖片的尺寸大小
    return (
        <>
            <div className="container">
                <div className="row  News-articles ">
                    {data.map((activity) => {
                        return (
                            <div key={uuidv4()} className="col-12 col-md-4 ">
                                <div className="mt-4">
                                    <img
                                        src={require(`../../../../album/article/${activity.image}`)}
                                        alt="art02"
                                        width=""
                                        className="News-imgs"
                                    />
                                    <span className="col-md-12 gary-dark-color h6 News-cursor-pinter mt-2">
                                        {activity.title}
                                        <div className=" d-flex mt-2 ">
                                            <p className="News-music-article4 small">
                                                {activity.categoryName}
                                            </p>
                                            <p className="ms-2">
                                                {activity.author} －
                                                {activity.creation_date}
                                            </p>
                                        </div>
                                    </span>
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
