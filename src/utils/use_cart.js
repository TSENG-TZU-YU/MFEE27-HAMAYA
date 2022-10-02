import { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    //臨時購物車開關
    const [shopCartState, setShopCartState] = useState(false);

    //臨時購物車的狀態
    const [shoppingCart, setShoppingCart] = useState([]);

    const [linePay, setLinePay] = useState(false);
    return (
        <CartContext.Provider
            value={{
                shopCartState,
                setShopCartState,
                shoppingCart,
                setShoppingCart,
                linePay,
                setLinePay,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export function useCart() {
    return useContext(CartContext);
}
