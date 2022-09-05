import React from 'react';
import './Car.scss';

// 圖檔
import shop_car from '../../assets/svg/add_shopping_cart.svg';

function Car(props) {
    function handleAddShop(e) {
        console.log('加入購物車');
    }
    return (
        <div
            className="add-car d-flex justify-content-center align-items-center"
            onClick={handleAddShop}
        >
            <img className="me-2" src={shop_car} alt="shop_car" />
            <small className="car-color">加入購物車</small>
        </div>
    );
}

export default Car;
