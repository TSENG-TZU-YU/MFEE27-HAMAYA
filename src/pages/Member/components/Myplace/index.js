import { useState, useEffect } from 'react';
import axios from 'axios';
import { useOutletContext } from 'react-router-dom';
import { API_URL } from '../../../../utils/config';
import detail_img from '../../../../assets/svg/detailed.svg';

function MyPlace() {
    const [setbread] = useOutletContext(); //此CODE為抓取麵包削setbread
    useEffect(() => {
        setbread('場地租借'); //載入頁面時 設定麵包削
    }, []);

    const [data, setdata] = useState([]);

    useEffect(() => {
        let getPlace = async () => {
            let response = await axios.get(
                `${API_URL}/member/myplace/loading`,
                {
                    withCredentials: true,
                }
            );
            setdata(response.data);
            console.log(response.data);
        };
        getPlace();
    }, []);

    return (
        <div className="col-12 col-md-8 col-lg-9">
            <div className="d-none d-lg-block">
                <div className="d-flex my-2">
                    <h4 className="main-color ">場地租借</h4>
                    {/* <Link to="/member/myquestion/detail">
                        <div className="bg-main-gary-light-color d-flex align-items-center addbtn">
                            <img src={add_img} />
                            我要提問
                        </div>
                    </Link> */}
                </div>
                <table className="table ">
                    <thead>
                        <tr className="bg-main-color accent-light-color ">
                            <th
                                className="text-nowrap fw-light text-center"
                                scope="col"
                            >
                                您租借的場地
                            </th>
                            <th
                                className="text-nowrap fw-light text-center"
                                scope="col"
                            >
                                租借日期
                            </th>
                            <th
                                className="text-nowrap fw-light Qtitle text-center"
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
                                className="text-nowrap fw-light text-center"
                                scope="col"
                            >
                                功能
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((v, i) => {
                            return (
                                <tr className="cssTable">
                                    <td>{v.item}</td>
                                    <td>{v.usedate}</td>
                                    <td>{v.usercount}</td>
                                    <td>
                                        <div className="">
                                            <span className="ellipsis">
                                                {v.comment}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="">已回覆</td>
                                    <td className="text-nowrap ">
                                        <a>
                                            <img
                                                src={detail_img}
                                                alt="detail"
                                            />
                                            查看詳細
                                        </a>
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

export default MyPlace;
