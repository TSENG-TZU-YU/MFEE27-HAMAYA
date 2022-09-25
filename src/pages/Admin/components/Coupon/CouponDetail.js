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
import { API_URL } from '../../../../utils/config';
import _ from 'lodash';
import { errorToast } from '../../../../components/Alert';
import {
    FiChevronLeft,
    FiChevronRight,
    FiPlus,
    FiPlusSquare,
} from 'react-icons/fi';
import { ReactComponent as Close } from '../../../../assets/svg/close.svg';
import { FiTrash2,FiTool,FiSettings } from 'react-icons/fi';

function CouponDetail(props) {
    const [loadingComplete, setLoadingComplete] = useState(false); //是否已載入完成
    const [couponDetailList, setCouponDetailList] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    //讀取優惠券
    useEffect(() => {
        async function loadingCouponDetail() {
            try {
                let params = new URLSearchParams(location.search);
                let cpid = params.get('cpid');
                let response = await axios.get(
                    `${API_URL}/admin/coupon/detail?cpid=${cpid}`,
                    {
                        withCredentials: true,
                    }
                );
                console.log(response.data);

                //分切頁面資料
                // const pageList = _.chunk(response.data, perPage);

                // console.log(pageList);

                if (response.data.content.length > 0) {
                    setCouponDetailList(response.data);
                    setLoadingComplete(true); //載入完成
                }
            } catch (err) {
                console.log(err.response.data);
                errorToast(err.response.data.message, '關閉');
                // alert(err.response.data.message);
            }
        }
        loadingCouponDetail();
    }, [location]);
    return (
        <>
            <div className="mt-1">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to="/admin">首頁</Link>
                        </li>
                        <li class="breadcrumb-item">
                            <Link to="/admin/coupon">優惠券管理</Link>
                        </li>
                        <li className="breadcrumb-item " aria-current="page">
                            優惠券詳細
                        </li>
                    </ol>
                </nav>
            </div>
            <h3>優惠券詳細</h3>
            <hr />
            {loadingComplete && (
                <div className="CouponDetail mb-4">
                    <div className="content ">
                        <div className="d-flex justify-content-end ">
                            <button
                                className="closebtn"
                                onClick={() => {
                                    navigate(-1);
                                }}
                            >
                                <Close />
                            </button>
                        </div>
                        <div className="row m-0">
                            <div className="col-3 bg-main-color text-light text-center border">
                                優惠券名稱
                            </div>
                            <div className="col-9 text-center border">
                                {couponDetailList.detail.name}
                            </div>
                            <div className="col-3 bg-main-color text-light text-center border">
                                序號
                            </div>
                            <div className="col-9 text-center border">
                                {couponDetailList.detail.sn}
                            </div>
                            <div className="col-3 bg-main-color text-light text-center border">
                                使用期間
                            </div>
                            <div className="col-9 text-center border">
                                {couponDetailList.detail.start_time}
                                &nbsp;~&nbsp;
                                {couponDetailList.detail.end_time}
                            </div>
                            <div className="col-3 bg-main-color text-light text-center border">
                                最低消費金額
                            </div>
                            <div className="col-9 text-center border">
                                ${couponDetailList.detail.minimum}
                            </div>
                            <div className="col-3 bg-main-color text-light text-center border">
                                折扣金額
                            </div>
                            <div className="col-9 text-center border">
                                ${couponDetailList.detail.discount}
                            </div>
                            <div className="col-3 bg-main-color text-light text-center border">
                                剩餘使用次數
                            </div>
                            <div className="col-9 text-center border">
                                {couponDetailList.detail.use_count}
                            </div>
                            <div className="col-3 bg-main-color text-light text-center border">
                                剩餘領取次數
                            </div>
                            <div className="col-9 text-center border">
                                {couponDetailList.detail.take_count}
                            </div>
                            <div className="col-3 bg-main-color text-light text-center border">
                                操作
                            </div>
                            <div className="col-9 d-flex justify-content-center border">
                                <button className="deletebtn1">
                                    <FiSettings className="icon1" />
                                    修改
                                </button>
                            </div>
                            <div className="col-12 bg-main-color text-light text-center border">
                                優惠券持有人
                            </div>
                        </div>
                        <div className="table1">
                            <table className="w-100">
                                <thead>
                                    <tr>
                                        <th className="bg-main-light-color text-light text-center border">
                                            姓名
                                        </th>
                                        <th className="bg-main-light-color text-light text-center border">
                                            帳號
                                        </th>
                                        <th className="bg-main-light-color text-light text-center border">
                                            已使用
                                        </th>
                                        <th className="bg-main-light-color text-light text-center border">
                                            操作
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className=''>
                                    {couponDetailList.content.map((data) => {
                                        return (
                                            <tr className="">
                                                <td className=" text-center border">
                                                    {data.name}
                                                </td>
                                                <td className=" text-center border">
                                                    <span className="span1">
                                                        {data.email}
                                                    </span>
                                                </td>
                                                <td className="text-center border">
                                                    {data.use === 1
                                                        ? '否'
                                                        : '是'}
                                                </td>
                                                <td className="d-flex justify-content-center border">
                                                    <button className="deletebtn2">
                                                        <FiTrash2 className="icon1" />
                                                        刪除
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default CouponDetail;
