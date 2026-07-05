import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContextApi"
import { useNavigate } from "react-router-dom"

const Register=()=>{

    const {signUp}=useContext(AuthContext)
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [error,setError]=useState(null)

    const handleRegister=async(e)=>{
        e.preventDefault()
        const {error,data}=await signUp(email,password)
       
        if (error){
            return setError(error)
        
        } else navigate('/dashboard')
         return data
    }

    const navigate=useNavigate()
    return (
        <div>
            <form onSubmit={handleRegister}>
                <input value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input value={password} onChange={(e)=>setPassword(e.target.value)} />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register