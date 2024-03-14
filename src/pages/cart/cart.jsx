import {React, useContext} from 'react';
import { PRODUCTS } from '../../products';
import { ShopContext } from '../../contecxt/shop-context';
import { CartItem } from './cart-items';
import './cart.css';
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
    const {cartItems,getTotalAmount} = useContext(ShopContext);
    const navigate = useNavigate();
    const totalAmount = getTotalAmount()

    
    return (
        <div className="cart">
            <div>
                <h1>Your Cart Items</h1>
            </div>
            <div className="cartItems">
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data={product} />
                    }
                })}
            </div>
            {totalAmount > 0 ?
                <div className="checkout">
                    <div>
                        <p>Subtotal: ${getTotalAmount()}</p>
                        <button onClick={() => navigate('/react-ecommerce-app')}>continue shopping</button>
                        <button>checkout</button>
                    </div>
                </div>
                : <h1>Your Cart Is Empty</h1>}
        </div>
    );
}