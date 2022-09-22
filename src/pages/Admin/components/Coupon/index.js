import { Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './index.css';


function Coupon(props) {
    return (
        <div>
            <Outlet context={[]} />
        </div>
    );
}

export default Coupon;
