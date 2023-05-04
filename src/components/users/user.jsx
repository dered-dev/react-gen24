
import styles from './users.module.css'

const UserItem = (props) => {
    const { id, name, age } = props.data
    return(
        <>
            <div className={styles.user__card__item}>
                <p>{id}</p>
                <p><b>{name}</b></p>
                <p>{age}</p>
            </div>
        </>
    )
}

export default UserItem