import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (

        <nav>
            <div className="nav-text">
                UFS
            </div>
                <ul>
                    <Link to="/"><li> Home </li> </Link>
                    <Link to="/welcome-page/"> <li> Welcome </li> </Link>
                    <Link to="/character-list/"> <li> Characters </li> </Link>
                </ul>
        </nav>
    )
}

export default Nav;
