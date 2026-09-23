import { useState } from "react";
function Hooks(){
    const [count,setCount]=useState(1)
    const [count1,setCount1]=useState(1)
    return(
        <>
        <h1>Hello hooks {count}</h1>
        <button type="button" onClick={()=>setCount((v)=>v+1)}>increment</button>
        <h1>Hello hooks {count1}</h1>
        <button type="button" onClick={()=>setCount1((v)=>v+1)}>increment</button>
        </>
    )
}
export default Hooks;