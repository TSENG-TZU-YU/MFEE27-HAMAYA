import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MemberListTable from './components/MemberListTable';
import MemberListMobile from './components/MemberListMobile';
function Members(props) {
    return (
        <div className="container">
            <MemberListMobile />
            <div className="row">
                <MemberListTable />
                <Outlet />
            </div>
        </div>
    );
}

export default Members;
