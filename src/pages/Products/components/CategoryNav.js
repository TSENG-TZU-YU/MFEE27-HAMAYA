import React from 'react';
import { Link } from 'react-router-dom';
import { categoryMainTypes as categoryMain } from '../constants';

function CategoryNav(props) {
    const { categorySub } = props;
    return (
        <>
            {/* 桌機 商品類別選項 */}
            <div className="col-2 d-none d-md-block">
                <ul className="products-category-navbar">
                    <li className="products-main-category">
                        <Link to="/products" className="accent-color">
                            最新商品
                        </Link>
                    </li>
                    {categoryMain.map((value) => {
                        return (
                            <div
                                key={Math.random()
                                    .toString(36)
                                    .replace('0.', '')}
                            >
                                <li className="products-main-category">
                                    <Link
                                        to={`/products?main_id=${value.id}`}
                                        className="accent-color"
                                    >
                                        {value.mainName}
                                    </Link>
                                </li>
                                {categorySub.map((item) => {
                                    if (Number(item.mainId) === value.id) {
                                        return (
                                            <ul
                                                className="products-sub-category"
                                                key={Math.random()
                                                    .toString(36)
                                                    .replace('2.', '')}
                                            >
                                                <li>
                                                    <Link
                                                        to={`/products?sub_id=${item.subId}`}
                                                    >
                                                        {item.subName}
                                                    </Link>
                                                </li>
                                            </ul>
                                        );
                                    }
                                })}
                            </div>
                        );
                    })}
                </ul>
            </div>
            {/* 桌機 商品類別選項 end */}
        </>
    );
}

export default CategoryNav;
