import {
    Link,
    useOutletContext,
    useLocation,
    useNavigate,
} from 'react-router-dom';
import './index.css';
function BeHome(props) {
    return (
        <div className="BeHome">
            <div className="mt-1">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to="/admin">首頁</Link>
                        </li>
                    </ol>
                </nav>
            </div>
            <h3>首頁</h3>
            <hr />
            <div className="row p-3">
                <div className="col-6 col-md-4 col-lg-3 p-0 d-flex justify-content-center align-items-center">
                    <div className="item01">
                        <Link to="/admin/articles" className="maintitle">
                            文章管理
                        </Link>
                        <hr />
                    </div>
                </div>
                <div className="col-6 col-md-4 col-lg-3 p-0 d-flex justify-content-center align-items-center">
                    <div className="item01">
                        <Link to="/admin/coupon" className="maintitle">
                            優惠券管理
                        </Link>
                        <hr />
                    </div>
                </div>
                <div className="col-6 col-md-4 col-lg-3 p-0 d-flex justify-content-center align-items-center">
                    <div className="item01">
                        <Link to="/admin/customerservice" className="maintitle">
                            客服系統
                        </Link>
                        <hr />
                        <Link
                            to="/admin/customerservice"
                            className="secondtitle"
                        >
                            一般問答
                        </Link>
                        <br />
                        <Link
                            to="/admin/customerservice/orderqa"
                            className="secondtitle"
                        >
                            訂單問答
                        </Link>
                        <br />
                        <Link
                            to="/admin/customerservice/placeqa"
                            className="secondtitle"
                        >
                            場地問答
                        </Link>
                    </div>
                </div>
                <div className="col-6 col-md-4 col-lg-3  p-0 d-flex justify-content-center align-items-center">
                    <div className="item01">
                        <Link to="/admin/members" className="maintitle">
                            會員管理
                        </Link>
                        <hr />
                    </div>
                </div>
                <div className="col-6 col-md-4 col-lg-3 p-0 d-flex justify-content-center align-items-center">
                    <div className="item01">
                        <Link to="/admin/order" className="maintitle">
                            訂單管理
                        </Link>
                        <hr />
                    </div>
                </div>
                <div className="col-6 col-md-4 col-lg-3 p-0 d-flex justify-content-center align-items-center">
                    <div className="item01">
                        <Link to="/admin/product" className="maintitle">
                            商品管理
                        </Link>
                        <hr />
                        <Link to="/admin/product" className="secondtitle">
                            樂器商城
                        </Link>
                        <br />
                        <Link to="/admin/product" className="secondtitle">
                            音樂教育
                        </Link>
                    </div>
                </div>
                <div className="col-6 col-md-4 col-lg-3 p-0 d-flex justify-content-center align-items-center">
                    <div className="item01">
                        <Link to="/admin/teachers" className="maintitle">
                            師資管理
                        </Link>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BeHome;
