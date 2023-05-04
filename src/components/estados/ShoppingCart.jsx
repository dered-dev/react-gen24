import React, { useState } from 'react'
import './shoppingCart.css'

const initialCart = [
    { id: 1, title: 'Product', description: 'Desc' },
    { id: 2, title: 'Product #2', description: 'Desc #2' },
];

const ShoppingCart = () => {
    const [cart, setCart] = useState(initialCart);

    return (
        <div className='shopping__cart'>
        </div>
    )
}

export default ShoppingCart