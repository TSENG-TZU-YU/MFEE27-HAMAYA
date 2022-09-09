import { useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import visib from './visibility.svg';
import unVisib from './visibility_off.svg';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../utils/use_auth';


function LogIn({ setLoginPopup }) {
    const [visibility, setVisibility] = useState('password');
    const [img, setImg] = useState(unVisib);

    function handleChange(e) {
        setLoginMember({ ...loginMember, [e.target.name]: e.target.value });
      }

    const [loginMember, setLoginMember] = useState({
        email: '234ad7891@gmail.com',
        password: 'xswedc123456',
    });
    const { member, setMember, isLogin, setIsLogin } = useAuth();

    async function handleSubmit(e) {
        e.preventDefault();
        let response = await axios.post(`${API_URL}/auth/login`, loginMember, {
            // 為了可以跨源存取 cookie
            withCredentials: true,
        });
        console.log(response.data);
        // 告訴 auth context 會員有資料嚕
        setMember(response.data);
        setIsLogin(true);
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
            <Link
                className="text-danger"
                onClick={() => {
                    setLoginPopup(false);
                }}
                to="/member"
            >
                測試用登入
            </Link>
            <button className="subBtn" onClick={handleSubmit}>
                登入
            </button>
        </form>
    );
}

export default LogIn;
