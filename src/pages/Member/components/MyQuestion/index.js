import { useState, useEffect } from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';
import './index.css';

function MyQuestion(props) {
    const [setbread] = useOutletContext();
    // const [myQuestion, setMyQuestion] = useState([
    //     [
    //         {
    //             id: '',
    //             user_id: '',
    //             name: '',
    //             email: '',
    //             phone: '',
    //             user_q_category: '',
    //             title: '',
    //             comment: '',
    //             user_reply_state: '',
    //             create_time: '',
    //             update_time: '',
    //         },
    //     ],
    // ]);

    return <Outlet context={[setbread]} />;
}

export default MyQuestion;
