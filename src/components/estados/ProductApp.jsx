
import React, { useState } from 'react'
import './productApp.css'

const initialProduct = {
    title: 'Titulo',
    description: 'Description'
}

const ProductApp = () => {
    const [product, setProduct] = useState(initialProduct)
    const updateProduct = ( data ) => {

        setProduct({
            ...product,
            ...data
        })
    }
    const construcUpdateProduct = () => {

        // random data
        let dateProduct = new Date()
        
        updateProduct(
            {
                'date': dateProduct,
            }
        )
    }

    return (
        <>
            <div className='card product__item'>
                <button
                    className='btn btn-primary'
                    onClick={construcUpdateProduct} 
                >
                    Update product
                </button>

                <h1 className='product__name'>{product.title}</h1>
                <p className='product__description'>{product.description} </p>
            </div>
            {/* preformatted */}
            <pre>
                { JSON.stringify(product, null, 2) }
            </pre>
        </>
    )
}

export default ProductApp