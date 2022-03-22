import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css'
const Header = () => {
    return (
        <nav>
            <div>
                <img src={logo} alt="" />
            </div>

            <div>

                <a href="/">Shop</a>
                <a href="/">Order</a>
                <a href="/">Order Review</a>
                <a href="/">Manage Inventory</a>

            </div>

        </nav>
    );
};

export default Header;