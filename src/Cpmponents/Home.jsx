import "./Home.css";
import home_image from "../Images/home.png";
import NavBar from "./Navbar";

const Home = () => {
    return (
        <>
            <div className="home-wrapper" id="home">
                <NavBar />
                <div className="container-fluid">
                    <div className="row home-cont">
                        <div className="col-md-5 home-banner-img">
                            <img
                                className="img-fluid home-img"
                                src={home_image}
                                alt="banner-img"
                            ></img>
                        </div>
                        <div className="col-md-7 home-content">
                            <h2 className="intro">Hello! I'm Mangeshi</h2>
                            <h1 className="main-title">Front-End Developer</h1>
                            <h2 className="intro">
                                I design and develop responsive, optimized and
                                efficient websites.
                            </h2>
                            {/* <div className="hire-btn">
                                <a href="#contact">
                                    <button className="btn hire-me">
                                        Hire Me
                                    </button>
                                </a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Home;
