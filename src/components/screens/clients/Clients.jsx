import React from "react";
import { Link } from "react-router-dom";
import clientBanner from "../../../assets/images/content/clientBanner.jpg";
import solticAfrica from "../../../assets/images/content/soltic-africa.jpg";
import ons from "../../../assets/images/content/ons.jpg";
import jayram from "../../../assets/images/content/jayram-transport-corp.jpg";
import dial from "../../../assets/images/content/dial-a-meal-1.jpg";
import aptolink from "../../../assets/images/content/apto-link-pro.jpg";
import anandRoad from "../../../assets/images/content/anand-road-line.jpg";
import ashoka from "../../../assets/images/content/ashoka-buildcon.jpg";
import sanklecha from "../../../assets/images/content/sanklecha.jpg";
import peak from "../../../assets/images/content/peak-infrastructure.jpg";
import safeway from "../../../assets/images/content/safeway-concessions.jpg";
import greenbrier from "../../../assets/images/content/greenbrier-living.jpg";
import fluid from "../../../assets/images/content/fluid-robotics.jpg";
import mahindra from "../../../assets/images/content/mahindra.jpg";
import acma from "../../../assets/images/content/acma.jpg";
import kirloskar from "../../../assets/images/content/kirloskar.jpg";
import baxy from "../../../assets/images/content/baxy.jpg";
import jayshree from "../../../assets/images/content/jayram-transport-corp.jpg";
import aryan from "../../../assets/images/content/aryan.jpg";
import wrestling from "../../../assets/images/content/wrestling.jpg";
import aanknaad from "../../../assets/images/content/ankanaad.jpg";
import manatarang from "../../../assets/images/content/manatarang.jpg";
import stationers from "../../../assets/images/content/online-stationers.jpg";
import snovel from "../../../assets/images/content/snovel.jpg";
import takerent from "../../../assets/images/content/take-rent-pe.jpg";
import Navbar2 from "../../common/Navbar2";
import Header from "../../common/Header";
import Footer from "../../common/Footer";

function Clients() {
  return (
    <div>
      {/* <Navbar2 /> */}
      <Header />
      <div className="container-fluid px-0 position-relative" style={{zIndex: -1}}>
        <div className="position-absolute top-20 left-lg-10 text-white p-4">
          <h1 className="text-white">Our Clients</h1>

          <div className="mt-5">
            <Link
              to="/contact"
              className="butn primary white-hover btn btn-lg btn-md btn-sm"
            >
              <span>Talk to our Solution Specialist</span>
            </Link>
          </div>
        </div>

        <img
          src={clientBanner}
          alt="Client Banner"
          className="img-fluid w-100"
          style={{
            height: "370px",
            objectFit: "cover", 
            objectPosition: "center",
          }}
        />
      </div>

      <section className="bg-black text-center">
        <div className="container-fluid">
          <h2 className="text-primary mb-5">
            Transportation, Logistics & Supply Chain Management
          </h2>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 mb-4">
              <img
                src={solticAfrica}
                alt="Soltic Africa"
                className="img-fluid rounded"
              />
              <h4 className="text-white mt-4">Soltic Africa</h4>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 mb-4">
              <img src={ons} alt="ONS Fresh" className="img-fluid rounded" />
              <h4 className="text-white mt-4">ONS Fresh</h4>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 mb-4">
              <img
                src={jayram}
                alt="Jayram Transport Corp."
                className="img-fluid rounded"
              />
              <h4 className="text-white mt-4">Jayram Transport Corp.</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 mb-4">
              <img src={dial} alt="Dial-a-Meal" className="img-fluid rounded" />
              <h4 className="text-white mt-4">Dial-a-Meal</h4>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 mb-4">
              <img
                src={aptolink}
                alt="AptolinkPRO"
                className="img-fluid rounded"
              />
              <h4 className="text-white mt-4">AptolinkPRO</h4>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 mb-4">
              <img
                src={anandRoad}
                alt="Anand Road Lines"
                className="img-fluid rounded"
              />
              <h4 className="text-white mt-4">Anand Road Lines</h4>
            </div>
          </div>
        </div>
        <div className="container-fluid mt-5">
          <h2 className="text-primary mb-5">
            Roads Infrastructure & Construction
          </h2>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 mb-4">
              <img src={ashoka} alt="Ashoka" className="img-fluid rounded" />
              <h4 className="text-white mt-4">Ashoka</h4>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 mb-4">
              <img
                src={sanklecha}
                alt="Sanklecha"
                className="img-fluid rounded"
              />
              <h4 className="text-white mt-4">Sanklecha</h4>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 mb-4">
              <img
                src={peak}
                alt="Peak Infrastructure"
                className="img-fluid rounded"
              />
              <h4 className="text-white mt-4">Peak Infrastructure</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 mb-4">
              <img src={safeway} alt="Safeway" className="img-fluid rounded" />
              <h4 className="text-white mt-4">Safeway</h4>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 mb-4">
              <img
                src={greenbrier}
                alt="Green Brier"
                className="img-fluid rounded"
              />
              <h4 className="text-white mt-4">Green Brier</h4>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 mb-4">
              <img
                src={fluid}
                alt="Fluid Robotics"
                className="img-fluid rounded"
              />
              <h4 className="text-white mt-4">Fluid Robotics</h4>
            </div>
          </div>
        </div>
        <div className="container-fluid mt-5">
          <h2 className="text-primary mb-5">Manufacturing</h2>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 mb-4">
              <img
                src={mahindra}
                alt="Mahindra"
                className="img-fluid rounded"
              />
              <h4 className="text-white mt-4">Mahindra</h4>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 mb-4">
              <img src={acma} alt="ACMA" className="img-fluid rounded" />
              <h4 className="text-white mt-4">ACMA</h4>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 mb-4">
              <img
                src={kirloskar}
                alt="Kirloskar"
                className="img-fluid rounded"
              />
              <h4 className="text-white mt-4">Kirloskar</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 mb-4">
              <img src={baxy} alt="Baxy" className="img-fluid rounded" />
              <h4 className="text-white mt-4">Baxy</h4>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 mb-4">
              <img
                src={jayshree}
                alt="Jayashree"
                className="img-fluid rounded"
              />
              <h4 className="text-white mt-4">Jayashree</h4>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 mb-4">
              <img src={aryan} alt="Aryan" className="img-fluid rounded" />
              <h4 className="text-white mt-4">Aryan</h4>
            </div>
          </div>
        </div>
        <div className="container-fluid mt-5">
          <h2 className="text-primary mb-5">E-Commerce</h2>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 mb-4">
              <img
                src={wrestling}
                alt="Wrestling"
                className="img-fluid rounded"
              />
              <h4 className="text-white mt-4">Wrestling</h4>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 mb-4">
              <img
                src={aanknaad}
                alt="Aanknaad"
                className="img-fluid rounded"
              />
              <h4 className="text-white mt-4">Aanknaad</h4>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 mb-4">
              <img
                src={manatarang}
                alt="ManaTarang"
                className="img-fluid rounded"
              />
              <h4 className="text-white mt-4">ManaTarang</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 mb-4">
              <img
                src={stationers}
                alt="Online Stationers"
                className="img-fluid rounded"
              />
              <h4 className="text-white mt-4">Online Stationers</h4>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 mb-4">
              <img src={snovel} alt="Snovel" className="img-fluid rounded" />
              <h4 className="text-white mt-4">Snovel</h4>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 mb-4">
              <img
                src={takerent}
                alt="Take Rent Pe"
                className="img-fluid rounded"
              />
              <h4 className="text-white mt-4">Take Rent Pe</h4>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Clients;
