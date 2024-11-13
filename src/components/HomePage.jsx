import React, { useState } from 'react'
import Header from './common/Header';
import Footer from './common/Footer';

import { LazyLoadImage } from "react-lazy-load-image-component";
import slider21 from "../assets/images/slider/slide21.jpg";
import slice2 from "../assets/images/content/slice-2.png";
import content1 from "../assets/images/content/content-01.jpg";
import content2 from "../assets/images/content/content-02.jpg";
import content3 from "../assets/images/content/content-03.jpg";


function HomePage() {
  const [activeTab, setActiveTab] = useState(0);

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
              <LazyLoadImage
                src={content1}
                className="img-fluid rounded"
                alt="Strategic IT planning and vision at Adysun Ventures"
                width={545}
                height={348}
              />
            </div>
            <div className="col-lg-6">
              <h4 className="fw-bolder fs-3">Strategic Vision in IT</h4>
              <div>
                <span className="fw-bold me-1">
                  Long-term Goals:
                </span>
                At Adysun Ventures, we're committed to becoming
                industry leaders in IT innovation, setting new
                standards and inspiring both our team and clients
                to reach their full potential.
              </div>
              <div>
                <span className="fw-bold me-1">Innovation:</span>
                We're at the forefront of technological
                advancements, constantly exploring new ways to
                enhance business operations through IT solutions.
              </div>
              <div>
                <span className="fw-bold me-1">
                  Customer Focus:
                </span>
                Our strategies are built around understanding and
                exceeding client expectations in the IT sector.
              </div>
              <div>
                <span className="fw-bold me-1">
                  Market Leadership:
                </span>
                We aim to set industry trends and establish
                benchmarks in IT services that others aspire to
                follow.
              </div>
              <div>
                <span className="fw-bold me-1">
                  Social Impact:
                </span>
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
                <h4 className="fw-bolder fs-3">
                  IT Marketing Strategies
                </h4>
                <p>
                  At Adysun Ventures, we develop targeted marketing
                  strategies for IT services, focusing on current
                  trends such as cloud adoption, cybersecurity,
                  and remote work solutions.
                </p>
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
              <LazyLoadImage
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
              <LazyLoadImage
                src={content3}
                className="img-fluid rounded"
                alt="Technology growth and scaling IT solutions with Adysun Ventures"
                width={545}
                height={348}
              />
            </div>
            <div className="col-lg-6">
              <div className="ps-lg-1-9">
                <h4 className="fw-bolder fs-3">
                  Scaling IT Success
                </h4>
                <p>
                  The IT consulting industry is experiencing
                  robust growth, driven by digital transformation
                  initiatives. At Adysun Ventures, we're at the
                  forefront of this evolution, helping businesses
                  leverage cutting-edge technologies.
                </p>
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

  return (
    <div>
      <Header />
      <div className="main-wrapper">
        <section
          className="bg-img cover-background"
          data-overlay-dark={7}
          style={{ backgroundImage: `url(${slider21})` }}
        >
          <div className="container py-10">
            <div className="row align-items-center">
              <div className="col-xl-7 col-lg-6 mb-1-9 mb-lg-0">
                <span className="text-white fs-2">When service matters</span>
                <h1 className="text-white display-md-10 font-weight-700 m-0">
                  <span class="text-primary">We Are the best </span>
                  <span>IT Solutions</span>
                </h1>
                <div className="separator-line-horrizontal-full bg-white opacity3 my-1-9 my-sm-2-3 my-md-2-9" />
                <p className="text-white mb-1-9 w-xl-85">
                  Adysun Ventures is a leading IT solutions provider, offering
                  comprehensive services to meet your business needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="services-blocks p-0 bg-transparent">
          <div className="container">
            <div
              className="bg-img cover-background primary-overlay"
              data-overlay-dark={9}
            >
              <div className="position-relative z-index-1 p-1-9 p-sm-2-3 p-md-2-9 p-lg-6">
                <div className="w-md-85 mx-auto text-center">
                  <p className="text-white font-weight-700 h2">
                    Expert IT Solutions with a Decade of Experience
                  </p>
                  <p className="text-white m-0">
                    Adysun Ventures delivers professional IT services with unmatched
                    expertise, ensuring timely delivery and utmost
                    confidentiality for all your technology needs.
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
                            <h4>
                              <i class="fa-solid fa-money-bill me-2 text-white"></i>
                              <span className="text-white">Saving Investments</span>
                            </h4>
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
                            <h4>
                              <i class="fa-solid fa-globe me-2 text-white"></i>
                              <span className="text-white">Online Consulting</span>
                            </h4>
                            <p className="text-white">
                              Access expert IT consulting services anytime,
                              anywhere for efficient problem-solving.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 mt-1-9">
                    <div>
                      <div className="features-flex-square">
                        <div className="clearfix">
                          <div className="features-flex-square-icon">
                            <i className="icon-layers display-18 display-md-16" />
                          </div>
                          <div className="features-flex-square-content">
                            <h4>
                              <i class="fa-solid fa-building-columns me-2 text-white"></i>
                              <span className="text-white">Tech Innovation</span>
                            </h4>
                            <p className="text-white">
                              Stay ahead with our innovative tech solutions,
                              designed to future-proof your business.
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

        <section aria-labelledby="about-heading">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 order-md-2 order-sm-2 order-lg-1">
                <div className="section-heading title-style5 left half">
                  <h2 id="about-heading" className="fs-2">
                    Adysun Ventures: Your IT Partner
                  </h2>
                  <div className="square">
                    <span className="separator-left bg-primary" />
                    <span className="separator-right bg-primary" />
                  </div>
                </div>
                <p>
                  At Adysun Ventures, we combine comprehensive business strategies
                  with cutting-edge technology to deliver tailored IT solutions.
                  Our focus is on fostering collaborative partnerships that
                  drive your business forward.
                </p>
                <p>
                  Founded in 2018, we've quickly become a leading IT service
                  provider, known for our exceptional processes and innovative
                  solutions. We understand the critical role of quality and
                  reliability in modern business operations.
                </p>
                <p>
                  Discover how Adysun Ventures can elevate your business with our
                  premium IT services and products.
                </p>
                <div className="mb-4">
                  <span>
                    24/7 Support Available. We're here to answer{" "}
                    <strong className="font-weight-600 lead">
                      all your IT-related questions.
                    </strong>
                  </span>
                </div>
                <div className="border-bottom mb-3 mb-lg-4 pb-3 pb-lg-4">
                  <a href="tel:+91 7776827177">
                    <h4 className="d-inline-block h6 mb-0 me-4">
                      +91 7776827177
                    </h4>
                  </a>
                  <div className="d-inline-block me-4 align-top">
                    <strong className="font-weight-700 text-primary">or</strong>
                  </div>
                  <h4 className="d-inline-block h6 mb-0">
                    <a href="mailto:info@adysunventures.com">info@adysunventures.com</a>
                  </h4>
                </div>
                <div className="text-start w-100">
                  <p className="mb-0">
                    <span className="font-weight-700 d-block"></span>
                    CEO, Adysun Ventures
                  </p>
                </div>
              </div>

              <div className="col-lg-6 order-md-1  order-sm-1 order-lg-2">
                <div className="about-ceo ms-lg-5 ms-md-8 mb-md-3  ">
                  <LazyLoadImage
                    className="img-fluid rounded"
                    src={slice2}
                    alt=", CEO of Adysun Ventures - Leading IT Solutions Provider"
                    width={600}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="bg-light-gray pt-3"
          aria-labelledby="what-we-do-heading"
        >
          <div className="container">
            <div className="section-heading title-style5">
              <p
                className="text-uppercase font-weight-600  fs-2"
                id="what-we-do-heading"
              >
                What we do
              </p>
              <div className="square">
                <span className="separator-left bg-primary" />
                <span className="separator-right bg-primary" />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="horizontaltab tab-style4" role="tablist">
                  <ul className="resp-tabs-list hor_1" role="tablist">
                    {tabData.map((tab, index) => (
                      <li
                        key={tab.id}
                        className={`ms-4 ${activeTab === index ? 'active' : ''}`}
                        role="tab"
                        aria-controls={`tab-${tab.id}`}
                        aria-selected={activeTab === index}
                        onClick={() => setActiveTab(index)}
                        style={{ cursor: 'pointer' }}
                      >
                        <span className="count display-5 display-md-2 alt-font font-weight-700">
                          {tab.number}
                        </span>
                        <div className="tab-box">
                          <p className="h6">{tab.title}</p>
                          <span>{tab.subtitle}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="resp-tabs-container box-shadow-large bg-white hor_1">
                    {tabData.map((tab, index) => (
                      <div
                        key={tab.id}
                        id={`tab-${tab.id}`}
                        role="tabpanel"
                        aria-labelledby={`tab-${tab.id}-trigger`}
                        style={{ display: activeTab === index ? 'block' : 'none' }}
                      >
                        {tab.content}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage