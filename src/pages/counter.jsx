import { useEffect, useRef, useState } from "react";
const Counter=()=>{
    const [inputValue,setInputValue]=useState('')
    const counter=useRef(0) 
    // #useRaf Object
    useEffect(()=>{
        console.log(inputValue)
       counter.current=counter.current+1
    })
    return(
        <>
            <input type="text" onChange={(e)=>setInputValue(e.target.value)} />
            {counter.current}
        </>
    )
}
export default Counter;