function MemberListMobile(props) {
    return (
        <div className="col-2 d-md-none">
            <select>
                <option value="1-10">會員資料</option>
                <option value="10-15">我的課程</option>
                <option value="15-20">我的收藏</option>
                <option value="20+">訂單查詢</option>
                <option value="20+">我的優惠券</option>
                <option value="20+">我的詢問</option>
            </select>
        </div>
    );
}

export default MemberListMobile;
