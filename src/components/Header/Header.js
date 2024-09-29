
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.scss";
import { motion } from "framer-motion";
import { faBars, faBarsStaggered, faMoon, faX } from "@fortawesome/free-solid-svg-icons";



function Header() {
    const [isMenu, setIsMenu] = useState(false);
    const location = useLocation(); // Hook to get the current location (route)

    // Close the menu whenever the route changes
    useEffect(() => {
        setIsMenu(false);
    }, [location]); // Trigger the effect when the location (route) changes

    useEffect(() => {
        let navBar = document.querySelector(".nav-header")
        const handleScroll = () => {
            navBar.classList.toggle("nav-header-fixed", window.scrollY > 80); // add  nav-header-fixed class when window.scrollY > 80
        }

        window.addEventListener("scroll", handleScroll);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    // handle show and close the navbar
    const toggleMenu = () => {
        if (isMenu) {
            document.body.classList.toggle('noscroll'); 
            document.querySelector(".nav-header").classList.toggle("bg-show-menu");
            setIsMenu(!isMenu);
            return;
        } else {
            document.body.classList.toggle('noscroll'); 
            document.querySelector(".nav-header").classList.toggle("bg-show-menu");
            setIsMenu(!isMenu)
            return;
        }
    }
    return (
        <div className="nav-header">
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
                    <span className="light-dark-btn">
                        <FontAwesomeIcon icon={faMoon} />
                    </span>
                </nav>
                <motion.span className="bars-icon" onClick={toggleMenu}
                    
                    initial={{ scale: 0.5 }}
                    animate={{
                        rotate: !isMenu ? 180 : -180,
                        scale: 1
                    }}
                    transition={{
                        duration: 0.3,
                        type: "easeOut",
                    }}
                >
                    {!isMenu ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faX} />}
                </motion.span>
            </header>
        </div>
    )
}


export default Header;