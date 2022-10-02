import { useState, useEffect } from 'react';
import { useOutletContext, Link, useNavigate } from 'react-router-dom'; //抓取Outlet的props
import axios from 'axios';
import { API_URL } from '../../../../utils/config';
import { useAuth } from '../../../../utils/use_auth';
import productImg from '../../../../album/products/FP-90-3.png';
import classPic from '../../../../assets/ClassImg/Adult img.png';
import search from '../../../../assets/svg/search.svg';
import { ReactComponent as Detailed } from '../../../../assets/svg/detailed.svg';
import { ReactComponent as Message } from '../../../../assets/svg/message.svg';
import { ReactComponent as Review } from '../../../../assets/svg/rate_review.svg';
import './MyOrder.scss';

function MyOrder() {
    const [setbread] = useOutletContext(); //此CODE為抓取麵包削setbread
    const { member, setMember, isLogin, setIsLogin, socketStatus } = useAuth();
    const navigate = useNavigate();

    const [replyState, setreplyState] = useState([{ order_id: '' }]);
    const [myOrder, setMyOrder] = useState([{ order_id: '' }]);
    //有資料true,沒資料false
    const [hiddenState, setHiddenState] = useState(false);
    useEffect(() => {
        setbread('訂單查詢'); //載入頁面時 設定麵包削

        async function getMyOrder() {
            let response = await axios.get(`${API_URL}/member/myorder/`, {
                withCredentials: true,
            });
            // console.log('response order', response.data);
            //排序時間大小
            let sortCreateTime = response.data.myOrder.sort((a, b) => {
                if (a.create_time > b.create_time) {
                    return -1;
                }
                if (a.create_time < b.create_time) {
                    return 1;
                }
                return 0;
            });
            // console.log('sortCreateTime', sortCreateTime);
            //找order_id
            let order_id = sortCreateTime.map((item) => item.order_id);
            //過濾重複的
            let noRepeat = order_id.filter((item, index, arr) => {
                return arr.indexOf(item) === index;
            });
            let newResponse = noRepeat.map((id) => {
                return sortCreateTime.find((item) => {
                    return item.order_id === id;
                });
            });
            // console.log('order_id noRepeat', order_id, noRepeat, newResponse);
            if (newResponse.length !== 0) {
                setHiddenState(true);
                setMyOrder(newResponse);
            }
        }
        getMyOrder();
        getReplyState();
    }, []);
    async function getReplyState() {
        let response = await axios.get(`${API_URL}/member/myorder/replystate`, {
            withCredentials: true,
        });
        setreplyState(response.data);
        console.log('123', response.data);
        //排序時間大小
    }
    useEffect(() => {
        getReplyState();
    }, [socketStatus.newMessage]);

    return (
        <div className="col-12 col-md-8 col-lg-9">
            {/*此className為RWD設定請勿更動*/}
            <div className="d-flex justify-content-between">
                <h4 className="main-color">
                    <b>訂單查詢</b>
                </h4>
                <button className="border-0">
                    <img src={search} alt="" />
                </button>
            </div>
            {hiddenState ? (
                <>
                    <table className="table my-2 myOrderTable">
                        <thead>
                            <tr className="text-center accent-light-color bg-main-color">
                                <th className="myOrderThWidth">#</th>
                                <th>訂單編號</th>
                                <th>訂單金額</th>
                                <th>訂單狀態</th>
                                <th>訂單時間</th>
                                <th>功能</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myOrder.map((order) => {
                                let timeSplit = order.create_time.split(' ');
                                let newCreateTime = timeSplit[0];
                                return (
                                    <tr key={order.order_id}>
                                        <td>
                                            {order.category_id === 'A' && (
                                                <img
                                                    className="myOrder-Img myOrder-contain"
                                                    src={require(`../../../../album/products/${order.image}`)}
                                                    alt=""
                                                />
                                            )}
                                            {order.category_id === 'B' && (
                                                <img
                                                    className="myOrder-Img myOrder-contain"
                                                    src={require(`../../../../album/class/${order.image_1}`)}
                                                    alt=""
                                                />
                                            )}
                                        </td>
                                        {/* 這一個td 是只會在手機板出現 */}
                                        <td
                                            align="center"
                                            className="align-middle d-lg-none p-0"
                                            data-title={`訂單編號：${order.order_id}`}
                                        ></td>
                                        <td
                                            className="align-middle text-lg-center"
                                            colSpan={2}
                                        >
                                            <div className="row g-0 px-3 px-lg-0">
                                                <span className="col-3 d-lg-none main-color">
                                                    訂單編號
                                                </span>
                                                <span className="col-lg-6 col-3 text-lg-center text-end pe-2 pe-lg-0">
                                                    <Link
                                                        to={`/member/myorder/${order.order_id}`}
                                                        className="btn border-0 p-0"
                                                    >
                                                        {order.order_id}
                                                    </Link>
                                                </span>
                                                <span className="col-3  d-lg-none main-color ps-2">
                                                    訂單價錢
                                                </span>
                                                <span className="col-lg-6 col-3 text-lg-center text-end">
                                                    NT ${order.total_amount}
                                                </span>
                                            </div>
                                        </td>
                                        <td
                                            className="align-middle text-lg-center"
                                            colSpan={2}
                                        >
                                            <div className="row g-0 px-3 px-lg-0">
                                                <span className="col-3  d-lg-none main-color">
                                                    訂單狀態
                                                </span>
                                                {order.order_state === 1 ? (
                                                    <span
                                                        style={{
                                                            color: '#8a3731',
                                                        }}
                                                        className="col-lg-6 col-3 text-lg-center text-end pe-2 pe-lg-0"
                                                    >
                                                        {order.order_stateName}
                                                    </span>
                                                ) : (
                                                    ''
                                                )}
                                                {order.order_state === 2 ? (
                                                    <span
                                                        style={{
                                                            color: '#00323d',
                                                        }}
                                                        className="col-lg-6 col-3 text-lg-center text-end pe-2 pe-lg-0"
                                                    >
                                                        {order.order_stateName}
                                                    </span>
                                                ) : (
                                                    ''
                                                )}
                                                {order.order_state === 3 ? (
                                                    <span
                                                        style={{
                                                            color: '#767676',
                                                        }}
                                                        className="col-lg-6 col-3 text-lg-center text-end pe-2 pe-lg-0"
                                                    >
                                                        {order.order_stateName}
                                                    </span>
                                                ) : (
                                                    ''
                                                )}

                                                <span className="col-3  d-lg-none main-color ps-2">
                                                    訂單時間
                                                </span>
                                                <span className="col-lg-6 col-3 text-lg-center text-end">
                                                    {newCreateTime}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="align-middle text-center text-xl-center text-lg-end">
                                            <div className="row justify-content-around align-items-center">
                                                <div className="col-lg-12 col-xl-7 col-7">
                                                    {/* {order.qa == 0 ? (
                                                        <Link
                                                            to={`/member/myorder/addqa?orid=${order.id}`}
                                                            className="btn border-0 p-0"
                                                        >
                                                            <FiMessageSquare className="icon" />
                                                            訂單詢問
                                                        </Link>
                                                    ) : (
                                                        <Link
                                                            to={`/member/myorder/qadetail?orid=${order.id}`}
                                                            className="btn border-0 p-0"
                                                        >
                                                            <FiSearch className="icon" />
                                                            查看詢問
                                                        </Link>
                                                    )} */}
                                                    {order.qa === 0 ? (
                                                        <button
                                                            className="btn border-0 p-0"
                                                            onClick={() => {
                                                                navigate(
                                                                    `/member/myorder/addqa?orid=${order.id}`
                                                                );
                                                            }}
                                                        >
                                                            <Review className="icon" />
                                                            訂單詢問
                                                        </button>
                                                    ) : (
                                                        <button
                                                            className="btn border-0 p-0"
                                                            onClick={() => {
                                                                navigate(
                                                                    `/member/myorder/qadetail?orid=${order.id}`
                                                                );
                                                            }}
                                                        >
                                                            <Message className="icon" />
                                                            查看詢問
                                                        </button>
                                                    )}
                                                    {replyState.map((data) => {
                                                        if (
                                                            data.order_id ===
                                                            order.order_id
                                                        ) {
                                                            return (
                                                                <span
                                                                    className={
                                                                        data.user_reply_state ===
                                                                        '未回覆'
                                                                            ? 'replystyle1'
                                                                            : 'replystyle2'
                                                                    }
                                                                >
                                                                    {
                                                                        data.user_reply_state
                                                                    }
                                                                </span>
                                                            );
                                                        }
                                                    })}
                                                    {/* <span className="small accent-light-color bg-main-color mx-1">
                                                        未回覆
                                                    </span> */}
                                                </div>
                                                <div className="col-lg-12 col-xl-5 col-5">
                                                    <Link
                                                        to={`/member/myorder/${order.order_id}`}
                                                        className="btn border-0 p-0"
                                                    >
                                                        <Detailed className="myOrderIcon" />
                                                        訂單詳細
                                                    </Link>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </>
            ) : (
                <>
                    <h5 className="text-center py-2">目前沒有訂單</h5>
                    <h6 className="text-center py-2">
                        <Link to="/products">回到音樂商城</Link>
                    </h6>
                </>
            )}
        </div>
    );
}
export default MyOrder;
