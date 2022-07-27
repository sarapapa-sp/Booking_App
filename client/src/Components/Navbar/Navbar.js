import React from 'react';
import "./navbar.css"
function Navbar(props) {
    return (
        <div className="navbar">
            <div className="navcontainer">
                <span className="nav-logo">
                    LammboBooking
                </span>
                <div className="nav-items">
                    <button className="nav-button">Register</button>
                    <button className="nav-button">Login</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;