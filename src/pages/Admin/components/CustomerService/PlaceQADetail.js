import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Link,
    useOutletContext,
    useNavigateuse,
    useLocation,
} from 'react-router-dom';
import axios from 'axios';
import { API_URL, IMAGE_URL } from '../../../../utils/config';
import { useAuth } from '../../../../utils/use_auth';
import { v4 as uuidv4 } from 'uuid';
import { ReactComponent as Close } from '../../../../assets/svg/close.svg';
import { io } from 'socket.io-client';
import { errorToast } from '../../../../components/Alert';
import customer_img from '../../../../assets/svg/customer_service.svg';
import member_img from '../../../../assets/svg/member_avatar.svg';
import { MdOutlineAddPhotoAlternate } from 'react-icons/md';

function PlaceQADetail(props) {
    const [setbread] = useOutletContext();
    const [uploadPhotoURL, setUploadPhotoURL] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const [socketConn, setSocketConn] = useState(null);
    const [myQuestion, setMyQuestion] = useState({
        detail: {
            id: '',
            user_id: '',
            name: '',
            email: '',
            phone: '',
            usedate: '',
            item: '',
            comment: '',
            usercount: '',
            manager_reply_state: '',
            user_reply_state: '',
            update_time: '',
            create_time: '',
        },
        myPlace: [
            {
                name: '',
                create_time: '',
                place_content: '',
            },
        ],
    });

    //建立socket連線
    useEffect(() => {
        async function customerConn() {
            if (!socketConn) {
                console.log('管理員進入Detail頁面建立連線');
                let socket = io('http://localhost:3001');
                setSocketConn(socket);
                let params = new URLSearchParams(location.search);
                let plid = params.get('plid');
                let response = await axios.get(
                    `${API_URL}/admin/customerservice/placeqa/detail?plid=${plid}`,
                    {
                        withCredentials: true,
                    }
                );
                socket.on(`userid${response.data.detail.user_id}`, (res) => {
                    console.log('新訊息', res);
                    //判斷是否需要更新資料庫
                    if (res.newMessage) {
                        console.log('更新資料庫');
                        myPlaceDetail();
                    }
                });
            }
        }
        customerConn();
    }, []);

    //讀取場地詳細
    async function myPlaceDetail() {
        let params = new URLSearchParams(location.search);
        let plid = params.get('plid');
        try {
            let response = await axios.get(
                `${API_URL}/admin/customerservice/placeqa/detail?plid=${plid}`,
                {
                    withCredentials: true,
                }
            );
            console.log(response.data);
            setreplyForm({
                user_id: response.data.detail.user_id,
                place_rt_id: response.data.detail.id,
                place_content: '',
                photo: '',
            });
            setMyQuestion(response.data);
        } catch (err) {
            console.log(err.response.data);
            errorToast(err.response.data.message, '關閉');
            // alert(err.response.data.message);
        }
    }
    useEffect(() => {
        myPlaceDetail();
    }, []);

    //新增回覆
    const [replyForm, setreplyForm] = useState({
        user_id: '',
        place_rt_id: '',
        place_content: '',
        photo: '',
    });
    const replyFormChange = (e) => {
        setreplyForm({ ...replyForm, place_content: e.target.value });
    };
    const photoChange = (e) => {
        setUploadPhotoURL(URL.createObjectURL(e.target.files[0]));
        setreplyForm({ ...replyForm, photo: e.target.files[0] });
    };
    async function replyFormSubmit(e) {
        e.preventDefault();
        try {
            let formData = new FormData();
            formData.append('user_id', replyForm.user_id);
            formData.append('place_rt_id', replyForm.place_rt_id);
            formData.append('place_content', replyForm.place_content);
            formData.append('photo', replyForm.photo);
            let response = await axios.post(
                `${API_URL}/admin/customerservice/placeqa/reply`,
                formData,
                {
                    withCredentials: true,
                }
            );
            //清空replyForm input
            document.querySelector('.photo').value = '';
            setreplyForm({ ...replyForm, photo: '' });
            setUploadPhotoURL('');
            // setreplyForm({ ...replyForm, place_content: '' });
            // alert(response.data.message);
        } catch (err) {
            console.log(err.response.data);
            errorToast(err.response.data.message, '關閉');
            // alert(err.response.data.message);
        }
    }

    return (
        <div className="mb-3 NLQADetail">
            <div className="d-flex align-items-center justify-content-between content  my-2">
                <div>
                    <h4 className="main-color ">問答詳細</h4>
                    <div className="">
                        問答編號:PL00{myQuestion.detail.id}&nbsp;
                        {myQuestion.detail.create_time}
                    </div>
                </div>
                <div>
                    <button
                        className="closebtn"
                        onClick={() => {
                            navigate(-1);
                        }}
                    >
                        <Close />
                    </button>
                </div>
            </div>
            <div className="content ">
                <div className="d-flex border">
                    <div className="col-3 text-center text-light bg-main-color p-1">
                        姓名
                    </div>
                    <div className=" col-9 text-center p-1">
                        {myQuestion.detail.name}
                    </div>
                </div>
                <div className="d-flex border">
                    <div className="col-3 text-center text-light bg-main-color p-1">
                        連絡電話
                    </div>
                    <div className=" col-9 text-center p-1">
                        {myQuestion.detail.phone}
                    </div>
                </div>
                <div className="d-flex border">
                    <div className="col-3 text-center text-light bg-main-color p-1">
                        電子郵件
                    </div>
                    <div className=" col-9 text-center p-1">
                        {myQuestion.detail.email}
                    </div>
                </div>
                <div className="d-flex border">
                    <div className="col-3 text-center text-light bg-main-color p-1">
                        租借場地
                    </div>
                    <div className=" col-9 text-center p-1">
                        {myQuestion.detail.item}
                    </div>
                </div>
                <div className="d-flex border">
                    <div className="col-3 text-center text-light bg-main-color p-1">
                        使用人數
                    </div>
                    <div className=" col-9 text-center p-1">
                        {myQuestion.detail.usercount}
                    </div>
                </div>
                <div className="d-flex border">
                    <div className="col-3 text-center text-light bg-main-color p-1">
                        回覆狀態
                    </div>
                    <div className="col-9 text-center  p-1">
                        <span
                            className={
                                myQuestion.detail.manager_reply_state ===
                                '未回覆'
                                    ? 'reply_state'
                                    : myQuestion.detail.manager_reply_state ===
                                      '已回覆'
                                    ? 'reply_state2'
                                    : 'reply_state3'
                            }
                        >
                            {myQuestion.detail.manager_reply_state}
                        </span>
                    </div>
                </div>
                <div className="d-flex border">
                    <div className="col-3 text-center text-light bg-main-color p-1">
                        最後更新時間
                    </div>
                    <div className="col-9 text-center  p-1">
                        {myQuestion.detail.update_time}
                    </div>
                </div>
                <div className=" text-center text-light bg-main-color p-1 border">
                    問答內容
                </div>
                <div className="border maincontent p-1">
                    <div className="">
                        {myQuestion.myPlace.map((data) => {
                            return (
                                <div key={uuidv4()} className="d-flex">
                                    <div className="imgdiv">
                                        <img
                                            src={
                                                myQuestion.detail.name ===
                                                    data.name &&
                                                myQuestion.detail.photo !==
                                                    '' &&
                                                myQuestion.detail.photo !== null
                                                    ? IMAGE_URL +
                                                      myQuestion.detail.photo
                                                    : myQuestion.detail.name ===
                                                      data.name
                                                    ? member_img
                                                    : customer_img
                                            }
                                            className="img1"
                                            alt=""
                                        />
                                    </div>
                                    <div key={uuidv4()}>
                                        <p className="text-start m-0">
                                            <span className=" fs-5 fw-bolder">
                                                {data.name}
                                            </span>
                                            &nbsp;
                                            <span className="">
                                                {data.create_time}
                                            </span>
                                        </p>
                                        <p className="text-start fs-6 m-0">
                                            {data.place_content.includes(
                                                'uploadsQA'
                                            ) ? (
                                                <img
                                                    width={200}
                                                    src={
                                                        IMAGE_URL +
                                                        data.place_content
                                                    }
                                                    alt=""
                                                />
                                            ) : (
                                                data.place_content
                                            )}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="border p-1">
                    <form>
                        <input
                            className={
                                myQuestion.detail.user_id === 0
                                    ? 'w-100 inputcontent placeholderNone'
                                    : 'w-100 inputcontent'
                            }
                            type="text"
                            name="place_content"
                            value={replyForm.place_content}
                            onChange={replyFormChange}
                            placeholder={
                                myQuestion.detail.user_id === 0
                                    ? '非會員請直接聯絡'
                                    : '請輸入內容'
                            }
                            autoComplete="off"
                            disabled={myQuestion.detail.user_id === 0}
                        />
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <label>
                                    <input
                                        className="photo d-none"
                                        type="file"
                                        name="photo"
                                        accept="image/png, image/jpeg, image/jpg"
                                        onChange={photoChange}
                                    />
                                    <MdOutlineAddPhotoAlternate className="addimgbtn" />
                                </label>
                                {uploadPhotoURL !== '' ? (
                                    <img
                                        src={uploadPhotoURL}
                                        alt=""
                                        className="addimgmin mx-2"
                                    />
                                ) : (
                                    ''
                                )}
                            </div>
                            <button
                                className="text-light bg-main-color p-1 px-5 btn1"
                                onClick={replyFormSubmit}
                            >
                                送出
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default PlaceQADetail;
