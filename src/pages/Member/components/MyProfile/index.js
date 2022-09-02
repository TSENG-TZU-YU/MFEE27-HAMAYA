import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import './index.css';
function MyProfile(props) {
    const [user, setUser] = useState({
        email: 'Emma@gmail.com',
        fullName: 'Emma',
        birthday: '1993-11-14',
        phone: '093008422',
        address: '桃園市中壢區新生路二段421號',
        password: '123456789',
        repassword: '',
        sub: '1',
    });
    
    const [setbread] = useOutletContext();
    useEffect(() => {
        setbread('會員資料');
    }, []);

    const [edit, setEdit] = useState(true);
    const handleFieldChange = (e) => {
        const newUser = { ...user, [e.target.name]: e.target.value };

        setUser(newUser);
    };
    return (
        <div className="col-12 col-md-9 col-lg-10">
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
                            <span>{user.email}</span>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-primary">會員姓名</td>
                        <td>
                            <input
                                type="text"
                                value={user.fullName}
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
                                value={user.birthday}
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
                                value={user.phone}
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
                                value={user.address}
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
                                value={user.password}
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
                                value={user.repassword}
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
                        className="d-block"
                        type="radio"
                        id="sub"
                        name="sub"
                        checked={user.sub === '1'}
                        value={'1'}
                        onChange={handleFieldChange}
                        disabled={edit}
                    />
                    <label htmlFor="sub">訂閱</label>
                    &nbsp;
                    <input
                        className="d-block"
                        type="radio"
                        id="unsub"
                        name="sub"
                        checked={user.sub === '0'}
                        value={'0'}
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
