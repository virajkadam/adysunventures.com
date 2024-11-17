import React from "react";
import { Link } from "react-router-dom";
import rightImage from "../../../assets/images/content/tab-content-03.jpg";
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
                Our Company
              </h1>
              <h1
                className="text-primary text-center"
                style={{ fontSize: "3.5rem" }}
              >
                Affiliations
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
            <h5 className="text-uppercase my-3">Emerald Partner</h5>
            <p className="text-muted p-0">
              Capabilities and expertise to design, implement and deploy
              scalable and <strong>reliable solutions</strong> from the entire
              SUSE and <strong>Rancher</strong> stack for a wide range of
              enterprise solutions and technologies to run, monitor and manage
              physical and virtual environments, software defined storage and
              cloud environments. Deep expertise on the Rancher platform to
              manage <strong>container sprawl</strong> across physical and cloud
              environments.
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
            <h5 className="text-uppercase my-3">READY PARTNER</h5>
            <p className="text-muted p-0">
              With a broad portfolio, including <strong>hybrid cloud</strong>{" "}
              infrastructure, agile integration, <strong>cloud-native</strong>{" "}
              application development, management, and{" "}
              <strong>automation</strong> solutions, companies can successfully
              adapt Red Hat technologies as businesses become more digital and
              interconnected.
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
            <h5 className="text-uppercase my-3">BUSINESS PARTNER</h5>
            <p className="text-muted p-0">
              Canonical delivers, <strong>maintains</strong>, secures and
              sustains open source from cloud to desktop and devices.
              Ubuntu-based solutions <strong>supported by Canonical</strong>{" "}
              drive down your infrastructure cost and accelerate your
              applications. With support from Canonical, Ubuntu is{" "}
              <strong>the new standard</strong>, secure enterprise Linux for{" "}
              <strong>servers, desktops, cloud, developers and things.</strong>
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
            <h5 className="text-uppercase my-3">BUSINESS PARTNER</h5>
            <p className="text-muted p-0">
              GitLab is a <strong>DevOps Platform</strong> that empowers
              organizations to <strong>maximize the overall return</strong> on
              software development by delivering software faster and
              efficiently, while strengthening security and compliance. With
              GitLab, every team in your organization can{" "}
              <strong>collaboratively</strong> plan, build, secure, and deploy
              software to drive business outcomes faster with complete
              transparency, <strong>consistency</strong>, and traceability
              across the entire DevOps lifecycle.
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
              src={minio}
              width={200}
              height={200}
              alt="Minio Logo"
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
            <h2 className="fw-bold mb-3 d-none d-lg-block d-md-block">MINIO</h2>
            <h5 className="text-uppercase my-3">RESELLER PARTNER</h5>
            <p className="text-muted p-0">
              MinIO offers high-performance,{" "}
              <strong>S3 compatible object storage.</strong> Native to
              Kubernetes, MinIO is the only object storage suite available on
              every public cloud, every Kubernetes distribution, the private
              cloud, and the edge. MinIO is <strong>software-defined</strong>{" "}
              and is 100% open source under GNU AGPL v3. It can also leverage{" "}
              <strong>existing</strong> object storage solutions like Azure blob
              storage and object storage on Google Cloud Platform.
            </p>
          </div>
        </div>

        <div className="d-flex justify-content-center mt-4">
          <div className="border-top border-success w-90 my-6"></div>
        </div>
      </div>

      <div className="container mt-4 mb-8">
        <div className="row align-items-center">
          <div className="col-md-4 col-lg-3 text-center">
            <img
              src={tigera}
              width={200}
              height={200}
              alt="Tigera Logo"
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
              TIGERA
            </h2>
            <h5 className="text-uppercase my-3">RESELLER PARTNER</h5>
            <p className="text-muted p-0">
              Tigera comes from the inventors of{" "}
              <strong>CALICO Open Source.</strong> Cloud-native{" "}
              <strong>security as code</strong> for hosts, VMs, containers,
              Kubernetes components, workloads, and services. Kubernetes-native{" "}
              <strong>observability as code</strong> to collect real-time
              telemetry, enriched with Kubernetes context. Single framework to{" "}
              <strong>centrally secure, observe, and troubleshoot</strong>{" "}
              multi-cluster, multi-cloud, and hybrid-cloud environments running
              Linux or Windows containers.
            </p>
          </div>
        </div>
      </div>

      <section
        className="parallax"
        data-overlay-dark={9}
        style={{ backgroundImage: `url(${bgg1})` }}
      >
        <div className="container text-center">
          <div className="section-heading title-style5 half white">
            <p className="fs-5 mb-3 mb-md-4">REACH OUT TO US</p>
            <h1 className="text-primary" style={{ fontSize: "50px" }}>
              Interested?
            </h1>
            <h1 className="mt-3" style={{ fontSize: "50px" }}>
              Let’s start a project together.
            </h1>
          </div>
          <Link to="/contact" className="butn primary white-hover mt-4">
            <span>
              Contact Us <i className="fa-solid fa-right-long ms-1"></i>
            </span>
          </Link>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default Partners;
