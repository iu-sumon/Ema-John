import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {

    const [products] = useProducts();
    const [cart, setCart] = useCart(products)  
    
    //   getCart by pressed button  and update cart quantity 
    const handleToCart = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id)
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
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
                <Cart cart={cart}>

                    <Link to='/orders'>
                        <button className='btn-review'>Review Order <i className="fa-solid fa-arrow-right-long"></i></button>
                    </Link>

              </Cart>
            </div>


        </div>

    );
};

export default Shop;