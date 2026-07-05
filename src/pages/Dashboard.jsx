import { useContext } from "react"
import { AuthContext } from "../context/AuthContextApi"
import { useNavigate } from "react-router-dom"

const Dashboard =()=>{


    const {user,signOut}=useContext(AuthContext)
    const navigate=useNavigate()

    const handleLogOut=async()=>{
        await signOut()
        navigate('/login')
    }
    return (
        <div>
            {user?.email}
            <button onClick={handleLogOut}>logout</button>
        </div>
    )
}
export default Dashboard