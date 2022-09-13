import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

function FilterBar(props) {
    const { brandTags, setBrandTags, colorTags, setColorTags } = props;
    console.log(colorTags);
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
                <p className="mt-4 mb-0 accent-light-color">價格</p>
                {/* <input className="form-range" type="range" max="100" min="0" /> */}
                <div className="products-slider">
                    <Slider className="slider" range min={0} max={20} defaultValue={[3, 10]} />
                </div>
                <p className="accent-light-color small m-0">NT$0 ~ 190,000</p>
                <button className="products-btn-border-none products-filter-btn mt-3 w-100">
                    篩選
                </button>
            </div>
        </div>
    );
}

export default FilterBar;
