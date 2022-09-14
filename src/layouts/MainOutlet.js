import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useCart } from '../utils/use_cart';

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
    const [selectCourse, setSelectCourse] = useState(null);
    // console.log('out', selectCourse);

    return <Outlet context={[selectCourse, setSelectCourse]} />;
}

export default MainOutlet;
