import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './PaginationBar.scss';
// import { ReactComponent as arrowLeft } from '../../../src/assets/svg/arrow-left.svg';
// import { ReactComponent as arrowRight } from '../../../src/assets/svg/arrow-right.svg';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

function PaginationBar(props) {
    const { pageNow, setPageNow, pageTotal } = props;
    return (
        <>
            <div className="pagination">
                <div
                    className="pagination-btn cursor-pointer"
                    onClick={() => {
                        setPageNow(1);
                    }}
                >
                    <FiChevronLeft />
                </div>
                {Array(pageTotal)
                    .fill(1)
                    .map((v, i) => {
                        return (
                            <div
                                key={uuidv4()}
                                className={`pagination-btn cursor-pointer ${
                                    i + 1 === pageNow ? 'pagination-active' : ''
                                }`}
                                onClick={() => {
                                    setPageNow(i + 1);
                                }}
                            >
                                {i + 1}
                            </div>
                        );
                    })}
                <div
                    className="pagination-btn cursor-pointer"
                    onClick={() => {
                        setPageNow(pageTotal);
                    }}
                >
                    <FiChevronRight />
                </div>
            </div>
        </>
    );
}

export default PaginationBar;
