import { Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './index.css';

function CustomerService(props) {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center QAlist">
                <Link to="" className="m-2 p-1">
                    一般問答
                </Link>
                <Link to="orderqa" className="m-2 p-1">
                    訂單問答
                </Link>
                <Link to="placeqa" className="m-2 p-1">
                    場地問答
                </Link>
            </div>
            <div>
                <Outlet context={[]} />
            </div>
        </>
    );
}

export default CustomerService;
