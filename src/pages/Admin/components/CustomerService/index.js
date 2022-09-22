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
                            <a href="#">首頁</a>
                        </li>
                        <li className="breadcrumb-item " aria-current="page">
                            客服系統
                        </li>
                    </ol>
                </nav>
            </div>
            <h3>客服系統</h3>
            <hr/>
            <div className="d-flex justify-content-center align-items-center QAlist">
                <Link
                    to=""
                    onClick={() => {
                        setListActive(1);
                    }}
                >
                    <div
                        className={
                            listActive === 1
                                ? 'm-1 py-1 px-2 active'
                                : 'm-1 py-1 px-2'
                        }
                    >
                        一般問答
                    </div>
                </Link>
                <Link
                    to="orderqa"
                    onClick={() => {
                        setListActive(2);
                    }}
                >
                    <div
                        className={
                            listActive === 2
                                ? 'm-1 py-1 px-2 active'
                                : 'm-1 py-1 px-2'
                        }
                    >
                        訂單問答
                    </div>
                </Link>
                <Link
                    to="placeqa"
                    onClick={() => {
                        setListActive(3);
                    }}
                >
                    <div
                        className={
                            listActive === 3
                                ? 'm-1 py-1 px-2 active'
                                : 'm-1 py-1 px-2'
                        }
                    >
                        場地問答
                    </div>
                </Link>
            </div>
            <div>
                <Outlet context={[]} />
            </div>
        </>
    );
}

export default CustomerService;
