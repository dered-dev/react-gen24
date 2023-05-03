
import './product.css'

const ProductItem = (props) => {
    const {name, precio, cantidad } = props.data
    return(
        <>
            <li className="list-group-item d-flex justify-content-between align-items-start 
            list__item" >
                <div className="ms-2 me-auto">
                    <div className="fw-bold">{name}</div>
                    precio ${precio}mxn
                </div>
                <span className="badge bg-primary rounded-pill">{cantidad}</span>
            </li>

        </>
    )
}
export default ProductItem