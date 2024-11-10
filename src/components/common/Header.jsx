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

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header-style7">
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
                        <span className="h3 fw-bold mb-0">ADYSUN VENTURES</span>
                      </div>
                    </Link>
                  </div>

                  {/* Mobile Toggle Button */}
                  <div 
                    className={`navbar-toggler small ${isMenuOpen ? 'menu-opened' : ''}`}
                    onClick={toggleMenu}
                  >
                    <span></span>
                  </div>

                  {/* Navigation Menu */}
                  <ul
                    className={`navbar-nav ms-auto ${isMenuOpen ? 'show' : ''}`}
                    id="nav"
                    style={{ 
                      display: isDesktop ? 'flex' : isMenuOpen ? 'block' : 'none' 
                    }}
                  >
                    <li className="nav-item">
                      <Link className="nav-link" to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/technologies" onClick={() => setIsMenuOpen(false)}>Technologies</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/careers" onClick={() => setIsMenuOpen(false)}>Careers</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
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
