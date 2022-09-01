import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Members(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
        <div>
          <img src="" alt="" />
        </div>
          <ul>
            <li>
              <Link className="" to="">
                會員資料
              </Link>
            </li>
            <li>
              <Link className="" to="myclass">
                我的課程
              </Link>
            </li>
            <li>
              <Link className="" to="mybucketlist">
                我的收藏
              </Link>
            </li>
            <li>
              <Link className="" to="mycart">
                購物車
              </Link>
            </li>
            <li>
              <Link className="" to="myorder">
                訂單查詢
              </Link>
            </li>
            <li>
              <Link className="" to="mycoupon">
                我的優惠券
              </Link>
            </li>
            <li>
              <Link className="" to="myquestion">
                我的詢問
              </Link>
            </li>
          </ul>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default Members;
