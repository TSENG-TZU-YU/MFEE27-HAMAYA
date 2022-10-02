import React from 'react';

function MobileCategoryNav(props) {
    const { categorySub, categoryMain, navigate, url, setUrl } = props;
    return (
        <>
            {/* 商品類別選項 */}
            <select
                className="products-filter-category-select products-filter-category-scroll-style"
                value={url}
                onChange={(e) => {
                    setUrl(e.target.value);
                    const newUrl = e.target.value;
                    navigate(newUrl);
                }}
            >
                <optgroup>
                    <option value="/products">最新商品</option>
                </optgroup>
                {categoryMain.map((value) => {
                    return (
                        <optgroup
                            key={Math.random().toString(36).replace('1.', '')}
                        >
                            <option value={`/products?main_id=${value.id}`}>
                                {value.name}
                            </option>

                            {categorySub.map((item) => {
                                if (Number(item.mainId) === value.id) {
                                    return (
                                        <option
                                            className="products-sub-category"
                                            key={Math.random()
                                                .toString(36)
                                                .replace('3.', '')}
                                            value={`/products?sub_id=${item.subId}`}
                                        >
                                            {item.subName}
                                        </option>
                                    );
                                }
                            })}
                        </optgroup>
                    );
                })}
            </select>
            {/* 商品類別選項 end */}
        </>
    );
}

export default MobileCategoryNav;
