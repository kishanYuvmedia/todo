import { useContext,useState } from "react";
import UserContext from "../context/theme";
const About=()=>{
    const theme=useContext(UserContext)
    console.log(theme)
        const [user]=useState(localStorage.getItem('name'))
    return(
        <>
            <h1>About Page {theme} {user}</h1>
        </>
    )
}
export default About;