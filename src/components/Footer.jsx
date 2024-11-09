import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import bgImage from '../assets/images/bg/bg12.jpg'; // Import the background image

function Footer() {
  useEffect(() => {
    // Initialize Owl Carousel when component mounts
    if (window.jQuery && window.jQuery.fn.owlCarousel) {
      window.jQuery('#clients').owlCarousel({
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
            items: 2
          },
          576: {
            items: 3
          },
          768: {
            items: 4
          },
          992: {
            items: 5
          },
          1200: {
            items: 6
          }
        }
      });
    }

    // Cleanup function
    return () => {
      if (window.jQuery && window.jQuery('#clients').data('owl.carousel')) {
        window.jQuery('#clients').owlCarousel('destroy');
      }
    };
  }, []);

  return (
    <>
      {/* COUNTER */}
      <section 
        className="parallax md" 
        style={{
          backgroundImage: `url(${bgImage})`,
          position: 'relative',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        data-overlay-dark="6"
      >
        <div className="container">
          <div className="row mt-n1-9">
            <div className="col-sm-6 col-lg-3 mt-1-9">
              <div className="counter-box">
                <span className="icon mb-0 d-block text-white display-18"><i className="ti-user"></i></span>
                <h4 className="countup text-white d-block">1826</h4>
                <div className="separator-line-horrizontal-medium-light3 bg-white my-3 opacity5 mx-auto"></div>
                <p className="display-27 display-md-24 font-weight-600 text-white m-0 text-center">Satisfied Visitors</p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 mt-1-9">
              <div className="counter-box">
                <span className="icon mb-0 d-block text-white display-18"><i className="ti-face-smile"></i></span>
                <h4 className="countup text-white d-block">875</h4>
                <div className="separator-line-horrizontal-medium-light3 bg-white my-3 opacity5 mx-auto"></div>
                <p className="display-27 display-md-24 font-weight-600 text-white m-0 text-center">Happy Clients</p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 mt-1-9">
              <div className="counter-box">
                <span className="icon mb-0 d-block text-white display-18"><i className="ti-world"></i></span>
                <h4 className="countup text-white d-block">1412</h4>
                <div className="separator-line-horrizontal-medium-light3 bg-white my-3 opacity5 mx-auto"></div>
                <p className="display-27 display-md-24 font-weight-600 text-white m-0 text-center">Awards Wining</p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 mt-1-9">
              <div className="counter-box">
                <span className="icon mb-0 d-block text-white display-18"><i className="ti-vector"></i></span>
                <h4 className="countup text-white d-block">100</h4>
                <div className="separator-line-horrizontal-medium-light3 bg-white my-3 opacity5 mx-auto"></div>
                <p className="display-27 display-md-24 font-weight-600 text-white m-0 text-center">Construction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <div className="section-clients bg-light">
        <div className="container">
          <div className="owl-carousel owl-theme clients" id="clients">
            <div className="item"><img alt="client-01" src={require('../assets/images/partners/client-01.png')} /></div>
            <div className="item"><img alt="client-02" src={require('../assets/images/partners/client-02.png')} /></div>
            <div className="item"><img alt="client-03" src={require('../assets/images/partners/client-03.png')} /></div>
            <div className="item"><img alt="client-04" src={require('../assets/images/partners/client-04.png')} /></div>
            <div className="item"><img alt="client-05" src={require('../assets/images/partners/client-05.png')} /></div>
            <div className="item"><img alt="client-06" src={require('../assets/images/partners/client-06.png')} /></div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        <div className="container">
          <div className="row mt-n1-9">
            <div className="col-lg-4 col-md-6 mt-1-9">
              <Link to="/" className="navbar-brand logodefault">
                <img src={require('../assets/images/logos/logo.png')} alt="logo" className="img-fluid" />
                <span className="h3 text-white fw-bold mb-0">ADYSUN VENTURES</span>
              </Link>
              <p className="mt-4 display-30 text-default-color">
                We deliver high-performance services to help your business embrace innovation and tackle the ever-changing challenges of today's digital world. Designed to meet your specific needs, our services capture and deliver business value in a cost-effective way. Based on your strategic objectives, we focus on business outcomes in software engineering, advanced technology, development teams, digital consulting, and solution operations.
              </p>
              <div className="mt-4 footer-social-icons">
                <ul className="mb-0 ps-0">
                  <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                  <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                  <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                  <li><Link to="#"><i className="fab fa-youtube"></i></Link></li>
                  <li><Link to="#"><i className="fab fa-linkedin-in"></i></Link></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-1-9">
              <h3 className="footer-title-style2 text-primary">Quick Links</h3>
              <div className="row">
                <div className="col-md-6 ps-md-0">
                  <ul className="footer-list mb-2 mb-md-0 ps-0">
                    <li><Link to="/news">News</Link></li>
                    <li><Link to="/history">History</Link></li>
                    <li><Link to="/community">Community</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/safety">Safety</Link></li>
                  </ul>
                </div>
                <div className="col-md-6 pe-md-0">
                  <ul className="footer-list ps-0">
                    <li><Link to="/construction">Construction</Link></li>
                    <li><Link to="/case-studies">Case studies</Link></li>
                    <li><Link to="/blog">Blog detail</Link></li>
                    <li><Link to="/sales">Sales Services</Link></li>
                    <li><Link to="/services">Services detail</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 offset-lg-1 mt-1-9">
              <h3 className="footer-title-style2 text-primary">Get in Touch</h3>
              <ul className="footer-list ps-0">
                <li>
                  <span className="d-inline-block text-primary vertical-align-top"><i className="fas fa-map-marker-alt"></i></span>
                  <span className="d-inline-block w-85 vertical-align-top ps-2">74 Guild Street 542B, Great North Town 51 MT.</span>
                </li>
                <li>
                  <span className="d-inline-block text-primary vertical-align-top"><i className="fas fa-mobile-alt"></i></span>
                  <span className="d-inline-block w-85 vertical-align-top ps-2">(+44) 123 456 789</span>
                </li>
                <li>
                  <span className="d-inline-block text-primary vertical-align-top"><i className="far fa-envelope"></i></span>
                  <span className="d-inline-block w-85 vertical-align-top ps-2">addyour@emailhere</span>
                </li>
                <li>
                  <span className="d-inline-block text-primary vertical-align-top"><i className="fas fa-globe"></i></span>
                  <span className="d-inline-block w-85 vertical-align-top ps-2">www.yourwebsitehere.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bar">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
                <p className="mb-0">&copy; Copyright {new Date().getFullYear()} ADYSUN VENTURES. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
