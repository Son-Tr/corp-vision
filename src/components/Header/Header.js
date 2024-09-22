import { faBars, faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.scss"



function Header() {
    const [isMenu, setIsMenu] = useState(false);
    const location = useLocation(); // Hook to get the current location (route)

    // Close the menu whenever the route changes
    useEffect(() => {
        setIsMenu(false);
    }, [location]); // Trigger the effect when the location (route) changes

    const toggleMenu = () => {
        setIsMenu(!isMenu)
    }
    return (
        <div>
            <header className="container">
                <NavLink to="/">
                    <span className="icon-logo"><FontAwesomeIcon icon={faBarsStaggered} /></span>
                    <span className="logo">Corp Vision</span>
                </NavLink>
                <nav className={isMenu ? "show" : ""}>
                    <NavLink className="nav-link" to='/'>Home</NavLink>
                    <NavLink className="nav-link" to='/about'>About</NavLink>
                    <NavLink className="nav-link" to='/services'>Services</NavLink>
                    <NavLink className="nav-link" to='/Contact'>Contact</NavLink>
                </nav>
                <span className="bars-icon" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </span>
            </header>
        </div>
    )
}


export default Header;