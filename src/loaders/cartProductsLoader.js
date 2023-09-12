import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();


    // if cart data is in database, we have to use async await
    const storedCart = getShoppingCart();
    const savedCart = [];

// 55-3: Extract Cart products from Products data
    

    console.log(storedCart);
    for(const id in storedCart){
        const addedProduct = products.find(pd => pd.id === id);

        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }


    /** if we need to send two things eg. both savedCart and products
     * opt 1: return [products, savedCart]
     * opt 2: return {products, cart: savedCart}
     */
    
    console.log(products);

    // return products;
    
    return savedCart;
}

export default cartProductsLoader;