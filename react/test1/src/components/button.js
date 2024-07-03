import UserContext from "./context";
import { useContext } from "react";
function Button() {

    let user = useContext(UserContext);
  
    return(
        <div>

        <button onClick={()=>user.setTest(Math.random()*1000)}>{user.test}</button>

        </div>
    )
}

export default Button;

