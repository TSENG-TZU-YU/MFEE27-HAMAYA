import React, { useState, useContext, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from './config';
// 建立新的認証用的context
const AuthContext = createContext();

// 建立一個新的Provider元件，內容是提供auth狀態
export const AuthProvider = ({ children }) => {
    //是否登入
    const [isLogin, setIsLogin] = useState(false);
    //會員資料
    const [member, setMember] = useState(null);
    //會員圖片
    const [originalPhotoURL, setOriginalPhotoURL] = useState(null);

    const navigate = useNavigate();

    // let getMember = async ({ setLoginPopup }) => {
    //     try {
    //         console.log('檢查是否登入');
    //         let response = await axios.get(`${API_URL}/auth`, {
    //             withCredentials: true,
    //         });
    //         console.log('已登入', response.data);
    //         await setIsLogin(true);
    //         setMember(response.data);
    //         setLoginPopup(false);
    //         navigate('/member');
    //     } catch (err) {
    //         console.log('尚未登入');
    //         setLoginPopup(true);
    //     }
    // };
    return (
        <AuthContext.Provider
            value={{
                member,
                setMember,
                isLogin,
                setIsLogin,
                originalPhotoURL,
                setOriginalPhotoURL,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

// 建立一個勾子協助使用context
export const useAuth = () => useContext(AuthContext);
