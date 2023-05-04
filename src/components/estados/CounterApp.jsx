

// rafc
// rafce
// hook useState()
//  use -> hook
import React, { useState } from 'react'
const CounterApp = () => {

  // [variable, setVariable]
  // let variable = 'dato'
  let [counter, setCounter ] = useState(0)
  // console.log(counter)

  const handleIncrement = () => {
    // operaciones
    // setCounter( counter + 1)
    setCounter( ( prevStateCounter )  => prevStateCounter + 1 )
    
  }

  return (
    <>
      <button onClick={handleIncrement} >
        Incrementar
      </button>
      <h1>Clicks: {counter} </h1>
    </>
  )
}

export default CounterApp