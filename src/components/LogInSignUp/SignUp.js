import { useState } from 'react';
import visib from './visibility.svg';
import unVisib from './visibility_off.svg';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import { useAuth } from '../../utils/use_auth';

function SignUp({ setLoginPopup }) {
    const [visibility, setVisibility] = useState(false);
    const [visibility2, setVisibility2] = useState(false);

    const { member, setMember, isLogin, setIsLogin } = useAuth();
    const [newMember, setNewMember] = useState({
        fullName: 'MemberTest',
        email: 'MemberTest@gmail.com',
        password: '',
        repassword: '',
        sub: '0',
    });

    const profileChange = (e) => {
        const newUser = { ...newMember, [e.target.name]: e.target.value };

        setNewMember(newUser);
    };

    const navigate = useNavigate();
    async function signupSubmit(e) {
        e.preventDefault();
        try {
            let response = await axios.post(
                `${API_URL}/auth/register`,
                newMember,
                {
                    withCredentials: true,
                }
            );
            console.log(response.data);
            // setMember(response.data);
            // setIsLogin(true);
            // navigate('/member');
            setLoginPopup(false);
            alert('註冊成功');
        } catch (err) {
            console.log(err.response.data);
            alert(err.response.data.errors[0].msg)
        }
    }
    return (
        <form>
            <label>
                會員姓名
                <br />
                <input
                    type="text"
                    name="fullName"
                    value={newMember.fullName}
                    onChange={profileChange}
                    placeholder="請輸入您的姓名"
                    required
                />
            </label>
            <label>
                帳號(E-MAIL)
                <br />
                <input
                    type="email"
                    name="email"
                    value={newMember.email}
                    onChange={profileChange}
                    placeholder="請輸入您的E-MAIL"
                    required
                />
            </label>

            <label className="position-relative">
                密碼
                <br />
                <input
                    type={visibility ? 'text' : 'password'}
                    name="password"
                    value={newMember.password}
                    onChange={profileChange}
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
            <label className="position-relative">
                確認密碼
                <br />
                <input
                    type={visibility2 ? 'text' : 'password'}
                    name="repassword"
                    value={newMember.repassword}
                    onChange={profileChange}
                    placeholder="請再次輸入密碼"
                    required
                />
                <button
                    className="visibiImg border-0"
                    onClick={(e) => {
                        e.preventDefault();
                        setVisibility2(!visibility2);
                    }}
                >
                    <img src={visibility2 ? visib : unVisib} alt="" />
                </button>
            </label>
            <label className="">
                <input
                    className=""
                    type="checkbox"
                    name="sub"
                    value={newMember.sub === '1' ? '0' : '1'}
                    onChange={profileChange}
                    required
                    checked={newMember.sub === '1'}
                />
                訂閱優惠訊息
            </label>
            <br />
            <br />
            <button className="subBtn" onClick={signupSubmit}>
                確認送出
            </button>
        </form>
    );
}

export default SignUp;
