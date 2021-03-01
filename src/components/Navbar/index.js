import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

function Navbar() {
  return (
    <header>
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-color nav-head">
          <NavLink className="navbar-brand camila" to="/">
            CAMILA
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={
                    window.location.pathname === "/about"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/project"
                  className={
                    window.location.pathname === "/project"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Project
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={
                    window.location.pathname === "/contact"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <SocialIcon
              url="https://github.com/Mimila-85"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url="https://www.linkedin.com/in/camila-alves-meyer/"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url="mailto:camila.alves85@gmail.com"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
