import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import Close from '../../assets/svg/close.svg';
import { useAuth } from '../../utils/use_auth';
import GoogleLogin from '../GoogleLogin';

import LogIn from './LogIn';
import SignUp from './SignUp';

function LogInSignUp() {
    const [logInActive, setLogInActive] = useState(true);
    const { loginPopup, setLoginPopup } = useAuth();
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
                {logInActive ? <LogIn /> : <SignUp />}
                <GoogleLogin />
            </div>
        </div>
    );
}

export default LogInSignUp;
