import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import visib from './visibility.svg';
import unVisib from './visibility_off.svg';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import { useAuth } from '../../utils/use_auth';
import { successToast, errorToast, warningToast } from '../Alert';
// import GoogleLogin from '../GoogleLogin';

function LogIn() {
    const [visibility, setVisibility] = useState(false);
    const [showForgetPassword, setshowForgetPassword] = useState(false);
    const navigate = useNavigate();

    //忘記密碼
    function forgetPasswordChange(e) {
        setforgetPassword({ email: e.target.value });
    }
    const [forgetPassword, setforgetPassword] = useState({
        email: '',
    });
    async function forgetPasswordSubmit(e) {
        e.preventDefault();
        try {
            let response = await axios.post(
                `${API_URL}/auth/forgetpassword`,
                forgetPassword,
                {
                    withCredentials: true,
                }
            );
            console.log(response.data);
            setLoginPopup(false);
            successToast(response.data.message, '關閉');
        } catch (err) {
            console.log(err.response.data);
            errorToast(err.response.data.message, '關閉');
        }
    }

    //登入
    function handleChange(e) {
        setLoginMember({ ...loginMember, [e.target.name]: e.target.value });
    }
    const [loginMember, setLoginMember] = useState({
        email: '',
        password: '',
    });
    const {
        member,
        setMember,
        isLogin,
        setIsLogin,
        loginPopup,
        setLoginPopup,
    } = useAuth();

    async function loginSubmit(e) {
        e.preventDefault();
        try {
            let response = await axios.post(
                `${API_URL}/auth/login`,
                loginMember,
                {
                    withCredentials: true,
                }
            );
            console.log(response.data);
            setMember(response.data);
            setIsLogin(true);
            navigate('/member');
            setLoginPopup(false);
            successToast('登入成功', '關閉');
            // alert('登入成功');
        } catch (err) {
            console.log(err.response.data);
            errorToast(err.response.data.message, '關閉');
        }
    }

    return (
        <form>
            <label className="">
                帳號(E-MAIL)
                <br />
                <input
                    type="email"
                    name="email"
                    value={loginMember.email}
                    onChange={handleChange}
                    placeholder="請輸入E-MAIL"
                    required
                />
            </label>
            <label className="position-relative p-0">
                密碼
                <br />
                <input
                    type={visibility ? 'text' : 'password'}
                    name="password"
                    value={loginMember.password}
                    onChange={handleChange}
                    placeholder="請輸入密碼"
                    required
                />
                <button
                    className="visibiImg border-0"
                    onClick={(e) => {
                        e.preventDefault();
                        setVisibility(!visibility);
                    }}
                >
                    <img src={visibility ? visib : unVisib} alt="" />
                </button>
            </label>
            <button
                className="forgetbtn"
                onClick={(e) => {
                    e.preventDefault();
                    setshowForgetPassword(!showForgetPassword);
                }}
            >
                忘記密碼?
            </button>
            {showForgetPassword ? (
                <div className="forgetPassword">
                    <label className="">
                        <input
                            type="email"
                            name="email"
                            value={forgetPassword.email}
                            onChange={forgetPasswordChange}
                            placeholder="請輸入帳號(E-MAIL)"
                            required
                        />
                    </label>
                    <button className="subBtn" onClick={forgetPasswordSubmit}>
                        寄送重設密碼認證信
                    </button>
                </div>
            ) : (
                ''
            )}
            <hr />
            <button className="subBtn mt-1" onClick={loginSubmit}>
                登入
            </button>
        </form>
    );
}

export default LogIn;
