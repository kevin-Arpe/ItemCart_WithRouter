import React from 'react';
import { Link } from 'react-router-dom';

const NavList = () => {
    return (
        <nav>
            <ul className="nav-list">
                <li className="nav-item">
                    <Link to="/"><i className="fas fa-home"></i></Link>
                </li>
                <li className="nav-item">
                    <Link to="/shopping"><i className="fas fa-tshirt"></i></Link>
                </li>
                <li className="nav-item">
                    <Link to="/contributes"><i className="fas fa-handshake"></i></Link>
                </li>
                <li className="nav-item">
                    <Link to="cart"><i className="fas fa-shopping-cart"></i></Link>
                </li>
                <li className="nav-item">
                    <Link to="customer">
                        <i className="fas fa-user-circle"></i>
                        <i className="fas fa-angle-down more"></i>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavList;