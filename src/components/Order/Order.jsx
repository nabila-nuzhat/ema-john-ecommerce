import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import '../Order/Order.css'
import { removeFromDb } from '../../utilities/fakedb';
const Order = () => {

// shared loader: Module 55-2
    
// previous code block::::
    // const products = useLoaderData();
    // console.log(products);
    
    // return (
    //     <div className='shop-container'>
    //         <div className='products-container'>
    //             <h2>Orders Page:{products.length} </h2>

    //             <h2>Orders Page </h2>
    //         </div>
    //         <div className='cart-container'>
    //             <Cart cart={[]}></Cart>
    //         </div>
            
    //     </div>
    // );

// replacing cart in place of "products"
    const savedCart = useLoaderData();

/** Module 55-6: review item's (added to cart items) delete button make
 * savedCart used for initial stage of cart
 *  */
const [cart, setCart] = useState(savedCart);

// event handler of deleted cart
    const handleRemoveFromCart = (id) => {
        console.log(id);
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    // console.log(savedCart);
    
    return (
        <div className='shop-container'>
            {/* <div className='products-container'> */}
            <div className='review-container'>
                {/* <h2>Orders Page:{cart.length} </h2>

                <h2>Orders Page </h2> */}

                {
                    cart.map(product => <ReviewItem
                    key={product.id}
                    product={product}
                    handleRemoveFromCart={handleRemoveFromCart}
                    ></ReviewItem>)
                }

            </div>
            <div className='cart-container'>
                {/* <Cart cart={[]}></Cart> */}
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Order;