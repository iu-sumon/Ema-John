// use local storage to manage cart data
const addToDb = id => {
    let shoppingCart = {};


    const storedCart = localStorage.getItem('shopping-cart'); //get the shopping cart from local storage
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }

 
    //................add quantity......................\\

    const quantity = shoppingCart[id];
    if (quantity) {
        shoppingCart[id] = quantity + 1;
    }
    else {
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}
//...................get cart from local storage and see it on UI..............\\
const getStoredCart = () => {
    let shoppingCart = {};


    const storedCart = localStorage.getItem('shopping-cart');//get the shopping cart from local storage
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}
//.......................................................cart remove from local storage
const removeFromDb = id => {
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}
const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}

export {
    addToDb,
    getStoredCart,
    removeFromDb,
    deleteShoppingCart
}