import React from "react";
import { NavLink } from "react-router-dom";
import logo2 from "../../assets/images/logos/logo.png";

const Navbar = React.memo(() => {
  return (
    <div>
      <header className="header-style4 ">
        <div className="navbar-default">  
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12">
                <div className="navbar-header navbar-header-custom row">
                  <div className="col-xl-2 col-lg-3">
                    <NavLink to="/" className="navbar-brand h-default">
                      <img
                        id="logo"
                        src={logo2}
                        alt="logo"
                        className=" enlarged-logo"
                      />
                    </NavLink>
                  </div>
                  <div className="col-lg-9 offset-xl-1 offset-lg-0 d-none d-lg-block extracontent">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="w-100">
                          <span className="display-inline-block w-40px align-top">
                            <i className="far fa-clock text-primary display-20" />
                          </span>
                          <p className="d-inline-block m-0 w-75 align-top ps-2">
                            <span className=" d-block">
                              Mon-Sat 09:00 AM-9:00 PM
                            </span>
                            <span className="">Sun: Closed</span>
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="w-100">
                          <span className="d-inline-block w-40px align-top">
                            <i className="fas fa-mobile-alt text-primary display-20" />
                          </span>
                          <p className="d-inline-block m-0 w-75 align-top">
                            <span className="d-block">
                              +91 7776827177 <br />
                              +91 9172530151
                            </span>
                            <a href="mailto:info@shekruweb.com">
                              info@shekruweb.com
                            </a>
                            <br />
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="w-100">
                          <span className="d-inline-block w-40px align-top">
                            <i className="fas fa-map-marker-alt text-primary display-20" />
                          </span>
                          <p className="d-inline-block m-0 w-75 align-top">
                            <span className=" d-block">
                              Office no 6, 2nd Floor Manogat Appt, Swarget,
                              Pune, MH-411037
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="menu_area alt-font">
            <div className="container">
              <nav className="navbar navbar-expand-lg navbar-light p-0 sticky-top">
                <div className="navbar-toggler" />

                <ul className="navbar-nav " id="nav">
                  <li className="">
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        `nav-link custom-nav-link ${
                          isActive ? "text-primary" : ""
                        }`
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/about"
                      className={({ isActive }) =>
                        `nav-link custom-nav-link ${
                          isActive ? "text-primary" : ""
                        }`
                      }
                    >
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/services"
                      className={({ isActive }) =>
                        `nav-link custom-nav-link ${
                          isActive ? "text-primary" : ""
                        }`
                      }
                    >
                      Services
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/products"
                      className={({ isActive }) =>
                        `nav-link custom-nav-link ${
                          isActive ? "text-primary" : ""
                        }`
                      }
                    >
                      Products
                    </NavLink>
                    <ul className="">
                      <li>
                        <NavLink
                          to="/menu-mitra"
                          className={({ isActive }) =>
                            `nav-link custom-nav-link ${
                              isActive ? "text-primary" : ""
                            }`
                          }
                        >
                          MenuMitra
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="/auto-profito"
                          className={({ isActive }) =>
                            `nav-link custom-nav-link ${
                              isActive ? "text-primary" : ""
                            }`
                          }
                        >
                          AutoProfito
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/core-banking-solution"
                          className={({ isActive }) =>
                            `nav-link custom-nav-link ${
                              isActive ? "text-primary" : ""
                            }`
                          }
                        >
                          Core Banking Solutions
                        </NavLink>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <NavLink
                      to="/partners"
                      className={({ isActive }) =>
                        `nav-link custom-nav-link ${
                          isActive ? "text-primary" : ""
                        }`
                      }
                    >
                      Partners
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/technologies"
                      className={({ isActive }) =>
                        `nav-link custom-nav-link ${
                          isActive ? "text-primary" : ""
                        }`
                      }
                    >
                      Technologies
                    </NavLink>
                  </li>
                  <li className="">
                    <span className="" />
                    <NavLink
                      to="/industries"
                      className={({ isActive }) =>
                        `nav-link custom-nav-link ${
                          isActive ? "text-primary" : ""
                        }`
                      }
                    >
                      Industries
                    </NavLink>
                    <ul className="">
                      <li>
                        <NavLink
                          to="/stock-exchange"
                          className={({ isActive }) =>
                            `nav-link custom-nav-link ${
                              isActive ? "text-primary" : ""
                            }`
                          }
                        >
                          Stock Exchange
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/eCommerce"
                          className={({ isActive }) =>
                            `nav-link custom-nav-link ${
                              isActive ? "text-primary" : ""
                            }`
                          }
                        >
                          E-Commerce
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/transportation"
                          className={({ isActive }) =>
                            `nav-link custom-nav-link ${
                              isActive ? "text-primary" : ""
                            }`
                          }
                        >
                          Transportation
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <NavLink
                      to="/careers"
                      className={({ isActive }) =>
                        `nav-link custom-nav-link ${
                          isActive ? "text-primary" : ""
                        }`
                      }
                    >
                      Careers
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/clients"
                      className={({ isActive }) =>
                        `nav-link custom-nav-link ${
                          isActive ? "text-primary" : ""
                        }`
                      }
                    >
                      Clients
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/contact"
                      className={({ isActive }) =>
                        `nav-link custom-nav-link ${
                          isActive ? "text-primary" : ""
                        }`
                      }
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
});

export default Navbar;
