
import UserItem from "./user"
import styles from './users.module.css'

const ListUser = (props) => {
    // console.log(props.users)
    const users = props.users
    // foreach solo itera
    // map return
    // reduce return
    return(
        <>
            <div className={ styles.list__users }>
                {
                    users.map((user)=> {
                        return (
                            < UserItem data={user}  />
                        )
                    })
                }
                
            </div>
        </>
    )
}
export default ListUser