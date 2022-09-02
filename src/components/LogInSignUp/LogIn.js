import { useState } from 'react';
import { Link } from 'react-router-dom';
import visib from './visibility.svg';
import unVisib from './visibility_off.svg';

function LogIn({ setLoginPopup }) {
  const [visibility, setVisibility] = useState('password');
  const [img, setImg] = useState(unVisib);
  return (
    <form>
      <label className="">
        帳號(E-MAIL)
        <br />
        <input type="email" placeholder="請輸入E-MAIL" required />
      </label>
      <label className="position-relative">
        密碼
        <br />
        <input type={visibility} placeholder="請輸入密碼" required />
        <button
          className="visibiImg "
          onClick={(e) => {
            e.preventDefault();
            if (visibility == 'password') {
              setVisibility('text');
              setImg(visib);
            } else {
              setVisibility('password');
              setImg(unVisib);
            }
          }}
        >
          <img src={img} alt="" />
        </button>
      </label>
      <a>忘記密碼?</a>

      <br />
      <br />
      <Link
        className="text-danger"
        onClick={() => {
          setLoginPopup(false);
        }}
        to="/member"
      >
        測試用登入
      </Link>
      <button className="subBtn">登入</button>
    </form>
  );
}

export default LogIn;
