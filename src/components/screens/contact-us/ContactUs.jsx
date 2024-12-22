import React from "react";
import bg15 from "../../../assets/images/content/tab-content-03.jpg";
import Navbar2 from "../../common/Navbar2";
import Header from "../../common/Header";
import Footer from "../../common/Footer";

function ContactUs() {
  return (
    <>
      {/* <Navbar2 /> */}
      <Header />

      <div className="main-wrapper">
        <div id="content3" />

        <section
          className="page-title-section2 bg-img cover-background "
          data-overlay-dark={6}
          style={{ backgroundImage: `url(${bg15})` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>Contact </h1>
              </div>
              <div className="col-md-12">
                <ul className="ps-0">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="#!">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
