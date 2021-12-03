import "./Navbar.css";
import logo from "../Images/logo.png";
const Navbar = () => {
    return (
        <>
            <nav className="navbar-wrapper">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="menu">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Projects</li>
                        <li>Skills</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </nav>
        </>
    );
};
export default Navbar;
