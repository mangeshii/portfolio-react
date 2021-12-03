import "./Navbar.css";
import logo from "../Images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const NavBar = () => {
    const [hamburgerMenu, setHamburgerMenu] = useState(false);
    return (
        <>
            <nav className="nav-wrapper">
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
                            <li>Home</li>
                            <li>About</li>
                            <li>Projects</li>
                            <li>Skills</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};
export default NavBar;
