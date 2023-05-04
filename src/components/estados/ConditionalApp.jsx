import React, { useState } from 'react'

const ConditionalApp = () => {
    
    const [condition, setCondition] = useState(true)

    const toggleCondition = () => {
        setCondition( !condition )
    }

    return (
        <div>
            <button onClick={toggleCondition} >Toggle</button>
            {/* {
                condition == true ?
                    <h1>Show  message</h1>
                : 
                    null
            } */}
            {
                condition && <h1>Show  message</h1>
            }
            
            <p>Estado actual : { condition.toString() } </p>
            
        </div>
    )
}

export default ConditionalApp
