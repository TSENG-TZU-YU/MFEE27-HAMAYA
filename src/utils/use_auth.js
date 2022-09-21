import React, { useState, useContext, createContext } from 'react';

// 建立新的認証用的context
const AuthContext = createContext();

// 建立一個新的Provider元件，內容是提供auth狀態
export const AuthProvider = ({ children }) => {
    //是否登入
    const [isLogin, setIsLogin] = useState(false);
    //會員資料
    const [member, setMember] = useState({
        id: '',
        fullName: '',
        email: '',
        phone: '',
        city: '',
        dist: '',
        address: '',
        birthday: '',
        photo: '',
        sub: '',
        loginDt: '',
    });
    //暫時新增圖片
    const [uploadPhotoURL, setUploadPhotoURL] = useState('');
    //是否更新資料
    const [socketStatus, setSocketStatus] = useState({
        updateMyQA: false,
        customer_id: '',
    });

    return (
        <AuthContext.Provider
            value={{
                member,
                setMember,
                isLogin,
                setIsLogin,
                uploadPhotoURL,
                setUploadPhotoURL,
                socketStatus,
                setSocketStatus,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

// 建立一個勾子協助使用context
export const useAuth = () => useContext(AuthContext);
