import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import MemberListTable from './components/MemberListTable';
import MemberListMobile from './components/MemberListMobile';
function Members(props) {
    const [bread, setbread] = useState('');
    return (
        <div className="container">
            <div className="mt-2">
                <nav aria-label="breadcrumb ">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <a href="/">首頁</a>
                        </li>
                        <li class="breadcrumb-item">
                            <a href="member">會員專區</a>
                        </li>
                        <li class="breadcrumb-item " aria-current="page">
                            {bread}
                        </li>
                    </ol>
                </nav>
            </div>
            <MemberListMobile />
            <div className="row">
                <MemberListTable />
                <Outlet context={[setbread]} />
            </div>
        </div>
    );
}

export default Members;
