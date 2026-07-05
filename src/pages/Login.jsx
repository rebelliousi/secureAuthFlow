import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContextApi"
import { useNavigate } from "react-router-dom"

const Login=()=>{

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [error,setError]=useState('')
    const {signIn}=useContext(AuthContext)
    const navigate=useNavigate()


  const handleLogin=async(e)=>{
    e.preventDefault()
    const {error,data}=await signIn(email,password)
    if (error){
        return setError(error)
    }
    else  navigate('/dashboard')
    return data
  }
    return(
        <div>
            <form onSubmit={handleLogin}>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} />
                <input value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button type="submit" >Login</button>
            </form>
        </div>
    )
}
export default Login