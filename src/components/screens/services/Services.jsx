import React, { useEffect } from 'react';
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import { contentImages, backgrounds } from '../../../assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Brand Icons
import { 
  faPhp, 
  faNode, 
  faWordpress, 
  faBootstrap, 
  faHtml5, 
  faAngular,
  faApple,
  faAndroid,
  faWindows,
  faJava,
  faSlack,
  faJira,
  faGit,
  faGoogle,
  faYahoo
} from '@fortawesome/free-brands-svg-icons';

// Solid Icons
import {
  faCoins,
  faHandHoldingDollar,
  faUserTie,
  faPersonChalkboard,
  faGear,
  faLaptopCode,
  faCode,
  faCubes,
  faUsers
} from '@fortawesome/free-solid-svg-icons';

function Services() {
  useEffect(() => {
    if (window.jQuery && window.jQuery.fn.owlCarousel) {
      window.jQuery("#services-carousel").owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 1000,
        responsive: {
          0: {
            items: 1,
          },
          576: {
            items: 2,
          },
          992: {
            items: 3,
          }
        },
      });
    }

    return () => {
      if (window.jQuery && window.jQuery("#services-carousel").data("owl.carousel")) {
        window.jQuery("#services-carousel").owlCarousel("destroy");
      }
    };
  }, []);

  const serviceItems = [
    {
      image: contentImages.services.service1b,
      icon: "fa-solid fa-person-chalkboard",
      title: "Web Application Development",
      description: "Our web application development services deliver robust, scalable solutions tailored to your business needs."
    },
    {
      image: contentImages.services.service2b,
      icon: "fa-solid fa-coins",
      title: "Dynamic Website Development",
      description: "Our dynamic website development services create interactive online experiences tailored to your audience."
    },
    {
      image: contentImages.services.service3b,
      icon: "fa-solid fa-hand-holding-dollar",
      title: "E-Comm Solutions",
      description: "Our e-commerce solutions are designed to empower your business with seamless, secure, and scalable online platforms."
    },
    {
      image: contentImages.services.service3b,
      icon: "fa-solid fa-user-tie",
      title: "Digital Marketing Services",
      description: "At Adysun Ventures, our digital marketing services are meticulously crafted to enhance your brand's online presence."
    }
  ];

  return (
    <>
      <Header />
      <div className="main-wrapper">
        <section
          className="page-title-section2 bg-img cover-background"
          data-overlay-dark={6}
          style={{
            backgroundImage: `url(${backgrounds.bg9})`,
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>Services</h1>
              </div>
              <div className="col-md-12">
                <ul className="ps-0">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="#!">Services</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="md">
          <div className="container">
            <div className="section-heading">
              <h2>What We Offer</h2>
            </div>
            <div className="owl-carousel owl-theme" id="services-carousel">
              {serviceItems.map((item, index) => (
                <div key={index} className="service-box">
                  <div className="img-holder">
                    <img alt="..." src={item.image} />
                  </div>
                  <div className="clearfix service-inner-box">
                    <div className="service-icon-box">
                      <i className={item.icon} />
                    </div>
                    <div className="service-content-box">
                      <h3>
                        <a href="#/services#!">{item.title}</a>
                      </h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="pt-0">
          <div className="container">
            <div className="row text-center">
              <div className="col-12 mb-5">
                <h2>Our Comprehensive Services</h2>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-4 mb-4 text-center">
                <div className="mb-4">
                  <i className="fa-solid fa-gear fa-3x text-primary"></i>
                </div>
                <h5 className="mb-3">Digital Transformation</h5>
                <p>
                  Revolutionizing businesses through tech integration for
                  agility, innovation...
                </p>
              </div>
              <div className="col-md-4 mb-4 text-center">
                <div className="mb-4">
                  <i className="fa-solid fa-laptop-code fa-3x text-primary"></i>
                </div>
                <h5 className="mb-3">IT consulting</h5>
                <p>
                  Strategic IT solutions for optimal business performance and
                  growth...
                </p>
              </div>
              <div className="col-md-4 mb-4 text-center">
                <div className="mb-4">
                  <i className="fa-solid fa-code fa-3x text-primary"></i>
                </div>
                <h5 className="mb-3">Custom application development</h5>
                <p>
                  Custom application development involves creating software
                  solutions specifically...
                </p>
              </div>
            </div>
            <div className="row justify-content-center mt-4">
              <div className="col-md-4 mb-4 text-center">
                <div className="mb-4">
                  <i className="fa-solid fa-cubes fa-3x text-primary"></i>
                </div>
                <h5 className="mb-3">Software Product Engineering</h5>
                <p>
                  Software Product Engineering is a comprehensive process that
                  involves...
                </p>
              </div>
              <div className="col-md-4 mb-4 text-center">
                <div className="mb-4">
                  <i className="fa-solid fa-users fa-3x text-primary"></i>
                </div>
                <h5 className="mb-3">Dedicated Team Hiring</h5>
                <p>
                  Dedicated team hiring is a strategic approach to building a
                  specialized...
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <h2 className="text-primary mb-4">Web Development</h2>
                <p className="mb-4">
                  Looking to innovate and maintain your current system or come
                  up with entirely new product idea? Having decades of working
                  experience with Fortune 500 &amp; other SMEs, our dedicated
                  team can really make a difference at your product.
                </p>
                <p>
                  We standards are evolving every day and keeping yourself
                  updated for each change is very difficult. Our team takes that
                  ownership for you by staying updated with the latest trends
                  and technologies. our web development experts architect,
                  develop, automate and maintain all your web processes and
                  applications using a broad spectrum of technologies.
                </p>
              </div>
              <div className="col-lg-5">
                <h4 className="mb-4">
                  Adysun Ventures Web Developers are hired for -
                </h4>
                <ul className="list-unstyled">
                  <li className="mb-2">• Custom Website Development</li>
                  <li className="mb-2">• Content Management System (CMS)</li>
                  <li className="mb-2">• Front-end Design &amp; Development</li>
                  <li className="mb-2">
                    • Complex Backend Systems with API integrations
                  </li>
                  <li className="mb-2">• Online Data Driven Applications</li>
                  <li className="mb-2">• Ecommerce Applicationss</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-4 text-center">
            <i className="fab fa-php me-3 fs-1 px-3"></i>
            <i className="fab fa-node me-3 fs-1 px-3"></i>
            <i className="fab fa-wordpress me-3 fs-1 px-3"></i>
            <i className="fab fa-bootstrap me-3 fs-1 px-3"></i>
            <i className="fab fa-html5 me-3 fs-1 px-3"></i>
            <i className="fab fa-angular me-3 fs-1 px-3 mt-lg-0 mt-3"></i>
          </div>
        </section>
        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <h2 className="text-primary mb-4">
                  Mobile Application Development
                </h2>
                <p className="mb-4">
                  Expert application developers at Adysun Ventures can help you
                  build all kinds of applications for iOS and Android, for smart
                  phones, tablets, wearables and many more. We have clients
                  across various domains like education, healthcare, retail,
                  e-commerce, travel, entertainment, social networking,
                  enterprise mobility etc.
                </p>
                <p>
                  So next time when you hear technical jargons like native apps,
                  web apps, hybrid apps, Google Glass, wearables, smart watches
                  etc., you know an expert team to look after who can make these
                  words simple for you just like A,B,C.
                </p>
              </div>
              <div className="col-lg-5">
                <h4 className="mb-4">
                  Adysun Ventures is Providing Mobile Apps Development for -
                </h4>
                <ul className="list-unstyled">
                  <li className="mb-2">• Enterprise Mobility Apps</li>
                  <li className="mb-2">• Cross-platform Apps</li>
                  <li className="mb-2">• Ecommerce Applications</li>
                  <li className="mb-2">• B2B Mobile Apps</li>
                  <li className="mb-2">• Wearable Apps</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-4 text-center">
            <i className="fab fa-apple me-3 fs-1 px-3"></i>
            <i className="fab fa-android me-3 fs-1 px-3"></i>
            <i className="fab fa-windows me-3 fs-1 px-3"></i>
            <i className="fab fa-java me-3 fs-1 px-3"></i>
          </div>
        </section>
        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <h2 className="text-primary mb-4">
                  Business Intelligence (BI) Analytics
                </h2>
                <p>
                  Our data experts support every phase of the analytics
                  lifecycle from data aggregation, cleansing to data processing
                  and reporting. Our experts have been helping companies like
                  yours to analyze data and create digital insights through
                  reporting, which empowers enterprises to make better business
                  decisions.
                </p>
              </div>
              <div className="col-lg-5">
                <h4 className="mb-4">
                  Adysun Ventures Business Intelligence (BI) Analytics are hired for
                  -
                </h4>
                <ul className="list-unstyled">
                  <li className="mb-2">• Data Integration &amp; Processing</li>
                  <li className="mb-2">• Data Ingestion</li>
                  <li className="mb-2">• Data Visualization</li>
                  <li className="mb-2">• Data Analysis</li>
                  <li className="mb-2">• Data Aggregation</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-4 text-center">
            <i className="fab fa-apple me-3 fs-1 px-3"></i>
            <i className="fab fa-android me-3 fs-1 px-3"></i>
            <i className="fab fa-windows me-3 fs-1 px-3"></i>
            <i className="fab fa-java me-3 fs-1 px-3"></i>
          </div>
        </section>
        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <h2 className="text-primary mb-4">Agile Project Management</h2>
                <p className="mb-4">
                  Our agile project management resources are available on-demand
                  to manage all your development projects with adaptive project
                  life cycle. Having delivered many successful projects using
                  agile methodology, Adysun Ventures expertise will ensure reduced
                  cost and rework by maintaining timelines.
                </p>
                <p>
                  To produce top quality work with deadlines, needs more than
                  just the knowledge of Scrum.
                </p>
              </div>
              <div className="col-lg-5">
                <h4 className="mb-4">
                  Adysun Ventures on-demand Project Management resources -
                </h4>
                <ul className="list-unstyled">
                  <li className="mb-2">• Scrum Masters</li>
                  <li className="mb-2">• Project Managers</li>
                  <li className="mb-2">• Product Managers</li>
                  <li className="mb-2">• Shadow Product Owners</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-4 text-center">
            <i className="fab fa-slack me-3 fs-1 px-3"></i>
            <i className="fab fa-jira me-3 fs-1 px-3"></i>
            <i className="fab fa-git me-3 fs-1 px-3"></i>
          </div>
        </section>
        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <h2 className="text-primary mb-4">
                  SEO (Search Engine Optimisation)
                </h2>
                <p className="mb-4">
                  SEO process needs collaboration of Business Owners, Managers,
                  Designers, Developers, Content Writers and SEO Experts to make
                  a successful Search Engine Optimization campaign. We are
                  waiting for your response, let us work together to drive your
                  next and most successful campaign.
                </p>
                <p>
                  There are a lot of companies competing for the same keywords.
                  We'll analyze their strengths and weaknesses to find new
                  opportunities for your continued online growth.
                </p>
              </div>
              <div className="col-lg-5">
                <h4 className="mb-4">
                  Adysun Ventures SEO experts are hired for -
                </h4>
                <ul className="list-unstyled">
                  <li className="mb-2">• Keyword Research</li>
                  <li className="mb-2">• Competitive Analysis</li>
                  <li className="mb-2">• Link Building</li>
                  <li className="mb-2">• Regular blog posts</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-4 text-center">
            <i className="fab fa-google me-3 fs-1 px-3"></i>
            <i className="fab fa-yahoo me-3 fs-1 px-3"></i>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default Services