import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
// const Cart = (props) => { 
    const Cart = ({cart, handleClearCart, children}) => { //option 3: use {cart} in place of props
    // const cart = props.cart; // option 1: sending cart data from shop.jsx to cart.jsx
    // const {cart} = props; // option 2: destructuring props

    console.log(cart);

// Adding prices of products added in the cart
let totalPrice = 0;
let totalShipping = 0;
let quantity = 0;
for (const product of cart){
// module 50-7 - line start-----
// simple shortcut solution:
    // product.quantity = product.quantity || 1;
    // or, simple solution 2:
    // if(product.quantity === 0){
    // product.quantity = 1;
    // }

// module 50-7 -line end-----

    totalPrice = totalPrice + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
// module 50-7 -line start-----
    quantity = quantity + product.quantity;
// module 50-7 -line end-----
}

const tax = totalPrice*7/100;
const grandTotal = totalPrice + totalShipping + tax;
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Selected Items&#58; {quantity} </p>
            <p>Total Price&#58;  &#36;{totalPrice}</p>
            <p> Total Shipping Charge&#58; &#36;{totalShipping}</p>
            <p>Tax&#58; &#36;{tax.toFixed(2)}</p>
            <p> Grand Total&#58; &#36;{grandTotal.toFixed(2)} </p>

            <button onClick={handleClearCart} className='btn-clear-cart'> <span>Clear Cart </span>  
                <FontAwesomeIcon
                icon={faTrashAlt}></FontAwesomeIcon>
            </button>

    {/* for checkout button using children prop */}
            {children}
        </div>
    );
};

export default Cart;