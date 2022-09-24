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

function CouponDetail(props) {
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
            <div className="CouponDetail mb-4"></div>
        </>
    );
}

export default CouponDetail;
