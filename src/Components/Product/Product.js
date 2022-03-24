import React from 'react';
import './Product.css'
const Product = (props) => {

    const { img, name, price, seller, ratings } = props.product;
    return (
        <div className='product-cart'>

            <img className='product-img' src={img} alt="" />

            <div className='product-info'>
                
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Manufacturer: {seller}</small></p>
                <p><small>Rating: {ratings} star</small></p>

            </div>
            
            <div >

                <button onClick={() => props.handle(props.product)} className='product-btn'>Add To Cart<i className="fa-solid fa-cart-plus"></i></button>

            </div>

        </div>
    );
};

export default Product;