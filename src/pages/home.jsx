import { useContext, useState } from "react";
import UserContext from "../context/theme";
const Home=(props)=>{
    const theme=useContext(UserContext)
    console.log(theme)
    const [user]=useState(localStorage.getItem('name'))
    return(
        <>
            <h1>Welcome {props.name} {theme} {user}</h1>
        </>
    )
}
export default Home;