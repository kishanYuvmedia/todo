import { useState } from "react";

const FormText=()=>{
    const [name,setName]=useState('')
    const [colorv,setColorv]=useState('red')
    return(
        <>
            <input type="text" onKeyUp={(e)=>setName(e.target.value)}  />
            <input type="color" onChange={(e)=>setColorv(e.target.value)} />
            <h1 style={{color:colorv}}>Name:-{name}</h1>
            <div color=""></div>
        </>
    )
}
export default FormText;