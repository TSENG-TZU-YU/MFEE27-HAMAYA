import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { brandTagsTypes } from '../constants';

function FilterBar(props) {
    const [activeColorTags, setActiveColorTags] = useState('');
    const { setBrandTags, colorTags, setColorTags, selectColorTags } = props;
    return (
        <div className="products-filter-menu position-absolute">
            <div className="p-3">
                <p className="mb-0 accent-light-color">品牌</p>
                {brandTagsTypes.map((value, index) => {
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
                    {colorTags.map((value, index) => {
                        return (
                            <div
                                key={Math.random()
                                    .toString(36)
                                    .replace('0.', '')}
                                className={`cursor-pointer products-filter-color-box ${
                                    // 選取到的顏色方框要加 active
                                    activeColorTags === value.color
                                        ? 'products-filter-color-box-active'
                                        : ''
                                }
                                ${
                                    // 未選取顏色的狀態顏色方框
                                    '' === value.color
                                        ? 'products-filter-no-color-box'
                                        : ''
                                }
                                ${
                                    // 初始未選取顏色時的顏色方框要加 active
                                    activeColorTags === '' && value.color === ''
                                        ? 'products-filter-color-box-active products-filter-no-color-box'
                                        : ''
                                }
                                `}
                                style={{ backgroundColor: `${value.color}` }}
                                onClick={() => {
                                    setColorTags(value.color);
                                    setActiveColorTags(value.color);
                                }}
                            ></div>
                        );
                    })}
                </div>
                <p className="mt-4 mb-2 accent-light-color">價格</p>
                <div className="products-slider mb-1">
                    <Slider
                        className="slider"
                        range
                        min={0}
                        max={1000}
                        defaultValue={[3, 10]}
                    />
                </div>
                <p className="accent-light-color small m-0">NT $0 ~ 1000</p>
                <button className="products-btn-border-none products-filter-btn mt-3 w-100">
                    篩選
                </button>
            </div>
        </div>
    );
}

export default FilterBar;
