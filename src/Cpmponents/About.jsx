import "./About.css";
import about_img from "../Images/about_shap_bg.png";

const About = () => {
    return (
        <>
            <div className="about-wrapper">
                <div className=" container">
                    <div className="row">
                        <div className="col-md-7 about-info">
                            <h5>
                                I am a self-taught developer and I started my
                                journey past 1 year. At the moment I am
                                tailoring my skills on HTML, CSS, JavaScript,
                                Bootstrap and React. This gives me a lot of joy
                                when I see my progress, while I am learning and
                                trying to take action on what I have learned.
                            </h5>
                            <div className="btns">
                                <a href="#project">
                                    <button className="btn view-work">
                                        View Work
                                    </button>
                                </a>
                                <button className="btn  download-cv">
                                    Download CV
                                </button>
                            </div>
                        </div>
                        <div className="col-md-5 about-title">
                            <img
                                className="img-fluid about-img"
                                src={about_img}
                                alt=""
                            />
                            <h1 className="about-heading">
                                About Me
                                <div className="hori-line"></div>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default About;
