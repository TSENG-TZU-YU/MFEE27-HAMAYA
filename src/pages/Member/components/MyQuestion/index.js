import { useState, useEffect } from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';
import './index.css';

function MyQuestion(props) {
    const [setbread] = useOutletContext();
    return <Outlet context={[setbread]} />;
}

export default MyQuestion;
