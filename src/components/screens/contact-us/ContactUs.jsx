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

        <section>
          <div className="container">
            <div className="section-heading">
              <h2>Get in Touch</h2>
            </div>
            <div className="row p-3">
              <div className="col-lg-6 order-2 order-lg-1 border border-2 border-gray rounded px-0">
                <iframe
                  className="contact-map rounded"
                  id="gmap_canvas"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.8959802261457!2d73.75774731489443!3d18.59177998736384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbc048041bbb%3A0x7f2f04c0ca40235c!2sWakad%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411057!5e0!3m2!1sen!2sin!4v1629789876543!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{border: 0}}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>

              <div className="col-lg-6 order-1 order-lg-2 ">
                <div className="contact-info ps-lg-1-9 mb-1-9 mb-lg-0">
                  <div className="item bg-white">
                    <span className="icon">
                      <i className="fas fa-phone text-primary" />
                    </span>
                    <div className="cont">
                      <h6 className="mb-1 font-weight-600">Phone: </h6>
                      <p>+91 7777777777</p>
                    </div>
                  </div>
                  <div className="item bg-white">
                    <span className="icon">
                      <i className="fas fa-map-marker-alt text-primary" />
                    </span>
                    <div className="cont">
                      <h6 className="mb-1 font-weight-600">Address: </h6>
                      <p className="m-0">
                        Wakad, Pimpri-Chinchwad, Maharashtra-411057
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
        </section>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
