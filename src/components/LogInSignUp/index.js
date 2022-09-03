import { useState } from 'react';
import './index.css';
import Close from '../../assets/svg/close.svg';

import LogIn from './LogIn';
import SignUp from './SignUp';
function LogInSignUp({ setLoginPopup }) {
    const [isLogIn, setIsLogIn] = useState(false);
    const [logInToggle, setLogInToggle] = useState(true);
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
                        className={logInActive ? 'setLogIn active' : 'setLogIn'}
                        onClick={() => {
                            setLogInToggle(true);
                            setLogInActive(true);
                            setSignUpActive(false);
                        }}
                    >
                        登入
                    </button>
                    <button
                        className={
                            signUpActive ? 'setLogIn active' : 'setLogIn'
                        }
                        onClick={() => {
                            setLogInToggle(false);
                            setLogInActive(false);
                            setSignUpActive(true);
                        }}
                    >
                        註冊
                    </button>
                </div>
                <br />
                {logInToggle ? (
                    <LogIn setLoginPopup={setLoginPopup} />
                ) : (
                    <SignUp />
                )}
            </div>
        </div>
    );
}

export default LogInSignUp;
