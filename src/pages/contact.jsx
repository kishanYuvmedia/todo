import { useContext } from "react";
import UserContext from "../context/theme";
const Contact=()=>{
    const theme=useContext(UserContext)
    console.log(theme)
    return(
        <>
            <h1>Contact Page {theme}</h1>
        </>
    )
}
export default Contact;