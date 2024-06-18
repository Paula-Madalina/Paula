import Button from "./Button";
import Message from "./Message";

function Navbar(props){
  let buttonArray = [];
  buttonArray = props.buttonArray;
  return(
    <div>
      <Message name={props.name}></Message>
      {buttonArray.map((btn) => {
        return(<Button handelClick={btn.handelClick} text={btn.text} ></Button>)
      } )}
    </div>
  )
}

export default Navbar