import React, { useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router';
import { API_URL } from '../../../../../utils/config';
import {
    successSmallToast,
    successToast,
} from '../../../../../components/Alert';

function MyOrderConfirm() {
    let location = useLocation();

    // 這裡要處理伺服器通知line pay已確認付款，為必要流程 跳轉用頁面
    useEffect(() => {
        // TODO: 除非為不需登入的交易，為提高安全性應檢查是否為會員登入狀態

        // 這裡要得到回到的交易id
        //?transactionId = 2022092200727626510
        const searchParams = new URLSearchParams(location.search);
        // console.log('searchParams', searchParams);
        const transactionId = searchParams.get('transactionId');
        const orderId = searchParams.get('orderId');
        if (transactionId) {
            // 向server發送交易成功記錄
            // TODO: 失敗處理
            axios
                .get(
                    `${API_URL}/member/myorder/linepay/confirm?transactionId=${transactionId}&orderId=${orderId}`
                )
                .then((response) => {
                    console.log('response confirm', response);

                    // 以下為關閉機制
                    // focus回原本視窗
                    window.opener.focus();
                    //window.opener.location.reload()

                    // 通知opener(原付款視窗已付款完成)
                    const event = new CustomEvent('paid', {
                        detail: transactionId,
                    });

                    window.opener.document.dispatchEvent(event);

                    // 關閉自己視窗
                    window.close();
                })
                .catch((error) => console.log(error));
        }
    }, []);
    return (
        <div className="col-12 col-md-8 col-lg-9">
            <h1>付款完成</h1>
        </div>
    );
}

export default MyOrderConfirm;
