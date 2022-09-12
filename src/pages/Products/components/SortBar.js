import React from 'react';

function SortBar(props) {
    const { sortBy, setSortBy } = props;
    return (
        <div className="products-sort-menu">
            <ul className="p-3">
                <li>價格：低到高</li>
                <li>價格：高到低</li>
                <li>上架：新到舊</li>
                <li>上架：舊到新</li>
            </ul>
        </div>
    );
}

export default SortBar;
