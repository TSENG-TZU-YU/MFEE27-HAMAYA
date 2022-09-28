import { useState, useEffect } from 'react';
import {
    Link,
    useOutletContext,
    useLocation,
    useNavigate,
} from 'react-router-dom';
import axios from 'axios';
import { API_URL } from './config';
import { successToast, errorToast } from '../components/Alert';

function EnableMember(props) {
    const navigate = useNavigate();
    const location = useLocation();

    //啟用會員帳號
    //http://localhost:3000/enable?userid=12&key=xdxjruurpg
    useEffect(() => {
        async function enableMember() {
            try {
                console.log('會員進入啟用頁面');
                let params = new URLSearchParams(location.search);
                let id = params.get('id');
                let key = params.get('key');
                let response = await axios.get(
                    `${API_URL}/auth/enable?id=${id}&key=${key}`,
                    {
                        withCredentials: true,
                    }
                );
                successToast(response.data.message, '關閉');
                navigate('/');
            } catch (err) {
                errorToast(err.response.data.message, '關閉');
                navigate('/');
            }
        }
        enableMember();
    }, [location]);
    return <div>EnableMember</div>;
}

export default EnableMember;
