import { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [shopItemCart, setShopItemCart] = useState(false);

    return (
        <CartContext.Provider value={{ shopItemCart, setShopItemCart }}>
            {children}
        </CartContext.Provider>
    );
};

export function useCart() {
    return useContext(CartContext);
}
