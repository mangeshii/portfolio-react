import "./Home.css";
import home_image from "../Images/home-banner.png";
const Home = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-7 home-content">
                        <h2 className="intro">Hello! I'm Mangeshi</h2>
                        <h1 className="main-title">Front-End Developer</h1>
                        <h2 className="intro">
                            I design and develop responsive, optimized and
                            efficient websites.
                        </h2>
                    </div>
                    <div className="col-md-5 home-banner-img">
                        <img
                            className="img-fluid"
                            src={home_image}
                            alt="banner-img"
                        ></img>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Home;
