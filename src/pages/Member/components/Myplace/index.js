import { useState, useEffect } from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';

function MyPlace(props) {
    const [setbread] = useOutletContext();

    return <Outlet context={[setbread]} />;
}

export default MyPlace;
