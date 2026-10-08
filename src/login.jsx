import { useState } from "react";

const Login=()=>{
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    
    function submit(e){
        e.preventDefault();
        if(username==="admin" && password==='123'){
            alert("login")
            localStorage.setItem('name',username)
            localStorage.setItem('pwt',password)
        }   
    }
    return(
        <>
            <form onSubmit={submit}>
            <input type="text" name="username"  value={username}  onChange={(e)=>setUsername(e.target.value)} />
            <input type="text" name="password"  value={password}  onChange={(e)=>setPassword(e.target.value)}  />
            <button type="submit"> Login</button>
            </form>
        </>
    )
}
export default Login;