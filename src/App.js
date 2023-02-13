import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Products from './Components/Products';
import Cart from './Components/Cart';


function App() {
  const API_URL = 'https://jsainsburyplc.github.io/front-end-test/products.json'

  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [showCart, setShowCart] = useState(false);

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(API_URL);
      const productResp = await res.json();
      setProducts(productResp);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError('Something went wrong!!')

    }

  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const addToCart = (product) => {
    console.log(product)
    const localCartsItems = JSON.parse(JSON.stringify([...cartItems]));
    const checkItemExists = localCartsItems?.length > 0 && localCartsItems.some(item => item.productId === product.productId);
    if (checkItemExists) {
      let currentItem = localCartsItems.find(item => item.productId === product.productId);
      currentItem.qty = currentItem.qty ? currentItem.qty + 1 : 1;
      setCartItems(localCartsItems.map((obj) => obj.productId === currentItem.productId ? currentItem : obj));
    } else setCartItems(prev => [...prev, { ...product, qty: 1 }])
  }
  if (isLoading) {
    return (
      <div style={{ textAlign: 'center' }}>Please wait while we load the products...</div>
    )
  }
  if (error) {
    return (
      <div style={{ textAlign: 'center' }}>{error}</div>
    )
  }

  console.log(cartItems)
  return (
    <div className='productContainer'>
      <Header count={cartItems.length} setShowCart={setShowCart} />

      {showCart ? (
        <Cart cartItems={cartItems} />

      ) : (
        <Products products={products} addToCart={addToCart} />
      )
      }
    </div>
  );
}

export default App;
