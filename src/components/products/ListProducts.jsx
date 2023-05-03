// imports
import ProductItem from "./Product"

import styles from './listproduct.module.css'


// Componente(s)
const ListUser = (props) => {
    const products = props.products
    
    return(
        <>
            <h2>Lista de productos</h2>
            <ol 
                className={`list-group list-group-numbered ${styles.list__container}`}
                    style={
                        {
                            width: "100%",
                            maxWidth: "600px",
                            minWidth: "600px"
                        }
                    }
                >
                {
                    products.map((product)=> {
                        return (
                            <ProductItem data={product} key={product.id}  />
                        )
                    })
                }
            </ol>
        </>
    )
}
// export
export default ListUser