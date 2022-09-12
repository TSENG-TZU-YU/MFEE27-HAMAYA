import React from 'react';

function FilterBar(props) {
    const { brandTagsTypes, brandTags, setBrandTags } = props;
    return (
        <div className="mobile-products-filter-menu">
            <div className="p-3">
                <p className="mb-2 accent-light-color">品牌</p>
                <div className="row g-1 ">
                    {brandTags.map((value, index) => {
                        return (
                            <div
                                className="col-6 form-check products-form-check"
                                key={index}
                            >
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    defaultValue
                                />
                                <label className="form-check-label">
                                    {value.name}
                                </label>
                            </div>
                        );
                    })}
                </div>
                <p className="mt-4 mb-0 accent-light-color">顏色</p>
                <div className="d-flex mt-2">
                    <div className="cursor-pointer products-filter-color-box products-filter-no-color-box products-filter-color-box-active"></div>
                    <div className="cursor-pointer products-filter-color-box color"></div>
                </div>
                <p className="mt-4 mb-0 accent-light-color">價格</p>
                <input className="form-range" type="range" max="100" min="0" />
                <p className="accent-light-color m-0">NT$0 ~ 190,000</p>
                <button className="products-btn-border-none products-filter-btn mt-3 w-100">
                    篩選
                </button>
            </div>
        </div>
    );
}

export default FilterBar;
