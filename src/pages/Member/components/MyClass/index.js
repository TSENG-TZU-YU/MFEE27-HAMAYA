import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom'; //抓取Outlet的props
import { Row } from 'react-bootstrap';
import './index.scss';
import ClassStart from './ClassStart';

function MyClass(props) {
    const [setbread] = useOutletContext(); //此CODE為抓取麵包削setbread
    useEffect(() => {
        setbread('我的課程'); //載入頁面時 設定麵包削
    }, []);
    const [selectCourse, setSelectCourse] = useState(true);
    return (
        <div className="col-12 col-md-8 col-lg-9">
            {/*此className為RWD設定請勿更動*/}
            <h4> 我的課程</h4>
            <Row className="text-center mt-5  mb-5 ">
                <button
                    className={`cursor-pinter col-6 ${
                        selectCourse ? 'vector5-Btn-active' : 'vector5-Btn'
                    }`}
                    onClick={() => {
                        setSelectCourse(true);
                    }}
                >
                    <h4>開課中課程</h4>
                </button>
                <button
                    className={`cursor-pinter col-6 ${
                        selectCourse ? 'vector5-Btn' : 'vector5-Btn-active'
                    }`}
                    onClick={() => {
                        setSelectCourse(false);
                    }}
                >
                    <h4>已完成課程</h4>
                </button>
                <div className="mt-5">{selectCourse ? <ClassStart /> : ''}</div>
            </Row>
        </div>
    );
}
export default MyClass;
