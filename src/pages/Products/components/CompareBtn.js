import React from 'react';
import compareBtn from '../../../assets/ProductsImg/icon/compare_btn.svg';

function CompareBtn(props) {
    const { toggleProductCompare } = props;
    // 加入比較的商品數量
    let compareCount = JSON.parse(localStorage.getItem('compare')).length;
    return (
        <>
            <img
                src={compareBtn}
                alt="compareBtn"
                className="d-blok compare-btn m-4 cursor-pointer"
                onClick={toggleProductCompare}
            />
            <div className="compare-quantity">{compareCount}</div>
        </>
    );
}

export default CompareBtn;
