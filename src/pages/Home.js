import React from "react";
import { NavLink } from "react-router-dom";
import camilaLogo from "../images/camilaLogo.mp4";

function Home (){

    return (
        <main className="homeBackground">
            <NavLink to="/project">
                <video className="backgroundVideo" autoPlay loop muted>
                    <source src={camilaLogo} type="video/mp4" alt="Camila Logo"/>
                </video>
            </NavLink>
        </main>
    )
}

export default Home;