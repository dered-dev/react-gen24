



const UserItem = (props) => {
    const { id, name, age } = props.data
    return(
        <>
            <div className="user__card__item">
                <p>{id}</p>
                <p>{name}</p>
                <p>{age}</p>
            </div>
        </>
    )
}
export default UserItem