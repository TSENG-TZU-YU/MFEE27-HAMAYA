import { Outlet } from 'react-router-dom';
// import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

function SubOutlet(props) {
    const [selectCourse, setSelectCourse] = useOutletContext(null);

    return <Outlet context={[selectCourse, setSelectCourse]} />;
}

export default SubOutlet;
