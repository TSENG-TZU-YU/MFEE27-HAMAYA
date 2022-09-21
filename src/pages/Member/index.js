import { Outlet } from 'react-router-dom';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuth } from '../../utils/use_auth';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import MemberListTable from './components/MemberListTable';
import MemberListMobile from './components/MemberListMobile';

import { io } from 'socket.io-client';

function Members(props) {
    const {
        member,
        setMember,
        isLogin,
        setIsLogin,
        socketStatus,
        setSocketStatus,
    } = useAuth();
    const [bread, setbread] = useState('');
    const navigate = useNavigate();

    const [socketConn, setSocketConn] = useState(null);

    useEffect(() => {
        async function getMember() {
            try {
                console.log('檢查是否登入');
                let response = await axios.get(`${API_URL}/auth`, {
                    withCredentials: true,
                });
                console.log('已登入', response.data.fullName);
                setIsLogin(true);
                setMember(response.data);
                if (!socketConn) {
                    console.log('已登入開始建立連線');
                    let socket = io('http://localhost:3001');
                    setSocketConn(socket);
                    socket.emit('memberName', response.data);
                    socket.on(`userid${response.data.id}`, (res) => {
                        // console.log(res);
                        if (res.customer_id !== '') {
                            console.log('管理員進入detail頁面', res);
                            setSocketStatus({
                                ...socketStatus,
                                customer_id: res.customer_id,
                            });
                            //TODO:傳送customer_id到detail頁面 寫到replyForm裡
                        }
                        //判斷是否需要更新MyQuestionDetail
                        if (res.updateMyQA === true) {
                            console.log('來自管理員的訊息', res);
                            setSocketStatus({
                                ...socketStatus,
                                updateMyQA: true,
                            });
                        }
                    });
                }
            } catch (err) {
                navigate('/');
                console.log(err.response.data.message);
            }
        }
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
