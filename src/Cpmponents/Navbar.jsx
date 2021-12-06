import "./Navbar.css";
import logo from "../Images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const NavBar = () => {
    const [hamburgerMenu, setHamburgerMenu] = useState(false);
    const [navBar, setNavBar] = useState(false);

    const changeBackground = () => {
        console.log(window.scroll);
        if (window.scrollY >= 50) {
            setNavBar(true);
        } else {
            setNavBar(false);
        }
    };

    window.addEventListener("scroll", changeBackground);

    return (
        <>
            <nav className={navBar ? "nav-wrapper active" : "nav-wrapper"}>
                <div className="logo-wrapper">
                    <img className="img-fluid logo" src={logo} alt="" />
                </div>
                <div className="menu-wrapper">
                    <div
                        className="hamburger-icon"
                        onClick={() => setHamburgerMenu(!hamburgerMenu)}
                    >
                        {hamburgerMenu ? (
                            <FaTimes className="fa" />
                        ) : (
                            <FaBars className="fa" />
                        )}
                    </div>
                    <div
                        className={
                            hamburgerMenu ? "mobile-menu-links" : "menu-links"
                        }
                    >
                        <ul>
                            <li className="links">
                                <a href="#home" className="links active" >
                                    Home
                                </a>
                            </li>
                            <li className="links">
                                <a href="#about">About</a>
                            </li>
                            <li className="links" >
                                <a href="#project">Projects</a>
                            </li>
                            <li className="links">
                                <a href="#skills">Skills</a>
                            </li>
                            <li className="links" >
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};
export default NavBar;
