// use local storage to manage cart data
const addToDb = id => {
    let shoppingCart = getShoppingCart();
    // add new quantity to shopping cart: Local storage
    const quantity = shoppingCart[id];
    if (!quantity) {
        shoppingCart[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

// remove items from cart and then keep the remaining product in the cart after removing of selected products are done. @localstorage
const removeFromDb = id => {
    const shoppingCart = getShoppingCart();
    if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    }
}

// if full shopping cart is needed 
const getShoppingCart = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

// delete(empty) entire shopping cart
const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}

// export for using(calling) the fucntions made here.
export {
    addToDb,
    removeFromDb,
    getShoppingCart,
    deleteShoppingCart
}
