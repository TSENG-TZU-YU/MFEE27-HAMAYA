import React from 'react';
import './index.scss';
import { ReactComponent as Search } from '../../assets/svg/search.svg';
import InputIME from '../InputIME';

function SearchBar(props) {
    const { searchWord, setSearchWord } = props;
    return (
        <div className="input-group bg-main-light-color searchBar-box">
        {/* 桌機、手機的輸入會無法同步 要用input*/}
            <InputIME
                type="text"
                className="form-control"
                placeholder="關鍵字搜尋"
                value={searchWord}
                onChange={(e) => setSearchWord(e.target.value)}
            />
            <span className="search-btn position-relative cursor-pointer">
                <Search className="search-icon-color position-absolute top-50 start-50 translate-middle" />
            </span>
        </div>
    );
}

export default SearchBar;
