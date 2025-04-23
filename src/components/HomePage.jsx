import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Header from './common/Header';
import Footer from './common/Footer';
import Navbar2 from './common/Navbar2';
import OptimizedImage from './common/OptimizedImage';
import FAQ from './common/FAQ';
import MetaTags from './common/MetaTags';
import SchemaMarkup from './common/SchemaMarkup';
import InternalLinks from './common/InternalLinks';

import { LazyLoadImage } from "react-lazy-load-image-component";
import slider21 from "../assets/images/slider/slide21.jpg";
import slice2 from "../assets/images/content/lady_working.png";
import content1 from "../assets/images/content/content-01.jpg";
import content2 from "../assets/images/content/content-02.jpg";
import content3 from "../assets/images/content/content-03.jpg";
import companyBanner from "../assets/images/bg/landing_bg.jpg"
import homeSectionBg from "../assets/images/bg/home-section-bg.jpg"
// Temporary fix until WebP versions are created
import homeSectionBgLarge from "../assets/images/bg/home-section-bg.jpg"
import homeSectionBgMedium from "../assets/images/bg/home-section-bg.jpg"
import homeSectionBgSmall from "../assets/images/bg/home-section-bg.jpg"

function HomePage() {
  const [activeTab, setActiveTab] = useState(0);

  // Page-specific SEO metadata
  const seoData = {
    title: "Innovative Custom Software & IT Solutions for Business Growth | Adysun Ventures",
    description: "Partner with Adysun Ventures for tailored software development and IT solutions that drive real business results. Our strategic approach transforms technology challenges into growth opportunities.",
    keywords: "Custom Software Development, IT Solutions, Business Technology, Digital Transformation, Enterprise Software, Cloud Migration, Cybersecurity Solutions, Web Applications, Mobile Apps, Adysun Ventures",
    ogImage: "https://adysunventures.com/assets/images/adysun_cover.png"
  };

  const tabData = [
    {
      id: 'planning',
      number: '01',
      title: 'Planning',
      subtitle: 'Vision to Execution',
      content: (
        <div className="bg-white box-shadow-primary p-3">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0 text-center text-lg-start">
              <OptimizedImage
                src={content1}
                className="img-fluid rounded"
                alt="Strategic IT planning and vision at Adysun Ventures"
                width={545}
                height={348}
              />
            </div>
            <div className="col-lg-6">
              <h3 className="fw-bolder fs-3">Strategic Vision in IT</h3>
              <div className="mt-4">
                <h4 className="d-inline fw-bold me-1">
                  Long-term Goals:
                </h4>
                At Adysun Ventures, we're committed to becoming
                industry leaders in IT innovation, setting new
                standards and inspiring both our team and clients
                to reach their full potential.
              </div>
              <div className="mt-4">
                <h4 className="d-inline fw-bold me-1">Innovation:</h4>
                We're at the forefront of technological
                advancements, constantly exploring new ways to
                enhance business operations through IT solutions.
              </div>
              <div className="mt-4">
                <h4 className="d-inline fw-bold me-1">
                  Customer Focus:
                </h4>
                Our strategies are built around understanding and
                exceeding client expectations in the IT sector.
              </div>
              <div className="mt-4">
                <h4 className="d-inline fw-bold me-1">
                  Market Leadership:
                </h4>
                We aim to set industry trends and establish
                benchmarks in IT services that others aspire to
                follow.
              </div>
              <div className="mt-4">
                <h4 className="d-inline fw-bold me-1">
                  Social Impact:
                </h4>
                We leverage technology to create positive change,
                improving lives and communities through our IT
                initiatives.
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'marketing',
      number: '02',
      title: 'Marketing',
      subtitle: 'Plan to market',
      content: (
        <div className="bg-white box-shadow-primary p-3">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-1 order-2">
              <div className="pe-1-9">
                <h3 className="fw-bolder fs-3">
                  IT Marketing Strategies
                </h3>
                <p>
                  At Adysun Ventures, we develop targeted marketing
                  strategies for IT services, focusing on current
                  trends such as cloud adoption, cybersecurity,
                  and remote work solutions.
                </p>
                <h4>Key Marketing Approaches</h4>
                <ul className="list-style-16">
                  <li>Analyzing IT Spending Patterns</li>
                  <li>Promoting Cloud Service Solutions</li>
                  <li>Addressing Cybersecurity Concerns</li>
                  <li>Content Marketing for IT Services</li>
                  <li>
                    Showcasing Cutting-Edge Software Solutions 
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 order-lg-2 order-1 text-center text-lg-start mb-4 mb-lg-0">
              <OptimizedImage
                src={content2}
                className="img-fluid rounded"
                alt="IT marketing strategies and digital promotion at Adysun Ventures"
                width={545}
                height={348}
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'growth',
      number: '03',
      title: 'Growth',
      subtitle: 'Start to growth',
      content: (
        <div className="bg-white box-shadow-primary p-3">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0 text-center text-lg-start">
              <OptimizedImage
                src={content3}
                className="img-fluid rounded"
                alt="Technology growth and scaling IT solutions with Adysun Ventures"
                width={545}
                height={348}
              />
            </div>
            <div className="col-lg-6">
              <div className="ps-lg-1-9">
                <h3 className="fw-bolder fs-3">
                  Scaling IT Success
                </h3>
                <p>
                  The IT consulting industry is experiencing
                  robust growth, driven by digital transformation
                  initiatives. At Adysun Ventures, we're at the
                  forefront of this evolution, helping businesses
                  leverage cutting-edge technologies.
                </p>
                <h4>Our Growth Solutions</h4>
                <ul className="list-style-16">
                  <li>Cloud Consulting and Implementation</li>
                  <li>Advanced Cybersecurity Solutions</li>
                  <li>Data-Driven IT Decision Making</li>
                  <li>Remote Work Technology Integration</li>
                  <li>AI and Machine Learning Applications</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  // Add this useEffect to preload the image
  useEffect(() => {
    // Preload the image based on viewport size
    const preloadImage = () => {
      const width = window.innerWidth;
      let imageToPreload;
      
      if (width > 1200) {
        imageToPreload = homeSectionBgLarge;
      } else if (width > 768) {
        imageToPreload = homeSectionBgMedium;
      } else {
        imageToPreload = homeSectionBgSmall;
      }
      
      const img = new Image();
      img.src = imageToPreload;
    };
    
    preloadImage();
  }, []);

  // Helper function to select the right image based on screen size
  const getBackgroundImage = () => {
    // Use media queries to determine which image to use
    if (window.innerWidth > 1200) {
      return homeSectionBgLarge;
    } else if (window.innerWidth > 768) {
      return homeSectionBgMedium;
    } else {
      return homeSectionBgSmall;
    }
  };

  return (
    <div>
      {/* Add page-specific meta tags that override global ones */}
      <MetaTags 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        ogImage={seoData.ogImage}
      />
      {/* Add Schema.org structured data */}
      <SchemaMarkup 
        businessName="Adysun Ventures"
        description={seoData.description}
        services={[
          "IT Solutions",
          "Business Strategy",
          "Software Development",
          "Cloud Computing",
          "Digital Transformation",
          "IT Consulting"
        ]}
      />
      <Header />
      {/* <Navbar2 /> */}

      <div className="main-wrapper">
        <section
          className="bg-img cover-background"
          data-overlay-dark={7}
          style={{
            backgroundImage: `url(${getBackgroundImage()})`,
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            willChange: "transform", // Helps with compositing
          }}
          role="img"
          aria-label="Adysun Ventures hero section background"
        >
          <div className="container py-10">
            <div className="row align-items-center">
              <div className="col-xl-7 col-lg-6 mb-1-9 mb-lg-0">
                <span className="text-white fs-2">When service matters</span>
                <h2 className="text-white display-md-10 font-weight-700 m-0">
                  <span className="text-primary">Adysun Ventures: </span>
                  <span>Premium IT Solutions & Business Strategy Services</span>
                </h2>
                <div className="separator-line-horrizontal-full bg-white opacity3 my-1-9 my-sm-2-3 my-md-2-9" />
                <p className="text-white mb-1-9 w-xl-85">
                  Adysun Ventures is a leading <Link to="/services" className="text-white text-decoration-underline">IT solutions provider</Link>, offering
                  comprehensive <Link to="/services" className="text-white text-decoration-underline">technology services</Link> to meet your <Link to="/industries" className="text-white text-decoration-underline">industry-specific</Link> business needs.
                </p>
                <div className="mt-4">
                  <Link to="/services" className="btn btn-primary me-3">Our Services</Link>
                  <Link to="/contact-us" className="btn btn-outline-light">Contact Us</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-blocks p-0 bg-transparent">
          <div className="container">
            <div
              className="bg-img cover-background primary-overlay rounded-4"
              data-overlay-dark={9}
            >
              <div className="position-relative z-index-1 p-1-9 p-sm-2-3 p-md-2-9 p-lg-6">
                <div className="w-md-85 mx-auto text-center">
                  <h2 className="text-white font-weight-700">
                    Expert IT Solutions with a Decade of Experience
                  </h2>
                  <p className="text-white m-0">
                    Adysun Ventures delivers professional <Link to="/services" className="text-white text-decoration-underline">IT services</Link> with
                    unmatched <Link to="/about-us" className="text-white text-decoration-underline">expertise</Link>, ensuring timely delivery and utmost
                    confidentiality for all your <Link to="/technologies" className="text-white text-decoration-underline">technology</Link> needs.
                  </p>
                </div>
                <div className="separator-line-horrizontal-full bg-white opacity3 my-1-9 my-sm-2-3 my-md-2-9" />
                <div className="row mt-n1-9">
                  <div className="col-lg-4 mt-1-9">
                    <div className="border-lg-end border-color-light-white">
                      <div className="features-flex-square">
                        <div className="clearfix">
                          <div className="features-flex-square-icon">
                            <i className="icon-tools display-18 display-md-16" />
                          </div>
                          <div className="features-flex-square-content">
                            <h3 className="text-white">
                              <i className="fa-solid fa-money-bill me-2 text-white"></i>
                              <Link to="/services" className="text-white">Saving Investments</Link>
                            </h3>
                            <p className="text-white">
                              Optimize your technology investments for long-term
                              growth and success.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 mt-1-9">
                    <div className="border-lg-end border-color-light-white">
                      <div className="features-flex-square">
                        <div className="clearfix">
                          <div className="features-flex-square-icon">
                            <i className="icon-hotairballoon display-18 display-md-16" />
                          </div>
                          <div className="features-flex-square-content">
                            <h3 className="text-white">
                              <i className="fa-solid fa-chart-simple me-2 text-white"></i>
                              <Link to="/services" className="text-white">Effective Strategy</Link>
                            </h3>
                            <p className="text-white">
                              Building effective strategies to optimize your IT
                              infrastructure for maximum ROI.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 mt-1-9">
                    <div className="">
                      <div className="features-flex-square">
                        <div className="clearfix">
                          <div className="features-flex-square-icon">
                            <i className="icon-lightbulb display-18 display-md-16" />
                          </div>
                          <div className="features-flex-square-content">
                            <h3 className="text-white">
                              <i className="fa-solid fa-gears me-2 text-white"></i>
                              <Link to="/services" className="text-white">Innovative Solutions</Link>
                            </h3>
                            <p className="text-white">
                              Providing cutting-edge IT solutions that keep your
                              business ahead of the curve.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* New SEO-rich content section */}
        <section className="bg-light py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="section-title text-center mb-5">
                  <h2 className="h2 mb-3">Comprehensive IT Solutions & Business Strategy Services</h2>
                  <p className="lead">Transforming businesses through <Link to="/services">innovative technology solutions</Link> and <Link to="/services">strategic consulting</Link></p>
                </div>
                
                <div className="card shadow border-0 mb-4">
                  <div className="card-body p-4 p-lg-5">
                    <h3 className="h3 mb-3">Premier IT Solutions Provider in India</h3>
                    <p>
                      Adysun Ventures is a leading IT solutions company specializing in providing comprehensive <Link to="/technologies">technology services</Link> 
                      to businesses across various <Link to="/industries">industries</Link>. With our headquarters in Pune, we've established ourselves as a trusted 
                      <Link to="/about-us"> partner</Link> for organizations seeking to leverage technology for business growth and operational excellence.
                    </p>
                    <p>
                      Our <Link to="/about-us">team of experienced IT professionals</Link> delivers tailored solutions in <Link to="/services">software development</Link>, 
                      <Link to="/technologies"> cloud computing</Link>, <Link to="/services">cybersecurity</Link>, <Link to="/services">data analytics</Link>, and 
                      <Link to="/services"> digital transformation</Link>. We combine technical expertise 
                      with business acumen to help organizations navigate the complex technology landscape and achieve their <Link to="/services">strategic objectives</Link>.
                    </p>
                  </div>
                </div>
                
                <div className="row g-4 mb-5">
                  <div className="col-md-6">
                    <div className="card h-100 border-0 shadow">
                      <div className="card-body p-4">
                        <h3 className="h4 card-title mb-3">Business Strategy Consulting</h3>
                        <p className="card-text">
                          Our <Link to="/services">business strategy consulting services</Link> help organizations align their technology investments with business goals. 
                          Through comprehensive analysis and strategic planning, we guide businesses in making informed decisions that drive 
                          growth, improve efficiency, and create competitive advantages in the market.
                        </p>
                        <ul className="list-unstyled mb-0">
                          <li className="mb-2"><i className="fas fa-check-circle text-primary me-2"></i>IT Strategic Planning</li>
                          <li className="mb-2"><i className="fas fa-check-circle text-primary me-2"></i>Digital Transformation Roadmaps</li>
                          <li><i className="fas fa-check-circle text-primary me-2"></i>Technology Investment Advisory</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card h-100 border-0 shadow">
                      <div className="card-body p-4">
                        <h3 className="h4 card-title mb-3">Advanced IT Solutions</h3>
                        <p className="card-text">
                          Our technical expertise spans across various domains including <Link to="/technologies">cloud infrastructure</Link>, application development, 
                          cybersecurity, data analytics, and emerging technologies like AI and IoT. We deliver scalable, secure, and 
                          efficient solutions that address specific business challenges and create new opportunities.
                        </p>
                        <ul className="list-unstyled mb-0">
                          <li className="mb-2"><i className="fas fa-check-circle text-primary me-2"></i>Custom Software Development</li>
                          <li className="mb-2"><i className="fas fa-check-circle text-primary me-2"></i>Cloud Migration & Management</li>
                          <li><i className="fas fa-check-circle text-primary me-2"></i>Cybersecurity Services</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center mb-4">
                  <h2 className="h3">Why Choose Adysun Ventures for IT Services?</h2>
                </div>
                
                <div className="row g-4 mb-5">
                  <div className="col-md-4">
                    <div className="card h-100 border-0 shadow text-center">
                      <div className="card-body p-4">
                        <div className="rounded-circle bg-primary text-white d-inline-flex align-items-center justify-content-center mb-3" style={{width: "70px", height: "70px"}}>
                          <i className="fas fa-lightbulb fa-2x text-white"></i>
                        </div>
                        <h4 className="card-title mb-3">Innovative Approach</h4>
                        <p className="card-text mb-0">
                          We stay ahead of technology trends to bring innovative solutions that drive business value.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card h-100 border-0 shadow text-center">
                      <div className="card-body p-4">
                        <div className="rounded-circle bg-primary text-white d-inline-flex align-items-center justify-content-center mb-3" style={{width: "70px", height: "70px"}}>
                          <i className="fas fa-users fa-2x text-white"></i>
                        </div>
                        <h4 className="card-title mb-3">Expert Team</h4>
                        <p className="card-text mb-0">
                          Our <Link to="/about-us">team of certified professionals</Link> brings deep technical expertise and industry knowledge.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card h-100 border-0 shadow text-center">
                      <div className="card-body p-4">
                        <div className="rounded-circle bg-primary text-white d-inline-flex align-items-center justify-content-center mb-3" style={{width: "70px", height: "70px"}}>
                          <i className="fas fa-handshake fa-2x text-white"></i>
                        </div>
                        <h4 className="card-title mb-3">Client Partnership</h4>
                        <p className="card-text mb-0">
                          We build long-term partnerships focused on your success and continuous improvement. See our <Link to="/clients">success stories</Link>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="tabs-style-2 p-0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 mb-1-9 text-center">
                <div className="mb-5">
                  <span className="text-muted">how we can serve</span>
                  <h2 className="display-18">
                    Driving Success Through <Link to="/services">Strategic IT Solutions</Link>
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="horizontaltab">
                  <div className="row">
                    <div className="col-md-12 col-lg-4 mb-1-9 mb-lg-0">
                      <ul className="resp-tabs-list hor_1 text-center">
                        {tabData.map((tab, index) => (
                          <li
                            className={activeTab === index ? "resp-tab-active" : ""}
                            onClick={() => setActiveTab(index)}
                            key={tab.id}
                          >
                            <div className="tab-boxes">
                              <div className="tab-box-number">{tab.number}</div>
                              <div className="tab-box-content">
                                <h4 className="h6">{tab.title}</h4>
                                <span className="d-sm-block">{tab.subtitle}</span>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-md-12 col-lg-8">
                      <div className="resp-tabs-container hor_1 p-0">
                        {tabData[activeTab].content}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry section with links */}
        <section className="bg-light py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center mb-5">
                <h2 className="mb-3">Industries We Serve</h2>
                <p className="lead">Our IT solutions and business strategy services are tailored to the unique needs of various industries</p>
              </div>
            </div>
            <div className="row g-4 justify-content-center mb-4">
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow text-center">
                  <div className="card-body p-4">
                    <i className="fas fa-chart-line fa-3x text-primary mb-3"></i>
                    <h3 className="h4 mb-3"><Link to="/industries/stock-exchange" className="text-dark text-decoration-none">Stock Exchange & Financial Services</Link></h3>
                    <p>High-performance solutions for financial markets and trading platforms.</p>
                    <Link to="/industries/stock-exchange" className="btn btn-sm btn-outline-primary mt-3">Learn More</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow text-center">
                  <div className="card-body p-4">
                    <i className="fas fa-shopping-cart fa-3x text-primary mb-3"></i>
                    <h3 className="h4 mb-3"><Link to="/industries/ecommerce" className="text-dark text-decoration-none">E-Commerce & Retail Solutions</Link></h3>
                    <p>Scalable platforms and solutions for online retail businesses.</p>
                    <Link to="/industries/ecommerce" className="btn btn-sm btn-outline-primary mt-3">Learn More</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow text-center">
                  <div className="card-body p-4">
                    <i className="fas fa-truck fa-3x text-primary mb-3"></i>
                    <h3 className="h4 mb-3"><Link to="/industries/transportation" className="text-dark text-decoration-none">Transportation & Logistics</Link></h3>
                    <p>Logistics and fleet management technology solutions.</p>
                    <Link to="/industries/transportation" className="btn btn-sm btn-outline-primary mt-3">Learn More</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Link to="/industries" className="btn btn-primary">Explore All Industries</Link>
            </div>
          </div>
        </section>

        {/* Add FAQ section */}
        <FAQ className="bg-light" />

        {/* CTA Section */}
        <section className="bg-primary py-5 text-white">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8 mb-4 mb-lg-0">
                <h2 className="text-white mb-3">Ready to Transform Your Business with IT Solutions?</h2>
                <p className="lead mb-0">Contact us today to discuss how our services can drive your business growth.</p>
              </div>
              <div className="col-lg-4 text-lg-end">
                <Link to="/contact-us" className="btn btn-light btn-lg">Get in Touch</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Internal Links for SEO */}
        <InternalLinks className="bg-light" currentPath="/" />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage