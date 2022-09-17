import { useState, useEffect } from 'react';
import { Link, useOutletContext } from 'react-router-dom'; //抓取Outlet的props
import './index.css';
import axios from 'axios';
import { API_URL } from '../../../../utils/config';
import add_img2 from '../../../../assets/svg/add2.svg';
import { AiOutlineSend } from 'react-icons/ai';
import { BiLinkExternal } from 'react-icons/bi';
import _ from 'lodash';
import { ReactComponent as PrevPageIcon } from '../../../../assets/svg/prev_page_btn.svg';
import { ReactComponent as NextPageIcon } from '../../../../assets/svg/next_page_btn.svg';
// import next_page_icon from './next_page_btn.svg';

function MyCoupon(props) {
    const [setbread] = useOutletContext(); //此CODE為抓取麵包削setbread
    const today = new Date().getTime();
    const [haveCoupon, setHaveCoupon] = useState(0); //是否擁有優惠券
    const [couponSn, setCouponSn] = useState({ sn: '' });
    const [myCoupon, setMyCoupon] = useState([
        [
            {
                coupon_id: '',
                user_id: '',
                name: '',
                sn: '',
                minimum: '',
                discount: '',
                start_time: '',
                end_time: '',
                use: '',
            },
        ],
    ]);

    // 分頁用
    const [pageNow, setPageNow] = useState(1); // 目前頁號
    const [perPage, setPerPage] = useState(10); // 每頁多少筆資料
    const [pageTotal, setPageTotal] = useState(0); //總共幾頁

    useEffect(() => {
        setbread('我的優惠券'); //載入頁面時 設定麵包削
        loadingMyCoupon();
    }, []);

    //讀取優惠券
    async function loadingMyCoupon() {
        try {
            let response = await axios.get(
                `${API_URL}/member/mycoupon/loading`,
                {
                    withCredentials: true,
                }
            );
            console.log(response.data);

            //判斷是否擁有優惠券
            if (response.data.length === 0) {
                setHaveCoupon(0);
            }
            //分切頁面資料
            const pageList = _.chunk(response.data, perPage);

            console.log(pageList);

            if (pageList.length > 0) {
                setPageTotal(pageList.length);
                setMyCoupon(pageList);
                setHaveCoupon(1);
            }
        } catch (err) {
            console.log(err.response.data);
            alert(err.response.data.message);
        }
    }

    //新增優惠券
    async function addCouponSubmit(e) {
        e.preventDefault();
        try {
            let response = await axios.post(
                `${API_URL}/member/mycoupon/add`,
                couponSn,
                {
                    withCredentials: true,
                }
            );
            console.log(response.data);
            setCouponSn({ sn: '' });
            alert(response.data.message);
            await loadingMyCoupon();
            setHaveCoupon(1);
        } catch (err) {
            console.log(err.response.data);
            alert(err.response.data.message);
        }
    }

    //頁碼
    const paginationBar = (
        <div className="member_pagination d-flex justify-content-center align-items-center">
            <Link
                className="mx-2"
                to=""
                onClick={() => {
                    pageNow > 1 && setPageNow(pageNow - 1);
                }}
            >
                <PrevPageIcon />
            </Link>
            {Array(pageTotal)
                .fill(1)
                .map((v, i) => {
                    return (
                        <Link
                            key={i}
                            to=""
                            className={
                                i + 1 === pageNow
                                    ? 'mx-2 page_number active '
                                    : 'mx-2 page_number'
                            }
                            onClick={() => {
                                setPageNow(i + 1);
                            }}
                        >
                            {i + 1}
                        </Link>
                    );
                })}
            <Link
                className="mx-2"
                to=""
                onClick={() => {
                    pageNow < pageTotal && setPageNow(pageNow + 1);
                }}
            >
                <NextPageIcon />
            </Link>
        </div>
    );
    return (
        <div className="col-12 col-md-8 col-lg-9 MyCoupon">
            <h4 className="main-color m-1">我的優惠券</h4>
            <div className="d-flex justify-content-between m-1 mt-4">
                <div className="d-flex align-items-center">
                    <input
                        type="text "
                        value={couponSn.sn}
                        onChange={(e) => {
                            setCouponSn({ sn: e.target.value });
                        }}
                        placeholder="請輸入您的優惠券領取碼"
                    />
                    <button className="btn1" onClick={addCouponSubmit}>
                        <img alt="add_img" src={add_img2} />
                        新增優惠券
                    </button>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <Link to="/products" className="link01">
                        去商城逛逛&nbsp;
                        <AiOutlineSend size="20" />
                    </Link>
                </div>
            </div>
            {haveCoupon === 1 ? (
                <div className="row couponitem">
                    {myCoupon[pageNow - 1].map((data) => {
                        return (
                            <div
                                key={'coupon' + data.coupon_id}
                                className="col-12 col-lg-6 coupon-card"
                            >
                                <div className="row m-1 ">
                                    <div
                                        className={
                                            data.discount >= 3000
                                                ? 'col-5 coupon-cardvip position-relative'
                                                : data.discount >= 550
                                                ? 'col-5 coupon-card01 position-relative'
                                                : data.discount >= 250
                                                ? 'col-5 coupon-card02 position-relative'
                                                : data.discount >= 150
                                                ? 'col-5 coupon-card03 position-relative'
                                                : 'col-5 coupon-card04 position-relative'
                                        }
                                    >
                                        {data.use == 0 ? (
                                            <div className="card_bg_left"></div>
                                        ) : today -
                                              new Date(
                                                  data.end_time
                                              ).getTime() >=
                                          0 ? (
                                            <div className="card_bg_left"></div>
                                        ) : (
                                            ''
                                        )}
                                        <h3>
                                            <span className="NT">NT</span>$
                                            {data.discount}
                                        </h3>
                                        <h6>商品折價券</h6>
                                        <p className="text-nowrap p01">
                                            消費滿${data.minimum}可使用
                                        </p>
                                    </div>
                                    <div className="col-7 p-2 card_right">
                                        {data.use == 0 ? (
                                            <div className="card_bg_right">
                                                <div className="font">
                                                    已兌換
                                                </div>
                                            </div>
                                        ) : today -
                                              new Date(
                                                  data.end_time
                                              ).getTime() >=
                                          0 ? (
                                            <div className="card_bg_right">
                                                <div className="font">
                                                    已到期
                                                </div>
                                            </div>
                                        ) : (
                                            ''
                                        )}
                                        <h6 className="main-light-color">
                                            {data.name}
                                        </h6>
                                        <p className="main-light-color m-0 pt-2">
                                            適用樂器商城、音樂教育
                                        </p>
                                        <p className="p02">
                                            有效期限
                                            <span className="text-nowrap">
                                                {new Date(
                                                    data.start_time
                                                ).toLocaleDateString()}
                                                -
                                                {new Date(
                                                    data.end_time
                                                ).toLocaleDateString()}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <div className="m-2">
                    <h6>
                        您還沒有優惠券~快去訂閱
                        <Link to="/member">
                            優惠訊息通知
                            <BiLinkExternal />
                        </Link>
                    </h6>
                    <h6>不定時發放優惠券!!</h6>
                </div>
            )}

            {pageTotal > 1 && paginationBar}
        </div>
    );
}
export default MyCoupon;
