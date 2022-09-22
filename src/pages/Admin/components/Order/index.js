function Order(props) {
    return (
        <>
            <div className="mt-1">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="#">首頁</a>
                        </li>
                        <li className="breadcrumb-item " aria-current="page">
                            訂單管理
                        </li>
                    </ol>
                </nav>
            </div>
            <h3>訂單管理</h3>
            <hr/>
            <div>Content</div>
        </>
    );
}

export default Order;
