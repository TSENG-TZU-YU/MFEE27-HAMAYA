import { useState } from 'react';
import './index.css';
import Close from '../../assets/svg/close.svg';

import LogIn from './LogIn';
import SignUp from './SignUp';
function LogInSignUp({ setLoginPopup }) {
    const [isLogIn, setIsLogIn] = useState(false);
    const [logInActive, setLogInActive] = useState(true);
    const [signUpActive, setSignUpActive] = useState(false);
    return (
        <div className="popup">
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
                        className={
                            logInActive
                                ? 'setLogIn LogInSignUp-active'
                                : 'setLogIn'
                        }
                        onClick={() => {
                            setLogInActive(true);
                            setSignUpActive(false);
                        }}
                    >
                        登入
                    </button>
                    <button
                        className={
                            signUpActive
                                ? 'setLogIn LogInSignUp-active'
                                : 'setLogIn'
                        }
                        onClick={() => {
                            setLogInActive(false);
                            setSignUpActive(true);
                        }}
                    >
                        註冊
                    </button>
                </div>
                <br />
                {logInActive ? (
                    <LogIn setLoginPopup={setLoginPopup} />
                ) : (
                    <SignUp />
                )}
            </div>
        </div>
    );
}

export default LogInSignUp;
