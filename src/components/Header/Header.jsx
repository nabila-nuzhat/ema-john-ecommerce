import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
       
        <header>
            <nav>
                <img src={logo} alt="ema-john-logo" />

                <div>
                    <Link to="/home">Home</Link>
                    {/* {Link to ="/shop">Shop </Link> */}
                    <Link to ="/">Shop</Link>
                    <Link to ="/order">Order</Link>
                    <Link to ="/inventory">Inventory</Link>
                    <Link to ="/login">Login</Link>
                    <Link to ="/signup">Sign Up</Link>
                </div>
            </nav> 
        </header>
        
    );
};

export default Header;