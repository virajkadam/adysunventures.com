import React from 'react';
import { Link } from 'react-router-dom';
import MetaTags from '../common/MetaTags';

const NotFound = () => {
  return (
    <>
      <MetaTags 
        title="Page Not Found | Adysun Ventures"
        description="The page you are looking for cannot be found. Please return to the Adysun Ventures homepage."
      />
      
      <div className="container my-5 py-5">
        <div className="row justify-content-center text-center">
          <div className="col-md-8">
            <h1 className="display-1 fw-bold text-danger">404</h1>
            <h2 className="my-4">Page Not Found</h2>
            <p className="lead mb-4">
              We're sorry, but the page you are looking for doesn't exist or has been moved.
            </p>
            <div className="my-5">
              <Link to="/" className="btn btn-primary me-3">
                Return to Homepage
              </Link>
              <Link to="/contact" className="btn btn-outline-secondary">
                Contact Support
              </Link>
            </div>
            
            <div className="mt-5 pt-3">
              <h3 className="h5 mb-4">You might be interested in:</h3>
              <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                  <div className="card h-100">
                    <div className="card-body">
                      <h5 className="card-title">IT Solutions</h5>
                      <Link to="/services/it-solutions" className="stretched-link">
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100">
                    <div className="card-body">
                      <h5 className="card-title">Business Strategy</h5>
                      <Link to="/services/business-strategy" className="stretched-link">
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100">
                    <div className="card-body">
                      <h5 className="card-title">Contact Us</h5>
                      <Link to="/contact" className="stretched-link">
                        Get in Touch
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound; 