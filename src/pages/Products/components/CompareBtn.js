import React, { useState, useEffect } from 'react';
import compareBtn from '../../../assets/ProductsImg/icon/compare_btn.svg';

function CompareBtn(props) {
    const { toggleProductCompare, compareProduct } = props;
    const [compareCount, setCompareCount] = useState(0);
    const getCompareCount = () => {
        if (compareProduct !== null) {
            setCompareCount(compareProduct.length);
        }
    };
    useEffect(() => {
        getCompareCount();
    }, [compareProduct]);
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
