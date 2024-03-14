import {React, createContext, useState} from 'react';
import { PRODUCTS } from '../products';

export const ShopContext = createContext(null); //manage state globally

const getDefaultCart = () => {
    let cart = {};
    for(let i = 1; i <= PRODUCTS.length; i++) {
        cart[i] = 0;
    }
    return cart;
}

export const ShopContextProvider = (props) => {
    const [cartItems,setCartItems] = useState(getDefaultCart());
    
    const getTotalAmount =() => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if(cartItems[item] > 0) {
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount;
    }
    
    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId] + 1}));
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId] - 1}));
    }

    const updateCartItemsCount = (newAmount, itemId) => {
        setCartItems((prev) => ({...prev,[itemId]:newAmount}));
    }

    const contextValue = {cartItems,getTotalAmount,addToCart,removeFromCart,updateCartItemsCount}

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}