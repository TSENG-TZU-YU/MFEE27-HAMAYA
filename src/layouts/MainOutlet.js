import { Outlet } from 'react-router-dom';
import { useState } from 'react';

function MainOutlet(props) {
    const [selectCourse, setSelectCourse] = useState(null);
    // console.log('out', selectCourse);

    return <Outlet context={[selectCourse, setSelectCourse]} />;
}

export default MainOutlet;
