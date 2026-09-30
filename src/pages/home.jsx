import { useContext } from "react";
import UserContext from "../context/theme";
const Home=(props)=>{
    const theme=useContext(UserContext)
    console.log(theme)
    return(
        <>
            <h1>Welcome {props.name} {theme}</h1>
        </>
    )
}
export default Home;