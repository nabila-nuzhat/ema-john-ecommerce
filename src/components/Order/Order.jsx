import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import '../Order/Order.css'
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
    const cart = useLoaderData();
    console.log(cart);
    
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