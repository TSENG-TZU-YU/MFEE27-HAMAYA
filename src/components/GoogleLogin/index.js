import React, { useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router';
// import moment from 'moment';
import { useAuth } from '../../utils/use_auth';
import './index.scss';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import { successToast, errorToast, warningToast } from '../Alert';

const GoogleLogin = () => {
    const navigate = useNavigate();
    const { member, setMember, isLogin, setIsLogin } = useAuth();
    const handleCallbackResponse = async (res) => {
        const rawData = jwt_decode(res.credential);
        console.log('Encode JWT ID token ' + rawData);
        console.log('success ' + res.profileObj);

        const userObject = {
            // id: userId,
            fullName: rawData.name,
            // account: rawData.name,
            email: rawData.email,
            // avatar: rawData.picture,
            password: 'sercert12',

            // loginDt: moment().format('YYYY-MM-DD h:mm:ss'),
        };
        console.log('userObject', userObject);
        try {
            let response = await axios.post(
                `${API_URL}/auth/register`,
                userObject
            );
            console.log(response.data);
            setIsLogin(true);
            // setLoginPopup(false);

            successToast('註冊成功', '關閉');
            navigate('/member');

            // let response1 = await axios.post(
            //     `${API_URL}/auth/login`,
            //     userObject,
            //     {
            //         withCredentials: true,
            //     }
            // );
            // console.log(response1.data);
            // setMember(response1.data);
            // setIsLogin(true);
            // navigate('/member');
            // // setLoginPopup(false);
            // successToast('登入成功', '關閉');
        } catch (err) {
            console.log(err.response.data);
        }

        navigate('/member');
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
