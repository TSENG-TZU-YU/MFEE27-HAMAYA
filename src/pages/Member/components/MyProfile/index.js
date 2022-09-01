import { useState } from 'react';
import './index.css';
function MyProfile(props) {
  const [user, setUser] = useState({
    email: 'Emma@gmail.com',
    fullName: 'Emma',
    birthday: '1993-11-14',
    phone: '093008422',
    address: '桃園市中壢區新生路二段421號',
    sub: '1',
  });
  const [edit, setEdit] = useState(true);
  const handleFieldChange = (e) => {
    const newUser = { ...user, [e.target.name]: e.target.value };

    setUser(newUser);
  };
  return (
    <div className="col-10 ">
      <h4>會員資料</h4>
      <br />
      <label>
        會員帳號
        <br />
        <span>{user.email}</span>
      </label>
      <br />
      <br />
      <label>
        會員姓名
        <br />
        <input
          type="text"
          value={user.fullName}
          name="fullName"
          onChange={handleFieldChange}
          disabled={edit}
        />
      </label>
      <br />
      <br />
      <label>
        出生日期
        <br />
        <input
          type="date"
          value={user.birthday}
          name="birthday"
          onChange={handleFieldChange}
          disabled={edit}
        />
      </label>
      <br />
      <br />
      <label>
        手機號碼
        <br />
        <input
          type="text"
          value={user.phone}
          name="phone"
          onChange={handleFieldChange}
          disabled={edit}
        />
      </label>
      <br />
      <br />
      <label>
        居住地址
        <br />
        <input
          type="text"
          value={user.address}
          name="address"
          onChange={handleFieldChange}
          disabled={edit}
        />
      </label>
      <br />
      <br />
      <label>
        修改密碼
        <br />
        <input type="text" value="" disabled={edit} />
      </label>
      <br />
      <br />
      <label>
        確認新密碼
        <br />
        <input type="text" value="" disabled={edit} />
      </label>
      <br />
      <br />
      <h5>優惠訊息通知</h5>
      <label>
        <input
          type="radio"
          name="sub"
          checked={user.sub === '1'}
          value={'1'}
          onChange={handleFieldChange}
          disabled={edit}
        />{' '}
        訂閱
      </label>
      &nbsp;&nbsp;
      <label>
        <input
          type="radio"
          name="sub"
          checked={user.sub === '0'}
          value={'0'}
          onChange={handleFieldChange}
          disabled={edit}
        />{' '}
        取消訂閱
      </label>
      <br />
      <br />
      {edit ? (
        <button
          onClick={() => {
            setEdit(false);
          }}
        >
          修改會員資料
        </button>
      ) : (
        <button
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
