import { useEffect, useState } from "react";

const UseEffectbox=()=>{
    const [count,setCount]=useState(0)
    const [status,setStatus]=useState(true)
    useEffect(()=>{
            setCount((value)=>value+1)
    },[status])
    return(
        <>
        <h1>Counter:- {count}</h1>
        <button onClick={()=>setStatus((value)=>value==true?false:true)}>Increment</button>
        </>
    )
}
export default UseEffectbox;