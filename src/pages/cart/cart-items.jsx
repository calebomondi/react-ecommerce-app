import React, { useContext } from "react";
import { ShopContext } from "../../contecxt/shop-context";

export const CartItem = (props) => {
    const {id,productName,price,productImage} = props.data;
    const {cartItems,removeFromCart,addToCart,updateCartItemsCount} = useContext(ShopContext);
    return (
        <div className="cartItem">
            <img src={productImage} />
            <div className="description2">
                <div>
                    <p><b>{productName}</b></p>
                    <p>${price}</p>
                    <div className="countHandler">
                        <button onClick={() => removeFromCart(id)}>-</button>
                        <input value={cartItems[id]} onChange={(e) => updateCartItemsCount(Number(e.target.value),id)}/>
                        <button onClick={() => addToCart(id)}>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
}