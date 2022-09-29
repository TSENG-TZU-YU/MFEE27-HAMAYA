import React, { useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import './index.scss';
import { useNavigate } from 'react-router';
import axios from 'axios';
import moment from 'moment';
import { successToast, errorToast } from '../Alert';
import { API_URL } from '../../utils/config';

import { useAuth } from '../../utils/use_auth';

const GoogleLogin = ({ setLoginPopup }) => {
    const { member, setMember, isLogin, setIsLogin } = useAuth();
    const navigate = useNavigate();
    const handleCallbackResponse = async (res) => {
        console.log('Encode JWT ID token ' + res.credential);
        const rawData = jwt_decode(res.credential);

        const userObject = {
            fullName: rawData.name,
            email: rawData.email,
            password: '123456789',
            repassword: '123456789',
            sub: '1',

            create_time: moment().format('YYYY-MM-DD h:mm:ss'),
        };
        // setMember(userObject);
        try {
            let response = await axios.post(
                `${API_URL}/googleAuth`,
                userObject,
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
        } catch (err) {
            console.log(err.response.data);
            console.log('2', userObject);
            errorToast('格式錯誤', '關閉');
        }
    };

    useEffect(() => {
        console.log(window.google);
        window.google.accounts.id.initialize({
            client_id: process.env.REACT_APP_GOOGLE_CLIENT,
            callback: handleCallbackResponse,
        });
        window.google.accounts.id.renderButton(
            document.getElementById('signInDiv'),
            {
                theme: 'outline',
                size: 'large',
                width: 50,
                height: 50,
            }
        );
    }, []);
    return <div className="text-center mt-3" id="signInDiv"></div>;
};

export default GoogleLogin;
