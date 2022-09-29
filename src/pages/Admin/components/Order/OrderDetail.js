import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import detail_img from '../../../../assets/svg/detailed.svg';
import {
    Link,
    useOutletContext,
    useLocation,
    useNavigate,
} from 'react-router-dom';
import axios from 'axios';
import { API_URL, IMAGE_URL } from '../../../../utils/config';
import _ from 'lodash';
import { errorToast } from '../../../../components/Alert';
import {
    FiChevronLeft,
    FiChevronRight,
    FiPlus,
    FiPlusSquare,
} from 'react-icons/fi';
import './index.css';
import { clearConfigCache } from 'prettier';
import { ReactComponent as Close } from '../../../../assets/svg/close.svg';
import { ReactComponent as Finish } from '../../../../assets/svg/order_status_finish.svg';
import { ReactComponent as Undone } from '../../../../assets/svg/order_status_undone.svg';

function OrderDetail(props) {
    const [loadingComplete, setLoadingComplete] = useState(false); //是否已載入完成
    const [orderDetailList, setOrderDetailList] = useState({
        detail: { order_id: '' },
    });
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        async function loadingOrderDetail() {
            try {
                let params = new URLSearchParams(location.search);
                let orid = params.get('orid');
                let response = await axios.get(
                    `${API_URL}/admin/order/detail?orid=${orid}`,
                    {
                        withCredentials: true,
                    }
                );
                console.log(response.data);
                setOrderDetailList(response.data);
                setLoadingComplete(true);
            } catch (err) {
                console.log(err.response.data);
                errorToast(err.response.data.message, '關閉');
            }
        }
        loadingOrderDetail();
    }, [location]);
    return (
        <div className="OrderDetail">
            <div className="mt-1">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to="/admin">首頁</Link>
                        </li>
                        <li className="breadcrumb-item">
                            <Link to="/admin">訂單管理</Link>
                        </li>
                        <li className="breadcrumb-item " aria-current="page">
                            訂單詳細
                        </li>
                    </ol>
                </nav>
            </div>
            <div className="d-flex align-items-end">
                <h3>訂單詳細</h3>
                <span className="main-color">
                    &nbsp;訂單編號:{orderDetailList.detail.order_id}
                </span>
            </div>
            <hr />
            <div className="d-flex justify-content-end ">
                <button
                    className=" closebtn"
                    onClick={() => {
                        navigate(-1);
                    }}
                >
                    <Close />
                </button>
            </div>
            <div className="position-relative pay_state">
                <div className="d-flex item1">
                    <div
                        className={
                            orderDetailList.detail.order_state === '訂單成立'
                                ? 'linecolor1'
                                : orderDetailList.detail.order_state ===
                                  '已出貨'
                                ? 'linecolor2'
                                : 'linecolor2'
                        }
                    ></div>
                    <div
                        className={
                            orderDetailList.detail.order_state === '訂單成立'
                                ? 'linecolor1'
                                : orderDetailList.detail.order_state ===
                                  '已出貨'
                                ? 'linecolor1'
                                : 'linecolor2'
                        }
                    ></div>
                </div>
                <div className="d-flex justify-content-between align-items-center item2">
                    <div className="d-flex flex-column align-items-center">
                        <Finish className="icon" />
                        訂單成立
                    </div>
                    {orderDetailList.detail.order_state === '已出貨' ? (
                        <div className="d-flex flex-column align-items-center">
                            <Finish className="icon" />
                            已出貨
                        </div>
                    ) : orderDetailList.detail.order_state === '訂單完成' ? (
                        <div className="d-flex flex-column align-items-center">
                            <Finish className="icon" />
                            已出貨
                        </div>
                    ) : (
                        <div className="d-flex flex-column align-items-center">
                            <Undone className=" icon" />
                            待出貨
                        </div>
                    )}
                    {orderDetailList.detail.order_state === '訂單完成' ? (
                        <div className="d-flex flex-column align-items-center">
                            <Finish className=" icon" />
                            訂單完成
                        </div>
                    ) : (
                        <div className="d-flex flex-column align-items-center">
                            <Undone className=" icon" />
                            訂單完成
                        </div>
                    )}
                </div>
            </div>
            <div className="mb-4">
                {loadingComplete && (
                    <div>
                        <h5 className="title3">收件資訊</h5>
                        <div className="row my-2">
                            <div className="col-2">
                                <span className="title3">姓名</span>
                                &nbsp;&nbsp;{orderDetailList.detail.receiver}
                            </div>
                            <div className="col-4">
                                <span className="title3">電話</span>
                                &nbsp;&nbsp;{orderDetailList.detail.phone}
                            </div>
                            <div className="col-6">
                                <span className="title3">地址</span>
                                &nbsp;&nbsp;{orderDetailList.detail.address}
                            </div>
                        </div>
                        <table className="table table1">
                            <thead className="text-light bg-main-color ">
                                <tr>
                                    <th className="text-center text-light title1">
                                        樂器商城
                                    </th>
                                    <th className="text-center title2">
                                        商品名稱
                                    </th>
                                    <th className="text-center">價格</th>
                                    <th className="text-center">數量</th>
                                    <th className="text-center">小計</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orderDetailList.response_orderListA.map(
                                    (data) => {
                                        return (
                                            <tr key={uuidv4()} className="">
                                                <td className="text-center">
                                                    <img
                                                        className="classimg"
                                                        src={require(`../../../../album/products/${data.image}`)}
                                                        alt=""
                                                    />
                                                </td>
                                                <td className="text-center align-middle">
                                                    {data.name}
                                                </td>
                                                <td className="text-center align-middle">
                                                    NT${data.price}
                                                </td>
                                                <td className="text-center align-middle">
                                                    {data.amount}
                                                </td>
                                                <td className="text-center align-middle">
                                                    NT$
                                                    {data.price * data.amount}
                                                </td>
                                            </tr>
                                        );
                                    }
                                )}
                            </tbody>
                        </table>
                        <table className="table table2">
                            <thead className="text-light bg-main-color ">
                                <tr>
                                    <th className="text-center text-light title1">
                                        音樂教育
                                    </th>
                                    <th className="text-center title2">
                                        課程名稱
                                    </th>
                                    <th className="text-center">價格</th>
                                    <th className="text-center">數量</th>
                                    <th className="text-center">小計</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orderDetailList.response_orderListB.map(
                                    (data) => {
                                        return (
                                            <tr key={uuidv4()}>
                                                <td className="text-center">
                                                    <img
                                                        className="classimg"
                                                        src={require(`../../../../album/class/${data.image_1}`)}
                                                        alt=""
                                                    />
                                                </td>
                                                <td className="text-center align-middle">
                                                    {data.name}
                                                </td>
                                                <td className="text-center align-middle">
                                                    NT${data.price}
                                                </td>
                                                <td className="text-center align-middle">
                                                    {data.amount}
                                                </td>
                                                <td className="text-center align-middle">
                                                    NT$
                                                    {data.price * data.amount}
                                                </td>
                                            </tr>
                                        );
                                    }
                                )}
                            </tbody>
                        </table>
                        <hr className="hr" />
                        <div className="row">
                            <div className="col-7"></div>
                            <div className="col-2 text-end">總計</div>
                            <div className="col-2 text-end">
                                NT$
                                {orderDetailList.response_orderListA.reduce(
                                    (prev, next) => {
                                        return prev + next.price * next.amount;
                                    },
                                    0
                                ) +
                                    orderDetailList.response_orderListB.reduce(
                                        (prev, next) => {
                                            return (
                                                prev + next.price * next.amount
                                            );
                                        },
                                        0
                                    )}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-7"></div>
                            <div className="col-2 text-end">運費</div>
                            <div className="col-2 text-end">
                                + NT$
                                {orderDetailList.detail.freight}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-7 ">
                                使用優惠券:{orderDetailList.detail.coupon_name}
                                &nbsp; SN:{orderDetailList.detail.sn}
                            </div>
                            {/* <div className="col-3  text-end">
                                SN:{orderDetailList.detail.sn}
                            </div> */}
                            <div className="col-2 text-end">優惠券折扣</div>
                            <div className="col-2 text-end">
                                - NT$
                                {orderDetailList.detail.discount}
                            </div>
                        </div>
                        <hr className="hr" />
                        <div className="row">
                            <div className="col-7"></div>
                            <div className="col-2 text-end">訂單金額</div>
                            <div className="col-2 text-end">
                                NT${orderDetailList.detail.total_amount}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default OrderDetail;
