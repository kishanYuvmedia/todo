import { useEffect, useState } from "react";

const FormText=()=>{
        const [name,setName]=useState(null)
        let [color,setColor]=useState(null)
    useEffect(()=>{
            setName('')
            setColor('black')
    },[])
    return(
        <>
            <input type="text" onKeyUp={(e)=>setName(e.target.value)} />
            <input type="text" onKeyDown={(e)=>setColor(e.target.value)} />
            <h1 style={{color:color}}>{name}</h1>
        </>
    )
}
export default FormText;