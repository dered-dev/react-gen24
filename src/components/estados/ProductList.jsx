

import React, { useState } from 'react'

let productList = [
    {
        id: 1234,
        title: 'Titulo',
        description: 'Description'
    },
    {
        id: 1235,
        title: 'Titulo 2',
        description: 'Description'
    }

]
const ProductList = () => {
    const [products, setProducts] = useState(productList)
    const deleteProduct = (id) => {
        console.log(id)
        // filtrar
        // actualizar el estado
    }
    
  return (
    <div>
        {
            products.map( (cv) => {
                return <li key={cv.id} id={cv.id} >
                        {cv.title}
                    <button onClick={ 
                        () => { deleteProduct(cv.id) 
                    }}>ELiminar </button>
                </li>
            })
        }
    </div>
  )
}

export default ProductList