import { useContext } from "react"
import { AuthContext } from "../context/AuthContextApi"
import Login from "../pages/Login"
import { Navigate } from "react-router-dom"

const ProtectedRoute=({children})=>{

    const {loading,user}=useContext(AuthContext)
    return (
        <div>
         {loading && <div>Loading....</div>}

          {!loading &&  !user &&<div><Navigate to='/login'/></div>}
          {!loading &&  user &&<div>{children}</div>}
        </div>
    )
}

export default ProtectedRoute