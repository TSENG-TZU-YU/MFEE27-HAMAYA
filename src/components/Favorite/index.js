import React, { useState } from 'react';
import { API_URL } from '../../utils/config';
import axios from 'axios';

// 樣式
import './index.scss';

// 圖檔
import { ReactComponent as HeartLine } from '../../assets/svg/favorite_defaut.svg';
import { ReactComponent as HeartFill } from '../../assets/svg/favorite_check.svg';

function Favorite(props) {
    const { user_id, product_id, category_id, toggled } = props;
    const [favoriteToggled, setFavoriteToggled] = useState(toggled);
    const [resProducts, setResProducts] = useState([]);
    const itemsData = { user_id, product_id, category_id };
    const handleAddFavorite = (itemsData) => {
        if (itemsData.user_id !== null && itemsData.user_id !== '') {
            setFavoriteToggled(!favoriteToggled);
            setItemsData(itemsData);
            async function setItemsData(itemsData) {
                try {
                    let res = await axios.post(
                        `${API_URL}/member/mybucketlist`,
                        [itemsData]
                    );
                    alert(res.data.message);
                    setResProducts(res.data.resProducts);
                } catch (err) {
                    console.log(err.res.data.message);
                }
            }
        }
    };
    console.log('resProducts', resProducts);
    return (
        <div className="favorite-box bg-accent-light-color rounded-circle position-relative">
            {favoriteToggled ? (
                <HeartFill
                    className="favorite-icon-color favorite-icon-size position-absolute top-50 start-50 translate-middle"
                    onClick={(e) => {
                        e.preventDefault();
                        handleAddFavorite(itemsData);
                    }}
                />
            ) : (
                <HeartLine
                    className="favorite-icon-color favorite-icon-size position-absolute top-50 start-50 translate-middle"
                    onClick={(e) => {
                        e.preventDefault();
                        handleAddFavorite(itemsData);
                    }}
                />
            )}
        </div>
    );
}

export default Favorite;
