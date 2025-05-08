import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {app} from "./firebase"
import {getDatabase,ref,set} from "firebase/database"
import SignupPage from './pages/Signup'
import SigninPage from './pages/signin'
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth";
const db =getDatabase(app);
const auth =getAuth(app);


function App() {

  const signUpUser=()=>{
    createUserWithEmailAndPassword(
      auth,
      "smit122@gmail.com",
      "smit1234"
    ).then((value)=>console.log(value));
  }

  const putData =()=>{
    set(ref(db,'users/smit'),{
      id:1,
      name:"smit",
      age:21,
    })
  }
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>hewllo</h1>
     {/* <button onClick={putData} >put data</button> */}
     {/* <button onClick={signUpUser} >auth</button> */}
     {/* <SignupPage></SignupPage> */}
     <SigninPage></SigninPage>
    </>
  )
}

export default App
