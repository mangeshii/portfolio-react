import "./Contact.css";
import contact_logo from "../Images/logo.png";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Contact = () => {
    return (
        <>
            <div className="contact-wrapper">
                <div className="contact-logo">
                    <img className="img-fluid" src={contact_logo} alt="" />
                </div>
                <div className="quote">
                    <h2>
                        Living, learning, & leveling up <br />
                        one day at a time.
                    </h2>
                </div>
                <div className="social-icons">
                    <div className="cont">
                        <div className="icon-cont">
                            <FaInstagram className="socio-icon" />
                        </div>
                        <div className="icon-cont">
                            <FaLinkedinIn className="socio-icon" />
                        </div>
                        <div className="icon-cont">
                            <FaGithub className="socio-icon" />
                        </div>
                        <div className="icon-cont">
                            <FaTwitter className="socio-icon" />
                        </div>
                        <div className="icon-cont">
                            <GrMail className="socio-icon" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Contact;
