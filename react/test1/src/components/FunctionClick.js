import React from 'react'

function FunctionClick() {

    function clickHandler() {
        alert('button Clicked')
        console.log('button Clicked')
    }

  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick
