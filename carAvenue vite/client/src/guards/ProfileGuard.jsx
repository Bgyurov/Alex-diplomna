import { useContext } from "react";
import {AuthContext} from '../contexts/AuthContext'
import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
export default function ProfileGuard(props){
    const {userId} = useContext(AuthContext)
    const {profileId} = useParams()
    if(userId !=profileId){
        return <Navigate to='/' />
        
    }
  

    return (
        <>
            
            {props.children}
        </>
    )
    }
    
