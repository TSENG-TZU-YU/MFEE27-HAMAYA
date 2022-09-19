import { useState, useEffect } from 'react';
import {
    Link,
    useOutletContext,
    useNavigateuse,
    useLocation,
} from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../../../../utils/config';
import { useAuth } from '../../../../../utils/use_auth';
import { v4 as uuidv4 } from 'uuid';

function MyPlaceDetail(props) {
    const [setbread] = useOutletContext();
    const location = useLocation();
    const [myPlace, setMyMyplace] = useState({
        detail: {
            id: '',
            user_id: '',
            name: '',
            email: '',
            phone: '',
            item: '',
            usetime: '',
            comment: '',
            user_reply_state: '',
            create_time: '',
            update_time: '',
        },
        content: [{}],
    });

    //讀取問答詳細
    async function MyPlaceDetail(plid) {
        try {
            let response = await axios.get(
                `${API_URL}/member/myplace/detail?plid=${plid}`,
                {
                    withCredentials: true,
                }
            );
            console.log(response.data);

            setMyMyplace(response.data);
        } catch (err) {
            console.log(err.response.data);
            alert(err.response.data.message);
        }
    }

    useEffect(() => {
        let params = new URLSearchParams(location.search);
        let plid = params.get('plid');
        console.log(plid);
        MyPlaceDetail(plid);
        // console.log(myQuestion);
    }, [location]);

    // const myQuestionDetail = myQuestion.fliter((data) => data.id = 2);
    // console.log(myQuestionDetail);
    return (
        <div className="col-12 col-md-8 col-lg-9 mb-3 MyQuestionDetail">
            <div className="d-flex align-items-center  my-2">
                <h4 className="main-color ">租借場地</h4>
                <div className="mx-1">
                    表單編號:PL00{myPlace.detail.id}&nbsp;
                    {myPlace.detail.create_time}
                </div>
            </div>
            <div className="content ">
                <div className="d-flex border">
                    <div className="col-3 text-center text-light bg-main-color p-1">
                        租借場地
                    </div>
                    <div className=" col-9 text-center p-1">
                        {myPlace.detail.item}
                    </div>
                </div>
                <div className="d-flex border">
                    <div className="col-3 text-center text-light bg-main-color p-1">
                        預計租借時間
                    </div>
                    <div className="col-9 text-center  p-1">
                        {myPlace.detail.usedate}
                    </div>
                </div>
                <div className="d-flex border">
                    <div className="col-3 text-center text-light bg-main-color p-1">
                        回覆狀態
                    </div>
                    <div className="col-9 text-center  p-1">
                        {myPlace.detail.user_reply_state}
                    </div>
                </div>
                <div className="d-flex border">
                    <div className="col-3 text-center text-light bg-main-color p-1">
                        最後更新時間
                    </div>
                    <div className="col-9 text-center  p-1">
                        {myPlace.detail.update_time}
                    </div>
                </div>
                <div className=" text-center text-light bg-main-color p-1 border">
                    問答內容
                </div>
                <div className="border maincontent p-1">
                    <div className="">
                        {myPlace.content.map((data) => {
                            return (
                                <div>
                                    <p class="text-start m-0">
                                        <span class=" fs-5 fw-bolder">
                                            {data.name}
                                        </span>
                                        &nbsp;
                                        <span class="">
                                            {data.create_time}
                                        </span>{' '}
                                    </p>
                                    <p class="text-start fs-6 m-0">
                                        {data.place_content}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="border p-1">
                    <textarea
                        className="w-100 textarea"
                        rows="4"
                        type="text"
                        name="comment"
                        // value={askForm.comment}
                        // onChange={askFormChange}
                        placeholder="輸入內容"
                    />
                    <button className="text-light bg-main-color p-1 px-5 btn1">
                        進行回覆
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MyPlaceDetail;
