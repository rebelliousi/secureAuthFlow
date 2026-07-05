import { Route, Routes } from "react-router-dom"
import { AuthProvider } from "./context/AuthProvider"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import ProtectedRoute from "./components/ProtectedRoute"

const App=()=>{
  return (
   <AuthProvider>
    <Routes>

      <Route  path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path='/dashboard' element={
        <ProtectedRoute>
           <Dashboard/>
        </ProtectedRoute>
      }/>
    </Routes>
   </AuthProvider>
  )
}

export default App