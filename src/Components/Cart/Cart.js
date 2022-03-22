import React from 'react';
import './Cart.css';
const Cart = (props) => {

    const totalPrice = props.cart.reduce((p, c) => p + c.price, 0);//p=previous,c=current here 0 is initial value for previous
    const tax = totalPrice / 100;
    const grandTotal = totalPrice + tax;


    return (
        <div>
            <h2>Oder Summary</h2>
            <p><small>Selected_Items:</small> {props.cart.length}</p>
            <p><small>Total Price:</small> ${totalPrice}</p>
            <p><small>Total Shipping Charge:</small> ${tax}</p>
            <h6 className='grand-total'>Grand Total: ${grandTotal}</h6>

            <div>
                <button className='btn-delete'>Clear Cart <i className="fa-regular fa-trash-can"></i></button>
                <button className='btn-review'>Review Order <i className="fa-solid fa-arrow-right-long"></i></button>
            </div>

        </div>
    );
};

export default Cart;