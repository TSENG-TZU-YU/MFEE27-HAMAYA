import React from 'react';
import { RiAddFill } from 'react-icons/ri';
import { RiSubtractFill } from 'react-icons/ri';

function MyCartCount({ count, setCount }) {
    return (
        <>
            <button
                className="btn border-0"
                onClick={() => {
                    setCount(count <= 1 ? 1 : count - 1);
                }}
            >
                <RiSubtractFill size="20" />
            </button>
            <div className="countBox">{count}</div>
            <button
                className=" btn border-0"
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                <RiAddFill size="20" />
            </button>
        </>
    );
}

export default MyCartCount;
