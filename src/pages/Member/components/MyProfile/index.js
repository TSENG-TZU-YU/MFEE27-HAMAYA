import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import './index.css';
import axios from 'axios';
import { API_URL } from '../../../../utils/config';
import { useAuth } from '../../../../utils/use_auth';
import { cityData, distData } from './location';

function MyProfile(props) {
    const {
        member,
        setMember,
        isLogin,
        setIsLogin,
        originalPhotoURL,
        setOriginalPhotoURL,
    } = useAuth();
    const [originalmember, setOriginalMember] = useState();
    const [password, setPassword] = useState({
        password: '********',
        repassword: '',
    });
    const [setbread] = useOutletContext();
    useEffect(() => {
        setbread('會員資料');
        setOriginalMember({ ...member });
    }, []);

    // let saveMember = {
    //     id: member.id,
    //     fullName: member.name,
    //     email: member.email,
    //     phone: member.phone,
    //     city: member.city,
    //     dist: member.dist,
    //     address: member.address,
    //     birthday: member.birthday,
    //     photo: member.photo,
    //     sub: member.sub,
    //     loginDt: new Date().toISOString(),
    // };
    const [city, setCity] = useState(member.city);
    const [dist, setDist] = useState(member.dist);
    const [editProfile, setEditProfile] = useState(true);
    const [editPassword, setEditPassword] = useState(true);

    const ProfileChange = (e) => {
        setMember({ ...member, [e.target.name]: e.target.value });
    };
    const photoChange = (e) => {
        // type=file 的 input
        // 選好的檔案是放在 e.target.files[0]
        // seAddimg(URL.createObjectURL(e.target.files[0]));
        setMember({ ...member, photo: e.target.files[0] });
    };
    const passwordChange = (e) => {
        setPassword({ ...password, [e.target.name]: e.target.value });
    };

    async function profileSubmit(e) {
        e.preventDefault();
        try {
            let formData = new FormData();
            formData.append('id', member.id);
            formData.append('fullName', member.fullName);
            formData.append('phone', member.phone);
            formData.append('city', member.city);
            formData.append('dist', member.dist);
            formData.append('address', member.address);
            formData.append('birthday', member.birthday);
            formData.append('photo', member.photo);
            formData.append('sub', member.sub);
            let response = await axios.patch(
                `${API_URL}/auth/profile`,
                formData,
                {
                    withCredentials: true,
                }
            );
            console.log(response.data);
            setEditProfile(true);
            alert(response.data.message);
            setMember({ ...member, photo: response.data.photo });
            setOriginalPhotoURL(response.data.photo);
        } catch (err) {
            console.log(err.response.data);
            alert(err.response.data.message);
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
            alert(response.data.message);
        } catch (err) {
            console.log(err.response.data);
            alert(err.response.data.message);
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
                                <span>{member.email}</span>
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
                                    value={member.fullName}
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
                                    value={member.birthday}
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
                                    value={member.phone}
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
                                    value={member.city}
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
                                    value={member.dist}
                                    name="dist"
                                    onChange={ProfileChange}
                                    disabled={editProfile}
                                >
                                    <option value="">選擇地區</option>
                                    {distData.map((data, index) => {
                                        if (data.city === member.city)
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
                                    value={member.address}
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
                            checked={member.sub == 1}
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
                            checked={member.sub == 0}
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
                                setMember({ ...originalmember });
                                setEditProfile(true);
                                setCity(member.city);
                                setDist(member.dist);
                            }}
                        >
                            取消
                        </button>
                    </>
                )}
            </form>
            <h5 className="gary-dark-color mt-4">修改密碼</h5>
            <table className="myprofile_table ">
                <thead></thead>
                <tbody>
                    <tr>
                        <td className="text-primary">新密碼</td>
                        <td>
                            <input
                                type="password"
                                value={password.password}
                                name="password"
                                onChange={passwordChange}
                                disabled={editPassword}
                                placeholder="請輸入新密碼"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="text-primary">確認新密碼</td>
                        <td>
                            <input
                                type="password"
                                value={password.repassword}
                                name="repassword"
                                onChange={passwordChange}
                                disabled={editPassword}
                                placeholder="再次輸入新密碼"
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
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
                                password: '********',
                                repassword: '',
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
