import { createContext, useContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    //臨時購物車開關
    const [shopCartState, setShopCartState] = useState(false);
    //測試用
    // const testShoppingCart = [
    //     {
    //         amount: 1,
    //         category_id: 'A',
    //         image: 'StageCustomBirch-01.webp',
    //         name: 'Stage-Custom-Birch A345',
    //         price: 42000,
    //         product_id: 'A345',
    //         shipment: 1,
    //         spec: '材質:樺木',
    //     },
    //     {
    //         amount: 1,
    //         category_id: 'A',
    //         image: 'mars.jpeg',
    //         name: 'Stage-Custom-Birch A310',
    //         price: 42000,
    //         product_id: 'A310',
    //         shipment: 1,
    //         spec: '材質:樺木',
    //     },
    // ];
    //臨時購物車的狀態
    const [shoppingCart, setShoppingCart] = useState([]);
    return (
        <CartContext.Provider
            value={{
                shopCartState,
                setShopCartState,
                shoppingCart,
                setShoppingCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export function useCart() {
    return useContext(CartContext);
}
