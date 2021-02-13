import React from "react";
import "./style.css";

function CardText(props) {
    return (
        <p className="card-text">
            Technologies: {props.technologies}
            <br />
            <br />
            {props.description}
            <br />
            <br />
            {props.responsibility}
            <br />
            <br />
            Check usage information at my GitHub ReadMe.
        </p>

    )
}

export default CardText;