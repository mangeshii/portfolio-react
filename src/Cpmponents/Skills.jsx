import "./Skills.css";
import html from "../Images/html-5.png";
import css from "../Images/css-3.png";
import sass from "../Images/sass.png";
import javascript from "../Images/js.png";
import git from "../Images/git.png";
import bootstrap from "../Images/bootstrap.png";
import sql from "../Images/database.png";
import react from "../Images/atom.png";

const Skills = () => {
    return (
        <>
            <div className="skills-wrapper">
                <div className="skills-header-container">
                    <h1 className="skills-header">
                        Skills
                        <div className="hori-line-skills"></div>
                    </h1>
                </div>
                <div className="row  gy-5">
                    <div className="col-md-8 col-4 skill-stack">
                    <div className="stack-conatiner">

                        <div className="p-1">
                            <img
                                className="skill-icon img-fluid"
                                src={html}
                                alt=""
                            />
                        </div>

                        <div className="p-1">
                            <img
                                className="skill-icon img-fluid"
                                src={css}
                                alt=""
                            />
                        </div>

                        <div className="p-1">
                            <img
                                className="skill-icon img-fluid"
                                src={sass}
                                alt=""
                            />
                        </div>

                        <div className="p-1">
                            <img
                                className="skill-icon img-fluid"
                                src={javascript}
                                alt=""
                            />
                        </div>

                        <div className="p-1">
                            <img
                                className="skill-icon img-fluid"
                                src={git}
                                alt=""
                            />
                        </div>

                        <div className="p-1">
                            <img
                                className="skill-icon img-fluid"
                                src={bootstrap}
                                alt=""
                            />
                        </div>

                        <div className="p-1">
                            <img
                                className="skill-icon img-fluid"
                                src={sql}
                                alt=""
                            />
                        </div>

                        <div className="p-1">
                            <img
                                className="skill-icon img-fluid"
                                src={react}
                                alt=""
                            />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Skills;
