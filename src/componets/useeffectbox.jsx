import { useEffect, useState } from "react";
const UseEffectbox=()=>{
    const [count,setCount]=useState(0)
    const [status,setStatus]=useState(true)
    useEffect(()=>{
        setCount((value)=>value+1)
        console.log('use effect run',count)
    },[status])
    return(
        <>
        <h1>Counter:-{count}</h1>
        <button type="button" onClick={()=>setStatus((v)=>v==true?false:true)}>Status Change</button>
        </>
    )
}
export default UseEffectbox;