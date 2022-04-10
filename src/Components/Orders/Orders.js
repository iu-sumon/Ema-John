import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'
const Orders = () => {

    const [products] = useProducts();
    const [cart, setCart] = useCart(products);

    const handleRemoveProduct = product => {
        const rest = cart.filter(item => item.id !== product.id)
        setCart(rest)
        removeFromDb(product.id)
    }
    return (
        <div className='shop-container'>


            <div className='review-items-container'>
                {
                    cart.map(product => <ReviewItem
                        product={product}
                        key={product.id}
                        handler={handleRemoveProduct}
                    ></ReviewItem>)
                }
            </div>

            <div className='cart-container'>
                <Cart cart={cart}>
                    <Link to='/shipment'>
                        <button className='btn-review'>Proceed Shipping<i className="fa-solid fa-arrow-right-long"></i></button>
                    </Link>

                </Cart>
            </div>


        </div>
    );
};

export default Orders;