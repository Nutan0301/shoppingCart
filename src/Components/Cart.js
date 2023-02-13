import React from 'react';
const Cart = ({ cartItems }) => {
    return (
        <div>
            {cartItems.map((cartItem) => {
                return (
                    <div className='cartList'>
                        <img src={cartItem.image} alt={cartItem.title} width={40}></img>
                        <span style={{ marginRight: 20 }}>{cartItem.title}</span>
                        <span style={{ marginRight: 20 }}>{`SKU:  ${cartItem.sku}`}</span>
                        <span style={{ marginRight: 20 }}>{`Quantity:  ${cartItem.qty}`}</span>
                        <span style={{ marginRight: 20 }}>{`Price:  ${cartItem.price}`}</span>
                    </div>
                )
            })}
        </div>
    );
}

export default Cart;