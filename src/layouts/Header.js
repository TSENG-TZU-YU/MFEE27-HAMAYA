import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <>
            <div className='d-flex justify-content-start align-items-end '>
                <Link className="mx-3" to="/">Home</Link>
                <Link className="mx-3" to="about">About</Link>
                <Link className="mx-3" to="product">Product</Link>
                <Link className="mx-3" to="user">User</Link>
            </div>
            <hr/>
        </>
    );
}

export default Header;
