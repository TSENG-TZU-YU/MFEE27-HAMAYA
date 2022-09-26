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

function OrderDetail(props) {
    const [loadingComplete, setLoadingComplete] = useState(false); //是否已載入完成
    const [orderDetailList, setOrderDetailList] = useState(null);
    const location = useLocation();
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
                //分切頁面資料
                // const pageList = _.chunk(response.data, perPage);

                // console.log(pageList);

                // if (response.data.content.length > 0) {
                //     setOrderDetailList(response.data);
                //     setLoadingComplete(true); //載入完成
                // }
            } catch (err) {
                console.log(err.response.data);
                errorToast(err.response.data.message, '關閉');
                // alert(err.response.data.message);
            }
        }
        loadingOrderDetail();
    }, [location]);
    return (
        <>
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
            <h3>訂單詳細</h3>
            <hr />
            <div className="OrderDetail">
                {loadingComplete && (
                    <div>
                        <table className="table table1">
                            <thead className="text-light bg-main-color ">
                                <tr>
                                    <th className="text-center text-light title1">
                                        樂器商城
                                    </th>
                                    <th className="text-center">商品名稱</th>
                                    <th className="text-center">價格</th>
                                    <th className="text-center">數量</th>
                                    <th className="text-center">小計</th>
                                </tr>
                            </thead>
                            <tbody>
                                {console.log(
                                    '123',
                                    orderDetailList.response_orderListA
                                )}
                                {orderDetailList.response_orderListA.map(
                                    (data) => {
                                        return (
                                            <tr key={uuidv4()} className=''>
                                                <td className="text-center">
                                                    <img
                                                        className="classimg"
                                                        src={require(`../../../../album/products/${data.image}`)}
                                                        alt=""
                                                    />
                                                </td>
                                                <td className="text-center align-self-center">
                                                    {data.name}
                                                </td>
                                                <td className="text-center align-self-center">
                                                    NT${data.price}
                                                </td>
                                                <td className="text-center align-self-center">
                                                    {data.amount}
                                                </td>
                                                <td className="text-center">
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
                                    <th className="text-center " scope="col">
                                        課程名稱
                                    </th>
                                    <th className="text-center" scope="col">
                                        價格
                                    </th>
                                    <th className="text-center" scope="col">
                                        數量
                                    </th>
                                    <th className="text-center" scope="col">
                                        小計
                                    </th>
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
                                                {console.log(
                                                    `../../../../album/class/${data.image_1}`
                                                )}
                                                <td className="text-center">
                                                    {data.name}
                                                </td>
                                                <td className="text-center">
                                                    NT${data.price}
                                                </td>
                                                <td className="text-center">
                                                    {data.amount}
                                                </td>
                                                <td className="text-center">
                                                    NT$
                                                    {data.price * data.amount}
                                                </td>
                                            </tr>
                                        );
                                    }
                                )}
                            </tbody>
                        </table>
                        <hr />
                        <div className="row">
                            <div className="col-7">
                                <table className="table table2">
                                    <thead className="text-light bg-main-color ">
                                        <tr>
                                            <th>收件人資訊</th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>姓名</th>
                                            <td>
                                                {
                                                    orderDetailList.detail
                                                        .receiver
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>電話</th>
                                            <td>
                                                {orderDetailList.detail.phone}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>地址</th>
                                            <td>
                                                {orderDetailList.detail.address}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-5">
                                <table className="table table2">
                                    <thead className="text-light bg-accent-color ">
                                        <tr>
                                            <th>訂單資訊</th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>總計</th>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th>運費</th>
                                            <td>
                                                NT$
                                                {orderDetailList.detail.freight}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>優惠券折扣</th>
                                            <td>
                                                {
                                                    orderDetailList.detail
                                                        .coupon_name
                                                }
                                                NT$
                                                {
                                                    orderDetailList.detail
                                                        .discount
                                                }
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="text-end">訂單金額</div>
                                <div className="text-end">
                                    NT${orderDetailList.detail.total_amount}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default OrderDetail;
