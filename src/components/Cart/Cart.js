import { parse } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props
    // console.log(cart)
    let total = 0
    let shipping = 0
    let quantity = 0
    for (const product of cart) {
        quantity = quantity + product.quantity
        total = total + product.price * product.quantity
        shipping = shipping + product.shipping

    }
    let tax = (total * 0.1).toFixed(2)
    let grandTotal = parseFloat(total) + parseFloat(shipping) + parseFloat(tax)

    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Selected Item: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shiping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h4>Grand Total: ${grandTotal} </h4>

        </div>
    );
};

export default Cart;