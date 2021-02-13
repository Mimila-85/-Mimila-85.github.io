import React from "react";
import "./style.css";

function CardImg (props){
    return(
        <img src={props.img} className="card-img align-self-center mr-3" alt={props.title} />
    )
}

export default CardImg;