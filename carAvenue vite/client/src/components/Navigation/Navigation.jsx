import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import './navigation.css'

export function Navigation(){
    const {isAuthenticated,userId} = useContext(AuthContext)
    
       return(
        <>
        <div className="topnav">
        <h1><Link className="home" to="/">CarAvenue</Link></h1>
        <nav>
            <Link to="/catalog">All cars</Link>
            <Link to="/search">Search</Link>
            {/*<!-- Logged-in users -->*/}
            {isAuthenticated && (
            <div id="user">
                <Link to="/create-ad">Public Ad</Link>
                <Link to="/logout">Logout</Link>
                <Link to={`/profile/${userId}`}>Profile</Link>
            </div>
            )}
            {/*<!-- Guest users -->*/}
            {!isAuthenticated && (
                <div id="guest">
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
            )}
        </nav>
        
        </div>
        
        {/* {isAuthenticated && (
        <div className="welcome-message">
 <div class="welcome-box">
        <h1>Welcome ,<span>{userEmail.split("@")[0]}</span>!</h1>
        
    </div>
    </div>

        )} */}
            </>
    )
}