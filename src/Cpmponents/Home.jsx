import "./Home.css";
import home_image from "../Images/home.png";
const Home = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1>Hello</h1>
                    </div>
                    <div className="col-md-6">
                        <img src={home_image} alt="banner-img"></img>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Home;
