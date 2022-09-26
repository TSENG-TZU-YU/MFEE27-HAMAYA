import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useCart } from '../utils/use_cart';
import './MainOutlet.css';

function MainOutlet(props) {
    const { shopCartState, setShopCartState, shoppingCart, setShoppingCart } =
        useCart();
    const [selectCourse, setSelectCourse] = useState(true);

    return (
        <div className="mainOutlet-height">
            <Outlet context={[selectCourse, setSelectCourse]} />
        </div>
    );
}

export default MainOutlet;
