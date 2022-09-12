import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './index.css';
import Close from '../../assets/svg/close.svg';
import { useAuth } from '../../utils/use_auth';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import LogIn from './LogIn';
import SignUp from './SignUp';

function LogInSignUp({ setLoginPopup }) {
    const [logInActive, setLogInActive] = useState(true);
    const { member, setMember, isLogin, setIsLogin } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        // const navigate = useNavigate();
        // 去要要看有沒有會員資料，有要到就是已經登入過
        let getMember = async () => {
            try {
                console.log('檢查是否登入');
                let response = await axios.get(`${API_URL}/auth`, {
                    withCredentials: true,
                });
                console.log('已登入', response.data);
                await setIsLogin(true);
                setMember(response.data);
                setLoginPopup(false);
                navigate('/member');
            } catch (err) {
                console.log('尚未登入');
            }
        };
        getMember();
    }, []);
    return (
        <div>
            <div
                className="popup"
                onClick={() => {
                    setLoginPopup(false);
                }}
            ></div>
            <div className="popup-inner">
                <div className="d-flex justify-content-end">
                    <button
                        className="closeBtn"
                        onClick={() => {
                            setLoginPopup(false);
                        }}
                    >
                        <img src={Close} alt="close" />
                    </button>
                </div>
                <div className="d-flex justify-content-center ">
                    <button
                        className={logInActive ? 'setLogIn active' : 'setLogIn'}
                        onClick={() => {
                            setLogInActive(true);
                        }}
                    >
                        登入
                    </button>
                    <button
                        className={
                            logInActive ? 'setLogIn ' : 'setLogIn active'
                        }
                        onClick={() => {
                            setLogInActive(false);
                        }}
                    >
                        註冊
                    </button>
                </div>
                <br />
                {logInActive ? (
                    <LogIn setLoginPopup={setLoginPopup} />
                ) : (
                    <SignUp setLoginPopup={setLoginPopup} />
                )}
            </div>
        </div>
    );
}

export default LogInSignUp;
