import { v4 as uuidv4 } from 'uuid';
import detail_img from '../../../../assets/svg/detailed.svg';
import { useState, useEffect } from 'react';
import {
    Link,
    useOutletContext,
    useLocation,
    useNavigate,
} from 'react-router-dom'; //抓取Outlet的props



function OrderQA(props) {
    
    // 分頁用
    const [pageNow, setPageNow] = useState(1); // 目前頁號
    const [perPage, setPerPage] = useState(6); // 每頁多少筆資料
    const [pageTotal, setPageTotal] = useState(0); //總共幾頁

    const [myQuestionList, setMyQuestionList] = useState([
        [
            {
                id: '',
                user_id: '',
                name: '',
                email: '',
                phone: '',
                user_q_category: '',
                title: '',
                comment: '',
                user_reply_state: '',
                create_time: '',
                update_time: '',
            },
        ],
    ]);

    return (
        <div>
            <div className="">
                <table className="table ">
                    <thead>
                        <tr className="bg-main-color accent-light-color ">
                            <th
                                className="text-nowrap fw-light text-center"
                                scope="col"
                            >
                                問答編號
                            </th>
                            <th
                                className="text-nowrap fw-light text-center"
                                scope="col"
                            >
                                問題類型
                            </th>
                            <th
                                className="text-nowrap fw-light Qtitle text-center"
                                scope="col"
                            >
                                問題主旨
                            </th>
                            <th
                                className="text-nowrap fw-light text-center"
                                scope="col"
                            >
                                詢問內容
                            </th>
                            <th
                                className="text-nowrap fw-light text-center"
                                scope="col"
                            >
                                回覆狀態
                            </th>
                            <th
                                className="text-nowrap fw-light text-center "
                                scope="col"
                            >
                                最後更新時間
                            </th>
                            <th
                                className="text-nowrap fw-light text-center"
                                scope="col"
                            >
                                功能
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {myQuestionList[pageNow - 1].map((data, index) => {
                            return (
                                <tr key={uuidv4()} className="cssTable">
                                    <th scope="row">
                                        OR00{data.id}
                                        <br />
                                        <span className="time">
                                            {data.create_time}
                                        </span>
                                    </th>
                                    <td>{data.user_q_category}</td>
                                    <td>{data.title}</td>
                                    <td>
                                        <div className="">
                                            <span className="ellipsis">
                                                {data.comment}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="">
                                        {data.user_reply_state}
                                    </td>
                                    <td className="">{data.update_time}</td>
                                    <td className="text-nowrap ">
                                        <Link
                                            className=""
                                            to={`/admin/customerservice/orderqa/detail?orid=${data.id}`}
                                        >
                                            <img src={detail_img} alt="" />
                                            查看詳細
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default OrderQA;
