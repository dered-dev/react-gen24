

const CallToAction = () => {

    // definiendo el evento
    const handleClick = () => {
        console.log('click en el boton')
    }
    
    const handleHover = () => {
        console.log('Hoverr en el boton')
    }

    const handleFocus = () => {
        console.log('focus en el boton')
    }
    const handleSubmit = (e) => {
        // 
        e.preventDefault()
        console.log('focus en el boton')
        // instrucciones
        
    }

    return (
        // fragment
        <>
            <form 
                action="" 
                method="POST" 
                onSubmit={handleSubmit} 
            >
                <button type="button" onClick={handleClick} >click me!</button>
                <button type="button" onFocus={handleFocus} >hover me!</button>
                <button type="button" >Submit</button>
            </form>
        </>
    )

}

export default CallToAction