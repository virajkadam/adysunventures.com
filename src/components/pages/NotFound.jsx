import React from "react";
import { Link } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";
import MetaTags from "../common/MetaTags";

const ORANGE = "#ff5a2e";

const NotFound = () => {
  return (
    <>
      <MetaTags
        title="Page Not Found | Adysun Ventures"
        description="The page you are looking for cannot be found. Please return to the Adysun Ventures homepage."
      />
      {/* <Header /> */}
      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <div className="row w-100">
          <div className="col-md-8 mx-auto text-center">
            <h1 className="display-1 fw-bold" style={{ color: ORANGE }}>
              404
            </h1>
            <h2 className="mb-4">Page Not Found</h2>
            <p className="lead mb-5">
              Sorry, we couldn't find the page you're looking for. It might have
              been moved, deleted, or perhaps the URL was mistyped.
            </p>

            <div className="mb-5">
              <Link
                to="/"
                className="btn btn-lg me-3 mb-3"
                style={{
                  backgroundColor: ORANGE,
                  color: "#fff",
                  border: `2px solid ${ORANGE}`,
                  fontWeight: 600,
                }}
              >
                Back to Home
              </Link>
              <Link
                to="/contact-us"
                className="btn btn-lg mb-3"
                style={{
                  background: "transparent",
                  color: ORANGE,
                  border: `2px solid ${ORANGE}`,
                  fontWeight: 600,
                }}
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default NotFound;
