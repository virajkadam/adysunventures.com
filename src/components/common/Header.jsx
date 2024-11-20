import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import adysun_ventures_logo from "../../assets/images/logos/logo.png";
import "../../assets/styles/nav-menu.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 991);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsDesktop(width > 991);
      if (width > 991) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky-top bg-white shadow-sm">
      <div className="navbar-default">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="menu_area alt-font">
                <nav className="navbar navbar-expand-lg navbar-light p-0">
                  <div className="navbar-header">
                    <Link to="/" className="navbar-brand logodefault">
                      <div className="d-flex align-items-center">
                        <img
                          src={adysun_ventures_logo}
                          alt="logo"
                          className="img-fluid pe-3"
                        />
                        <span className="h5 fw-bold mb-0">ADYSUN VENTURES</span>
                      </div>
                    </Link>
                  </div>

                  {/* Mobile Toggle Button */}
                  <div
                    className={`navbar-toggler small ${
                      isMenuOpen ? "menu-opened" : ""
                    }`}
                    onClick={toggleMenu}
                  >
                    <span></span>
                  </div>

                  {/* Navigation Menu */}
                  <ul
                    className={`navbar-nav ms-auto ${isMenuOpen ? "show" : ""}`}
                    id="nav"
                    style={{
                      display: isDesktop
                        ? "flex"
                        : isMenuOpen
                        ? "block"
                        : "none",
                    }}
                  >
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/about-us"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        About
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/services"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Services
                      </Link>
                    </li>
                    {/* <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/products"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Products
                      </Link>
                    </li> */}
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/partners"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Partners
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/technologies"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Technologies
                      </Link>
                    </li>
                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link dropdown-toggle"
                        to="/industries"
                        role="button"
                        id="industriesDropdown"
                        onMouseEnter={(e) => {
                          const dropdown = document.querySelector(
                            '[aria-labelledby="industriesDropdown"]'
                          );
                          dropdown.classList.add("show");
                          e.currentTarget.setAttribute("aria-expanded", "true");
                        }}
                        onMouseLeave={(e) => {
                          const dropdown = document.querySelector(
                            '[aria-labelledby="industriesDropdown"]'
                          );
                          dropdown.classList.remove("show");
                          e.currentTarget.setAttribute("aria-expanded", "false");
                        }}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Industries
                      </Link>
                      <ul
                        className="dropdown-menu animate slideIn"
                        aria-labelledby="industriesDropdown"
                        onMouseEnter={(e) => e.currentTarget.classList.add("show")}
                        onMouseLeave={(e) => e.currentTarget.classList.remove("show")}
                        style={{
                          transition: "all 0.3s ease-in-out",
                          transform: "translateY(10px)",
                          opacity: 0,
                        }}
                      >
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/industries/stock-exchange"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Stock Exchange
                          </Link>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/industries/ecommerce"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            E-Commerce
                          </Link>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/industries/transportation"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Transportation
                          </Link>
                        </li>
                      </ul>
                      <style>
                        {`
                          .dropdown-menu.show {
                            transform: translateY(0) !important;
                            opacity: 1 !important;
                          }
                        `}
                      </style>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/careers"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Careers
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/clients"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Clients
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/contact-us"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Contact
                      </Link>
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
