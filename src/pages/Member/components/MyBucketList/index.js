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
import { ReactComponent as ArrowLeft } from '../../../../assets/svg/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../../../assets/svg/arrow-right.svg';
import PaginationBar from '../../../../components/PaginationBar/PaginationBar';

function MyBucketList(props) {
    const [setbread] = useOutletContext(); //此CODE為抓取麵包削setbread
    useEffect(() => {
        setbread('我的收藏'); //載入頁面時 設定麵包削
    }, []);

    // 分頁用
    const [pageNowA, setPageNowA] = useState(1); // 目前頁號
    const [perPageA, setPerPageA] = useState(8); // 每頁多少筆資料
    const [pageTotalA, setPageTotalA] = useState(0); //總共幾頁，在didMount時要決定
    const [pageProductsA, setPageProductsA] = useState([]);
    const [displayProductsA, setDisplayProductsA] = useState([]);

    const [pageNowB, setPageNowB] = useState(1); // 目前頁號
    const [perPageB, setPerPageB] = useState(8); // 每頁多少筆資料
    const [pageTotalB, setPageTotalB] = useState(0); //總共幾頁，在didMount時要決定
    const [pageProductsB, setPageProductsB] = useState([]);
    const [displayProductsB, setDisplayProductsB] = useState([]);

    const { member, setMember, isLogin, setIsLogin } = useAuth();
    const [myBucket, setMyBucket] = useState([]);
    const [myBucketA, setMyBucketA] = useState([]);
    const [myBucketB, setMyBucketB] = useState([]);

    useEffect(() => {
        async function getMyBucket() {
            try {
                let response = await axios.get(
                    `${API_URL}/member/mybucketlist/${member.id}`
                );
                console.log('response', response.data);
                let bucketList = response.data.myBucketList.length;
                if (bucketList !== 0) {
                    setMyBucket(response.data.myBucketList);
                    // console.log('All MyBucketList', response.data.myBucketList);
                    //分類別
                    let myBucketList = response.data.myBucketList;
                    // console.log('myBucketList', myBucketList);

                    const myBucket_cateA = myBucketList.filter((v) => {
                        return v.category_id === 'A';
                    });
                    setMyBucketA(myBucket_cateA);

                    const myBucket_cateB = myBucketList.filter((v) => {
                        return v.category_id === 'B';
                    });
                    setMyBucketB(myBucket_cateB);
                    setDisplayProductsA(myBucket_cateA);
                    setDisplayProductsB(myBucket_cateB);
                    const pageListA = _.chunk(myBucket_cateA, perPageA);
                    const pageListB = _.chunk(myBucket_cateB, perPageB);
                    if (pageListA.length > 0) {
                        setPageTotalA(pageListA.length);
                        // 設定到state中
                        setPageProductsA(pageListA);
                    }
                    if (pageListB.length > 0) {
                        setPageTotalB(pageListB.length);
                        // 設定到state中
                        setPageProductsB(pageListB);
                    }
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
                    <h6>
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
                    <h6>
                        <b>音樂教育課程</b>
                    </h6>
                </button>
            </div>
            {bucketProduct ? (
                <BucketProduct
                    myBucketA={myBucketA}
                    setMyBucketA={setMyBucketA}
                    displayProductsA={displayProductsA}
                    setDisplayProductsA={setDisplayProductsA}
                    pageProductsA={pageProductsA}
                    setPageProductsA={setPageProductsA}
                    pageNowA={pageNowA}
                    setPageNowA={setPageNowA}
                />
            ) : (
                <BucketClass
                    myBucketB={myBucketB}
                    setMyBucketB={setMyBucketB}
                    pageProductsB={pageProductsB}
                    setPageProductsB={setPageProductsB}
                    pageNowB={pageNowB}
                    setPageNowB={setPageNowB}
                />
            )}
            <div className="text-center py-2">
                {/* TODO: 這裡要加頁碼 */}
                {bucketProduct ? (
                    displayProductsA.length > perPageA ? (
                        <PaginationBar
                            pageNowA={pageNowA}
                            setPageNowA={setPageNowA}
                            pageTotalA={pageTotalA}
                        />
                    ) : (
                        ''
                    )
                ) : displayProductsB.length > perPageB ? (
                    <PaginationBar
                        pageNowB={pageNowB}
                        setPageNowB={setPageNowB}
                        pageTotalB={pageTotalB}
                    />
                ) : (
                    ''
                )}
            </div>
        </div>
    );
}
export default MyBucketList;
