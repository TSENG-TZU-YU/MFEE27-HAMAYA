import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import './index.css';
import axios from 'axios';
import { API_URL } from '../../../../utils/config';
import { useAuth } from '../../../../utils/use_auth';
function MyProfile(props) {
    const { member, setMember, isLogin, setIsLogin } = useAuth();
    // const [user, setUser] = useState({
    //     email: 'Emma@gmail.com',
    //     fullName: 'Emma',
    //     birthday: '1993-11-14',
    //     phone: '093008422',
    //     address: '桃園市中壢區新生路二段421號',
    //     password: '123456789',
    //     repassword: '',
    //     sub: '1',
    // });

    const [mainClass, setMainClass] = useState([
        { mainClass: 1, mainName: '台北市' },
        { mainClass: 2, mainName: '桃園市' },
        { mainClass: 3, mainName: '新竹市' },
    ]);

    const [secondClass, setSecondClass] = useState([
        { mainClass: 1, secondClass: '松山區' },
        { mainClass: 1, secondClass: '大安區' },
        { mainClass: 2, secondClass: '桃園區' },
        { mainClass: 2, secondClass: '中壢區' },
        { mainClass: 2, secondClass: '八德區' },
        { mainClass: 3, secondClass: '北區' },
        { mainClass: 3, secondClass: '東區' },
    ]);

    const [url, setUrl] = useState(1);

    const [setbread] = useOutletContext();
    useEffect(() => {
        setbread('會員資料');
    }, []);

    const [edit, setEdit] = useState(true);
    const handleFieldChange = (e) => {
        const newUser = { ...member, [e.target.name]: e.target.value };

        setMember(newUser);
    };
    return (
        <div className="col-12 col-md-8 col-lg-9 MyProfile">
            {/* <select
                value={url}
                onChange={(e) => {
                    setUrl(e.target.value);
                }}
            >
                {mainClass.map((data, index) => {
                    return (
                        <option value={data.mainClass}>{data.mainName}</option>
                    );
                })}
            </select>
            <select>
                {secondClass.map((data, index) => {
                    console.log(data.mainClass);
                    if (data.mainClass === Number(url))
                        return <option>{data.secondClass}</option>;
                })}
            </select> */}
            <table className="myprofile_table ">
                <thead>
                    <tr>
                        <th colSpan="2">
                            <h4 className="main-color ">會員資料</h4>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-primary">會員帳號</td>
                        <td>
                            <span>{member.email}</span>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-primary">會員姓名</td>
                        <td>
                            <input
                                type="text"
                                value={member.fullName}
                                name="fullName"
                                onChange={handleFieldChange}
                                disabled={edit}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="text-primary">出生日期</td>
                        <td>
                            <input
                                type="date"
                                value={member.birthday}
                                name="birthday"
                                onChange={handleFieldChange}
                                disabled={edit}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="text-primary">手機號碼</td>
                        <td>
                            <input
                                type="text"
                                value={member.phone}
                                name="phone"
                                onChange={handleFieldChange}
                                disabled={edit}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="text-primary">居住地址</td>
                        <td>
                            <input
                                type="text"
                                value={member.address}
                                name="address"
                                onChange={handleFieldChange}
                                disabled={edit}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="text-primary">修改密碼</td>
                        <td>
                            <input
                                type="password"
                                value={member.password}
                                name="password"
                                onChange={handleFieldChange}
                                disabled={edit}
                                placeholder="請輸入新密碼"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="text-primary">確認新密碼</td>
                        <td>
                            <input
                                type="password"
                                value={member.repassword}
                                name="repassword"
                                onChange={handleFieldChange}
                                disabled={edit}
                                placeholder="再次輸入新密碼"
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <div>
                <h5 className="gary-dark-color mt-4">優惠訊息通知</h5>
                <div className="d-flex my-3">
                    <input
                        className="form-check-input d-block"
                        type="radio"
                        id="sub"
                        name="sub"
                        checked={member.sub == 1}
                        value="1"
                        onChange={handleFieldChange}
                        disabled={edit}
                    />
                    <label htmlFor="sub">訂閱</label>
                    &nbsp;
                    <input
                        className="form-check-input d-block"
                        type="radio"
                        id="unsub"
                        name="sub"
                        //TODO:資料庫修改 數字 字串 待解決
                        checked={member.sub == 0} 
                        value="0"
                        onChange={handleFieldChange}
                        disabled={edit}
                    />
                    <label htmlFor="unsub">取消訂閱 </label>
                </div>
            </div>
            {edit ? (
                <button
                    className="myprofile_btn mb-4 accent-light-color bg-accent-color border-0 "
                    onClick={() => {
                        setEdit(false);
                    }}
                >
                    修改會員資料
                </button>
            ) : (
                <button
                    className="myprofile_btn mb-4 accent-light-color bg-main-color border-0"
                    onClick={() => {
                        setEdit(true);
                    }}
                >
                    確定修改
                </button>
            )}
        </div>
    );
}
export default MyProfile;
