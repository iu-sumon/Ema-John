import React from 'react';
import './ReviewItem.css'
const ReviewItem = (props) => {
    const { name, img, price, shipping ,quantity} = props.product;
    return (
        <div className='review-item'>


            <div className='review-details'>
                <img src={img} alt="" />
               <div className='review-info'>
               <p className='item-name' title={name}>
                   
                   {name.length >20 ? name.slice(0,20) + '...' : name }
               
               </p>
                <p className='item-price'>Price: <span className='item-charge'>${price}</span></p>
                <p className='item-chargee '>Shipping Charge: <span className='item-charge'>${shipping}</span></p>
                <p className='item-quantity'>Item Quantity: <span className='item-charge'>${quantity}</span></p>
               </div>
            </div>
            <div onClick={()=>props.handler(props.product)} className='btn-remove'>
                <i className="fa-solid fa-trash-can"></i>
            </div>
        </div>
    );
};

export default ReviewItem;