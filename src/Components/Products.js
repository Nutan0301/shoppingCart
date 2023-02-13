import React from 'react';
const Products = ({ products, addToCart }) => {
    return (
        <div className='flexHeader productLeftPad'>
            {products?.length > 0 && (
                products.map((prd) => {
                    return (
                        <div key={prd.productId} style={{ width: '29%', height: '23rem', marginBottom: '15px', marginRight: '10px' }}>
                            <div className='productItem'>
                                <img src={prd.image} alt={prd.title} width="40%"></img>
                                <div style={{ marginBottom: 10, height: 40, marginTop: 10 }}>{prd.title}</div>
                                <div style={{ marginBottom: 10, height: 30 }}>{`SKU:  ${prd.sku}`}</div>
                                <div style={{ marginBottom: 10, height: 30 }}>{`Price:  ${prd.price}`}</div>
                                <button style={{ marginBottom: 2, padding: 6, backgroundColor: 'gray', width: 260 }} onClick={() => addToCart(prd)}>Add to Basket</button>
                            </div>
                        </div>
                    )
                })
            )}
        </div>
    );




}

export default Products;