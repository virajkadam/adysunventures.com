import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bgImage from "../../assets/images/bg/bg12.webp"; // Import the background image
import useCounter from "../../hooks/useCounter";
import companyInfo from "../../config/companyInfo";

function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const satisfiedVisitors = useCounter(isVisible ? companyInfo.stats.totalProjects : 0);
  const happyClients = useCounter(isVisible ? companyInfo.stats.happyClients : 0);
  const awardsWon = useCounter(isVisible ? companyInfo.stats.awards : 0);
  const constructions = useCounter(isVisible ? 888 : 0);

  const primaryEmail = companyInfo.contact.emails.find(email => email.type === "primary");
  const primaryLocation = companyInfo.contact.locations.find(location => location.type === "headquarters");
  const primaryPhone = companyInfo.contact.phones.find(phone => phone.type === "primary");

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const counterSection = document.querySelector(".counter-section");
    if (counterSection) {
      observer.observe(counterSection);
    }

    return () => {
      if (counterSection) {
        observer.unobserve(counterSection);
      }
    };
  }, []);

  useEffect(() => {
    // Initialize Owl Carousel when component mounts
    if (window.jQuery && window.jQuery.fn.owlCarousel) {
      window.jQuery("#clients").owlCarousel({
        loop: true,
        margin: 80,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000, // Time between slides in milliseconds
        autoplayHoverPause: true, // Pause on hover
        smartSpeed: 1000, // Transition speed
        responsive: {
          0: {
            items: 2,
          },
          576: {
            items: 3,
          },
          768: {
            items: 4,
          },
          992: {
            items: 5,
          },
          1200: {
            items: 6,
          },
        },
      });
    }

    // Cleanup function
    return () => {
      if (window.jQuery && window.jQuery("#clients").data("owl.carousel")) {
        window.jQuery("#clients").owlCarousel("destroy");
      }
    };
  }, []);

  const renderLocationInfo = () => (
    <div className="row">
      {companyInfo.contact.locations.map(location => (
        <div key={location.id} className="col-lg-6 mb-4">
          <div className="item bg-white h-100">
            <span className="icon">
              <i className="fas fa-map-marker-alt text-primary" />
            </span>
            <div className="cont">
              <div className="mb-1 font-weight-600 fw-bold">{location.name}</div>
              {location.status === "Coming Soon" ? (
                <p className="m-0">Coming Soon</p>
              ) : (
                <>
                  <div className="m-0">
                    {Object.keys(location.address)
                      .filter(key => key.startsWith('line') && location.address[key])
                      .map(key => (
                        <div key={key}>{location.address[key]}</div>
                      ))}
                  </div>
                  {location.googleMapsUrl && (
                    <a
                      href={location.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        backgroundColor: "#ff5a2e",
                        color: "#fff",
                        fontWeight: 500,
                        padding: "0.25rem 0.75rem",
                        fontSize: "0.9rem",
                        border: "none",
                        borderRadius: "15px",
                        transition: "all 0.2s ease",
                        display: "inline-block",
                        marginTop: "0.5rem",
                        boxShadow: "none"
                      }}
                    >
                      <i className="fas fa-map-marker-alt" style={{marginRight: '6px'}}></i>
                      Google Maps
                    </a>
                  )}
                
                    <a
                      href={"https://g.co/kgs/C5Fe6uz"}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        backgroundColor: "#ff5a2e",
                        color: "#fff",
                        fontWeight: 500,
                        padding: "0.25rem 0.75rem",
                        fontSize: "0.9rem",
                        border: "none",
                        borderRadius: "15px",
                        transition: "all 0.2s ease",
                        display: "inline-block",
                        marginTop: "0.5rem",
                        boxShadow: "none",
                        marginLeft: "10px"
                      }}
                    >
                      <i className="fab fa-google" style={{marginRight: '6px'}}></i>
                      Google Search
                    </a>
            

                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderContactDetails = () => (
    <div className="row mt-4">
      <div className="col-lg-6 mb-4">
        <div className="item bg-white h-100">
          <span className="icon">
            <i className="fas fa-envelope text-primary" />
          </span>
          <div className="cont">
            <div className="mb-3 font-weight-600 fw-bold">Email Contacts</div>
            {companyInfo.contact.emails.map((email, index) => (
              <div key={email.type} className={index !== 0 ? 'mt-3' : ''}>
                <p className="m-0">{email.address}</p>
                <small className="text-muted">{email.department}</small>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-lg-6 mb-4">
        <div className="item bg-white h-100">
          <span className="icon">
            <i className="fas fa-phone text-primary" />
          </span>
          <div className="cont">
            <div className="mb-3 font-weight-600 fw-bold">Phone:</div>
            {companyInfo.contact.phones.map((phone, index) => (
              <div key={phone.type} className={index !== 0 ? 'mt-3' : ''}>
                <p className="m-0">{phone.number}</p>
                <small className="text-muted">{phone.department}</small>
                {phone.workingHours && (
                  <small className="d-block text-muted">
                    <i className="far fa-clock me-1"></i>
                    {phone.workingHours}
                  </small>
                )}
                {phone.notice && (
                  <small className="d-block text-muted">
                    <i className="fas fa-info-circle me-1"></i>
                    {phone.notice}
                  </small>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderSocialIcons = () => (
    <div className="mt-4 footer-social-icons">
      <ul className="mb-0 ps-0">
        {companyInfo.social.platforms
          .filter(platform => platform.isActive)
          .map(platform => (
            <li key={platform.name}>
              <Link
                to={platform.url}
                target={platform.url !== "#" ? "_blank" : undefined}
                className="d-flex justify-content-center align-items-center"
                title={platform.name}
              >
                <i className={platform.icon}></i>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );

  const renderAllLocations = () => (
    <div className="locations-grid mt-4">
      {companyInfo.contact.locations.map(location => (
        <div key={location.id} className="location-item mb-4">
          <div className="text-primary mb-2 fw-bold">
            <i className="fas fa-map-marker-alt text-primary me-2"></i>
            {location.name}
          </div>
          {location.status === "Coming Soon" ? (
            <p className="m-0">Coming Soon</p>
          ) : (
            <>
              <div className="m-0">
                {Object.keys(location.address)
                  .filter(key => key.startsWith('line') && location.address[key])
                  .map(key => (
                    <div key={key}>{location.address[key]}</div>
                  ))}
              </div>
              {location.googleMapsUrl && (
                <a
                  href={location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: "#ff5a2e",
                    color: "#fff",
                    fontWeight: 500,
                    padding: "0.25rem 0.75rem",
                    fontSize: "0.9rem",
                    border: "none",
                    borderRadius: "15px",
                    transition: "all 0.2s ease",
                    display: "inline-block",
                    marginTop: "0.5rem",
                    boxShadow: "none"
                  }}
                >
                  <i className="fas fa-map-marker-alt" style={{marginRight: '6px'}}></i>
                  Google Maps
                </a>
              )}
              <a
                      href={"https://g.co/kgs/C5Fe6uz"}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        backgroundColor: "#ff5a2e",
                        color: "#fff",
                        fontWeight: 500,
                        padding: "0.25rem 0.75rem",
                        fontSize: "0.9rem",
                        border: "none",
                        borderRadius: "15px",
                        transition: "all 0.2s ease",
                        display: "inline-block",
                        marginTop: "0.5rem",
                        boxShadow: "none",
                        marginLeft: "10px"
                      }}
                    >
                      <i className="fab fa-google" style={{marginRight: '6px'}}></i>
                      Google Search
                    </a>

            </>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <>
      <div className="container mt-4 mb-4">
        <h2 className="text-center text-uppercase my-5">
          Reach Out to {companyInfo.name.short}
        </h2>
        <div className="contact-info">
          {renderLocationInfo()}
          {renderContactDetails()}
        </div>
      </div>
      {/* COUNTER */}
      <section
        className="parallax md counter-section"
        style={{
          backgroundImage: `url(${bgImage})`,
          position: "relative",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        data-overlay-dark="6"
      >
        <div className="container">
          <div className="row mt-n1-9 justify-content-center">
            <div className="col-sm-6 col-lg-3 mt-1-9">
              <div className="counter-box">
                <span className="icon mb-0 d-block text-white display-18">
                  <i className="ti-user"></i>
                </span>
                <h3 className="countup text-white d-block">
                  {satisfiedVisitors}
                </h3>
                <div className="separator-line-horrizontal-medium-light3 bg-white my-3 opacity5 mx-auto"></div>
                <p className="display-27 display-md-24 font-weight-600 text-white m-0 text-center">
                  Total Projects
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 mt-1-9">
              <div className="counter-box">
                <span className="icon mb-0 d-block text-white display-18">
                  <i className="ti-face-smile"></i>
                </span>
                <h3 className="countup text-white d-block">{happyClients}</h3>
                <div className="separator-line-horrizontal-medium-light3 bg-white my-3 opacity5 mx-auto"></div>
                <p className="display-27 display-md-24 font-weight-600 text-white m-0 text-center">
                  Happy Clients
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 mt-1-9">
              <div className="counter-box">
                <span className="icon mb-0 d-block text-white display-18">
                  <i className="ti-crown"></i>
                </span>
                <h3 className="countup text-white d-block">{awardsWon}</h3>
                <div className="separator-line-horrizontal-medium-light3 bg-white my-3 opacity5 mx-auto"></div>
                <p className="display-27 display-md-24 font-weight-600 text-white m-0 text-center">
                  Awards Won
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 mt-1-9">
              <div className="counter-box">
                <span className="icon mb-0 d-block text-white display-18">
                  <i className="ti-check-box"></i>
                </span>
                <h3 className="countup text-white d-block">{constructions}</h3>
                <div className="separator-line-horrizontal-medium-light3 bg-white my-3 opacity5 mx-auto"></div>
                <p className="display-27 display-md-24 font-weight-600 text-white m-0 text-center">
                  Task Completed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <div className="section-clients bg-light">
        <div className="container">
          <div className="owl-carousel owl-theme clients" id="clients">
            <div className="item">
              <img
                alt="client-01"
                src={require("../../assets/images/partners/client-01.png")}
              />
            </div>
            <div className="item">
              <img
                alt="client-02"
                src={require("../../assets/images/partners/client-02.png")}
              />
            </div>
            <div className="item">
              <img
                alt="client-03"
                src={require("../../assets/images/partners/client-03.png")}
              />
            </div>
            <div className="item">
              <img
                alt="client-04"
                src={require("../../assets/images/partners/client-04.png")}
              />
            </div>
            <div className="item">
              <img
                alt="client-05"
                src={require("../../assets/images/partners/client-05.png")}
              />
            </div>
            <div className="item">
              <img
                alt="client-06"
                src={require("../../assets/images/partners/client-06.png")}
              />
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        <div className="container">
          <div className="row mt-n1-9">
            <div className="col-lg-4 col-md-6 mt-1-9">
              <Link to="/" className="navbar-brand logodefault">
                <div className="d-flex align-items-center">
                  <img
                    src={require("../../assets/images/logos/logo.png")}
                    alt="logo"
                    className="img-fluid pe-3"
                  />
                  <span className="h3 text-white fw-bold mb-0">
                    {companyInfo.name.short}
                  </span>
                </div>
              </Link>
              <p className="mt-4 display-30 text-default-color">
                {companyInfo.about.shortDescription}
              </p>
              {renderSocialIcons()}
            </div>

            <div className="col-lg-2 col-md-6 mt-1-9">
              <h3 className="footer-title-style2 text-white">Quick Links</h3>
              <div className="row">
                <div className="col-md-6 pe-md-0">
                  <ul className="footer-list mb-2 mb-md-0 ps-0">
                    <li>
                      <Link 
                        to="/about-us"
                        className="text-decoration-none"
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavigation("/about-us");
                        }}
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/contact-us"
                        className="text-decoration-none"
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavigation("/contact-us");
                        }}
                      >
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/services"
                        className="text-decoration-none"
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavigation("/services");
                        }}
                      >
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/technologies"
                        className="text-decoration-none"
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavigation("/technologies");
                        }}
                      >
                        Technologies
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/careers"
                        className="text-decoration-none"
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavigation("/careers");
                        }}
                      >
                        Careers
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* <div className="col-md-6 pe-md-0">
                  <ul className="footer-list mb-0 ps-0">
                    <li>
                      <Link 
                        to="/partners"
                        className="text-decoration-none"
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavigation("/partners");
                        }}
                      >
                        Partners
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/clients"
                        className="text-decoration-none"
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavigation("/clients");
                        }}
                      >
                        Clients
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/industries/stock-exchange"
                        className="text-decoration-none"
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavigation("/industries/stock-exchange");
                        }}
                      >
                        Stock Exchange
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/industries/ecommerce"
                        className="text-decoration-none"
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavigation("/industries/ecommerce");
                        }}
                      >
                        E-Commerce
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/industries/transportation"
                        className="text-decoration-none"
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavigation("/industries/transportation");
                        }}
                      >
                        Transportation
                      </Link>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-1-9">
              <h3 className="footer-title-style2 text-primary">
                <i className="fas fa-map-marked-alt me-2"></i>
                Our Locations
              </h3>
              {renderAllLocations()}
            </div>

            <div className="col-lg-2 col-md-6 mt-1-9">
              <h3 className="footer-title-style2 text-primary">
                <i className="fas fa-address-book me-2"></i>
                Contact Us
              </h3>
              <div className="contact-details mt-4">
                <div className="mb-4">
                  <h6 className="text-primary mb-2">
                    <i className="fas fa-envelope me-2"></i>
                    Email Addresses
                  </h6>
                  {companyInfo.contact.emails.map((email) => (
                    <div key={email.type} className="mb-3">
                      <p className="text-white mb-1">{email.department}</p>
                      <a
                        href={`mailto:${email.address}`}
                        className="text-white"
                        style={{ textDecoration: "none", opacity: 0.8 }}
                      >
                        {email.address}
                      </a>
                    </div>
                  ))}
                </div>
                <div>
                  <h6 className="text-primary mb-2">
                    <i className="fas fa-phone me-2"></i>
                    Contact Number
                  </h6>
                  {companyInfo.contact.phones.map((phone) => (
                    <div key={phone.type} className="mb-3">
                      <p className="text-white mb-1">{phone.department}</p>
                      <a
                        href={`tel:${phone.number}`}
                        className="text-white"
                        style={{
                          textDecoration: "none",
                          opacity: 0.8,
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <i className="fas fa-mobile-alt"></i>
                        {phone.number}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bar">
          <div className="bg-light py-3 border-top">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <p className="text-center mb-0 text-muted small">
                    Adysun Ventures Private Limited
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <p className="text-center mb-0 text-muted small">
                    CIN : U72900PN2020PTC196380
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
                <p className="mb-0 d-flex justify-content-center">
                  &copy; Copyright {new Date().getFullYear()}{" "}
                  {companyInfo.name.full} All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
