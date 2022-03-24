import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {

    const [products, setProducts] = useState([])//data update and store 


    const [cart, setCart] = useState([]) //get individual cart for calculations

    useEffect(() => { //data load from products,json in public folder
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    //data load from local storage for see on UI
    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) { //loop through in object
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {

                const localQuantity = storedCart[id]; //object er property value access using variable id 
                addedProduct.quantity = localQuantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
       
    }, [products])


    //   getCart by pressed button  and update cart quantity 
    const handleToCart = (selectedProduct) => {
        console.log(selectedProduct);
        console.log(cart);
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        console.log(exists);
        if (!exists) {// jodi product na thake
            console.log('if in');
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
            console.log(newCart);
        }
        else {
            console.log('else in');
            const rest = cart.filter(product => product.id !== selectedProduct.id)
            console.log(rest);
            exists.quantity = exists.quantity + 1;
            newCart=[...rest,exists];
            console.log(newCart);
        }
        setCart(newCart)
        addToDb(selectedProduct.id)

    }
    return (
        

            <div className='shop-container'>

                <div className="products-container">

                    {
                        products.map(product => <Product
                            product={product}
                            key={product.id}
                            handle={handleToCart}
                        ></Product>)
                    }
                </div>

                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>


            </div>
        
    );
};

export default Shop;