import React from "react";
import "./style.css"

function CardBody(props) {
    return (
        <div className="flip-card-back">{props.children}</div>
    )
}

export default CardBody;