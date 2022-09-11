import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import visib from './visibility.svg';
import unVisib from './visibility_off.svg';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import { useAuth } from '../../utils/use_auth';

function LogIn({ setLoginPopup }) {
    const [visibility, setVisibility] = useState('password');
    const [img, setImg] = useState(unVisib);
    const navigate = useNavigate();

    function handleChange(e) {
        setLoginMember({ ...loginMember, [e.target.name]: e.target.value });
    }

    const [loginMember, setLoginMember] = useState({
        email: '234ad7891@gmail.com',
        password: 'xswedc123456',
    });
    const { member, setMember, isLogin, setIsLogin } = useAuth();

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
            alert('登入成功');
        } catch (err) {
            console.log(err);
            alert('帳號或密碼錯誤');
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
            <label className="position-relative">
                密碼
                <br />
                <input
                    type={visibility}
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
                        if (visibility === 'password') {
                            setVisibility('text');
                            setImg(visib);
                        } else {
                            setVisibility('password');
                            setImg(unVisib);
                        }
                    }}
                >
                    <img src={img} alt="" />
                </button>
            </label>
            <a>忘記密碼?</a>

            <br />
            <br />
            {/* <Link
                className="text-danger"
                onClick={() => {
                    setLoginPopup(false);
                }}
                to="/member"
            >
                測試用登入
            </Link> */}
            <button className="subBtn" onClick={loginSubmit}>
                登入
            </button>
        </form>
    );
}

export default LogIn;
