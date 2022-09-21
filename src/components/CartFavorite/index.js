import React, { useState } from 'react';

// 樣式
import './index.scss';

// 圖檔
import { ReactComponent as HeartLine } from '../../assets/svg/favorite_defaut.svg';
import { ReactComponent as HeartFill } from '../../assets/svg/favorite_check.svg';

function CartFavorite() {
    const [favoriteToggled, setFavoriteToggled] = useState(false);

    return (
        <>
            {favoriteToggled ? (
                <HeartFill
                    className="CartFavorite"
                    onClick={() => {
                        setFavoriteToggled(!favoriteToggled);
                    }}
                />
            ) : (
                <HeartLine
                    className="CartFavorite"
                    onClick={() => {
                        setFavoriteToggled(!favoriteToggled);
                    }}
                />
            )}
        </>
    );
}

export default CartFavorite;
