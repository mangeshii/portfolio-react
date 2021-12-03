import "./Work.css";
import pokedex from "../Images/pokedex.png";
import random from "../Images/random.png";
import salon from "../Images/salon.png";
import todo from "../Images/todo.png";
import watch from "../Images/watch.png";
import weather from "../Images/weather.png";
import { FaChevronRight } from "react-icons/fa";

const RecentWork = () => {
    return (
        <>
            <div className="work-wrapper" id="project">
                <div className="work-header">
                    <h1>
                        My Recent Work
                        <div className="hori-line-work"></div>
                    </h1>
                </div>
                <div className="work-container container-fluid">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 g-lg-4 work-cards">
                        <div className="col">
                            <div className="p-0 pokedex">
                                <img src={pokedex} alt="" />
                                <div className="overlay">
                                    <div className="overlay-text">
                                        <h4>POKEDEX</h4>
                                        <h6>
                                            It consists of all the pokemon data
                                            which is fetched from an API. Once
                                            you click on a particular pokemon
                                            card it will render a page with
                                            detailed information about that
                                            pokemon.
                                        </h6>
                                        <a
                                            href="https://pokedex-pokemon-17.netlify.app/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <button className="visit">
                                                Visit Website{" "}
                                                <FaChevronRight className="forward-icon" />
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-0 randomquote">
                                <img src={random} alt="" />
                                <div className="overlay">
                                    <div className="overlay-text">
                                        <h4>RANDOM QUOTE GENERATOR</h4>
                                        <h6>
                                            It is capable of pulling quotes
                                            randomly from an API. It is also
                                            capable of tweeting one of the
                                            random quote to the twitter
                                        </h6>
                                        <a
                                            href="https://random-quote-generator-machine.netlify.app/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <button className="visit">
                                                Visit Website{" "}
                                                <FaChevronRight className="forward-icon" />
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-0 salonpage">
                                <img src={salon} alt="" />
                                <div className="overlay">
                                    <div className="overlay-text">
                                        <h4>SALON WEBSITE</h4>
                                        <h6>
                                            Single page application using react.
                                        </h6>
                                        <a
                                            href="https://salon-page.netlify.app/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <button className="visit">
                                                Visit Website{" "}
                                                <FaChevronRight className="forward-icon" />
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-0 todo">
                                <img src={todo} alt="" />
                                <div className="overlay">
                                    <div className="overlay-text">
                                        <h4>TODO APP</h4>
                                        <h6>
                                            Simple ToDo made with React which is
                                            capable of adding and deleting the
                                            todo's
                                        </h6>
                                        <a
                                            href="https://todo-application-17.netlify.app/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <button className="visit">
                                                Visit Website{" "}
                                                <FaChevronRight className="forward-icon" />
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-0 stopwatch">
                                <img src={watch} alt="" />
                                <div className="overlay">
                                    <div className="overlay-text">
                                        <h4>STOPWATCH</h4>
                                        <h6>
                                            Suspendisse quis odio lobortis
                                            laoreet libero quis varius tortor.
                                        </h6>
                                        <a
                                            href="https://stopwatch-countdown.netlify.app/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <button className="visit">
                                                Visit Website{" "}
                                                <FaChevronRight className="forward-icon" />
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-0 weather">
                                <img src={weather} alt="" />
                                <div className="overlay">
                                    <div className="overlay-text">
                                        <h4>WEATHER APP</h4>
                                        <h6>
                                            The weather app provides atmospheric
                                            pressure, weather conditions,
                                            visibility distance, relative
                                            humidity, wind speed, sunrise and
                                            sunset timings.
                                        </h6>
                                        <a
                                            href="https://weatherapplication-17.netlify.app/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <button className="visit">
                                                Visit Website{" "}
                                                <FaChevronRight className="forward-icon" />
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="see-more-container">
                    <a
                        href="https://github.com/mangeshii"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button className="see-more">See more on Github</button>
                    </a>
                </div>
            </div>
        </>
    );
};
export default RecentWork;
