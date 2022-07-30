import React from 'react';
import "./navbar.css"
import {Link} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../../Context/AuthContext";
function Navbar(props) {
    const {user} = useContext(AuthContext)


    return (
        <div className="navbar">
            <div className="navcontainer">
                    <Link to="/" style={{color:"inherit",textDecoration:"none"}}>
                    <span className="nav-logo">
                        HotelBooking

                    </span>
                    </Link>
                {
                    user ? user.username :
                    <div className="nav-items">
                    <button className="nav-button">Register</button>
                    <button className="nav-button">Login</button>
                </div>}
            </div>
        </div>
    );
}

export default Navbar;