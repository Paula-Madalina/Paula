import React from "react";

const Hello = () => {
    // return(
    //    <div className = "asdfgbhn"> 
    //     <h1>PROBA 2/10</h1>
    //     </div>
    // )

    return React.createElement('div', {id:'newid', className: "newclass"}, React.createElement('h1', null, 'Hello Paulaaa'))

}

export default Hello;