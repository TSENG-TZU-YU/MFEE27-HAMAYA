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
import { MdOutlineAddPhotoAlternate } from 'react-icons/md';
import member_img from '../../../../assets/svg/member_avatar.svg';

function OrderQADetail(props) {
    const [loadingComplete, setLoadingComplete] = useState(false);
    const [setbread] = useOutletContext();
    const [uploadPhotoURL, setUploadPhotoURL] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const [socketConn, setSocketConn] = useState(null);
    const [orderQA, setOrderQA] = useState({
        detail: {
            id: '',
            order_id: '',
            user_id: '',
            name: '',
            email: '',
            phone: '',
            category: '',
            title: '',
            q_content: '',
            manager_reply_state: '',
            create_time: '',
            update_time: '',
        },
        content: [
            {
                name: '',
                create_time: '',
                q_content: '',
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
                let orid = params.get('orid');
                let response = await axios.get(
                    `${API_URL}/admin/customerservice/orderqa/detail?orid=${orid}`,
                    {
                        withCredentials: true,
                    }
                );
                socket.on(`userid${response.data.detail.user_id}`, (res) => {
                    console.log('新訊息', res);
                    //判斷是否需要更新資料庫
                    if (res.newMessage) {
                        console.log('更新資料庫');
                        orderQADetail();
                    }
                });
            }
        }
        customerConn();
    }, []);

    //讀取問答詳細
    async function orderQADetail() {
        let params = new URLSearchParams(location.search);
        let orid = params.get('orid');
        try {
            let response = await axios.get(
                `${API_URL}/admin/customerservice/orderqa/detail?orid=${orid}`,
                {
                    withCredentials: true,
                }
            );
            console.log(response.data);
            setreplyForm({
                user_id: response.data.detail.user_id,
                order_id: response.data.detail.order_id,
                q_content: '',
                photo: '',
            });
            setOrderQA(response.data);
        } catch (err) {
            console.log(err.response.data);
            alert(err.response.data.message);
        }
    }
    useEffect(() => {
        orderQADetail();
    }, []);

    //新增回覆
    const [replyForm, setreplyForm] = useState({
        user_id: '',
        order_id: '',
        q_content: '',
        photo: '',
    });
    const replyFormChange = (e) => {
        e.preventDefault();
        setreplyForm({ ...replyForm, q_content: e.target.value });
    };
    const photoChange = (e) => {
        e.preventDefault();
        setUploadPhotoURL(URL.createObjectURL(e.target.files[0]));
        setreplyForm({ ...replyForm, photo: e.target.files[0] });
        // setSelectedPhoto(e.target.files[0]);
    };
    async function replyFormSubmit(e) {
        e.preventDefault();
        try {
            let formData = new FormData();
            formData.append('user_id', replyForm.user_id);
            formData.append('order_id', replyForm.order_id);
            formData.append('q_content', replyForm.q_content);
            formData.append('photo', replyForm.photo);
            let response = await axios.post(
                `${API_URL}/admin/customerservice/orderqa/reply`,
                formData,
                {
                    withCredentials: true,
                }
            );
            document.querySelector('.photo').value = '';
            setreplyForm({ ...replyForm, photo: '' });
            setUploadPhotoURL('');
        } catch (err) {
            console.log(err.response.data);
            errorToast(err.response.data.message, '關閉');
            // alert(err.response.data.message);
        }
    }

    return (
        <div className="mb-3  NLQADetail">
            <div className="d-flex align-items-center justify-content-between my-2">
                <div>
                    <h4 className="main-color ">問答詳細</h4>
                    <div className="">
                        問答編號:OR00{orderQA.detail.id}&nbsp;
                        {orderQA.detail.create_time}
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
            <div>
                <div className="d-flex border">
                    <div className="col-3 text-center text-light bg-main-color p-1">
                        姓名
                    </div>
                    <div className=" col-9 text-center p-1">
                        {orderQA.detail.name}
                    </div>
                </div>
                <div className="d-flex border">
                    <div className="col-3 text-center text-light bg-main-color p-1">
                        連絡電話
                    </div>
                    <div className=" col-9 text-center p-1">
                        {orderQA.detail.phone}
                    </div>
                </div>
                <div className="d-flex border">
                    <div className="col-3 text-center text-light bg-main-color p-1">
                        電子郵件
                    </div>
                    <div className=" col-9 text-center p-1">
                        {orderQA.detail.email}
                    </div>
                </div>
                <div className="d-flex border">
                    <div className="col-3 text-center text-light bg-main-color p-1">
                        問題類型
                    </div>
                    <div className="col-9 text-center  p-1">
                        {orderQA.detail.q_category}
                    </div>
                </div>
                <div className="d-flex border">
                    <div className="col-3 text-center text-light bg-main-color p-1">
                        問題主旨
                    </div>
                    <div className=" col-9 text-center p-1">
                        {orderQA.detail.title}
                    </div>
                </div>
                <div className="d-flex border">
                    <div className="col-3 text-center text-light bg-main-color p-1">
                        回覆狀態
                    </div>
                    <div className="col-9 text-center  p-1">
                        <span
                            className={
                                orderQA.detail.manager_reply_state === '未回覆'
                                    ? 'reply_state'
                                    : orderQA.detail.manager_reply_state ===
                                      '已回覆'
                                    ? 'reply_state2'
                                    : 'reply_state3'
                            }
                        >
                            {orderQA.detail.manager_reply_state}
                        </span>
                    </div>
                </div>
                <div className="d-flex border">
                    <div className="col-3 text-center text-light bg-main-color p-1">
                        最後更新時間
                    </div>
                    <div className="col-9 text-center  p-1">
                        {orderQA.detail.update_time}
                    </div>
                </div>
                <div className=" text-center text-light bg-main-color p-1 border">
                    問答內容
                </div>
                <div className="border maincontent p-1">
                    <div className="">
                        {orderQA.content.map((data) => {
                            return (
                                <div key={uuidv4()} className="d-flex">
                                    <div className="imgdiv">
                                        <img
                                            src={
                                                orderQA.detail.name ===
                                                    data.name &&
                                                orderQA.detail.photo !== ''
                                                    ? IMAGE_URL +
                                                      orderQA.detail.photo
                                                    : orderQA.detail.name ===
                                                      data.name
                                                    ? member_img
                                                    : customer_img
                                            }
                                            className="img1"
                                            alt=""
                                        />
                                    </div>
                                    <div>
                                        <p className="text-start m-0">
                                            <span className=" fs-5 fw-bolder">
                                                {data.name}
                                            </span>
                                            &nbsp;
                                            <span className="">
                                                {data.create_time}
                                            </span>{' '}
                                        </p>
                                        <p className="text-start fs-6 m-0">
                                            {data.q_content.includes(
                                                'uploadsQA'
                                            ) ? (
                                                <img
                                                    width={200}
                                                    src={
                                                        IMAGE_URL +
                                                        data.q_content
                                                    }
                                                    alt=""
                                                />
                                            ) : (
                                                data.q_content
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
                            className="w-100 inputcontent"
                            type="text"
                            name="q_content"
                            value={replyForm.q_content}
                            onChange={replyFormChange}
                            placeholder="請輸入內容"
                            autoComplete="off"
                            disabled={orderQA.detail.user_id === 0}
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
export default OrderQADetail;
