import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav
            style={{
                display: 'flex',
                justifyContent: 'space-around',
                padding: '10px',
                background: 'rgb(122 118 118)'
            }}>
            <Link to="/">Home/Search</Link>
            <Link to="/favorites">Favorites</Link>
        </nav>
    );
}

export default Navbar;
