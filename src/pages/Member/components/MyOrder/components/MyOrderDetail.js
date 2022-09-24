import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../../../../utils/use_auth';
import { API_URL } from '../../../../../utils/config';
import { ReactComponent as OrderFinish } from '../../../../../assets/svg/order_status_finish.svg';
import { ReactComponent as OrderUndone } from '../../../../../assets/svg/order_status_undone.svg';
import { ReactComponent as OK } from '../../../../../assets/svg/ok.svg';
import { ReactComponent as Message } from '../../../../../assets/svg/message.svg';
import './MyOrderDetail.scss';

function MyOrderDetail() {
    const { member, setMember, isLogin, setIsLogin } = useAuth();
    const { orderId } = useParams();
    // console.log('orderId', orderId);

    const [myOrderUserInfo, setMyOrderUserInfo] = useState([]);
    const [myOrderList, setMyOrderList] = useState([]);
    const [myOrderListA, setMyOrderListA] = useState([]);
    const [myOrderListB, setMyOrderListB] = useState([]);
    const [orderOne, setOrderOne] = useState(false);
    const [orderTwo, setOrderTwo] = useState(false);
    const [orderThr, setOrderThr] = useState(false);

    useEffect(() => {
        async function getMyOrderDetail() {
            let response = await axios.get(
                `${API_URL}/member/myorder/detail/${orderId}`,
                {
                    withCredentials: true,
                    params: { user_id: member.id },
                }
            );
            // console.log('response order detail', response.data);

            setMyOrderUserInfo(response.data.userInfo);
            setMyOrderList(response.data.orderList);

            let order_state = response.data.userInfo[0].order_state;
            switch (order_state) {
                case 1:
                    setOrderOne(true);
                    break;
                case 2:
                    setOrderOne(true);
                    setOrderTwo(true);
                    break;
                case 3:
                    setOrderOne(true);
                    setOrderTwo(true);
                    setOrderThr(true);
                    break;
                default:
                    setOrderOne(true);
            }

            //分類別
            const myOrder_cateA = response.data.orderList.filter((v) => {
                return v.category_id === 'A';
            });
            setMyOrderListA(myOrder_cateA);
            const myOrder_cateB = response.data.orderList.filter((v) => {
                return v.category_id === 'B';
            });
            setMyOrderListB(myOrder_cateB);
        }
        getMyOrderDetail();
    }, []);

    return (
        <div className="col-12 col-md-8 col-lg-9">
            {/*此className為RWD設定請勿更動*/}
            {myOrderUserInfo.map((userInfo) => {
                return (
                    <>
                        <div
                            key={Math.random().toString(36).replace('3.', '')}
                            className="d-flex align-items-center"
                        >
                            <h4 className="main-color d-inline-block">
                                <b>訂單詳細</b>
                            </h4>
                            <span className="main-color p d-inline-block mx-2">
                                訂單編號：{userInfo.order_id}
                            </span>
                        </div>
                        <div className="d-flex justify-content-evenly pt-4">
                            <div>
                                {orderOne ? (
                                    <>
                                        <OrderFinish className="myOrderDetail-Icon" />
                                        <p className="gary-dark-color">
                                            訂單成立
                                        </p>
                                    </>
                                ) : (
                                    <>
                                        <OrderUndone className="myOrderDetail-Icon" />
                                        <p className="gary-dark-color">
                                            訂單成立
                                        </p>
                                    </>
                                )}
                                {/* <OrderFinish className="myOrderDetail-Icon" />
                                <p className="gary-dark-color">訂單成立</p> */}
                            </div>
                            <div>
                                {orderTwo ? (
                                    <>
                                        <OrderFinish className="myOrderDetail-Icon" />
                                        <p className="gary-dark-color">
                                            待出貨
                                        </p>
                                    </>
                                ) : (
                                    <>
                                        <OrderUndone className="myOrderDetail-Icon" />
                                        <p className="gary-dark-color">
                                            待出貨
                                        </p>
                                    </>
                                )}
                                {/* <OrderFinish className="myOrderDetail-Icon" />
                                <p className="gary-dark-color">待出貨</p> */}
                            </div>
                            <div>
                                {orderThr ? (
                                    <>
                                        <OrderFinish className="myOrderDetail-Icon" />
                                        <p className="gary-dark-color">
                                            訂單完成
                                        </p>
                                    </>
                                ) : (
                                    <>
                                        <OrderUndone className="myOrderDetail-Icon" />
                                        <p className="gary-dark-color">
                                            訂單完成
                                        </p>
                                    </>
                                )}
                                {/* <OrderUndone className="myOrderDetail-Icon" />
                                <p className="gary-dark-color">訂單完成</p> */}
                            </div>
                        </div>
                        <h6 className="main-color py-2">收件資訊</h6>
                        <div className="row">
                            <p className="m-0 py-1 main-color col-lg-3 col-12">
                                收件人姓名{' '}
                                <span className="gary-dark-color">
                                    {userInfo.receiver}
                                </span>
                            </p>
                            <p className="m-0 py-1 main-color col-lg-3 col-12">
                                收件人電話{' '}
                                <span className="gary-dark-color">
                                    {userInfo.phone}
                                </span>
                            </p>
                            {userInfo.address !== 'undefined' ? (
                                <p className="m-0 py-1 main-color col-lg-6 col-12">
                                    收件人地址{' '}
                                    <span className="gary-dark-color">
                                        {userInfo.address}
                                    </span>
                                </p>
                            ) : (
                                ''
                            )}
                        </div>
                    </>
                );
            })}
            <h6 className="main-color py-2">購買列表</h6>
            <div className="d-lg-none bg-main-color">
                <h6 className="accent-light-color p-2">
                    <b>樂器商城</b>
                </h6>
            </div>
            <table className="table m-0 myOrderDetailTable">
                <thead>
                    <tr className="text-center accent-light-color bg-main-color">
                        <th className="myOrderThWidth">樂器商城</th>
                        <th className="w-50">商品名稱</th>
                        <th className="myOrderThWidth">價格</th>
                        <th>數量</th>
                        <th className="myOrderThWidth">小計</th>
                    </tr>
                </thead>
                <tbody className="detail-tbody">
                    {myOrderListA.map((item) => {
                        let itemPriceTotal = item.amount * item.price;
                        return (
                            <tr key={item.id}>
                                <td className="align-middle" align="center">
                                    <div className="detail-Img">
                                        <img
                                            className="myOrder-Img myOrder-contain"
                                            src={require(`../../../../../album/products/${item.image}`)}
                                            alt=""
                                        />
                                    </div>
                                    {/* for mobile */}
                                    <div className="row d-lg-none">
                                        <div className="col-3">
                                            <img
                                                className="myOrder-Img myOrder-contain"
                                                src={require(`../../../../../album/products/${item.image}`)}
                                                alt=""
                                            />
                                        </div>
                                        <div className="col-9 row g-0 px-2">
                                            <div className="col-12 text-start">
                                                <p className="m-0 main-color">
                                                    <b>{item.name}</b>
                                                </p>
                                            </div>
                                            <div className="gary-dark-color p col-6 gy-2 text-start">
                                                <span className="main-color">
                                                    數量：
                                                </span>{' '}
                                                {item.amount}
                                            </div>
                                            <div className="gary-dark-color p col-6 gy-2 text-end">
                                                <span>
                                                    NT ${itemPriceTotal}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* for mobile */}
                                </td>
                                <td>
                                    <div className="d-flex flex-column align-items-lg-start pt-lg-2">
                                        <span className="p main-color">
                                            <b>{item.name}</b>
                                        </span>
                                        <span className="small">
                                            型號：{item.brand_name}
                                        </span>
                                    </div>
                                </td>
                                <td align="center" className="align-middle">
                                    <div className="gary-dark-color p">
                                        <span>NT ${item.price}</span>
                                    </div>
                                </td>
                                <td align="center" className="align-middle">
                                    <div className="gary-dark-color p">
                                        {' '}
                                        {item.amount}
                                    </div>
                                </td>
                                <td align="center" className="align-middle ">
                                    <div className="gary-dark-color p">
                                        <span>NT ${itemPriceTotal}</span>
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className="d-lg-none bg-main-color">
                <h6 className="accent-light-color p-2">
                    <b>音樂課程</b>
                </h6>
            </div>
            <table className="table m-0 myOrderDetailTable py-2">
                <thead>
                    <tr className="text-center accent-light-color bg-main-color">
                        <th className="myOrderThWidth">音樂教育</th>
                        <th className="w-50">商品名稱</th>
                        <th className="myOrderThWidth">價格</th>
                        <th>數量</th>
                        <th className="myOrderThWidth">小計</th>
                    </tr>
                </thead>
                <tbody className="detail-tbody">
                    {myOrderListB.map((item) => {
                        let itemPriceTotal = item.amount * item.price;
                        return (
                            <tr key={item.id}>
                                <td className="align-middle" align="center">
                                    <div className="detail-Img">
                                        <img
                                            className="myOrder-Img myOrder-contain"
                                            src={require(`../../../../../album/class/${item.image_1}`)}
                                            alt=""
                                        />
                                    </div>
                                    {/* for mobile */}
                                    <div className="row d-lg-none">
                                        <div className="col-3">
                                            <img
                                                className="myOrder-Img myOrder-contain"
                                                src={require(`../../../../../album/class/${item.image_1}`)}
                                                alt=""
                                            />
                                        </div>
                                        <div className="col-9 row g-0 px-2">
                                            <div className="col-12 text-start">
                                                <p className="m-0 main-color">
                                                    <b>{item.name}</b>
                                                </p>
                                            </div>
                                            <div className="gary-dark-color p col-6 gy-2 text-start">
                                                <span className="main-color">
                                                    數量：
                                                </span>{' '}
                                                1
                                            </div>
                                            <div className="gary-dark-color p col-6 gy-2 text-end">
                                                <span>
                                                    NT ${itemPriceTotal}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* for mobile */}
                                </td>
                                <td>
                                    <div className="align-items-lg-start pt-lg-2">
                                        <span className="p main-color">
                                            <b>{item.name}</b>
                                        </span>
                                    </div>
                                </td>
                                <td align="center" className="align-middle">
                                    <div className="gary-dark-color p">
                                        <span>NT ${item.price}</span>
                                    </div>
                                </td>
                                <td align="center" className="align-middle">
                                    <div className="gary-dark-color p">
                                        {item.amount}
                                    </div>
                                </td>
                                <td align="center" className="align-middle ">
                                    <div className="gary-dark-color p">
                                        <span>NT ${itemPriceTotal}</span>
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            {/* 總計 = total_amount + 折扣 - 運費 */}
            {myOrderUserInfo.map((userInfo) => {
                let calcTotalPrice =
                    Number(userInfo.total_amount) +
                    0 -
                    Number(userInfo.freight);
                let discount;
                if (userInfo.discount) {
                    discount = userInfo.discount;
                } else {
                    discount = 0;
                }
                return (
                    <>
                        <div
                            key={Math.random().toString(36).replace('3.', '')}
                            className="row detailBorder gary-dark-color mx-1 mt-3"
                        >
                            <div className="py-2 col-12 row justify-content-end">
                                <p className="m-0 col-lg-2 col-5 text-end">
                                    總計
                                </p>
                                <p className="m-0 col-lg-2 col-5 text-end">
                                    NT ${calcTotalPrice}
                                </p>
                            </div>
                            <div className="py-2 col-12 row justify-content-end">
                                <p className="m-0 col-lg-2 col-5 text-end">
                                    運費
                                </p>
                                <p className="m-0 col-lg-2 col-5 text-end">
                                    NT ${userInfo.freight}
                                </p>
                            </div>
                            <div className="py-2 col-12 row justify-content-end">
                                <p className="m-0 col-lg-2 col-5 text-end">
                                    優惠券折扣
                                </p>
                                <p className="m-0 col-lg-2 col-5 text-end">
                                    - NT ${discount}
                                </p>
                            </div>
                        </div>
                        <div className="row mx-1">
                            <div className="py-2 row justify-content-end">
                                <p className="m-0 main-color col-lg-2 col-5 text-end">
                                    <b>訂單金額</b>
                                </p>
                                <p className="m-0 main-color col-lg-2 col-5 text-end">
                                    <b>NT ${userInfo.total_amount}</b>
                                </p>
                            </div>
                            <div className="py-2 row col-lg-5 offset-lg-7 align-items-center">
                                <button className="btn btn-secondary col mx-2 p-0 text-nowrap">
                                    <Message className="myOrderDetailBtn-Icon px-1" />
                                    訂單詢問
                                </button>
                                {orderTwo ? (
                                    <button className="btn btn-primary col mx-2 p-0 text-nowrap">
                                        <OK className="myOrderDetailBtn-Icon px-1" />
                                        訂單完成
                                    </button>
                                ) : (
                                    <button className="btn btn-primary col mx-2 p-0 text-nowrap">
                                        前往付款
                                    </button>
                                )}
                            </div>
                        </div>
                    </>
                );
            })}
        </div>
    );
}

export default MyOrderDetail;
