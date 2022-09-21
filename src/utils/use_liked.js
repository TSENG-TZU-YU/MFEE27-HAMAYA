import { createContext, useContext, useState } from 'react';

export const LikedContext = createContext();

export const LikedProvider = ({ children }) => {
    // 收藏樣式
    const [favoriteToggled, setFavoriteToggled] = useState(null);
    // 收藏資料
    const [favoriteData, setFavoriteData] = useState([]);
    return (
        <LikedContext.Provider
            value={{
                favoriteToggled,
                setFavoriteToggled,
                favoriteData,
                setFavoriteData,
            }}
        >
            {children}
        </LikedContext.Provider>
    );
};

export function useLiked() {
    return useContext(LikedContext);
}
