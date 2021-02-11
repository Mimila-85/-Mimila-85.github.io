import React from "react";

function Jumbotron({ children }) {
    return(
    <div>
        <div className="jumbotron jumbotron-fluid" style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}>
        <div className="container">
          { children }
        </div>
      </div>
    </div>
    );
}

export default Jumbotron;