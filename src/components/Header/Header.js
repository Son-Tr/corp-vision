import { faBars, faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss"



function Header() {
    const [isMenu, setIsMenu]= useState(false);
    const toggleMenu = ()=>{
        setIsMenu(!isMenu)
    }
    return (
        <div>
        <header className="container">
            <Link to="/">
                <span className="icon-logo"><FontAwesomeIcon icon={faBarsStaggered} /></span>
                <span className="logo">Corp Vision</span>
            </Link>
            <nav className={isMenu?"show":""}>
                <Link className="nav-link active" to='/'>Home</Link>
                <Link className="nav-link" to='/about'>About</Link>
                <Link className="nav-link" to='/services'>Services</Link>
                <Link className="nav-link" to='/Contact'>Contact</Link>
            </nav>
            <span className="bars-icon"  onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
            </span>
        </header>
        </div>
    )
}


export default Header;