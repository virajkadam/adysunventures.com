import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bgImage from "../../assets/images/bg/bg12.jpg"; // Import the background image
import useCounter from "../../hooks/useCounter";

function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const satisfiedVisitors = useCounter(isVisible ? 50 : 0);
  const happyClients = useCounter(isVisible ? 200 : 0);
  const awardsWon = useCounter(isVisible ? 3 : 0);
  const constructions = useCounter(isVisible ? 888 : 0);

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

  return (
    <>
      <div className="container mt-4  mb-4">
        <h4 className="text-center  text-uppercase my-5">
          Reach Out to Adysun Ventures
        </h4>
        <div className="row  p-3">
          <div className="col-lg-6 order-2 order-lg-1 border border-2 border-gray rounded px-0">
            <iframe
              className="contact-map rounded"
              id="gmap_canvas"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.562008566088!2d72.966231824157!3d19.25791113539065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bb9575b6d513%3A0x45cf3b57fef76be9!2sKanchanpushp%20Complex%2C%20KANCHAN%20PUSHP%20SOCIETY%2C%20Kavesar%2C%20Thane%20West%2C%20Thane%2C%20Maharashtra%20400607!5e0!3m2!1sen!2sin!4v1734870578839!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="col-lg-6 order-1 order-lg-2 ">
            <div className="contact-info ps-lg-1-9 mb-1-9 mb-lg-0">
              {/* <div className="item bg-white">
                <span className="icon">
                  <i className="fas fa-phone text-primary" />
                </span>
                <div className="cont">
                  <h6 className="mb-1 font-weight-600">Phone: </h6>
                  <p>+91 7776827177</p>
                </div>
              </div> */}
              <div className="item bg-white">
                <span className="icon">
                  <i className="fas fa-map-marker-alt text-primary" />
                </span>
                <div className="cont">
                  <h6 className="mb-1 font-weight-600">Address: </h6>
                  <p className="m-0">
                    A2-704, Apramey CHSL, Kanchanpushp Complex, Ghodbundar Road,
                    Kavesar, Thane West, Maharashtra - 400615
                  </p>
                </div>
              </div>
              <div className="item bg-white">
                <span className="icon">
                  <i className="fas fa-envelope text-primary" />
                </span>
                <div className="cont">
                  <h6 className="mb-1 font-weight-600">Email: </h6>
                  <p>info@adysunventures.com</p>
                </div>
              </div>
            </div>
          </div>
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
                <h4 className="countup text-white d-block">
                  {satisfiedVisitors}
                </h4>
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
                <h4 className="countup text-white d-block">{happyClients}</h4>
                <div className="separator-line-horrizontal-medium-light3 bg-white my-3 opacity5 mx-auto"></div>
                <p className="display-27 display-md-24 font-weight-600 text-white m-0 text-center">
                  Happy Clients
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 mt-1-9">
              <div className="counter-box">
                <span className="icon mb-0 d-block text-white display-18">
                  <i className="ti-world"></i>
                </span>
                <h4 className="countup text-white d-block">{awardsWon}</h4>
                <div className="separator-line-horrizontal-medium-light3 bg-white my-3 opacity5 mx-auto"></div>
                <p className="display-27 display-md-24 font-weight-600 text-white m-0 text-center">
                  Awards
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
                    ADYSUN VENTURES
                  </span>
                </div>
              </Link>
              <p className="mt-4 display-30 text-default-color">
                We deliver high-performance services to help your business
                embrace innovation and tackle the ever-changing challenges of
                today's digital world. Designed to meet your specific needs, our
                services capture and deliver business value in a cost-effective
                way. Based on your strategic objectives, we focus on business
                outcomes in software engineering, advanced technology,
                development teams, digital consulting, and solution operations.
              </p>
              <div className="mt-4 footer-social-icons">
                <ul className="mb-0 ps-0">
                  <li>
                    <Link
                      to="#"
                      className="d-flex justify-content-center align-items-center"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      to="https://x.com/adysunventures"
                      className="d-flex justify-content-center align-items-center"
                    >
                      <i className="fab fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      to="https://www.instagram.com/adysunventures/"
                      className="d-flex justify-content-center align-items-center"
                    >
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="d-flex justify-content-center align-items-center"
                    >
                      <i className="fab fa-youtube"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      to="https://www.linkedin.com/in/adysun-ventures/"
                      className="d-flex justify-content-center align-items-center"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-1-9">
              <h3 className="footer-title-style2 text-white">Quick Links</h3>
              <div className="row">
                <div className="col-md-6 pe-md-0">
                  <ul className="footer-list mb-2 mb-md-0 ps-0">
                    <li>
                      <a
                        onClick={() => handleNavigation("/about-us")}
                        style={{ cursor: "pointer" }}
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => handleNavigation("/contact-us")}
                        style={{ cursor: "pointer" }}
                      >
                        Contact
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => handleNavigation("/services")}
                        style={{ cursor: "pointer" }}
                      >
                        Services
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => handleNavigation("/technologies")}
                        style={{ cursor: "pointer" }}
                      >
                        Technologies
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => handleNavigation("/careers")}
                        style={{ cursor: "pointer" }}
                      >
                        Careers
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 pe-md-0">
                  <ul className="footer-list mb-0 ps-0">
                    <li>
                      <a
                        onClick={() => handleNavigation("/partners")}
                        style={{ cursor: "pointer" }}
                      >
                        Partners
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => handleNavigation("/clients")}
                        style={{ cursor: "pointer" }}
                      >
                        Clients
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() =>
                          handleNavigation("/industries/stock-exchange")
                        }
                        style={{ cursor: "pointer" }}
                      >
                        Stock Exchange
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() =>
                          handleNavigation("/industries/ecommerce")
                        }
                        style={{ cursor: "pointer" }}
                      >
                        E-Commerce
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() =>
                          handleNavigation("/industries/transportation")
                        }
                        style={{ cursor: "pointer" }}
                      >
                        Transportation
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 offset-lg-1 mt-1-9">
              <h3 className="footer-title-style2 text-primary">Get in Touch</h3>
              <ul className="footer-list ps-0">
                <li>
                  <span className="d-inline-block text-primary vertical-align-top">
                    <i className="fas fa-map-marker-alt"></i>
                  </span>
                  <span className="d-inline-block w-85 vertical-align-top ps-2">
                    A2-704, Apramey CHSL, Kanchanpushp Complex, Ghodbundar Road,
                    Kavesar, Thane West, Maharashtra - 400615
                  </span>
                </li>
                {/* <li>
                  <span className="d-inline-block text-primary vertical-align-top">
                    <i className="fas fa-mobile-alt"></i>
                  </span>
                  <span className="d-inline-block w-85 vertical-align-top ps-2">
                    (+44) 123 456 789
                  </span>
                </li> */}
                <li>
                  <span className="d-inline-block text-primary vertical-align-top">
                    <i className="far fa-envelope"></i>
                  </span>
                  <span className="d-inline-block w-85 vertical-align-top ps-2">
                    info@adysunventures.com
                  </span>
                </li>
                {/* <li>
                  <span className="d-inline-block text-primary vertical-align-top">
                    <i className="fas fa-globe"></i>
                  </span>
                  <span className="d-inline-block w-85 vertical-align-top ps-2">
                    www.yourwebsitehere.com
                  </span>
                </li> */}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bar">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
                <p className="mb-0 d-flex justify-content-center">
                  &copy; Copyright 2024 ADYSUN VENTURES PVT. LTD. All
                  Rights Reserved.
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
