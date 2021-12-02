import "./Work.css";
import pokedex from "../Images/pokedex.png";
import random from "../Images/random.png";
import salon from "../Images/salon.png";
import todo from "../Images/todo.png";
import watch from "../Images/watch.png";
import weather from "../Images/weather.png";

const RecentWork = () => {
    return (
        <>
            <div className="work-wrapper ">
                <div className="work-header">
                    <h1>
                        My Recent Work
                        <div className="hori-line-work"></div>
                    </h1>
                </div>
                <div className="work-container container-fluid">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 g-lg-4 work-cards">
                    <div className="col">
                        <div className="p-0">
                            <img src={pokedex} alt="" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-0">
                        <img src={random} alt="" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-0">
                        <img src={salon} alt="" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-0">
                        <img src={todo} alt="" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-0">
                        <img src={watch} alt="" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-0">
                        <img src={weather} alt="" />
                        </div>
                    </div>

                </div>
                </div>
            </div>
        </>
    );
};
export default RecentWork;
