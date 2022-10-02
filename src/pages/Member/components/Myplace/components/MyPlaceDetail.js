import { useState, useEffect } from 'react';
import {
    Link,
    useOutletContext,
    useNavigateuse,
    useLocation,
    useNavigate,
} from 'react-router-dom';
import axios from 'axios';
import { API_URL, IMAGE_URL } from '../../../../../utils/config';
import { useAuth } from '../../../../../utils/use_auth';
import { v4 as uuidv4 } from 'uuid';
import { data } from 'autoprefixer';
import { ReactComponent as Close } from '../../../../../assets/svg/close.svg';
import { errorToast } from '../../../../../components/Alert';
import customer_img from '../../../../../assets/svg/customer_service.svg';
import member_img from '../../../../../assets/svg/member_avatar.svg';
import { MdOutlineAddPhotoAlternate } from 'react-icons/md';

function MyPlaceDetail(props) {
    const [setbread] = useOutletContext();
    const { socketStatus, setSocketStatus } = useAuth();
    const [uploadPhotoURL, setUploadPhotoURL] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const [myPlace, setMyMyplace] = useState({
        detail: {
            id: '',
            user_id: '',
            name: '',
            email: '',
            phone: '',
            item: '',
            usedate: '',
            comment: '',
            user_reply_state: '',
            create_time: '',
            update_time: '',
            photo: '',
        },
        content: [{ place_content: '' }],
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
            console.log('456', response.data);
            setreplyForm({
                place_rt_id: response.data.detail.id,
                place_content: '',
                photo: '',
            });
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
        console.log(socketStatus);
        // console.log(myQuestion);
    }, [location]);

    // useEffect(() => {
    //     console.log('123');
    //     setreplyForm({ ...replyForm, customer_id: socketStatus.customer_id });
    // }, [socketStatus.customer_id]);

    //有新訊息更新資料庫
    useEffect(() => {
        if (socketStatus.newMessage) {
            setSocketStatus({
                ...socketStatus,
                newMessage: false,
            });
            let params = new URLSearchParams(location.search);
            let plid = params.get('plid');
            // console.log(plid);
            MyPlaceDetail(plid);
        }
    }, [socketStatus.newMessage]);

    //新增回覆
    const [replyForm, setreplyForm] = useState({
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
        // setSelectedPhoto(e.target.files[0]);
    };
    async function replyFormSubmit(e) {
        e.preventDefault();
        try {
            let formData = new FormData();
            formData.append('place_rt_id', replyForm.place_rt_id);
            formData.append('place_content', replyForm.place_content);
            formData.append('photo', replyForm.photo);
            let response = await axios.post(
                `${API_URL}/member/myplace/reply`,
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
        <div className="col-12 col-md-8 col-lg-9 mb-3 MyPlaceDetail">
            <div className="content ">
                <div className="d-flex align-items-center justify-content-between">
                    <div>
                        <h4 className="main-color ">租借場地</h4>
                        <div className="">
                            表單編號:PL00{myPlace.detail.id}&nbsp;
                            {myPlace.detail.create_time}
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
                        <span
                            className={
                                myPlace.detail.user_reply_state === '未回覆'
                                    ? 'reply_state'
                                    : 'reply_state2'
                            }
                        >
                            {myPlace.detail.user_reply_state}
                        </span>
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
                                <div key={uuidv4()} className="d-flex">
                                    <div className="imgdiv">
                                        <img
                                            src={
                                                myPlace.detail.name ===
                                                    data.name &&
                                                myPlace.detail.photo !== ''
                                                    ? IMAGE_URL +
                                                      myPlace.detail.photo
                                                    : myPlace.detail.name ===
                                                      data.name
                                                    ? member_img
                                                    : customer_img
                                            }
                                            className="img1"
                                            alt=""
                                        />
                                    </div>
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
                            className="w-100 inputcontent"
                            type="text"
                            name="place_content"
                            value={replyForm.place_content}
                            onChange={replyFormChange}
                            placeholder="輸入內容"
                            autoComplete="off"
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
                                className="text-light bg-main-color p-1 px-5 subbtn"
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

export default MyPlaceDetail;
