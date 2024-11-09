import React from "react";
import adysun_ventures_logo from "../assets/images/logos/logo.png";
import "../assets/styles/nav-menu.css";

function Header() {
  return (
    <header className="header-style7">
      <div className="navbar-default">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="menu_area alt-font">
                <nav className="navbar navbar-expand-lg navbar-light p-0">
                  <div className="navbar-header">
                    <a href="index.html" className="navbar-brand logodefault">
                      <div className="d-flex align-items-center">
                        <img
                          src={adysun_ventures_logo}
                          alt="logo"
                          className="img-fluid pe-3"
                        />
                        <span className="h3 fw-bold mb-0">ADYSUN VENTURES</span>
                      </div>
                    </a>
                  </div>
                  <div className="navbar-toggler small" />
                  <ul
                    className="navbar-nav ms-auto"
                    id="nav"
                    style={{ display: "flex" }}
                  >
                    <li>
                      <a href>Home</a>
                    </li>
                    <li>
                      <a href>Services</a>
                    </li>
                    <li>
                      <a href>Technologies</a>
                    </li>
                    <li>
                      <a href>Careers</a>
                    </li>
                    <li>
                      <a href>About</a>
                    </li>
                    <li>
                      <a href>Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
