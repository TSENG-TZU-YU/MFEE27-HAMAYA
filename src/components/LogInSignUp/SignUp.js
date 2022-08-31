import { useState } from 'react';
import visib from './visibility.svg';
import unVisib from './visibility_off.svg';
function SignUp(props) {
  const [visibility, setVisibility] = useState('password');
  const [img, setImg] = useState(unVisib);
  const [visibility2, setVisibility2] = useState('password');
  const [img2, setImg2] = useState(unVisib);
  return (
    <>
      <label>
        會員姓名
        <br />
        <input type="text" placeholder="請輸入您的姓名" required />
      </label>
      <label>
        帳號(E-MAIL)
        <br />
        <input type="email" placeholder="請輸入您的E-MAIL" required />
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
      <label className="position-relative">
        確認密碼
        <br />
        <input type={visibility2} placeholder="請再次輸入密碼" required />
        <a
          href="/#"
          className="visibiImg"
          onClick={() => {
            if (visibility2 == 'password') {
              setVisibility2('text');
              setImg2(visib);
            } else {
              setVisibility2('password');
              setImg2(unVisib);
            }
          }}
        >
          <img src={img2} alt="" />
        </a>
      </label>
      <label>
        出生日期
        <br />
        <input type="date" required />
      </label>
      <br />
      <br />
      <button className="subBtn">確認送出</button>
    </>
  );
}

export default SignUp;
