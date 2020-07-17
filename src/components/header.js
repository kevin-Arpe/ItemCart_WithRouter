import React from 'react';

const Header = ({ nav }) => {
    return (
        <header>
            <div className="title-box">
                <i className="fab fa-accusoft"></i>
                <div className="title">Journey's Online</div>
            </div>
            { nav }
        </header>
    );
}

export default Header;