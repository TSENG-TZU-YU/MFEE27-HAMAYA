import { createContext, useContext, useState } from 'react';

export const CompareContext = createContext();

export const CompareProvider = ({ children }) => {
    //比較頁商品的狀態
    const [compareProduct, setCompareProduct] = useState([]);
    return (
        <CompareContext.Provider
            value={{
                compareProduct,
                setCompareProduct,
            }}
        >
            {children}
        </CompareContext.Provider>
    );
};

export function useCart() {
    return useContext(CompareContext);
}
