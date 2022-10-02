import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom'; //抓取Outlet的props
import { Row } from 'react-bootstrap';
import './index.scss';
import { useAuth } from '../../../../utils/use_auth';
import { API_URL } from '../../../../utils/config';
import axios from 'axios';

//子頁面
import ClassStart from './ClassStart';
import ClassEnd from './ClassEnd';

//圖檔
import search from '../../../../assets/svg/search.svg';

function MyClass(props) {
    const [selectCourse, setSelectCourse] = useState(true);
    // 登入狀態
    const { member, setMember, isLogin, setIsLogin } = useAuth();

    //會員登入狀態判斷
    useEffect(() => {
        async function getMember() {
            try {
                // console.log('檢查是否登入');
                let response = await axios.get(`${API_URL}/auth`, {
                    withCredentials: true,
                });
                // console.log('已登入', response.data);
                setIsLogin(true);
                setMember(response.data);
            } catch (err) {
                console.log(err.response.data.message);
            }
        }
        getMember();
    }, []);

    const [setbread] = useOutletContext(); //此CODE為抓取麵包削setbread
    useEffect(() => {
        setbread('我的課程'); //載入頁面時 設定麵包削
    }, []);

    return (
        <div className="col-12 col-md-8 col-lg-9">
            {/*此className為RWD設定請勿更動*/}
            <div className="d-flex justify-content-between mt-3">
                <h4 className="main-color">
                    <b>我的課程</b>
                </h4>
                <button className="border-0">
                    <img src={search} alt="" />
                </button>
            </div>
            <Row className="text-center mt-5  mb-5 ">
                <button
                    className={`cursor-pinter col-6 ${
                        selectCourse ? 'vector5-Btn-active' : 'vector5-Btn'
                    }`}
                    onClick={() => {
                        setSelectCourse(true);
                    }}
                >
                    <h6 className="main-color">
                        <b>開課中課程</b>
                    </h6>
                </button>
                <button
                    className={`cursor-pinter col-6  ${
                        selectCourse ? 'vector5-Btn ' : 'vector5-Btn-active'
                    }`}
                    onClick={() => {
                        setSelectCourse(false);
                    }}
                >
                    <h6 className="main-color">
                        <b>已完成課程</b>
                    </h6>
                </button>
                <div className="mt-5 px-0 ">
                    {selectCourse ? <ClassStart /> : <ClassEnd />}
                </div>
            </Row>
        </div>
    );
}
export default MyClass;
