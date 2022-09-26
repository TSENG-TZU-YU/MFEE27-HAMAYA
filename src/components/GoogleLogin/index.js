import React, { useEffect } from 'react';
// import jwt_decode from 'jwt-decode';
// import { useNavigate } from 'react-router';
// import { useDispatch } from 'react-redux';
// import { setUser } from '../../../slices/auth-slice';
import './index.scss';

const GoogleLogin = () => {
    // const navigate = useNavigate();
    // const dispatch = useDispatch();

    const handleCallbackResponse = (res) => {
        console.log('123', res);
        // console.log('Encode JWT ID token ' + res.credential);
        // const rawData = jwt_decode(res.credential);

        // const userObject = {
        //     account: rawData.name,
        //     name: rawData.name,
        //     email: rawData.email,
        //     avatar: rawData.picture,
        //     password: 'sercert',
        // };

        // dispatch(setUser({ user: userObject }));
        // navigate('/');
    };

    useEffect(() => {
        console.log(window.google);
        // window.google.accounts.id.initialize({
        //     client_id:
        //         '1040141051837-5uc0u5bat1aeoneitmdh67gce0idcj48.apps.googleusercontent.com',
        //     callback: handleCallbackResponse,
        // });
        // window.google.accounts.id.renderButton(
        //     document.getElementById('signInDiv'),
        //     {
        //         theme: 'outline',
        //         size: 'large',
        //         width: 50,
        //         height: 50,
        //     }
        // );
    }, []);
    return <div className="text-center" id="signInDiv"></div>;
};

export default GoogleLogin;
