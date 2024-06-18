import { useState } from "react";

function Input() {
    const [validationMessage, setValidationMessage]= useState("");
    const [showValidation, setShowValidation] = useState(false);

    function Validate(event) {
        console.log(event.target.value);
        let inputData = event.target.value;
        if(inputData.includes("@")) {
            // setValidationMessage("Email Corect!")
            setShowValidation(false);
        } else {
            setValidationMessage("Email Incorect!")
            setShowValidation(true)
        }
    }

    return(
        <div>
            <input type="text" onChange={Validate}></input>
            {/* <p>{validationMessage}</p> */}
            <p>{showValidation?validationMessage:""}</p>
        </div>
    )
}
export default Input;