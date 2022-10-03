import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useAuth } from '../../../../../utils/use_auth';
import { API_URL } from '../../../../../utils/config';
import { useCart } from '../../../../../utils/use_cart';
import { ReactComponent as OrderFinish } from '../../../../../assets/svg/order_status_finish.svg';
import { ReactComponent as OrderUndone } from '../../../../../assets/svg/order_status_undone.svg';
import { ReactComponent as Close } from '../../../../../assets/svg/close.svg';
import { ReactComponent as OK } from '../../../../../assets/svg/ok.svg';
import { ReactComponent as Message } from '../../../../../assets/svg/message.svg';
import { ReactComponent as Review } from '../../../../../assets/svg/rate_review.svg';
import {
    successSmallToast,
    successToast,
} from '../../../../../components/Alert';
import './MyOrderDetail.scss';

function MyOrderDetail() {
    const { member, setMember, isLogin, setIsLogin } = useAuth();
    const { orderId } = useParams();
    const navigate = useNavigate();
    // console.log('orderId', orderId);

    const [myOrderUserInfo, setMyOrderUserInfo] = useState([]);
    const [myOrderList, setMyOrderList] = useState([]);
    const [myOrderListA, setMyOrderListA] = useState([]);
    const [myOrderListB, setMyOrderListB] = useState([]);
    const [orderOne, setOrderOne] = useState(false);
    const [orderTwo, setOrderTwo] = useState(false);
    const [orderThr, setOrderThr] = useState(false);

    const [paid, setPaid] = useState(false);

    const newWindow = useRef(null);

    useEffect(() => {
        // setLinePay(false);
        async function getMyOrderDetail() {
            let response = await axios.get(
                `${API_URL}/member/myorder/detail/${orderId}`,
                {
                    withCredentials: true,
                    params: { user_id: member.id },
                }
            );
            console.log('response order detail', response.data);

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

    //開新視窗引用eddy老師
    function PopupCenter(url, title, w, h) {
        var userAgent = navigator.userAgent,
            mobile = function () {
                return (
                    /\b(iPhone|iP[ao]d)/.test(userAgent) ||
                    /\b(iP[ao]d)/.test(userAgent) ||
                    /Android/i.test(userAgent) ||
                    /Mobile/i.test(userAgent)
                );
            },
            screenX =
                typeof window.screenX != 'undefined'
                    ? window.screenX
                    : window.screenLeft,
            screenY =
                typeof window.screenY != 'undefined'
                    ? window.screenY
                    : window.screenTop,
            outerWidth =
                typeof window.outerWidth != 'undefined'
                    ? window.outerWidth
                    : document.documentElement.clientWidth,
            outerHeight =
                typeof window.outerHeight != 'undefined'
                    ? window.outerHeight
                    : document.documentElement.clientHeight - 22,
            targetWidth = mobile() ? null : w,
            targetHeight = mobile() ? null : h,
            V = screenX < 0 ? window.screen.width + screenX : screenX,
            left = parseInt(V + (outerWidth - targetWidth) / 2, 10),
            right = parseInt(screenY + (outerHeight - targetHeight) / 2.5, 10),
            features = [];
        if (targetWidth !== null) {
            features.push('width=' + targetWidth);
        }
        if (targetHeight !== null) {
            features.push('height=' + targetHeight);
        }
        features.push('left=' + left);
        features.push('top=' + right);
        features.push('scrollbars=1');

        var newWindow = window.open(url, title, features.join(','));

        if (window.focus) {
            newWindow.focus();
        }

        return newWindow;
    }
    //狀態回傳
    function subscribe(eventName, listener) {
        document.addEventListener(eventName, listener);
    }

    function unsubscribe(eventName, listener) {
        document.removeEventListener(eventName, listener);
    }
    useEffect(() => {
        subscribe('paid', () => setPaid(true));
        //subscribe('fail', () => setPaid(false))
        //subscribe('pending', () => setPaid(false))

        return () => {
            unsubscribe('paid');
            //unsubscribe('fail')
            //unsubscribe('pending')
        };
    }, []);

    //完成訂單
    function doFinish() {
        async function setOrderFinish() {
            let response = await axios.put(
                `${API_URL}/member/myorder/detail/finish/${orderId}`,
                {
                    withCredentials: true,
                    user_id: member.id,
                }
            );
            successToast(response.data.message, '關閉');
            console.log('response 完成訂單', response);
        }
        setOrderFinish();
    }

    //前往結帳
    function doCheckOut() {
        Swal.fire({
            title: '確定前往付款?',
            customClass: {
                confirmButton: 'btn btn-primary',
                cancelButton: 'btn btn-danger myOrderDetailAlertBtn',
            },
            icon: 'warning',
            showCancelButton: true,
            buttonsStyling: false,
            iconColor: '#767676',
            confirmButtonText: '確定',
            cancelButtonText: '取消',
        }).then((result) => {
            if (result.isConfirmed) {
                //按確定 前往結帳 3 linepay
                async function setOrderCheckOut() {
                    let response = await axios.post(
                        `${API_URL}/member/myorder/detail/checkout/${orderId}`,
                        {
                            withCredentials: true,
                            user_id: member.id,
                            myOrderUserInfo: myOrderUserInfo,
                            myOrderList: myOrderList,
                        }
                    );

                    if (myOrderUserInfo[0].pay_method === 3) {
                        newWindow.current = PopupCenter(
                            response.data.web,
                            'LinelogInPopup',
                            400,
                            600
                        );
                        console.log('paid', paid);

                        //視窗關閉的時候回傳狀態
                        // setOrderTwo(true);
                    } else {
                        console.log(
                            'response docheckout',
                            response.data.message
                        );
                        setOrderTwo(true);
                        successToast('付款成功', '關閉');
                    }
                }
                setOrderCheckOut();
            }
        });
    }

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
                            <div className="ms-auto">
                                <button
                                    className="myOrderDetail-closeBtn"
                                    onClick={() => {
                                        navigate(-1);
                                    }}
                                >
                                    <Close />
                                </button>
                            </div>
                        </div>
                        <div className="position-relative pay_state2">
                            <div className="d-flex item1">
                                <div
                                    className={
                                        orderTwo || paid
                                            ? 'linecolor2'
                                            : 'linecolor1'
                                    }
                                ></div>
                                <div
                                    className={
                                        orderThr ? 'linecolor2' : 'linecolor1'
                                    }
                                ></div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center item2">
                                <div className="d-flex flex-column align-items-center">
                                    <OrderFinish className="icon" />
                                    訂單成立
                                </div>
                                {(orderTwo && !orderThr) ||
                                (paid && !orderThr) ? (
                                    <div className="d-flex flex-column align-items-center">
                                        <OrderFinish className="icon" />
                                        待出貨
                                    </div>
                                ) : orderThr ? (
                                    <div className="d-flex flex-column align-items-center">
                                        <OrderFinish className="icon" />
                                        已出貨
                                    </div>
                                ) : (
                                    <div className="d-flex flex-column align-items-center">
                                        <OrderUndone className=" icon" />
                                        待出貨
                                    </div>
                                )}
                                {orderThr ? (
                                    <div className="d-flex flex-column align-items-center">
                                        <OrderFinish className=" icon" />
                                        訂單完成
                                    </div>
                                ) : (
                                    <div className="d-flex flex-column align-items-center">
                                        <OrderUndone className=" icon" />
                                        訂單完成
                                    </div>
                                )}
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
                            <tr
                                key={Math.random()
                                    .toString(36)
                                    .replace('3.', '')}
                            >
                                <td className="align-middle" align="center">
                                    <div className="detail-Img">
                                        <Link
                                            to={`/products/${item.product_id}`}
                                        >
                                            <img
                                                className="myOrder-Img myOrder-contain"
                                                src={require(`../../../../../album/products/${item.image}`)}
                                                alt=""
                                            />
                                        </Link>
                                    </div>
                                    {/* for mobile */}
                                    <div className="row d-lg-none">
                                        <div className="col-3">
                                            <Link
                                                to={`/products/${item.product_id}`}
                                            >
                                                <img
                                                    className="myOrder-Img myOrder-contain"
                                                    src={require(`../../../../../album/products/${item.image}`)}
                                                    alt=""
                                                />
                                            </Link>
                                        </div>
                                        <div className="col-9 row g-0 px-2">
                                            <div className="col-12 text-start">
                                                <Link
                                                    to={`/products/${item.product_id}`}
                                                >
                                                    <p className="m-0 main-color">
                                                        <b>{item.name}</b>
                                                    </p>
                                                </Link>
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
                                        <Link
                                            to={`/products/${item.product_id}`}
                                        >
                                            <span className="p main-color">
                                                <b>{item.name}</b>
                                            </span>
                                        </Link>
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
                            <tr
                                key={Math.random()
                                    .toString(36)
                                    .replace('3.', '')}
                            >
                                <td className="align-middle" align="center">
                                    <div className="detail-Img">
                                        <Link
                                            to={`/class/list/${item.product_id}`}
                                        >
                                            <img
                                                className="myOrder-Img myOrder-contain"
                                                src={require(`../../../../../album/class/${item.image_1}`)}
                                                alt=""
                                            />
                                        </Link>
                                    </div>
                                    {/* for mobile */}
                                    <div className="row d-lg-none">
                                        <div className="col-3">
                                            <Link
                                                to={`/class/list/${item.product_id}`}
                                            >
                                                <img
                                                    className="myOrder-Img myOrder-contain"
                                                    src={require(`../../../../../album/class/${item.image_1}`)}
                                                    alt=""
                                                />
                                            </Link>
                                        </div>
                                        <div className="col-9 row g-0 px-2">
                                            <div className="col-12 text-start">
                                                <Link
                                                    to={`/class/list/${item.product_id}`}
                                                >
                                                    <p className="m-0 main-color">
                                                        <b>{item.name}</b>
                                                    </p>
                                                </Link>
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
                                        <Link
                                            to={`/class/list/${item.product_id}`}
                                        >
                                            <span className="p main-color">
                                                <b>{item.name}</b>
                                            </span>
                                        </Link>
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
                                    選擇付款方式
                                </p>
                                <p className="m-0 col-lg-2 col-5 text-end">
                                    {userInfo.pay_method_name}
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
                                {console.log(
                                    'myOrderUserInfo.qa:',
                                    myOrderUserInfo[0].qa
                                )}
                                {myOrderUserInfo[0].qa === 0 ? (
                                    <button
                                        className="btn btn-secondary col mx-2 p-0 text-nowrap"
                                        onClick={() => {
                                            navigate(
                                                `/member/myorder/addqa?orid=${myOrderUserInfo[0].id}`
                                            );
                                        }}
                                    >
                                        <Review className="myOrderDetailBtn-Icon px-1" />
                                        訂單詢問
                                    </button>
                                ) : (
                                    <button
                                        className="btn btn-secondary col mx-2 p-0 text-nowrap"
                                        onClick={() => {
                                            navigate(
                                                `/member/myorder/qadetail?orid=${myOrderUserInfo[0].id}`
                                            );
                                        }}
                                    >
                                        <Message className="myOrderDetailBtn-Icon px-1" />
                                        查看詢問
                                    </button>
                                )}
                                {orderTwo && !paid && !orderThr && (
                                    <button
                                        className="btn btn-primary col mx-2 p-0 text-nowrap"
                                        onClick={() => {
                                            setOrderThr(true);
                                            doFinish();
                                        }}
                                    >
                                        <OK className="myOrderDetailBtn-Icon px-1" />
                                        訂單完成
                                    </button>
                                )}
                                {paid && !orderTwo && !orderThr && (
                                    <button
                                        className="btn btn-primary col mx-2 p-0 text-nowrap"
                                        onClick={() => {
                                            setOrderThr(true);
                                            doFinish();
                                        }}
                                    >
                                        <OK className="myOrderDetailBtn-Icon px-1" />
                                        訂單完成
                                    </button>
                                )}
                                {orderOne && !paid && !orderTwo && (
                                    <button
                                        className="btn btn-primary col mx-2 p-0 text-nowrap"
                                        onClick={() => {
                                            doCheckOut();
                                        }}
                                    >
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
