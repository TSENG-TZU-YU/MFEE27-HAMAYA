import {
    Link,
    useOutletContext,
    useLocation,
    useNavigate,
} from 'react-router-dom';
function Product(props) {
    return (
        <>
            <div className="mt-1">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to="/admin">首頁</Link>
                        </li>
                        <li className="breadcrumb-item " aria-current="page">
                            商品管理
                        </li>
                    </ol>
                </nav>
            </div>
            <h3>商品管理</h3>
            <hr />
            <div>Content</div>
        </>
    );
}

export default Product;
