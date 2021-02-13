import React from "react";
import "./style.css"
import CardBody from "../CardBody";
import CardBtn from "../CardBtn";
import CardImg from "../CardImg";
import CardText from "../CardText";
import CardTitle from "../CardTitle";

function Card(props) {
    return (
        <div className="row row-cols-1 row-cols-sm-3">
            {props.projects.map((project, index) => (
                <div className="col mb-4">
                    <div className="flip-card">
                        <div className="flip-card-inner" key={Math.floor(index + 1 * Math.random() * 100)}>
                            <div className="flip-card-front">
                                <CardImg
                                    img={project.image}
                                    title={project.title}
                                />
                                <CardTitle
                                    title={project.title}
                                />
                            </div>
                            <CardBody>
                                <CardText
                                    technologies={project.technologies}
                                    description={project.description}
                                    responsibility={project.responsibility}
                                />
                                <CardBtn
                                    livePage={project.livePage}
                                    gitHub={project.gitHub}
                                />
                            </CardBody>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Card;