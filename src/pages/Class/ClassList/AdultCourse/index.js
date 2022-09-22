import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../../../utils/config';

// 分頁
import _ from 'lodash';

// 元件
// import Evaluation from '../../../../components/Evaluation/Evaluation';
import Car from '../../../../components/Car/Car';
// import Favorite from '../../../../components/Favorite';
import PaginationBar from '../../../../components/PaginationBar/PaginationBar';
import Favorite from '../../../../components/Favorite';

// 會員
import { useAuth } from '../../../../utils/use_auth';

// 收藏
import { useLiked } from '../../../../utils/use_liked';

function AdultCourse({
    products,
    setProducts,
    setDisplayProducts,
    pageProducts,
    setPageProducts,
    perPage,
    setPageTotal,
    setPageNow,
    pageTotal,
    pageNow,
    displayProducts,
}) {
    // 資料庫 評論 平均數
    //    const [avg, setAvg] = useState([]);

    useEffect(() => {
        let getAdultClass = async () => {
            let response = await axios.get(
                //&page=${page}
                `${API_URL}/class/list?class=1`
                // { params: { product: product_id } }
            );
            setProducts(response.data);
            setDisplayProducts(response.data);
            // setAvg(response.data.avg);

            // 從前端取得總頁數 (lastPage)
            const pageList = _.chunk(response.data, perPage);
            // 預設1頁
            setPageNow(1);
            if (pageList.length > 0) {
                setPageTotal(pageList.length);

                // 設定到state中
                setPageProducts(pageList);
            }
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'auto',
            });
        };

        getAdultClass();
    }, []);

    useEffect(() => {
        console.log('products', products);
    }, [products]);

    // 收藏
    const { favProducts, setFavProducts } = useLiked();
    //會員
    const { member, setMember, isLogin, setIsLogin } = useAuth();

    // 會員收藏的資料
    useEffect(() => {
        let getAllFavProducts = async () => {
            let response = await axios.get(
                `${API_URL}/member/mybucketlist/${member.id}`,
                { withCredentials: true }
            );

            let products = response.data.class.map((item) => item.product_id);
            // console.log(products);
            setFavProducts(products);
        };
        if (member.id) {
            getAllFavProducts();
        }
    }, [member]);

    return (
        <div>
            {/* 已灌資料庫 */}
            {pageProducts.length > 0 &&
                pageProducts[pageNow - 1].map((classAdult) => {
                    return (
                        <div
                            key={classAdult.id}
                            className="d-lg-flex justify-content-lg-center align-items-lg-center  mb-5"
                        >
                            <Link
                                to={`${classAdult.product_id}?class=${classAdult.ins_main_id}`}
                            >
                                <div className="introduce row mx-0 mb-5 class-shadow">
                                    <div className="d-flex col-lg-6  px-lg-0  position-relative">
                                        <img
                                            className=" col-12 class-course-image"
                                            // require(`../../../../album/class/${classAdult.image}`)
                                            src={require(`../../../../album/class/${classAdult.image_1}`)}
                                            alt="Adult img"
                                        />
                                        <div className="class-like px-lg-0">
                                            <Favorite
                                                itemsData={classAdult}
                                                favProducts={favProducts}
                                                setFavProducts={setFavProducts}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6  mt-1 mb-2">
                                        <h4
                                            className="ms-1 mb-2"
                                            style={{ color: '#00323d' }}
                                        >
                                            {classAdult.name}
                                        </h4>
                                        <div className="vector2"></div>
                                        <div className="ms-2 mt-2">
                                            <p className="class-text mb-3">
                                                {classAdult.course_intro}
                                            </p>
                                            <p className="mb-0">名額：10 人 </p>
                                            <p className="mb-0">
                                                報名截止：{classAdult.deadline}
                                            </p>
                                            <p className="mb-0">
                                                開課時間：
                                                {classAdult.start_date} ~
                                                {classAdult.end_date}
                                            </p>
                                            <div className="d-flex mt-2 align-items-center">
                                                <div className="StarRating">
                                                    {/* <Evaluation rating={} /> */}
                                                </div>
                                                <p className="ms-2 mt-2">
                                                    {' '}
                                                    2 人評價
                                                </p>
                                            </div>
                                            <div className="d-lg-flex justify-content-lg-between align-items-lg-center pt-1">
                                                <h4
                                                    className=" fw-bold"
                                                    style={{ color: '#5b322f' }}
                                                >
                                                    NT ${classAdult.price} / 期
                                                </h4>

                                                <Car itemsCart={classAdult} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    );
                })}

            {/* 頁碼 */}
            <div className="d-flex justify-content-center align-items-center my-5">
                {displayProducts.length > perPage ? (
                    <PaginationBar
                        pageNow={pageNow}
                        setPageNow={setPageNow}
                        pageTotal={pageTotal}
                    />
                ) : (
                    ''
                )}
            </div>
            {/* 頁碼 end */}
        </div>
    );
}

export default AdultCourse;
