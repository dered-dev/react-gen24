import React, { useState } from 'react'
import './shoppingCart.css'

const initialCart = [
    { id: 1, title: 'Product', description: 'Desc' },
    { id: 2, title: 'Product #2', description: 'Desc #2' },
];

const ShoppingCart = () => {
    const [cart, setCart] = useState(initialCart);

    const deleteProduct = (productId) => {
        const changedCart = cart.filter(product => product.id !== productId );
        setCart(changedCart);
    }

    const addProduct = (newProduct) => {
        newProduct.id = Date.now();

        const changedCart = [
            newProduct,
            ...cart,
        ];

        setCart(changedCart);
    }
    
    const updateProduct = (editProduct) => {
        const changedCart = cart.map(product => (
            product.id === editProduct.id
            ? editProduct
            : product
        ))
        setCart(changedCart);
    }

    return (
        <div className='shopping__cart'>
            <div className="row">
                <div className="col-12  mb-5">
                    <button className='btn btn-primary' onClick={() => addProduct({ title: "Nuevo título", description: "Nueva Desc" })}>
                        Add
                    </button>
                </div>
                <div className="col-7">
                    {cart.map(product => (
                        <div key={product.id} className='product__list__item'>
                            <h2>{product.id} {product.title} </h2>
                            <p>{product.description}</p>
                            <button className='btn btn-secondary' onClick={() => deleteProduct(product.id)}>
                                Delete
                            </button>
                            <button  className='btn btn-secondary'
                                onClick={() => updateProduct({ id: product.id ,title: "Edit título", description: "Edit Desc" })}
                            >
                                Update
                            </button>
                        </div>
                    )) }
                </div>
                <div className="col-5">
                    <pre>
                        { JSON.stringify(cart, null, 2) }
                    </pre>
                </div>
            </div>
            

        </div>
    )
}

export default ShoppingCart