import React from 'react';
import { sortByTypes } from '../constants';

function MobileSortBar(props) {
    const { sortBy, setSortBy, setSortToggled } = props;
    return (
        <div className="products-sort-menu position-absolute">
            <ul className="p-2">
                {sortByTypes.map((item, index) => {
                    return (
                        <li
                            key={index}
                            onClick={(e) => {
                                setSortBy(item.id);
                                setSortToggled(false);
                            }}
                        >
                            {item.name}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default MobileSortBar;
