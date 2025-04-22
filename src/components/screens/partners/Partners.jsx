import React from "react";
import { Link } from "react-router-dom";
import rightImage from "../../../assets/images/content/partners_content.png";
import susu from "../../../assets/images/content/susu.png";
import redHat from "../../../assets/images/content/redHat.png";
import canonical from "../../../assets/images/content/canonical.png";
import gitLab from "../../../assets/images/content/gitLab.png";
import minio from "../../../assets/images/content/minio.png";
import tigera from "../../../assets/images/content/tigera.png";
import bgg1 from "../../../assets/images/bg/bg1.jpg";
import Navbar2 from "../../common/Navbar2";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
function Partners() {
  return (
    <div>
      {/* <Navbar2 className="" /> */}
      <Header />
      <section className="pt-6">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 text-center text-lg-start">
              <div className="section-heading title-style5 left half mt-0 text-center">
                <h5 className="text-primary">
                  <strong>Technology Partnership</strong>
                </h5>
              </div>
              <h1
                className="text-primary text-center"
                style={{ fontSize: "3.5rem" }}
              >
                Our Company Affiliations
              </h1>
            </div>
            <div className="col-lg-6 text-center ">
              <div className="about-ceo ms-lg-5">
                <img
                  src={rightImage}
                  alt="Company Affiliations"
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mt-4">
        <div className="row align-items-center">
          <div className="col-md-4 col-lg-3 text-center">
            <img
              src={susu}
              width={200}
              height={200}
              alt="SUSE Logo"
              className="img-fluid"
            />
          </div>

          <div className="col-lg-1 d-none d-lg-block">
            <div
              className="border-start text-success w-25 p-0"
              style={{ height: "200px", margin: "0 auto" }}
            ></div>
          </div>

          <div className="col-md-8 col-lg-8 text-center text-md-left">
            <h2 className="fw-bold mb-3 d-none d-lg-block d-md-block">SUSE</h2>
            <h3 className="text-uppercase my-3">Emerald Partner</h3>
            <p className="text-muted p-0">
              Our team offers comprehensive capabilities and expertise in
              designing, implementing, and deploying scalable and{" "}
              <strong>reliable solutions</strong> across the entire SUSE and{" "}
              <strong>Rancher</strong> technology stack. This expertise spans a
              broad range of enterprise solutions and technologies, including
              the management of physical and virtual environments,
              software-defined storage, and cloud environments. Additionally, we
              possess deep knowledge in utilizing the Rancher platform to
              effectively manage <strong>container sprawl</strong> across both
              physical and cloud environments.
            </p>
          </div>
        </div>

        <div className="d-flex justify-content-center mt-4">
          <div className="border-top border-success w-90 my-6"></div>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row align-items-center">
          <div className="col-md-4 col-lg-3 text-center">
            <img
              src={redHat}
              width={200}
              height={200}
              alt="RedHat Logo"
              className="img-fluid"
            />
          </div>

          <div className="col-lg-1 d-none d-lg-block">
            <div
              className="border-start text-success w-25 p-0"
              style={{ height: "200px", margin: "0 auto" }}
            ></div>
          </div>

          <div className="col-md-8 col-lg-8 text-center text-md-left">
            <h2 className="fw-bold mb-3 d-none d-lg-block d-md-block">
              RED HAT
            </h2>
            <h3 className="text-uppercase my-3">READY PARTNER</h3>
            <p className="text-muted p-0">
              Red Hat's comprehensive portfolio, encompassing{" "}
              <strong>hybrid cloud</strong> infrastructure,{" "}
              <strong>cloud-native</strong> application development, agile
              integration, management, and <strong>automation</strong>{" "}
              solutions, empowers businesses to seamlessly integrate Red Hat
              technologies as they transition to digital and interconnected
              models.
            </p>
          </div>
        </div>

        <div className="d-flex justify-content-center mt-4">
          <div className="border-top border-success w-90 my-6"></div>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row align-items-center">
          <div className="col-md-4 col-lg-3 text-center">
            <img
              src={canonical}
              width={200}
              height={200}
              alt="Canonical Logo"
              className="img-fluid"
            />
          </div>

          <div className="col-lg-1 d-none d-lg-block">
            <div
              className="border-start text-success w-25 p-0"
              style={{ height: "200px", margin: "0 auto" }}
            ></div>
          </div>

          <div className="col-md-8 col-lg-8 text-center text-md-left">
            <h2 className="fw-bold mb-3 d-none d-lg-block d-md-block">
              CANONICAL
            </h2>
            <h3 className="text-uppercase my-3">BUSINESS PARTNER</h3>
            <p className="text-muted p-0">
              Canonical offers comprehensive services for open source solutions,
              spanning from cloud to desktop and devices. Their support for
              Ubuntu-based solutions helps reduce infrastructure costs and
              boosts application performance. With Canonical's backing, Ubuntu
              has become the <strong>new standard</strong> for secure enterprise
              Linux, catering to{" "}
              <strong>
                servers, desktops, cloud, developers, and IoT devices.
              </strong>
            </p>
          </div>
        </div>

        <div className="d-flex justify-content-center mt-4">
          <div className="border-top border-success w-90 my-6"></div>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row align-items-center">
          <div className="col-md-4 col-lg-3 text-center">
            <img
              src={gitLab}
              width={200}
              height={200}
              alt="Gitlab Logo"
              className="img-fluid"
            />
          </div>

          <div className="col-lg-1 d-none d-lg-block">
            <div
              className="border-start text-success w-25 p-0"
              style={{ height: "200px", margin: "0 auto" }}
            ></div>
          </div>

          <div className="col-md-8 col-lg-8 text-center text-md-left">
            <h2 className="fw-bold mb-3 d-none d-lg-block d-md-block">
              GITLAB
            </h2>
            <h3 className="text-uppercase my-3">BUSINESS PARTNER</h3>
            <p className="text-muted p-0">
              GitLab is a <strong>DevOps Platform</strong> that enables
              organizations to <strong>optimize software development</strong> by
              accelerating software delivery and improving efficiency, while
              enhancing security and compliance. Through GitLab, all teams
              within your organization can <strong>jointly</strong> plan,
              develop, secure, and deploy software to accelerate business
              results with full visibility, <strong>uniformity</strong>, and
              accountability across the entire DevOps lifecycle.
            </p>
          </div>
        </div>

        <div className="d-flex justify-content-center mt-4"></div>
      </div>

      <section
        className="parallax"
        data-overlay-dark={9}
        style={{ backgroundImage: `url(${bgg1})` }}
      >
        <div className="container text-center">
          <div className="section-heading title-style5 half white">
            <p className="fs-5 mb-3 mb-md-4">REACH OUT TO US</p>
            <h2 className="text-primary" style={{ fontSize: "50px" }}>
              Interested?
            </h2>
            <h2 className="mt-3" style={{ fontSize: "50px" }}>
              Let's start a project together.
            </h2>
          </div>
          <Link to="/contact-us" className="butn primary white-hover mt-4">
            <span>
              Contact Us <i className="fa-solid fa-right-long ms-1"></i>
            </span>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Partners;
