import React from "react"
import { useState } from "react";
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";
import {app} from "../firebase";
const auth =getAuth(app);
const SignupPage=()=>{
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const creatUser=()=>{
        createUserWithEmailAndPassword(auth,email,password).then((value=>alert("success")))
    }
    return (
        <div>
            <label >Email</label>
            <input 
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
            type="email" required placeholder="Enter your email here" />
            <label >password</label>
            <input  
             onChange={(e)=>setPassword(e.target.value)}
             value={password}
            type="password" required placeholder="Enter your email here" />
        <button onClick={creatUser} >signup</button>
        </div>
    )
}
export default SignupPage;