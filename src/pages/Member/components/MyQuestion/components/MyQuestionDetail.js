import { useState, useEffect } from 'react';
import {
    Link,
    useOutletContext,
    useNavigateuse,
    useLocation,
} from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../../../../utils/config';
import { useAuth } from '../../../../../utils/use_auth';
import { v4 as uuidv4 } from 'uuid';

function MyQuestionDetail(props) {
    const [setbread] = useOutletContext();
    const location = useLocation();
    const [myQuestion, setMyQuestion] = useState({
        myQuestionDetail: {
            id: '',
            user_id: '',
            name: '',
            email: '',
            phone: '',
            user_q_category: '',
            title: '',
            comment: '',
            user_reply_state: '',
            create_time: '',
            update_time: '',
        },
        
    });

    //讀取問答詳細
    async function myQuestionDetail(qaid) {
        try {
            let response = await axios.get(
                `${API_URL}/member/myquestion/detail?qaid=${qaid}`,
                {
                    withCredentials: true,
                }
            );
            console.log(response.data);

            setMyQuestion(response.data);
        } catch (err) {
            console.log(err.response.data);
            alert(err.response.data.message);
        }
    }

    useEffect(() => {
        let params = new URLSearchParams(location.search);
        let qaid = params.get('qaid');
        console.log(qaid);
        myQuestionDetail(qaid);
        // console.log(myQuestion);
    }, [location]);

    // const myQuestionDetail = myQuestion.fliter((data) => data.id = 2);
    // console.log(myQuestionDetail);
    return (
        <div className="col-12 col-md-8 col-lg-9  MyQuestionDetail">
            <div className="d-flex my-2">
                <h4 className="main-color ">問答詳細</h4>
            </div>
            <div className="row">
                <div className="col-12">
                    問答編號QA00{myQuestion.myQuestionDetail.id}{' '}
                    {myQuestion.myQuestionDetail.create_time}
                </div>
                <div className="col-12">
                    問題主旨{myQuestion.myQuestionDetail.title}{' '}
                </div>
                <div className="col-12">
                    問題類型{myQuestion.myQuestionDetail.user_q_category}
                </div>
                <div className="col-12">
                    回覆狀態{myQuestion.myQuestionDetail.user_reply_state}
                </div>
                <div className="col-12">
                    最後更新時間{myQuestion.myQuestionDetail.update_time}
                </div>
                <div className="col-12">
                    提問內容
                    <div></div>
                </div>
                
                <div className="col-12">進行回覆</div>
            </div>
        </div>
    );
}

export default MyQuestionDetail;
