import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Members(props) {
    return (
        <div className="container">
            <div className="row"> 
                <div className="col-2">
                    <ul>
                        <li><Link className="mx-3" to="">會員資料</Link></li>
                        <li><Link className="mx-3" to="myclass">我的課程</Link></li>
                        <li><Link className="mx-3" to="mybucketlist">我的收藏</Link></li>
                        <li><Link className="mx-3" to="mycart">購物車</Link></li>
                        <li><Link className="mx-3" to="myorder">訂單查詢</Link></li>
                        <li><Link className="mx-3" to="mycoupon">我的優惠券</Link></li>
                        <li><Link className="mx-3" to="myquestion">我的詢問</Link></li>
                    </ul>
                </div>
                <Outlet/>
            </div>   
        </div>
    );
}

export default Members;