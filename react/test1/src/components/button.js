import "./button.css";

function Button(props) {
    function handleClick(action) {
        if(action=="delete") {
            alert(props.text)
        }  
        if(action=="save") {
            alert(props.text)
        }  
        if(action=="favorite") {
            alert(props.text)
        }
    }
    return(
        <button className={props.class} onClick={()=>handleClick(props.action)}>{props.label}</button>
        
    )
}

export default Button;
