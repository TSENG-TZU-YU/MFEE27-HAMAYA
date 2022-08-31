import { useState } from 'react';
import visib from './visibility.svg';
import unVisib from './visibility_off.svg';

function LogIn(props) {
  const [visibility, setVisibility] = useState('password');
  const [img, setImg] = useState(unVisib);
  return (
    <div>
      <label className="">
        帳號(E-MAIL)
        <br />
        <input type="email" placeholder="請輸入E-MAIL" required />
      </label>
      <label className="position-relative">
        密碼
        <br />
        <input type={visibility} placeholder="請輸入密碼" required />
        <a
          href="/#"
          className="visibiImg"
          onClick={() => {
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
        </a>
      </label>
      <a>忘記密碼?</a>

      <br />
      <br />
      <button className="subBtn">登入</button>
    </div>
  );
}

export default LogIn;
