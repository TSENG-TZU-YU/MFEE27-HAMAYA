import React, { useState } from 'react';

// 樣式
import './index.scss';

// 圖檔
import { ReactComponent as HeartLine } from '../../assets/svg/favorite_defaut.svg';
import { ReactComponent as HeartFill } from '../../assets/svg/favorite_check.svg';

function Favorite() {
    const [favoriteToggled, setFavorite] = useState(false);
    const toggle = (e) => {
        e.preventDefault();
        setFavorite(!favoriteToggled);
    };
    return (
        <div className="favorite-box bg-accent-light-color rounded-circle position-relative">
            {favoriteToggled ? (
                <HeartFill
                    className="favorite-icon-color favorite-icon-size position-absolute top-50 start-50 translate-middle"
                    onClick={toggle}
                />
            ) : (
                <HeartLine
                    className="favorite-icon-color favorite-icon-size position-absolute top-50 start-50 translate-middle"
                    onClick={toggle}
                />
            )}
        </div>
    );
}

export default Favorite;
