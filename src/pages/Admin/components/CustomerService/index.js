import { Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './index.css';

function CustomerService(props) {
    const [listActive, setListActive] = useState(1);
    return (
        <>
            <div className="mt-1">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to="/admin">首頁</Link>
                        </li>
                        <li className="breadcrumb-item " aria-current="page">
                            客服系統
                        </li>
                    </ol>
                </nav>
            </div>
            <div className="d-flex justify-content-center align-items-center QAlist">
                <h3 className="title1">客服系統</h3>
                <Link
                    to=""
                    onClick={() => {
                        setListActive(1);
                    }}
                >
                    <div className={listActive === 1 ? 'px-2 active' : 'px-2'}>
                        一般問答
                    </div>
                </Link>
                <Link
                    to="orderqa"
                    onClick={() => {
                        setListActive(2);
                    }}
                >
                    <div className={listActive === 2 ? 'px-2 active' : 'px-2'}>
                        訂單問答
                    </div>
                </Link>
                <Link
                    to="placeqa"
                    onClick={() => {
                        setListActive(3);
                    }}
                >
                    <div className={listActive === 3 ? 'px-2 active' : 'px-2'}>
                        場地問答
                    </div>
                </Link>
            </div>
            <hr />
            <div>
                <Outlet context={[]} />
            </div>
        </>
    );
}

export default CustomerService;
