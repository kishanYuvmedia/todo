import { useContext } from "react";
import UserContext from "../context/theme";
const About=()=>{
    const theme=useContext(UserContext)
    console.log(theme)
    return(
        <>
            <h1>About Page {theme}</h1>
        </>
    )
}
export default About;