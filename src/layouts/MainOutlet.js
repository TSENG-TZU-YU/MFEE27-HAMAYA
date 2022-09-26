import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useCart } from '../utils/use_cart';
import './MainOutlet.css';

function MainOutlet(props) {
    const { shopCartState, setShopCartState, shoppingCart, setShoppingCart } =
        useCart();
    //TODO:cart 寫在這裡有問題
    //判斷localStorage是否有東西
    // useEffect(() => {
    //     let shoppingCartLocalCheck = JSON.parse(
    //         localStorage.getItem('shoppingCart')
    //     );
    //     if (shoppingCartLocalCheck.length !== 0) {
    //         setShopCartState(true);
    //         setShoppingCart(shoppingCartLocalCheck);
    //     }
    // }, []);
    const [selectCourse, setSelectCourse] = useState(true);

    return (
        <div className="test">
            <Outlet context={[selectCourse, setSelectCourse]} />;
        </div>
    );
}

export default MainOutlet;
