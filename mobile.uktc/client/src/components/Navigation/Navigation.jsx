import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useMediaQuery, useTheme } from "@mui/material";
import './navigation.css';

export function Navigation() {
    const { isAuthenticated, userId } = useContext(AuthContext);
    const [menuOpen, setMenuOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const displayNav = isMobile ? (menuOpen ? "block" : "none") : null;

    return (
        <>
            <div className="topnav">
                <h1><Link className="home" to="/">CarAvenue</Link></h1>
                <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
                
                <nav style={{ display: displayNav }}>
                    <Link to="/catalog">All cars</Link>
                    <Link to="/search">Search</Link>
                    {isAuthenticated && (
                        <div id="user">
                            <Link to="/create-ad">Public Ad</Link>
                            <Link to="/logout">Logout</Link>
                            <Link to={`/profile/${userId}`}>Profile</Link>
                        </div>
                    )}
                    {!isAuthenticated && (
                        <div id="guest">
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </div>
                    )}
                </nav>
            </div>
        </>
    );
}
