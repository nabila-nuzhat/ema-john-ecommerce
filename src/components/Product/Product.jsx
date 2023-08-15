import React from 'react';
// react Font Awesome: 
// link: https://fontawesome.com/v5/docs/web/use-with/react#get-started
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
const Product = (props) => {
    // console.log(props);
    // console.log(props.product);
    const {img, name, price, seller, ratings, shipping, quantity} = props.product;

    const handleAddToCart = props.handleAddToCart;
    
    return (
        <div className='product'>
          <img src={img} alt=""/>

          <div className="product-info">

            {/* <section className="product-info-1"> */}
              <h6 className='product-name'>{name}</h6>
              <h6 className='product-price'>Price &#58; &#36;{price}</h6>
            {/* </section> */}

            {/* <section className="product-info-2"> */}
              <p className='product-seller'>Manufacturer &#58; {seller}</p>
              <p className='product-rating'>Rating &#58; {ratings} </p>
            {/* </section> */}
          </div>
          <button onClick={ () => handleAddToCart(props.product)} className='btn-cart'>
            Add to Cart <FontAwesomeIcon icon={faCartPlus} />
            </button>
            
        </div>
    );
};

export default Product;