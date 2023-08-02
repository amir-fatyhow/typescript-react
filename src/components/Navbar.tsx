import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav>
            <div className="nav-wrapper purple darken-2">
                <a className="brand-logo">react + typescript</a>
                <ul className="right hide-on-med-and-down">
                    <li><a href="/">cases</a></li>
                    <li><a href="/">info</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;