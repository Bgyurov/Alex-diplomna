import { Navigate } from "react-router-dom"
import {useContext,useEffect} from 'react'
import { AuthContext } from "../../contexts/AuthContext"
export const Logout = () => {
   
    let choice = confirm("Сигурни ли сте ,че искате да излезете ?");
    if(choice){
        const {onLogout} = useContext(AuthContext)
        useEffect(() => {
            onLogout()
        },[onLogout])
        return <Navigate to='/' />
    }else{
        return <Navigate to='/' />
    }
    
}