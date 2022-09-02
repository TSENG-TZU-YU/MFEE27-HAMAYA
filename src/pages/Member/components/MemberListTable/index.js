import { Link } from 'react-router-dom';
import member_img from '../../../../assets/svg/member_avatar.svg';
import add_img from '../../../../assets/svg/add.svg';
import './index.css'
function MemberListTable(props) {
    return (
        <div className="col-3 col-lg-2 d-none d-md-block MemberListTable">
            <div className="MemberListTable">
                <img className="img-fluid" src={member_img} alt="" />
            </div>
            <ul className="list-unstyled">
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
    );
}

export default MemberListTable;
