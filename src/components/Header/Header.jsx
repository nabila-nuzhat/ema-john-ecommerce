import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
       
        <header>
            <nav>
                <img src={logo} alt="ema-john-logo" />

                <div>
                    <a href="#">Home</a>
                    <a href="/shop">Shop</a>
                    <a href="/order">Order</a>
                    <a href="/inventory">Inventory</a>
                    <a href="/login">Login</a>
                </div>
            </nav> 
        </header>
        
    );
};

export default Header;