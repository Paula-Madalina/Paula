import { useState } from "react";

function Incrementor() {
    const [counter, setCounter] = useState(1);
    const [name, setName] = useState("Paula")
    function Plus() {
        let newCounter = counter+1;
        setCounter(newCounter);
        if(newCounter >= 10) {
            setName("Madalina");
            console.log(counter)
        }
    }

    function Minus() {
        let newCounter = counter-1;
        setCounter(newCounter);
        if(newCounter < 10) {
            setName("pAULA");
            console.log(newCounter);
        }
    }
    return(
        <div>
            <button onClick={Plus}>+</button>
            <p>{counter<18? "Esti prea mic":counter} and {name}</p>
            <button onClick={Minus}>-</button>

        </div>
    )
}

export default Incrementor;