import { useEffect, useState } from "react"
import { supabase } from "../lib/supabase"
import { AuthContext } from "./AuthContextApi"

export const AuthProvider=({children})=>{
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)


        useEffect(()=>{
            const authStat=supabase.auth.onAuthStateChange((event,session)=>{
                setUser(session?.user ?? null)
                setLoading(false)
        
            })
        return ()=>authStat.data.subscription.unsubscribe()
        },[])


        const signUp=async(email,password)=>{
            const {data,error}= await supabase.auth.signUp({email,password})
            return {data,error}
        }

        const signIn=async(email,password)=>{
            const {data,error}=await supabase.auth.signInWithPassword({email,password})
            return {data,error}
        }

        const signOut=async()=>{
            const {error}=await supabase.auth.signOut()
            return {error}
        }


        return (
            <AuthContext.Provider value={{user,setUser,loading,setLoading,signUp,signIn,signOut}}>
              {children}
            </AuthContext.Provider>
        )
    
}