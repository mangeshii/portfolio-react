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
            <div className="contact-wrapper" id="contact">
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
                            <a
                                href="https://www.instagram.com/mangeshipatil/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaInstagram className="socio-icon" />
                            </a>
                        </div>
                        <div className="icon-cont">
                            <a
                                href="https://www.linkedin.com/in/mangeshipatil/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaLinkedinIn className="socio-icon" />
                            </a>
                        </div>
                        <div className="icon-cont">
                            <a
                                href="https://github.com/mangeshii"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaGithub className="socio-icon" />
                            </a>
                        </div>
                        <div className="icon-cont">
                            <a href="https://twitter.com/mangeshi_patil">
                                <FaTwitter className="socio-icon" />
                            </a>
                        </div>
                        <div className="icon-cont">
                            <a
                                href="mailto:mangeshipatilll@gmail.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <GrMail className="socio-icon" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Contact;
