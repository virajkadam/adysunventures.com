import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';
import MetaTags from '../common/MetaTags';

const ORANGE = '#ff5a2e';

const NotFound = () => {
  return (
    <>
      <MetaTags 
        title="Page Not Found | Adysun Ventures"
        description="The page you are looking for cannot be found. Please return to the Adysun Ventures homepage."
      />
      <Header />
      <div className="container py-5 my-5">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h1 className="display-1 fw-bold" style={{ color: ORANGE }}>404</h1>
            <h2 className="mb-4">Page Not Found</h2>
            <p className="lead mb-5">
              Sorry, we couldn't find the page you're looking for. It might have been moved, 
              deleted, or perhaps the URL was mistyped.
            </p>
            
            <div className="mb-5">
              <Link to="/" 
                className="btn btn-lg me-3 mb-3"
                style={{ backgroundColor: ORANGE, color: '#fff', border: `2px solid ${ORANGE}`, fontWeight: 600 }}
              >
                Back to Home
              </Link>
              <Link to="/contact-us" 
                className="btn btn-lg mb-3"
                style={{ background: 'transparent', color: ORANGE, border: `2px solid ${ORANGE}`, fontWeight: 600 }}
              >
                Contact Support
              </Link>
            </div>
            
            <div className="card p-4 bg-light">
              <h3 className="h4 mb-3">You might be looking for:</h3>
              <div className="row">
                <div className="col-md-6">
                  <ul className="list-unstyled text-start">
                    <li className="mb-2">
                      <Link to="/services" className="text-decoration-none" style={{ color: ORANGE }}>
                        <i className="fas fa-angle-right me-2" style={{ color: ORANGE }}></i>IT Services
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link to="/technologies" className="text-decoration-none" style={{ color: ORANGE }}>
                        <i className="fas fa-angle-right me-2" style={{ color: ORANGE }}></i>Technologies
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link to="/industries" className="text-decoration-none" style={{ color: ORANGE }}>
                        <i className="fas fa-angle-right me-2" style={{ color: ORANGE }}></i>Industries
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="list-unstyled text-start">
                    <li className="mb-2">
                      <Link to="/about-us" className="text-decoration-none" style={{ color: ORANGE }}>
                        <i className="fas fa-angle-right me-2" style={{ color: ORANGE }}></i>About Us
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link to="/careers" className="text-decoration-none" style={{ color: ORANGE }}>
                        <i className="fas fa-angle-right me-2" style={{ color: ORANGE }}></i>Careers
                      </Link>
                    </li>
                    <li className="mb-2">
                      <Link to="/contact-us" className="text-decoration-none" style={{ color: ORANGE }}>
                        <i className="fas fa-angle-right me-2" style={{ color: ORANGE }}></i>Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound; 