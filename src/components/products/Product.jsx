
import styles from './product.module.scss'

const ProductItem = (props) => {
    const {name, precio, cantidad } = props.data
    return(
        <>
            <li className={`list-group-item d-flex justify-content-between align-items-start 
             ${styles.list__item}`} >
                <div className="ms-2 me-auto">
                    <div className={`fw-bold ${styles.name__product}`}>{name}</div>
                    <div>precio ${precio} mxn</div>
                </div>
                <span className="badge bg-primary rounded-pill">{cantidad}</span>
            </li>

        </>
    )
}

export default ProductItem