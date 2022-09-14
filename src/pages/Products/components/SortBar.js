import React from 'react';
import { sortByTypes } from '../constants';

function SortBar(props) {
    const { sortBy, setSortBy, setSortToggled } = props;
    return (
        <div className="products-sort-menu">
            <ul className="p-3">
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

export default SortBar;
