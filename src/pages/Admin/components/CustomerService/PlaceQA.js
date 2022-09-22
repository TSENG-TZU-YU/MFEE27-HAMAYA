import { v4 as uuidv4 } from 'uuid';
import detail_img from '../../../../assets/svg/detailed.svg';
import { useState, useEffect } from 'react';
import {
    Link,
    useOutletContext,
    useLocation,
    useNavigate,
} from 'react-router-dom'; //抓取Outlet的props
import axios from 'axios';
import { API_URL } from '../../../../utils/config';
import _ from 'lodash';


function PlaceQA(props) {
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
                manager_reply_state: '',
                create_time: '',
                update_time: '',
            },
        ],
    ]);

    async function loadingPlaceQA() {
        try {
            let response = await axios.get(
                `${API_URL}/admin/customerservice/placeqa/loading`,
                {
                    withCredentials: true,
                }
            );
            console.log(response.data);

            //分切頁面資料
            const pageList = _.chunk(response.data, perPage);

            console.log(pageList);

            if (pageList.length > 0) {
                setPageTotal(pageList.length);
                setMyQuestionList(pageList);
            }
        } catch (err) {
            console.log(err.response.data);
            alert(err.response.data.message);
        }
    }
    useEffect(() => {
        loadingPlaceQA();
    }, []);
    return (
        <div className="mb-3">
            <div className="">
                <table className="table ">
                    <thead>
                        <tr className="bg-main-color accent-light-color ">
                            <th
                                className="text-nowrap fw-light text-center"
                                scope="col"
                            >
                                表單編號
                            </th>
                            <th
                                className="text-nowrap fw-light text-center"
                                scope="col"
                            >
                                姓名
                            </th>
                            <th
                                className="text-nowrap fw-light text-center"
                                scope="col"
                            >
                                租借場地
                            </th>
                            <th
                                className="text-nowrap fw-light text-center"
                                scope="col"
                            >
                                使用人數
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
                                        PL00{data.id}
                                        <br />
                                        <span className="time">
                                            {data.create_time}
                                        </span>
                                    </th>
                                    <td>{data.name}</td>
                                    <td>{data.item}</td>
                                    <td>{data.usercount}</td>
                                    <td>
                                        <div className="">
                                            <span className="ellipsis">
                                                {data.comment}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="">
                                        {data.manager_reply_state}
                                    </td>
                                    <td className="">{data.update_time}</td>
                                    <td className="text-nowrap ">
                                        <Link
                                            className=""
                                            to={`/admin/customerservice/placeqa/detail?plid=${data.id}`}
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

export default PlaceQA;
