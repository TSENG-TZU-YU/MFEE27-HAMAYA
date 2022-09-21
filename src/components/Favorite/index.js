import React, { useState, useEffect } from 'react';
import { API_URL } from '../../utils/config';
import axios from 'axios';

// 樣式
import './index.scss';

// 圖檔
import { ReactComponent as HeartLine } from '../../assets/svg/favorite_defaut.svg';
import { ReactComponent as HeartFill } from '../../assets/svg/favorite_check.svg';

function Favorite(props) {
    const { toggled, user_id, product_id, category_id } = props;

    console.log(toggled);
    // console.log(props);
    let itemsData = { user_id, product_id, category_id };

    // 新增收藏
    const handleAddFavorite = (itemsData) => {
        if (itemsData.user_id !== null && itemsData.user_id !== '') {
            setItemsData(itemsData);
            async function setItemsData(itemsData) {
                try {
                    let response = await axios.post(
                        `${API_URL}/member/mybucketlist`,
                        [itemsData]
                    );
                    alert(response.data.message);
                } catch (err) {
                    console.log(err.response.data.message);
                }
            }
            // setFavoriteToggled(true);
        } else {
            alert('請先登入');
        }
    };

    return (
        <div
            className="favorite-box bg-accent-light-color rounded-circle position-relative"
            onClick={(e) => {
                e.preventDefault();
                handleAddFavorite(itemsData);
            }}
        >
            {toggled === 1 ? (
                <HeartFill className="favorite-icon-color favorite-icon-size position-absolute top-50 start-50 translate-middle" />
            ) : (
                <HeartLine className="favorite-icon-color favorite-icon-size position-absolute top-50 start-50 translate-middle" />
            )}
        </div>
    );
}

export default Favorite;
