import './index.css';
function BeHome(props) {
    return (
        <div className="BeHome">
            <div className="mt-1">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="#">首頁</a>
                        </li>
                    </ol>
                </nav>
            </div>
            <h3>首頁</h3>
            <hr />
            <div className="row p-3">
                <div className="col-3 p-0 d-flex justify-content-center align-items-center">
                    <div className="item01">
                        <h4>文章管理</h4>
                        <hr />
                    </div>
                </div>
                <div className="col-3 p-0 d-flex justify-content-center align-items-center">
                    <div className="item01">
                        <h4>優惠券管理</h4>
                        <hr />
                    </div>
                </div>
                <div className="col-3 p-0 d-flex justify-content-center align-items-center">
                    <div className="item01">
                        <h4>客服系統</h4>
                        <hr />
                        <h6>一般問答</h6>
                        <h6>訂單問答</h6>
                        <h6>場地問答</h6>
                    </div>
                </div>
                <div className="col-3 p-0 d-flex justify-content-center align-items-center">
                    <div className="item01">
                        <h4>會員管理</h4>
                        <hr />
                    </div>
                </div>
                <div className="col-3 p-0 d-flex justify-content-center align-items-center">
                    <div className="item01">
                        <h4>訂單管理</h4>
                        <hr />
                    </div>
                </div>
                <div className="col-3 p-0 d-flex justify-content-center align-items-center">
                    <div className="item01">
                        <h4>商品管理</h4>
                        <hr />
                        <h6>樂器商城</h6>
                        <h6>音樂教育</h6>
                    </div>
                </div>
                <div className="col-3 p-0 d-flex justify-content-center align-items-center">
                    <div className="item01">
                        <h4>師資管理</h4>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BeHome;
