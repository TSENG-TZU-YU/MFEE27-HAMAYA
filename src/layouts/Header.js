import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <>
            <div className='d-flex justify-content-start align-items-end '>
                <Link className="mx-3" to="/">Home</Link>
                <Link className="mx-3" to="NEWs">NEWs</Link>
                <Link className="mx-3" to="product">Product</Link>
                <Link className="mx-3" to="Class">Class</Link>
                <Link className="mx-3" to="Educate">Educate</Link>
                <Link className="mx-3" to="Place">Place</Link>
                <Link className="mx-3" to="AboutUs">AboutUs</Link>
                <Link className="mx-3" to="Members">Members</Link>
            </div>
            <hr/>
        </>
    );
}

export default Header;
