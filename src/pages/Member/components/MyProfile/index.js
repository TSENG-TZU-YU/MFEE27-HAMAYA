import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import './index.css';
import visib from '../../../../components/LogInSignUp/visibility.svg';
import unVisib from '../../../../components/LogInSignUp/visibility_off.svg';
import axios from 'axios';
import { API_URL } from '../../../../utils/config';
import { useAuth } from '../../../../utils/use_auth';
import { cityData, distData } from './location';
import {
    successToast,
    errorToast,
    warningToast,
} from '../../../../components/Alert';

function MyProfile(props) {
    const [visibility, setVisibility] = useState(false);
    const [visibility2, setVisibility2] = useState(false);
    const [visibility3, setVisibility3] = useState(false);

    const {
        member,
        setMember,
        isLogin,
        setIsLogin,
        uploadPhotoURL,
        setUploadPhotoURL,
    } = useAuth();
    // const [originalmember, setOriginalMember] = useState(null);
    const [password, setPassword] = useState({
        id: '',
        password: '',
        newpassword: '',
        renewpassword: '',
    });

    const [setbread] = useOutletContext();

    const [saveMember, setSaveMember] = useState({
        id: '',
        fullName: '',
        email: '',
        phone: '',
        city: '',
        dist: '',
        address: '',
        birthday: '',
        photo: '',
        sub: '',
        loginDt: '',
    });
    useEffect(() => {
        setbread('會員資料');
        setSaveMember({ ...member });
        setPassword({ ...password, id: member.id });
    }, [member]);

    const [editProfile, setEditProfile] = useState(true);
    const [editPassword, setEditPassword] = useState(true);

    const ProfileChange = (e) => {
        setSaveMember({ ...saveMember, [e.target.name]: e.target.value });
    };
    const photoChange = (e) => {
        // type=file 的 input
        // 選好的檔案是放在 e.target.files[0]
        setUploadPhotoURL(URL.createObjectURL(e.target.files[0]));
        setSaveMember({ ...saveMember, photo: e.target.files[0] });
    };
    const passwordChange = (e) => {
        setPassword({ ...password, [e.target.name]: e.target.value });
    };

    async function profileSubmit(e) {
        e.preventDefault();
        try {
            let formData = new FormData();
            formData.append('id', saveMember.id);
            formData.append('fullName', saveMember.fullName);
            formData.append('phone', saveMember.phone);
            formData.append('city', saveMember.city);
            formData.append('dist', saveMember.dist);
            formData.append('address', saveMember.address);
            formData.append('birthday', saveMember.birthday);
            formData.append('photo', saveMember.photo);
            formData.append('sub', saveMember.sub);
            let response = await axios.patch(
                `${API_URL}/auth/profile`,
                formData,
                {
                    withCredentials: true,
                }
            );
            console.log(response.data[0]);
            setEditProfile(true);
            successToast(response.data[1], '關閉');
            // alert(response.data[1]);
            setMember(response.data[0]);
        } catch (err) {
            console.log(err.response.data);
            errorToast(err.response.data.message, '關閉');
            // alert(err.response.data.message);
        }
    }
    async function passwordSubmit(e) {
        e.preventDefault();
        try {
            let response = await axios.patch(
                `${API_URL}/auth/password`,
                password,
                {
                    withCredentials: true,
                }
            );
            console.log(response.data);
            setEditPassword(true);
            successToast(response.data.message, '關閉');
            setPassword({
                ...password,
                password: '',
                newpassword: '',
                renewpassword: '',
            });
            // alert(response.data.message);
        } catch (err) {
            console.log(err.response.data);
            errorToast(err.response.data.message, '關閉');
            // alert(err.response.data.message);
        }
    }
    return (
        <div className="col-12 col-md-8 col-lg-9 MyProfile">
            <form>
                <table className="myprofile_table ">
                    <thead>
                        <tr>
                            <th colSpan="2">
                                <h4 className="main-color">會員資料</h4>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-primary">會員帳號</td>
                            <td>
                                <span>{saveMember.email}</span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-primary">大頭貼照</td>
                            <td>
                                <div></div>
                                <input
                                    type="file"
                                    name="photo"
                                    onChange={photoChange}
                                    disabled={editProfile}
                                />
                                {/* <img id="frame" src={addimg} width="100px" height="100px"/> */}
                            </td>
                        </tr>
                        <tr>
                            <td className="text-primary">會員姓名</td>
                            <td>
                                <input
                                    type="text"
                                    value={saveMember.fullName}
                                    name="fullName"
                                    onChange={ProfileChange}
                                    disabled={editProfile}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="text-primary">出生日期</td>
                            <td>
                                <input
                                    type="date"
                                    value={saveMember.birthday}
                                    name="birthday"
                                    onChange={ProfileChange}
                                    disabled={editProfile}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="text-primary">手機號碼</td>
                            <td>
                                <input
                                    type="text"
                                    value={saveMember.phone}
                                    name="phone"
                                    onChange={ProfileChange}
                                    disabled={editProfile}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="text-primary">居住地址</td>
                            <td>
                                城市
                                <select
                                    className="mx-1"
                                    name="city"
                                    value={saveMember.city}
                                    onChange={ProfileChange}
                                    disabled={editProfile}
                                >
                                    <option value="">選擇城市</option>
                                    {cityData.map((data, index) => {
                                        return (
                                            <option
                                                key={index}
                                                value={data.city}
                                            >
                                                {data.city}
                                            </option>
                                        );
                                    })}
                                </select>
                                鄉鎮市區
                                <select
                                    className="mx-1"
                                    value={saveMember.dist}
                                    name="dist"
                                    onChange={ProfileChange}
                                    disabled={editProfile}
                                >
                                    <option value="">選擇地區</option>
                                    {distData.map((data, index) => {
                                        if (data.city === saveMember.city)
                                            return (
                                                <option
                                                    key={index}
                                                    value={data.dist}
                                                >
                                                    {data.dist}
                                                </option>
                                            );
                                    })}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-primary"></td>
                            <td>
                                <input
                                    type="text"
                                    value={saveMember.address}
                                    name="address"
                                    onChange={ProfileChange}
                                    disabled={editProfile}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <h5 className="gary-dark-color mt-4">優惠訊息通知</h5>
                    <div className="d-flex my-3">
                        <input
                            className="form-check-input d-block"
                            type="radio"
                            id="sub"
                            name="sub"
                            checked={saveMember.sub == 1}
                            value="1"
                            onChange={ProfileChange}
                            disabled={editProfile}
                        />
                        <label htmlFor="sub">訂閱</label>
                        &nbsp;
                        <input
                            className="form-check-input d-block"
                            type="radio"
                            id="unsub"
                            name="sub"
                            //TODO:資料庫修改 數字 字串 待解決
                            checked={saveMember.sub == 0}
                            value="0"
                            onChange={ProfileChange}
                            disabled={editProfile}
                        />
                        <label htmlFor="unsub">取消訂閱 </label>
                    </div>
                </div>

                {editProfile ? (
                    <button
                        className="myprofile_btn mb-4 accent-light-color bg-main-color border-0 "
                        onClick={() => {
                            setEditProfile(false);
                        }}
                    >
                        修改會員資料
                    </button>
                ) : (
                    <>
                        <button
                            className="myprofile_btn2 mb-4 accent-light-color bg-main-color border-0"
                            onClick={profileSubmit}
                        >
                            確定
                        </button>
                        <button
                            className="myprofile_btn2 mb-4 accent-light-color bg-accent-color border-0 mx-1"
                            onClick={() => {
                                setSaveMember({ ...member });
                                setUploadPhotoURL('');
                                // setMember({ ...originalmember });
                                setEditProfile(true);
                                // setCity(member.city);
                                // setDist(member.dist);
                            }}
                        >
                            取消
                        </button>
                    </>
                )}
            </form>
            <h5 className="gary-dark-color mt-4">修改密碼</h5>
            <form>
                <table className="myprofile_table ">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td className="text-primary">舊密碼</td>
                            <td>
                                <span className="position-relative">
                                    <input
                                        type={visibility ? 'text' : 'password'}
                                        value={password.password}
                                        name="password"
                                        onChange={passwordChange}
                                        disabled={editPassword}
                                        placeholder="請輸入舊密碼"
                                    />
                                    <button
                                        className="eyes border-0"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setVisibility(!visibility);
                                        }}
                                        disabled={editPassword}
                                    >
                                        <img
                                            src={visibility ? visib : unVisib}
                                            alt=""
                                        />
                                    </button>
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-primary">新密碼</td>
                            <td>
                                <span className="position-relative">
                                    <input
                                        type={visibility2 ? 'text' : 'password'}
                                        value={password.newpassword}
                                        name="newpassword"
                                        onChange={passwordChange}
                                        disabled={editPassword}
                                        placeholder="請輸入新密碼"
                                    />
                                    <button
                                        className="eyes border-0"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setVisibility2(!visibility2);
                                        }}
                                        disabled={editPassword}
                                    >
                                        <img
                                            src={visibility2 ? visib : unVisib}
                                            alt=""
                                        />
                                    </button>
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="text-primary">確認新密碼</td>
                            <td>
                                <span className="position-relative">
                                    <input
                                        type={visibility3 ? 'text' : 'password'}
                                        value={password.renewpassword}
                                        name="renewpassword"
                                        onChange={passwordChange}
                                        disabled={editPassword}
                                        placeholder="再次輸入新密碼"
                                    />
                                    <button
                                        className="eyes border-0"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setVisibility3(!visibility3);
                                        }}
                                        disabled={editPassword}
                                    >
                                        <img
                                            src={visibility3 ? visib : unVisib}
                                            alt=""
                                        />
                                    </button>
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
            {editPassword ? (
                <button
                    className="myprofile_btn mb-4 accent-light-color bg-main-color border-0 "
                    onClick={() => {
                        setEditPassword(false);
                    }}
                >
                    修改密碼
                </button>
            ) : (
                <>
                    <button
                        className="myprofile_btn2 mb-4 accent-light-color bg-main-color border-0"
                        onClick={passwordSubmit}
                    >
                        確定
                    </button>
                    <button
                        className="myprofile_btn2 mb-4 accent-light-color bg-accent-color border-0 mx-1"
                        onClick={() => {
                            setEditPassword(true);
                            setPassword({
                                password: '',
                                newpassword: '',
                                renewpassword: '',
                            });
                        }}
                    >
                        取消
                    </button>
                </>
            )}
        </div>
    );
}
export default MyProfile;
