import { useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'lodash';
import { API_URL } from '../../../../utils/config';
import { useAuth } from '../../../../utils/use_auth';
import search from '../../../../assets/svg/search.svg';
import './MyBucketList.scss';
import BucketClass from './components/BucketClass';
import BucketProduct from './components/BucketProduct';
import { useOutletContext } from 'react-router-dom'; //抓取Outlet的props
import PaginationBar from '../../../../components/PaginationBar/PaginationBar';

function MyBucketList(props) {
    const [setbread] = useOutletContext(); //此CODE為抓取麵包削setbread
    useEffect(() => {
        setbread('我的收藏'); //載入頁面時 設定麵包削
    }, []);

    //會員登入狀態判斷
    useEffect(() => {
        async function getMember() {
            try {
                // console.log('檢查是否登入');
                let response = await axios.get(`${API_URL}/auth`, {
                    withCredentials: true,
                });
                // console.log('已登入', response.data);
                setIsLogin(true);
                setMember(response.data);
            } catch (err) {
                // navigate('/');
                console.log(err.response.data.message);
            }
        }
        getMember();
    }, []);

    // 分頁用 樂器商城
    const [pageNowA, setPageNowA] = useState(1); // 目前頁號
    const [perPageA, setPerPageA] = useState(8); // 每頁多少筆資料
    const [pageTotalA, setPageTotalA] = useState(0); //總共幾頁，在didMount時要決定
    const [pageProductsA, setPageProductsA] = useState([]);

    // 分頁用 音樂教育
    const [pageNowB, setPageNowB] = useState(1); // 目前頁號
    const [perPageB, setPerPageB] = useState(4); // 每頁多少筆資料
    const [pageTotalB, setPageTotalB] = useState(0); //總共幾頁，在didMount時要決定
    const [pageProductsB, setPageProductsB] = useState([]);

    const { member, setMember, isLogin, setIsLogin } = useAuth();
    const [myBucket, setMyBucket] = useState([]);
    const [myBucketA, setMyBucketA] = useState([]);
    const [myBucketB, setMyBucketB] = useState([]);

    useEffect(() => {
        async function getMyBucket() {
            try {
                let response = await axios.get(
                    `${API_URL}/member/mybucketlist`,
                    { withCredentials: true }
                );
                setMyBucketA(response.data.product);
                const pageListA = _.chunk(response.data.product, perPageA);
                if (pageListA.length > 0) {
                    setPageTotalA(pageListA.length);
                    // 設定到state中
                    setPageProductsA(pageListA);
                }

                setMyBucketB(response.data.class);
                const pageListB = _.chunk(response.data.class, perPageB);
                if (pageListB.length > 0) {
                    setPageTotalB(pageListB.length);
                    // 設定到state中
                    setPageProductsB(pageListB);
                }
            } catch (err) {
                console.log('載入我的收藏錯誤', err);
            }
        }
        getMyBucket();
    }, []);

    const [bucketProduct, setBucketProduct] = useState(true);
    const [bucketClass, setBucketClass] = useState(false);
    return (
        <div className="col-12 col-md-8 col-lg-9">
            <div className="d-flex justify-content-between">
                <h4 className="main-color">
                    <b>我的收藏</b>
                </h4>
                <button className="border-0">
                    <img src={search} alt="" />
                </button>
            </div>
            <div className="row p-2">
                <button
                    className={`col-6 ${
                        bucketProduct
                            ? 'myBucketListBtn active'
                            : 'myBucketListBtn'
                    }`}
                    onClick={() => {
                        setBucketProduct(true);
                        setBucketClass(false);
                    }}
                >
                    <h6 className="main-color">
                        <b>樂器商城商品</b>
                    </h6>
                </button>
                <button
                    className={`col-6 ${
                        bucketClass
                            ? 'myBucketListBtn active'
                            : 'myBucketListBtn'
                    }`}
                    onClick={() => {
                        setBucketProduct(false);
                        setBucketClass(true);
                    }}
                >
                    <h6 className="main-color">
                        <b>音樂教育課程</b>
                    </h6>
                </button>
            </div>
            {bucketProduct ? (
                <>
                    <BucketProduct
                        myBucketA={myBucketA}
                        setMyBucketA={setMyBucketA}
                        pageProductsA={pageProductsA}
                        setPageProductsA={setPageProductsA}
                        pageNowA={pageNowA}
                        setPageNowA={setPageNowA}
                        perPageA={perPageA}
                        setPageTotalA={setPageTotalA}
                    />
                    <div className="text-center d-flex justify-content-center align-items-center my-4">
                        {myBucketA.length > perPageA ? (
                            <PaginationBar
                                pageNow={pageNowA}
                                setPageNow={setPageNowA}
                                pageTotal={pageTotalA}
                            />
                        ) : (
                            ''
                        )}
                    </div>
                </>
            ) : (
                <>
                    <BucketClass
                        myBucketB={myBucketB}
                        setMyBucketB={setMyBucketB}
                        pageProductsB={pageProductsB}
                        setPageProductsB={setPageProductsB}
                        pageNowB={pageNowB}
                        setPageNowB={setPageNowB}
                        perPageB={perPageB}
                        setPageTotalB={setPageTotalB}
                    />
                    <div className="text-center d-flex justify-content-center align-items-center my-4">
                        {myBucketB.length > perPageB ? (
                            <PaginationBar
                                pageNow={pageNowB}
                                setPageNow={setPageNowB}
                                pageTotal={pageTotalB}
                            />
                        ) : (
                            ''
                        )}
                    </div>
                </>
            )}
        </div>
    );
}
export default MyBucketList;
