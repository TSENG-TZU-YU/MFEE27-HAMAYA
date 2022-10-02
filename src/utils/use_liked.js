import { createContext, useContext, useState } from 'react';

export const LikedContext = createContext();

export const LikedProvider = ({ children }) => {
    // 收藏樣式
    const [favToggled, setFavToggled] = useState(null);
    // 收藏資料
    const [favProducts, setFavProducts] = useState([]);
    return (
        <LikedContext.Provider
            value={{
                favToggled,
                setFavToggled,
                favProducts,
                setFavProducts,
            }}
        >
            {children}
        </LikedContext.Provider>
    );
};

export function useLiked() {
    return useContext(LikedContext);
}
