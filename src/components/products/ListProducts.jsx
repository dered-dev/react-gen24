
import ProductItem from "./Product"

const ListUser = (props) => {
    const products = props.products

    return(
        <>
            <h2>Lista de productos</h2>
            <ol className="list-group list-group-numbered">
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
export default ListUser