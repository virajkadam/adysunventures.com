import React from "react";
import {useEffect} from 'react'
import { Link } from "react-router-dom";
import career from "../../../assets/images/bg/bg13.jpg";
import bg2 from "../../../assets/images/bg/bg2.jpg";
import bringRole from "../../../assets/images/bg/bringRole.png";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
// import android from "../../../assets/images/brand-logos/android.png";
function Careers() {
  useEffect(() => {
    // Apply color with !important to the separator-right span
    const separatorRight = document.querySelector(".separator-right");
    separatorRight.style.setProperty("color", "#ff5a2e", "important");
  }, []);
  return (
    <div>
      <Header />
      <>
        <section
          className="pt-4 p-lg-5 text-white"
          style={{
            backgroundImage: `url(${career})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          data-overlay-dark="6"
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="section-heading title-style5 left half mt-0 ms-0 ms-lg-5">
                  <h1 className="text-white">
                    Let's shape the future with tech together!
                  </h1>
                  <div className="square">
                    <span className="separator-left bg-primary" />
                    <span
                      className="separator-right bg-primary"
                      style={{ color: "#ff5a2e" }}
                    />
                  </div>
                  <p className="mt-3 fs-5 fs-md-4 fs-lg-3 ">
                    At Adysun Ventures, we're passionate about innovation and
                    shaping the future. Be part of a team that's dedicated to
                    creating solutions that make a difference.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-5 p-lg-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <h1 className="fw-bold">Come for the job,</h1>
                <h1 className="fw-bold ">stay for the Culture.</h1>
              </div>
              <div className="col-lg-6 d-flex align-items-center">
                <h6 className="fs-5 fw-normal ">
                  We believe that work should not only be fulfilling, but also
                  enjoyable. From office pranks to team-building events, we know
                  how to keep things interesting. Come for the job, stay for the
                  culture, and experience a workplace that is both challenging
                  and rewarding.
                </h6>
              </div>
            </div>
          </div>
        </section>

        <div
          className="container position-relative border border-2 border-gray rounded overflow-hidden"
          style={{
            backgroundImage: `url(${bg2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "10px",
          }}
        >
          <div className="row">
            <div
              className="col-lg-6 order-2 order-lg-2 d-flex flex-column justify-content-center position-relative p-4 text-center text-lg-start"
              style={{
                backgroundColor: "rgba(33, 37, 41, 0.8)", // semi-transparent dark background
                backdropFilter: "blur(5px)", // adds a blur effect
              }}
            >
              <h2 className="text-white my-lg-3 p-lg-5">
                Dive into endless job opportunities and discover your next big
                career move!
              </h2>

              <div className="ms-lg-5 mt-3">
                <Link to="/contact" className="butn primary white-hover">
                  <span>Explore Job Opportunities</span>
                </Link>
              </div>
            </div>

            <div className="col-lg-6 text-center order-1 order-lg-1"></div>
          </div>
        </div>

        <div className="container mt-6">
          <h1>Our Guiding Values</h1>
        </div>
        <section className="p-lg-8 p-4">
          <div class="row mt-n1-9">
            <div class="col-md-6 col-lg-3 mt-1-9 text-center">
              <div class="feature-box-05 py-2-3 px-1-9 bg-white h-100 d-flex flex-column align-items-center justify-content-center">
                <div class="mb-3">
                  <div class="features-icon">
                    <i class="fa-solid fa-anchor"></i>
                  </div>
                </div>
                <div class="text-center">
                  <h4 class="font-weight-600 h5  mb-2">Innovation</h4>
                  <p class="mb-0">
                    We encourage and empower our people to think outside the box
                    and drive innovation in the tech industry.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-3 mt-1-9 text-center">
              <div class="feature-box-05 py-2-3 px-1-9 bg-white h-100 d-flex flex-column align-items-center justify-content-center">
                <div class="mb-3">
                  <div class="features-icon">
                    <i class="fa fa-handshake"></i>
                  </div>
                </div>
                <div class="text-center">
                  <h4 class="font-weight-600 h5 mb-2">Collaboration</h4>
                  <p class="mb-0">
                    We encourage and empower our people to think outside the box
                    and drive innovation in the tech industry.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-3 mt-1-9 text-center">
              <div class="feature-box-05 py-2-3 px-1-9 bg-white h-100 d-flex flex-column align-items-center justify-content-center">
                <div class="mb-3">
                  <div class="features-icon">
                    <i class="fa fa-universal-access"></i>
                  </div>
                </div>
                <div class="text-center">
                  <h4 class="font-weight-600 h5 mb-2">Accessibility</h4>
                  <p class="mb-0">
                    We encourage and empower our people to think outside the box
                    and drive innovation in the tech industry.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-3 mt-1-9 text-center">
              <div class="feature-box-05 py-2-3 px-1-9 bg-white h-100 d-flex flex-column align-items-center justify-content-center">
                <div class="mb-3">
                  <div class="features-icon">
                    <i class="fa fa-comment-dots"></i>
                  </div>
                </div>
                <div class="text-center">
                  <h4 class="font-weight-600 h5 mb-2">Candor</h4>
                  <p class="mb-0">
                    We encourage and empower our people to think outside the box
                    and drive innovation in the tech industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="my-lg-5 my-md-4 my-2 mx-4">
          <h1>Who we hire: The Adysun Approach</h1>
        </div>
        <section className="p-lg-8 p-4">
          <div class="row mt-n1-9">
            <div class="col-md-6 mt-1-9">
              <div class="feature-box-05 py-2-3 px-1-9 bg-white h-100 d-flex flex-column align-items-start bg-secondary">
                <div class="mb-3">
                  <div class="features-icon">
                    <i class="fa-solid fa-ship"></i>
                  </div>
                </div>
                <div class="">
                  <h4 class="font-weight-600 h5 mb-2 ">
                    Be the captain, of your own ship
                  </h4>
                  <p class="mb-0">
                    Our culture values self-directed individuals who can take
                    ownership of their work and be proactive in driving
                    themselves forward, advancing our mission.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 mt-1-9">
              <div class="feature-box-05 py-2-3 px-1-9 bg-white h-100 d-flex flex-column align-items-start bg-secondary">
                <div class="mb-3">
                  <div class="features-icon">
                    <i class="fa-solid fa-brain"></i>
                  </div>
                </div>
                <div class="">
                  <h4 class="font-weight-600 h5 mb-2 ">Adaptable Mindset</h4>
                  <p class="mb-0">
                    Change is Inevitable. We seek those who can readily adjust
                    to changes, embrace new opportunities, and thrive in
                    uncertain situations.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 mt-1-9">
              <div class="feature-box-05 py-2-3 px-1-9 bg-white h-100 d-flex flex-column align-items-start bg-secondary">
                <div class="mb-3">
                  <div class="features-icon">
                    <i class="fa-solid fa-spinner"></i>
                  </div>
                </div>
                <div class="">
                  <h4 class="font-weight-600 h5 mb-2 ">
                    Progress-oriented outlook
                  </h4>
                  <p class="mb-0">
                    We value and encourage a continuous learning mindset because
                    we believe that learning never ends, and growth is a
                    lifelong process
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 mt-1-9">
              <div class="feature-box-05 py-2-3 px-1-9 bg-white h-100 d-flex flex-column align-items-start bg-secondary">
                <div class="mb-3">
                  <div class="features-icon">
                    <i class="fas fa-hands-helping"></i>
                  </div>
                </div>
                <div class="">
                  <h4 class="font-weight-600 h5 mb-2 ">Empathy in Action</h4>
                  <p class="mb-0">
                    We look for team members who embrace empathy and
                    collaboration, valuing the contributions of others and
                    working together towards a common goal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="position-relative"
          style={{
            backgroundImage: `url(${bringRole})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="position-absolute top-0 start-0 w-100 h-100"></div>
          <div className="container position-relative">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1">
                <h1 className="text-white">Bring Your Own Role</h1>
                <p className="fs-5 text-white mt-4">
                  We believe in the power of individuality and creativity. We
                  welcome all professionals who are passionate about technology
                  and have a unique skillset to bring to our team. Bring your
                  own expertise and create your own role within our
                  organization.
                </p>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 ">
                <div className="contact-info ps-lg-1-9 mb-1-9 mb-lg-0">
                  <div className="item bg-white">
                    <span className="icon">
                      <i className="fas fa-phone text-primary" />
                    </span>
                    <div className="cont">
                      <h6 className="mb-1 font-weight-600">Phone: </h6>
                      <p>+91 7776827177</p>
                    </div>
                  </div>
                  <div className="item bg-white">
                    <span className="icon">
                      <i className="fas fa-map-marker-alt text-primary" />
                    </span>
                    <div className="cont">
                      <h6 className="mb-1 font-weight-600">Address: </h6>
                      <p className="m-0">
                        Office no 6 , 2nd Floor Manogat Appt , Swarget,{" "}
                      </p>
                      <p className="m-0">Pune , Maharashtra-411037</p>
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
      </>
      <Footer />
    </div>
  );
}

export default Careers