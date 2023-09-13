import React from 'react';
import '../ReviewItem/ReviewItem.css'
// font-awesome import collected from previously used file by finding in search
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'


const ReviewItem = ({product, handleRemoveFromCart}) => {

    const {id, img, name, price, quantity} = product;
    return (
        <div className='review-item'>
            <img src= {img} alt="" />

            <div className='review-details'>
                <h3 className='product-title'>{name} </h3>
                <p>Price: <span className='orange-text'>${price} </span></p>
                <p>Order Quantity: <span className='orange-text'>{quantity} </span></p>
            </div>
            <button onClick={() => handleRemoveFromCart(id)} className='btn-delete'>
            <FontAwesomeIcon icon={faTrashAlt} className='delete-icon'/>
            </button>
        </div>
    );
};

export default ReviewItem;