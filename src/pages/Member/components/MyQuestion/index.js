import { useState, useEffect } from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';
import './index.css';

function MyQuestion(props) {
    const [setbread,updetaQADetail] = useOutletContext();
    return <Outlet context={[setbread,updetaQADetail]} />;
}

export default MyQuestion;
