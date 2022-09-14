import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import {
    brandTagsTypes as brandTags,
    colorTagsTypes as colorTags,
} from '../constants';

function FilterBar(props) {
    const { priceMax, setPriceMax, priceMin, setPriceMin } = props;
    return (
        <div className="products-filter-menu position-absolute">
            <div className="p-3">
                <p className="mb-0 accent-light-color">品牌</p>
                {brandTags.map((value, index) => {
                    return (
                        <div
                            className="form-check products-form-check"
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
                <p className="mt-4 mb-0 accent-light-color">顏色</p>
                <div className="d-flex flex-wrap mt-2">
                    <div className="cursor-pointer products-filter-color-box products-filter-no-color-box "></div>
                    <div className="cursor-pointer products-filter-color-box color"></div>
                    {colorTags.map((value, index) => {
                        return (
                            <div
                                key={index}
                                className="cursor-pointer products-filter-color-box"
                                style={{ backgroundColor: `${value}` }}
                            ></div>
                        );
                    })}
                </div>
                <p className="mt-4 mb-2 accent-light-color">價格</p>
                <div className="products-slider mb-1">
                    <Slider
                        className="slider"
                        range
                        min={priceMin}
                        max={priceMax}
                        defaultValue={[3, 10]}
                    />
                </div>
                <p className="accent-light-color small m-0">
                    NT${priceMin} ~ {priceMax}
                </p>
                <button className="products-btn-border-none products-filter-btn mt-3 w-100">
                    篩選
                </button>
            </div>
        </div>
    );
}

export default FilterBar;
