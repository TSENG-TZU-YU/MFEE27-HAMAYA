import { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    //臨時購物車開關
    const [shopCartState, setShopCartState] = useState(false);
    //
    // const [shopProductItem, setShopProductItem] = useState({
    //     category_id: '',
    //     product_id: '',
    //     name: '',
    //     image: '',
    //     shipment: '',
    //     price: '',
    //     spec: '',
    // });
    //
    const [productArr, setProductArr] = useState([]);
    const [shoppingCart, setShoppingCart] = useState([]);
    return (
        <CartContext.Provider
            value={{
                shopCartState,
                setShopCartState,
                productArr,
                setProductArr,
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
