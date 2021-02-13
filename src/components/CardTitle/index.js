import React from "react";
import "./style.css";

function CardTitle(props){
    return(
        <h5 className="card-title">{props.title}</h5>
    )
}

export default CardTitle;