
import UserItem from "./user"

const ListUser = (props) => {
    // console.log(props.users)
    const users = props.users
    // foreach solo itera
    // map return
    // reduce return
    return(
        <>
            <div className="list__users">
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