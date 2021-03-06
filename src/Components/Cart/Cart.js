import React from 'react';
 
import './Cart.css';
const Cart = (props) => {
    const { cart } = props;

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;//update quantity from local storage
        total = total + (product.price * product.quantity); //  price multiplied by  quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));

    const grandTotal = (total + shipping + tax).toFixed(2);


    return (
        <div>
            <h2>Oder Summary</h2>
            <p><small>Selected_Items:</small> {quantity}</p>
            <p><small>Total Price:</small> ${total}</p>
            <p><small>Total Shipping Charge:</small> ${shipping}</p>
            <p><small>Tax:</small> ${tax}</p>
            <h6 className='grand-total'>Grand Total: ${grandTotal}</h6>
            {/* get button from cart component */}
            {props.children}
          
        </div>
    );
};

export default Cart;