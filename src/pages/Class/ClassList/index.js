import React, { useState } from 'react';
import './index.scss';
import { useOutletContext } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// 子頁面
import AdultCourse from './AdultCourse';
import ChildrenCourse from './ChildrenCourse';

// 元件
import Slider from '../../../components/Slider/Slider';

// 圖檔
import filterIcon from '../../../assets/svg/filter_alt.svg';
import sort from '../../../assets/svg/sort.svg';
import search from '../../../assets/svg/search.svg';

function ClassList(props) {
    
    const [selectCourse, setSelectCourse] = useOutletContext();
    console.log('classList', selectCourse);

    // Toggled
    const [filterToggled, setFilterToggled] = useState(false);
    const toggleFilterTrueFalse = () => setFilterToggled(!filterToggled);
    console.log('toggle', toggleFilterTrueFalse);

    const [sortToggled, setSortToggled] = useState(false);
    const toggleSortTrueFalse = () => setSortToggled(!sortToggled);

    const [lastPage] = useState(3);
    const [page, setPage] = useState(3);

    // 製作分頁按鈕
    const getPage = () => {
        let pages = [];
        for (let i = 1; i < lastPage; i++) {
            //要從陣列後面依序放頁數
            pages.push(
                <li
                    className="pages"
                    style={{
                        backgroundColor: page === i ? '#00323d' : '',
                        color: page === i ? '#f2f2f2' : '#6a777a',
                    }}
                    key={i}
                    onClick={(e) => {
                        setPage(i);
                    }}
                >
                    {i}
                </li>
            );
        }
        return pages;
    };

    return (
        <Container>
            <div className="d-flex mt-5 justify-content-between align-items-center">
                <nav className="d-flex">
                    <Link to="/">
                        <p className="mb-0">首頁</p>
                    </Link>
                    /
                    <Link to="/class">
                        <p className="mb-0">音樂教育</p>
                    </Link>
                    /
                    <Link to="/class/list">
                        <p className="mb-0 ">
                            {selectCourse ? '成人課程' : '兒童課程'}
                        </p>
                    </Link>
                </nav>
                <nav className="d-flex  ">
                    <div className="d-flex me-5 justify-content-between align-items-center position-relative">
                        <p className="mb-0">進階篩選</p>
                        <img
                            className="ms-1  "
                            src={filterIcon}
                            alt="filterIcon"
                            onClick={toggleFilterTrueFalse}
                        ></img>
                        <div className={filterToggled ? 'filter-active' : ''}>
                            {filterToggled ? (
                                <div className=" ms-3 mt-1 ">
                                    <p
                                        className="toggled-p mb-0 "
                                        style={{ color: '#f2f2f2' }}
                                    >
                                        類型
                                    </p>
                                    <select className="select-class mt-1">
                                        <option>所有樂器</option>
                                    </select>
                                    <p
                                        className="toggled-p mb-0  mt-1 mb-1"
                                        style={{ color: '#f2f2f2' }}
                                    >
                                        價格
                                    </p>
                                    <Slider />
                                    <button className="filter-btn-class mt-3 mb-3">
                                        篩選
                                    </button>
                                </div>
                            ) : (
                                ''
                            )}
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center position-relative">
                        <p className="mb-0">商品排序</p>
                        <img
                            className=" ms-1 "
                            src={sort}
                            alt="Sort"
                            onClick={toggleSortTrueFalse}
                        ></img>
                        <div className={sortToggled ? 'sort-active' : ''}>
                            {sortToggled ? (
                                <div className="sort-menu-class ">
                                    <ul className="p-2">
                                        <li>價格：低到高</li>
                                        <li>價格：高到低</li>
                                        <li>上架：新到舊</li>
                                        <li>上架：舊到新</li>
                                    </ul>
                                </div>
                            ) : (
                                ''
                            )}
                        </div>
                    </div>
                    <img className="ms-5 " src={search} alt="search"></img>
                </nav>
            </div>
            <Row className="text-center mt-5 pt-5 mb-5 ">
                <button
                    className={`cursor-pinter col-6 ${
                        selectCourse ? 'vector5-Btn-active' : 'vector5-Btn'
                    }`}
                    onClick={() => {
                        setSelectCourse(true);
                    }}
                >
                    <h4>成人課程</h4>
                </button>

                <button
                    className={`cursor-pinter col-6 ${
                        selectCourse ? 'vector5-Btn' : 'vector5-Btn-active'
                    }`}
                    onClick={() => {
                        setSelectCourse(false);
                    }}
                >
                    <h4>兒童課程</h4>
                </button>
            </Row>

            {selectCourse ? <AdultCourse /> : <ChildrenCourse />}
            <ul className="text-center">{getPage()}</ul>
        </Container>
    );
}

export default ClassList;
