import { useState } from "react";
const ControlStatment = () => {
    const [status, setStatus] = useState(true)
    return (
        <>
            <div style={{backgroundColor:status==true?"black":"white",height:'50vh',width:'100%'}}>
                    <h1 style={{color:status==true?"white":"black"}}>Hello React js</h1>
            </div>
            {/* {status==true &&
                <h1>Dark</h1>
            }
             {status==false &&
                <h1>light</h1>
             } */}
             <button type="button" onClick={()=>status==true?setStatus(false):setStatus(true)}>
                {status==true?"light":"Dark"}
             </button>
        </>)
}
export default ControlStatment;