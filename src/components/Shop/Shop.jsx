import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

// Fake data link: use this link to load data: https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json

const Shop = () => {
// fake data load 
    // 1. declare state
    const [products, setProducts] = useState([]);
// ki ki product cart add korte chai seta rakhbo tar jonno state declare
    const [cart, setCart] = useState([]);
    // 2. data load is a side effect, bcz it will not be loaded from own code rather from outside source.
    useEffect( () =>{
        fetch('products.json')
        .then(res =>res.json())
        .then(data => setProducts(data))
    }, []);

    useEffect( () =>{
// console.log('products', products);
        const storedCart = getShoppingCart();
        const savedCart = [];
// console.log(storedCart);
        // step 1: get id of the added cart
        for(const id in storedCart){
// console.log(id);
        // get product from products state by using id
            // step 2: get(find) product from products state by using id
            const addedProduct = products.find(product => product.id === id);
            
            if(addedProduct){
                // step 3: add quantity(get quantity of the product)
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;

// console.log(addedProduct);    
                // step 4: add the added product to the saved cart
                savedCart.push(addedProduct);
            }
            // step 5: set the cart in "setCart"
            setCart(savedCart);  
        }

    } , [products]);



// event handler function adding to cart
const handleAddToCart = (product) => {
    // console.log(product);
    // State cant be push directly, seState has to be used. that is why everytime a new cart has to be made

// module 50-7 - line start-----
    let newCart = [];
// module 50-7 - line end-----
    // const newCart = [...cart, product];
    // setCart(newCart);

// module 50-7 - line start-----
    // if product does not exist in the cart set quantity = 1
    // if exists update quantity by 1
    const exists = cart.find(pd => pd.id === product.id);
    if(!exists){
        product.quantity = 1;
        newCart = [...cart, product]
    }
    else{
        exists.quantity = exists.quantity + 1;
        const remaining = cart.filter(pd => pd.id !== product.id)
        newCart = [...remaining, exists];
    }
// module 50-7 - line end-----

setCart(newCart);

// add cart product to local storage of browser
    addToDb(product.id);
  }

// clear whole cart:Button
  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
}

    return (
    // shop-container parent shop div
        <div className='shop-container'>
            <div className="products-container">
                {/* <h2>Products comming here: {products.length} </h2> */}
{/* to show all products in this container have to map the array 'products' */}
                {
                    products.map(product => <Product key={product.id} product = {product} 
                    handleAddToCart ={handleAddToCart} ></Product>)
                }
            </div>
            <div className="cart-container">
                {/* moved to "Cart.jsx" file in component folder*/}
                {/* <h3>Order Summary</h3>
                <p>Selected Items: {cart.length} </p> */}

                <Cart 
                cart={cart}
                handleClearCart={handleClearCart}
                >
                    {/* checkout button & Review items module 55-8*/}
                    
                    <Link to="/order" className='proceed-link'>
                        <button className='btn-proceed'>
                            <span>Review Order</span>
                            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                            </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;