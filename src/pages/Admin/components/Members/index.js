import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { IMAGE_URL } from '../../../../utils/config';
import {
    Link,
    useOutletContext,
    useLocation,
    useNavigate,
} from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../../../utils/config';
import _ from 'lodash';
import './index.css';
import {
    FiChevronLeft,
    FiChevronRight,
    FiPlus,
    FiPlusSquare,
    FiSettings,
    FiSearch,
} from 'react-icons/fi';
function Members(props) {
    const [loadingComplete, setLoadingComplete] = useState(false); //是否已載入完成
    // 分頁用
    const [pageNow, setPageNow] = useState(1); // 目前頁號
    const [perPage, setPerPage] = useState(6); // 每頁多少筆資料
    const [pageTotal, setPageTotal] = useState(0); //總共幾頁

    const [members, setMembers] = useState([
        {
            id: '',
            name: '',
            email: '',
            phone: '',
            city: '',
            dist: '',
            address: '',
            birthday: '',
            photo: '',
            sub: '',
            enable: '',
        },
    ]);

    useEffect(() => {
        async function getMember() {
            try {
                console.log('載入會員清單');
                let response = await axios.get(
                    `${API_URL}/admin/members/loading`,
                    {
                        withCredentials: true,
                    }
                );
                //分切頁面資料
                const pageList = _.chunk(response.data, perPage);

                console.log(pageList);

                if (pageList.length > 0) {
                    setPageTotal(pageList.length);
                    setMembers(pageList);
                    setLoadingComplete(true);
                }
            } catch (err) {
                console.log(err.response.data.message);
            }
        }
        getMember();
    }, []);

    //頁碼
    const paginationBar = (
        <div className="member_pagination d-flex justify-content-center align-items-center">
            <Link
                className="page_number"
                to={
                    pageNow > 1
                        ? `/admin/members?page=${Number(pageNow) - 1}`
                        : `/admin/members?page=${Number(pageNow)}`
                }
            >
                <FiChevronLeft />
            </Link>
            {Array(pageTotal)
                .fill(1)
                .map((v, i) => {
                    return (
                        <Link
                            key={i}
                            to={`/admin/members?page=${i + 1}`}
                            className={
                                i + 1 === Number(pageNow)
                                    ? 'page_number active'
                                    : 'page_number'
                            }
                        >
                            {i + 1}
                        </Link>
                    );
                })}
            <Link
                className="page_number"
                to={
                    pageNow < pageTotal
                        ? `/admin/members?page=${Number(pageNow) + 1}`
                        : `/admin/members?page=${Number(pageNow)}`
                }
            >
                <FiChevronRight />
            </Link>
        </div>
    );

    return (
        <>
            <div className="mt-1">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to="/admin">首頁</Link>
                        </li>
                        <li className="breadcrumb-item " aria-current="page">
                            會員管理
                        </li>
                    </ol>
                </nav>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <h3>會員管理</h3>
                <div>
                    <input placeholder="搜尋" />
                    <button>
                        <FiSearch />
                    </button>
                </div>
            </div>

            <hr />
            <div className="position-relative">
                {loadingComplete && (
                    <table className="table ">
                        <thead>
                            <tr className="bg-main-color accent-light-color ">
                                <th
                                    className="text-nowrap fw-light text-center"
                                    scope="col"
                                >
                                    ID
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
                                    會員大頭貼
                                </th>
                                <th
                                    className="text-nowrap fw-light text-center"
                                    scope="col"
                                >
                                    電子郵件
                                </th>
                                <th
                                    className="text-nowrap fw-light Qtitle text-center"
                                    scope="col"
                                >
                                    連絡電話
                                </th>
                                <th
                                    className="text-nowrap fw-light text-center"
                                    scope="col"
                                >
                                    生日
                                </th>
                                <th
                                    className="text-nowrap fw-light text-center"
                                    scope="col"
                                >
                                    地址
                                </th>
                                <th
                                    className="text-nowrap fw-light text-center"
                                    scope="col"
                                >
                                    訂閱
                                </th>
                                <th
                                    className="text-nowrap fw-light text-center "
                                    scope="col"
                                >
                                    啟用狀態
                                </th>
                                <th
                                    className="text-nowrap fw-light text-center "
                                    scope="col"
                                >
                                    功能
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {members[pageNow - 1].map((data, index) => {
                                return (
                                    <tr key={uuidv4()} className="cssTable">
                                        <th scope="row" className="text-center">
                                            {data.id}
                                        </th>
                                        <td className="text-center text-nowrap">
                                            {data.name}
                                        </td>
                                        <td>
                                            <img
                                                className="memberphoto"
                                                alt="memberphoto"
                                                src={IMAGE_URL + data.photo}
                                            ></img>
                                        </td>
                                        <td>{data.email}</td>
                                        <td>{data.phone}</td>
                                        <td className="text-nowrap">
                                            {data.birthday}
                                        </td>
                                        <td>
                                            <div className="text-start">
                                                {data.city}
                                                {data.dist}
                                                {data.address}
                                            </div>
                                        </td>
                                        <td className="">
                                            {data.sub === 1 ? '是' : '否'}
                                        </td>
                                        <td>
                                            <div className="form-check form-switch d-flex align-items-center justify-content-center">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    role="switch"
                                                    id="flexSwitchCheckChecked"
                                                    checked={
                                                        data.enable == 1
                                                            ? true
                                                            : false
                                                    }
                                                />
                                                <label
                                                    className="form-check-label"
                                                    for="flexSwitchCheckChecked"
                                                ></label>
                                            </div>
                                        </td>
                                        <td>
                                            <button className="deletebtn3">
                                                <FiSettings className="icon1" />
                                                修改
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                )}
                <div> {pageTotal > 1 && paginationBar}</div>
            </div>
        </>
    );
}

export default Members;
