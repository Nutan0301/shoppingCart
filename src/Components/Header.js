import React from 'react';
const Header = ({ count, setShowCart }) => {
    return (
        <div className='flexHeader flexJustify'>
            <div onClick={() => setShowCart(false)}>
                Shopping Cart Home
            </div>
            <div onClick={() => setShowCart(true)}>Your Basket ({count})</div>
        </div>
    );
}

export default Header;