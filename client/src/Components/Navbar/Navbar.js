import React from 'react';
import "./navbar.css"
import {Link} from "react-router-dom";
function Navbar(props) {
    return (
        <div className="navbar">
            <div className="navcontainer">
                    <Link to="/" style={{color:"inherit",textDecoration:"none"}}>
                <span className="nav-logo">
                    LammboBooking

                </span>
                    </Link>
                <div className="nav-items">
                    <button className="nav-button">Register</button>
                    <button className="nav-button">Login</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;