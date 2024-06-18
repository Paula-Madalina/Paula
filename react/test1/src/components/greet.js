import React from 'react'

// function Greet() {
//     return <h1>Hello Paula</h1>
// }
const Greet = (props) => {
    console.log(props);
    // props.name = "Paula"

    return (
    <div>
        <h1>Hello {props.name}a.k.a. {props.heroname}</h1>
        {props.children}
    </div>
    )
    
}
export  default Greet