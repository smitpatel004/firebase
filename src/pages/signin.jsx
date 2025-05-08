import react,{useState} from 'react'
import { getAuth,signInWithEmailAndPassword } from 'firebase/auth'
import { app } from '../firebase'
const auth =getAuth(app);
const SigninPage = ()=>{
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const signinUse=()=>{
        signInWithEmailAndPassword(auth,email,password).then((value)=>console.log("signin succes"))
        .catch((err)=>console.log("EROR",err))
    }
    return (
        <div className='sigin-page' >
            <label>enter your email </label>
            <input  onChange={(e)=>setEmail(e.target.value)}
            value={email}
            type="email" placeholder='enter your email'  />
            <label>enter your password</label>
            <input  onChange={(e)=>setPassword(e.target.value)}
            value={password} type="password" placeholder='enter your password'  />
        <button onClick={signinUse} >sigin</button>
        </div>
    )
}
export default SigninPage;