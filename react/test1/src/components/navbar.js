import Button from "./button";
import UserContext from "./context";
import { useContext } from "react";

function Navbar() {

    return(
        <>
        <p>
            User is named {user}
        </p>
            <Button></Button>
        </>
    )

}

export default Navbar;