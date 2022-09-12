import { Outlet } from 'react-router-dom';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuth } from '../../utils/use_auth';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import MemberListTable from './components/MemberListTable';
import MemberListMobile from './components/MemberListMobile';
function Members(props) {
    const { member, setMember, isLogin, setIsLogin } = useAuth();
    const [bread, setbread] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        let getMember = async () => {
            try {
                console.log('檢查是否登入');
                let response = await axios.get(`${API_URL}/auth`, {
                    withCredentials: true,
                });
                console.log('已登入', response.data);
                setIsLogin(true);
                setMember(response.data);
            } catch (err) {
                navigate('/');
                console.log('尚未登入');
            }
        };
        getMember();
    }, []);

    // if (!isLogin) {
    //     return <Navigate to="/" />;
    // }
    return (
        <div className="container">
            <div className="mt-2 d-flex justify-content-between ">
                <nav aria-label="breadcrumb ">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="/">首頁</a>
                        </li>
                        <li className="breadcrumb-item">
                            <a href="/member">會員專區</a>
                        </li>
                        <li className="breadcrumb-item " aria-current="page">
                            {bread}
                        </li>
                    </ol>
                </nav>
            </div>
            <MemberListMobile />
            <div className="row">
                <MemberListTable />
                <Outlet context={[setbread]} />
            </div>
        </div>
    );
}

export default Members;
