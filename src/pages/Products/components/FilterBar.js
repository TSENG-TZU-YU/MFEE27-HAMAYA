import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { v4 as uuidv4 } from 'uuid';

function FilterBar(props) {
    const {
        colorTags,
        setColorTags,
        selectedPrice,
        setSelectedPrice,
        maxPrice,
        changeChecked,
        brandTags,
        activeColorTags,
        setActiveColorTags,
    } = props;
    return (
        <div className="products-filter-menu position-absolute">
            <div className="p-3">
                <p className="mb-0 accent-light-color">品牌</p>
                {brandTags.map((value, index) => {
                    return (
                        <div
                            className="form-check products-form-check"
                            key={Math.random().toString(36).replace('4.', '')}
                        >
                            <input
                                className="form-check-input"
                                type="checkbox"
                                checked={value.checked}
                                onChange={() => changeChecked(value.id)}
                            />
                            <label className="form-check-label">
                                {value.brandName}
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
                    <div className="input-group">
                        <Slider
                            className="slider"
                            range
                            onChange={(value) => setSelectedPrice(value)}
                            value={selectedPrice}
                            min={0}
                            max={maxPrice}
                            trackStyle={{
                                height: '5px',
                                backgroundColor: '#00323d',
                            }}
                            railStyle={{
                                height: '5px',
                                backgroundColor: '#bababa',
                            }}
                            handleStyle={{
                                backgroundColor: '#767676',
                                border: 'none',
                                opacity: '1',
                                boxShadow: '0 0 0 2px #bababa',
                            }}
                        />
                    </div>
                </div>
                <p className="accent-light-color m-0">
                    NT ${String(selectedPrice[0])} ~ {String(selectedPrice[1])}
                </p>
            </div>
        </div>
    );
}

export default FilterBar;
