import React, { useEffect } from 'react';
import './index.scss';
import axios from 'axios';
import { API_URL } from '../../utils/config';

// 元件
import { successToast, errorToast } from '../Alert';

// 圖黨
import { ReactComponent as HeartLine } from '../../assets/svg/favorite_defaut.svg';
import { ReactComponent as HeartFill } from '../../assets/svg/favorite_check.svg';

//會員
import { useAuth } from '../../utils/use_auth';

// 收藏
import { useLiked } from '../../utils/use_liked';

function FavoriteTest(props) {
    const { itemsData, favProducts, setFavProducts } = props;
    //會員
    const { member, setMember, isLogin, setIsLogin } = useAuth();

    // 新增收藏
    const handleAddFavorite = (itemsData) => {
        console.log(itemsData);
        if (itemsData.user_id !== null && itemsData.user_id !== '') {
            setItemsData(itemsData);
            async function setItemsData(itemsData) {
                try {
                    let response = await axios.post(
                        `${API_URL}/member/mybucketlist`,
                        [itemsData]
                    );
                    let products = response.data.class.map(
                        (item) => item.product_id
                    );
                    successToast(response.data.message, '關閉');
                    setFavProducts(products);
                } catch (err) {
                    errorToast(err.response.data.message, '關閉');
                }
            }
        }
    };

    // 取消收藏
    async function handleRemoveFavorite(product_id) {
        console.log('handleRemoveFavorite', product_id);
        try {
            let response = await axios.delete(
                `${API_URL}/member/mybucketlist/${product_id}`,
                {
                    withCredentials: true,
                }
            );
            let products = response.data.class.map((item) => item.product_id);
            successToast(response.data.message, '關閉');
            setFavProducts(products);
        } catch (err) {
            errorToast(err.response.data.message, '關閉');
        }
    }

    return (
        <>
            {member.id ? (
                favProducts.includes(itemsData.product_id) ? (
                    <div
                        className="favorite-box bg-accent-light-color rounded-circle position-relative"
                        onClick={(e) => {
                            e.preventDefault();
                            handleRemoveFavorite(itemsData.product_id);
                        }}
                    >
                        <HeartFill className="favorite-icon-color favorite-icon-size position-absolute top-50 start-50 translate-middle" />
                    </div>
                ) : (
                    <div
                        className="favorite-box bg-accent-light-color rounded-circle position-relative"
                        onClick={(e) => {
                            e.preventDefault();
                            handleAddFavorite({
                                user_id: member.id,
                                product_id: itemsData.product_id,
                                category_id: itemsData.category_id,
                            });
                        }}
                    >
                        <HeartLine className="favorite-icon-color favorite-icon-size position-absolute top-50 start-50 translate-middle" />
                    </div>
                )
            ) : (
                ''
            )}
        </>
    );
}

export default FavoriteTest;
