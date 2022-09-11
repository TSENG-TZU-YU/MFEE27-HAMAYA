import { useState } from 'react';
import visib from './visibility.svg';
import unVisib from './visibility_off.svg';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import { useAuth } from '../../utils/use_auth';

function SignUp({setLoginPopup}) {
    const [visibility, setVisibility] = useState('password');
    const [img, setImg] = useState(unVisib);
    const [visibility2, setVisibility2] = useState('password');
    const [img2, setImg2] = useState(unVisib);

    const { member, setMember, isLogin, setIsLogin } = useAuth();
    const [newMember, setNewMember] = useState({
        email: 'newMember@gmail.com',
        fullName: 'TestMemberName',
        birthday: '1996-10-14',
        phone: '0977777777',
        address: '',
        password: '',
        repassword: '',
        sub: '1',
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
            console.log(err);
            
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
                    type={visibility}
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
            <label className="position-relative">
                確認密碼
                <br />
                <input
                    type={visibility2}
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

                        if (visibility2 === 'password') {
                            setVisibility2('text');
                            setImg2(visib);
                        } else {
                            setVisibility2('password');
                            setImg2(unVisib);
                        }
                    }}
                >
                    <img src={img2} alt="" />
                </button>
            </label>
            <label>
                出生日期
                <br />
                <input
                    type="date"
                    name="birthday"
                    value={newMember.birthday}
                    onChange={profileChange}
                    required
                />
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
