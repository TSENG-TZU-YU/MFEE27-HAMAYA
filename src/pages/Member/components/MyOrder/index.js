import { useState, useEffect } from 'react';
import { useOutletContext, Link } from 'react-router-dom'; //抓取Outlet的props
import axios from 'axios';
import { API_URL } from '../../../../utils/config';
import { useAuth } from '../../../../utils/use_auth';
import productImg from '../../../../album/products/FP-90-3.png';
import classPic from '../../../../assets/ClassImg/Adult img.png';
import search from '../../../../assets/svg/search.svg';
import { ReactComponent as Detailed } from '../../../../assets/svg/detailed.svg';
import { ReactComponent as Message } from '../../../../assets/svg/message.svg';
import './MyOrder.scss';

function MyOrder(props) {
    const [setbread] = useOutletContext(); //此CODE為抓取麵包削setbread
    const { member, setMember, isLogin, setIsLogin } = useAuth();

    const [myOrder, setMyOrder] = useState([]);

    useEffect(() => {
        setbread('訂單查詢'); //載入頁面時 設定麵包削

        async function getMyOrder() {
            let response = await axios.get(
                `${API_URL}/member/myorder/${member.id}`
            );
            console.log('response', response.data.myOrder);

            //找order_id
            let order_id = response.data.myOrder.map((item) => item.order_id);
            //過濾重複的
            let noRepeat = order_id.filter((item, index, arr) => {
                return arr.indexOf(item) === index;
            });
            let newResponse = noRepeat.map((id) => {
                return response.data.myOrder.find((item) => {
                    return item.order_id === id;
                });
            });

            console.log('order_id noRepeat', order_id, noRepeat, newResponse);
            setMyOrder(newResponse);
        }
        getMyOrder();
    }, []);

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
                                    <img
                                        className="myOrder-Img myOrder-contain"
                                        src={require(`../../../../album/products/${order.image}`)}
                                        alt=""
                                    />
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
                                            {order.order_id}
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
                                        <span className="col-lg-6 col-3 text-lg-center text-end pe-2 pe-lg-0">
                                            待出貨
                                        </span>
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
                                            <button className="btn border-0 p-0">
                                                <Message className="myOrderIcon" />
                                                訂單詢問
                                            </button>
                                            <span className="small accent-light-color bg-main-color mx-1">
                                                未回覆
                                            </span>
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
        </div>
    );
}
export default MyOrder;
