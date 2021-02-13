import React from "react";
import "./style.css";

function CardBtn(props){
    return(
        <div className="divBtn">
                <a href={props.livePage} className="btnPortfolio">Live Page</a>
                <a href={props.gitHub} className="btnPortfolio">GitHub Repo</a>  
              </div>
    )
}

export default CardBtn;