function CouponAdd(props) {
    return (
        <>
            <div className="mt-1">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="#">首頁</a>
                        </li>
                        <li className="breadcrumb-item " aria-current="page">
                            優惠券管理
                        </li>
                    </ol>
                </nav>
            </div>
            <h3>優惠券管理</h3>
            <hr />
            <div className="container">
                <p>優惠券名稱</p>
                <input type="text" value=""></input>
                <p>序號</p>
                <input type="text" value=""></input>
                <p>最低消費金額</p>
                <input type="text" value=""></input>
                <p>折扣金額</p>
                <input type="text" value=""></input>
                <p>優惠券使用時間</p>
                <div className="d-flex justify-content-start">
                    <input type="date"></input>
                    <p className="p-0 mx-2">~</p>
                    <input type="date"></input>
                </div>
                <p>限制使用者</p>
                <label>無</label>
                <input type="radio" value="no" />
                <label>有</label>
                <input type="radio" value="yes" />
                <input type="text" value="" placeholder="請輸入帳號"></input>
                <p>可使用次數</p>
                <input type="number"></input>
                <br />
                <button>確定新增</button>
            </div>
        </>
    );
}

export default CouponAdd;
