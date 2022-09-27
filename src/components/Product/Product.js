import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Product.css'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Product = (props) => {
    const { addToCart } = props
    const { img, name, price, ratings } = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h4>{name}</h4>
                <p>Price;{price}</p>
                <p>Rating:{ratings}</p>
            </div>
            <button onClick={() => addToCart(props.product)} className="btn-cart">
                <p>Add To Cart <span><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></span></p>
            </button>
        </div>
    );
};

export default Product;