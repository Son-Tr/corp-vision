
import "./Header.scss";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBarsStaggered, faMoon, faSun, faX } from "@fortawesome/free-solid-svg-icons";



const Header = () => {
    const [isMenu, setIsMenu] = useState(false);
    const [darkTheme, setDarkTheme] = useState(false)
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

    //get value form localstorage if dont have value we will get value from prefertheme of browser

    useEffect(() => {
        let localTheme = localStorage.getItem("theme");

        if (localTheme) {
            setDarkTheme(localTheme === "dark"); // Simplified: No need for ternary operator
            document.documentElement.setAttribute("data-theme", localTheme);
        } else {
            let preferTheme = window.matchMedia("(prefers-color-scheme: dark)").matches; // Corrected parentheses
            let defaultTheme = preferTheme ? "dark" : "light";
            setDarkTheme(defaultTheme === "dark"); // if defaultTheme === "dark" is correct will return true. if incorrect return false
            document.documentElement.setAttribute("data-theme", defaultTheme);
            // Save the default theme in localStorage
            localStorage.setItem("theme", defaultTheme);
        }
    }, []);




    // handle change the theme dark and light 
    const toggleTheme = () => {
        let newTheme = darkTheme ? "light" : "dark"; // check current theme
        setDarkTheme(!darkTheme);
        document.documentElement.setAttribute("data-theme", newTheme) // add that theme in body tag
        localStorage.setItem("theme", newTheme); // save them in the local storage for next time to use
    }

    // handle show and close the navbar
    const toggleMenu = () => {
        if (isMenu) {
            document.body.classList.toggle('noscroll');// display body scroll which navbar is in active;
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
                <NavLink className="nav-link-logo" to="/">
                    <span className="icon-logo"><FontAwesomeIcon icon={faBarsStaggered} /></span>
                    <span className="logo">Corp Vision</span>
                </NavLink>
                <nav className={isMenu ? "show" : ""}>
                    <NavLink className="nav-link" to='/'>Home</NavLink>
                    <NavLink className="nav-link" to='/about'>About</NavLink>
                    <NavLink className="nav-link" to='/services'>Services</NavLink>
                    <NavLink className="nav-link" to='/Contact'>Contact</NavLink>
                    <span className="light-dark-btn" onClick={toggleTheme}>
                        <FontAwesomeIcon icon={darkTheme ? faSun : faMoon} />
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