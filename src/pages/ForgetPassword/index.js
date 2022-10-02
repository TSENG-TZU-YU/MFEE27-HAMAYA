import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './index.css';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import { successToast, errorToast } from '../../components/Alert';
function ForgetPassword(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const [newPassword, setNewPassword] = useState({
        id: '',
        key: '',
        newpassword: '',
        renewpassword: '',
    });

    useEffect(() => {
        let params = new URLSearchParams(location.search);
        let id = params.get('id');
        let key = params.get('key');
        setNewPassword({ ...newPassword, id: id, key: key });
    }, [location]);
    //忘記密碼
    function newPasswordChange(e) {
        setNewPassword({ ...newPassword, [e.target.name]: e.target.value });
    }

    async function newPasswordSubmit(e) {
        e.preventDefault();
        try {
            let response = await axios.patch(
                `${API_URL}/auth/newpassword`,
                newPassword,
                {
                    withCredentials: true,
                }
            );
            console.log(response.data);
            successToast(response.data.message, '關閉');
            navigate('/');
        } catch (err) {
            console.log(err.response.data);
            errorToast(err.response.data.message, '關閉');
        }
    }
    return (
        <div className="container ForgetPassword">
            <div className="space"></div>
            <form className="form">
                <h2>重設密碼</h2>
                <div className="title1 mt-1">新密碼</div>
                <input
                    type="password"
                    name="newpassword"
                    onChange={newPasswordChange}
                    placeholder="輸入新密碼"
                />
                <div className="title1 mt-1">確認新密碼</div>
                <input
                    type="password"
                    name="renewpassword"
                    onChange={newPasswordChange}
                    placeholder="再次輸入新密碼"
                />
                <br></br>
                <button className="btn1 my-3 py-1" onClick={newPasswordSubmit}>
                    送出
                </button>
            </form>
        </div>
    );
}

export default ForgetPassword;
