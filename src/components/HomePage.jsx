import React, { useState, useEffect, useRef } from 'react'
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
// Import optimized hero images for different resolutions
import homeSectionBgTiny from "../assets/images/bg/home-section-bg-320w.webp"
import homeSectionBgSmall from "../assets/images/bg/home-section-bg-480w.webp"
import homeSectionBgMedium from "../assets/images/bg/home-section-bg-800w.webp"
import homeSectionBgLarge from "../assets/images/bg/home-section-bg.webp"
// Fallback for browsers that don't support WebP
import homeSectionBgTinyFallback from "../assets/images/bg/home-section-bg-320w.jpg"
import homeSectionBgSmallFallback from "../assets/images/bg/home-section-bg-480w.jpg"
import homeSectionBgMediumFallback from "../assets/images/bg/home-section-bg-800w.jpg"
import homeSectionBgLargeFallback from "../assets/images/bg/home-section-bg.jpg"
// Import tiny placeholder for LQIP technique
import homeSectionBgPlaceholder from "../assets/images/bg/home-section-bg-placeholder.jpg"

// Create a component for preloading critical resources
const CriticalPreload = () => {
  useEffect(() => {
    // Add preload links for critical resources
    const preloadLinks = [
      { 
        href: homeSectionBgTiny, 
        as: 'image', 
        type: 'image/webp', 
        media: '(max-width: 320px)', 
        fetchpriority: 'high' 
      },
      { 
        href: homeSectionBgSmall, 
        as: 'image', 
        type: 'image/webp', 
        media: '(min-width: 321px) and (max-width: 480px)', 
        fetchpriority: 'high' 
      },
      { 
        href: homeSectionBgMedium, 
        as: 'image', 
        type: 'image/webp', 
        media: '(min-width: 481px) and (max-width: 800px)', 
        fetchpriority: 'high' 
      },
      { 
        href: homeSectionBgLarge, 
        as: 'image', 
        type: 'image/webp', 
        media: '(min-width: 801px)', 
        fetchpriority: 'high' 
      }
    ];

    preloadLinks.forEach(linkProps => {
      const link = document.createElement('link');
      link.rel = 'preload';
      Object.entries(linkProps).forEach(([key, value]) => {
        link[key] = value;
      });
      document.head.appendChild(link);
    });

    return () => {
      // Clean up preload links
      document.querySelectorAll('link[rel="preload"][as="image"]').forEach(link => {
        document.head.removeChild(link);
      });
    };
  }, []);

  return null;
};

function HomePage() {
  const [activeTab, setActiveTab] = useState(0);
  const heroSectionRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  
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
        <div className="position-relative h-100">
          {/* Image Section with Overlay */}
          <div className="col-lg-7 position-absolute top-0 end-0 h-100 bg-light rounded-4 overflow-hidden d-none d-lg-block">
            <div className="h-100 p-0" style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0% 100%)' }}>
              <OptimizedImage
                src={content1}
                className="w-100 h-100 object-fit-cover"
                alt="Strategic IT planning and vision at Adysun Ventures"
                width={745}
                height={548}
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="col-lg-6 position-relative">
            <div className="content-wrapper bg-white rounded-4 shadow-sm p-4 p-lg-5">
              <span className="badge bg-primary bg-opacity-10 text-primary mb-3 px-3 py-2">Strategic Planning</span>
              <h3 className="display-6 fw-bold mb-4">Strategic Vision in IT</h3>
              <p className="lead text-secondary mb-5">At Adysun Ventures, we're committed to becoming industry leaders in IT innovation.</p>
              
              <div className="strategy-items">
                <div className="strategy-item d-flex align-items-start mb-4 pb-4">
                  <div className="strategy-icon rounded-4 bg-gradient p-3 me-4" 
                       style={{ background: 'linear-gradient(135deg, #ff6700 0%, #ff8e3c 100%)' }}>
                    <i className="fas fa-bullseye fa-lg text-white"></i>
                  </div>
                  <div>
                    <h4 className="h5 fw-bold mb-2">Long-term Goals</h4>
                    <p className="text-secondary mb-0">Setting new standards and inspiring both our team and clients to reach their full potential.</p>
                  </div>
                </div>

                <div className="strategy-item d-flex align-items-start mb-4 pb-4">
                  <div className="strategy-icon rounded-4 bg-gradient p-3 me-4"
                       style={{ background: 'linear-gradient(135deg, #ff6700 0%, #ff8e3c 100%)' }}>
                    <i className="fas fa-lightbulb fa-lg text-white"></i>
                  </div>
                  <div>
                    <h4 className="h5 fw-bold mb-2">Innovation Focus</h4>
                    <p className="text-secondary mb-0">Exploring cutting-edge technologies to enhance business operations and efficiency.</p>
                  </div>
                </div>

                <div className="strategy-item d-flex align-items-start">
                  <div className="strategy-icon rounded-4 bg-gradient p-3 me-4"
                       style={{ background: 'linear-gradient(135deg, #ff6700 0%, #ff8e3c 100%)' }}>
                    <i className="fas fa-users fa-lg text-white"></i>
                  </div>
                  <div>
                    <h4 className="h5 fw-bold mb-2">Customer Success</h4>
                    <p className="text-secondary mb-0">Building strategies around understanding and exceeding client expectations.</p>
                  </div>
                </div>
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
        <div className="position-relative h-100">
          {/* Image Section with Overlay */}
          <div className="col-lg-7 position-absolute top-0 end-0 h-100 bg-light rounded-4 overflow-hidden d-none d-lg-block">
            <div className="h-100 p-0" style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0% 100%)' }}>
              <OptimizedImage
                src={content2}
                className="w-100 h-100 object-fit-cover"
                alt="IT marketing strategies and digital promotion"
                width={745}
                height={548}
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="col-lg-6 position-relative">
            <div className="content-wrapper bg-white rounded-4 shadow-sm p-4 p-lg-5">
              <span className="badge bg-primary bg-opacity-10 text-primary mb-3 px-3 py-2">Marketing Strategy</span>
              <h3 className="display-6 fw-bold mb-4">IT Marketing Strategies</h3>
              <p className="lead text-secondary mb-5">Developing targeted strategies that drive growth and innovation in IT services.</p>
              
              <div className="strategy-items">
                <div className="strategy-item d-flex align-items-start mb-4 pb-4">
                  <div className="strategy-icon rounded-4 bg-gradient p-3 me-4"
                       style={{ background: 'linear-gradient(135deg, #ff6700 0%, #ff8e3c 100%)' }}>
                    <i className="fas fa-chart-line fa-lg text-white"></i>
                  </div>
                  <div>
                    <h4 className="h5 fw-bold mb-2">Market Analysis</h4>
                    <p className="text-secondary mb-0">Analyzing IT spending patterns and market trends to optimize solutions.</p>
                  </div>
                </div>

                <div className="strategy-item d-flex align-items-start mb-4 pb-4">
                  <div className="strategy-icon rounded-4 bg-gradient p-3 me-4"
                       style={{ background: 'linear-gradient(135deg, #ff6700 0%, #ff8e3c 100%)' }}>
                    <i className="fas fa-cloud fa-lg text-white"></i>
                  </div>
                  <div>
                    <h4 className="h5 fw-bold mb-2">Cloud Solutions</h4>
                    <p className="text-secondary mb-0">Promoting innovative cloud services that scale with your business needs.</p>
                  </div>
                </div>

                <div className="strategy-item d-flex align-items-start">
                  <div className="strategy-icon rounded-4 bg-gradient p-3 me-4"
                       style={{ background: 'linear-gradient(135deg, #ff6700 0%, #ff8e3c 100%)' }}>
                    <i className="fas fa-shield-alt fa-lg text-white"></i>
                  </div>
                  <div>
                    <h4 className="h5 fw-bold mb-2">Security First</h4>
                    <p className="text-secondary mb-0">Implementing robust cybersecurity measures for complete protection.</p>
                  </div>
                </div>
              </div>
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
        <div className="position-relative h-100">
          {/* Image Section with Overlay */}
          <div className="col-lg-7 position-absolute top-0 end-0 h-100 bg-light rounded-4 overflow-hidden d-none d-lg-block">
            <div className="h-100 p-0" style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0% 100%)' }}>
              <OptimizedImage
                src={content3}
                className="w-100 h-100 object-fit-cover"
                alt="Technology growth and scaling solutions"
                width={745}
                height={548}
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="col-lg-6 position-relative">
            <div className="content-wrapper bg-white rounded-4 shadow-sm p-4 p-lg-5">
              <span className="badge bg-primary bg-opacity-10 text-primary mb-3 px-3 py-2">Growth Strategy</span>
              <h3 className="display-6 fw-bold mb-4">Scaling IT Success</h3>
              <p className="lead text-secondary mb-5">Empowering businesses with cutting-edge technologies for sustainable growth.</p>
              
              <div className="strategy-items">
                <div className="strategy-item d-flex align-items-start mb-4 pb-4">
                  <div className="strategy-icon rounded-4 bg-gradient p-3 me-4"
                       style={{ background: 'linear-gradient(135deg, #ff6700 0%, #ff8e3c 100%)' }}>
                    <i className="fas fa-rocket fa-lg text-white"></i>
                  </div>
                  <div>
                    <h4 className="h5 fw-bold mb-2">Digital Transformation</h4>
                    <p className="text-secondary mb-0">Guiding businesses through comprehensive digital transformation journeys.</p>
                  </div>
                </div>

                <div className="strategy-item d-flex align-items-start mb-4 pb-4">
                  <div className="strategy-icon rounded-4 bg-gradient p-3 me-4"
                       style={{ background: 'linear-gradient(135deg, #ff6700 0%, #ff8e3c 100%)' }}>
                    <i className="fas fa-brain fa-lg text-white"></i>
                  </div>
                  <div>
                    <h4 className="h5 fw-bold mb-2">AI Integration</h4>
                    <p className="text-secondary mb-0">Implementing AI and machine learning solutions for smarter operations.</p>
                  </div>
                </div>

                <div className="strategy-item d-flex align-items-start">
                  <div className="strategy-icon rounded-4 bg-gradient p-3 me-4"
                       style={{ background: 'linear-gradient(135deg, #ff6700 0%, #ff8e3c 100%)' }}>
                    <i className="fas fa-chart-bar fa-lg text-white"></i>
                  </div>
                  <div>
                    <h4 className="h5 fw-bold mb-2">Data Analytics</h4>
                    <p className="text-secondary mb-0">Leveraging data-driven insights for strategic decision making.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  useEffect(() => {
    // Optimized image preloading strategy
    const preloadImages = () => {
      // Don't need to manually preload here anymore, using the CriticalPreload component instead
      
      // Mark as loaded immediately in development for better experience
      if (process.env.NODE_ENV === 'development') {
        setImageLoaded(true);
      }
      
      // Create an observer for the hero section
      if (heroSectionRef.current) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setIsIntersecting(entry.isIntersecting);
            if (entry.isIntersecting) {
              observer.disconnect();
            }
          },
          { threshold: 0.1 }
        );
        
        observer.observe(heroSectionRef.current);
        return () => observer.disconnect();
      }
    };
    
    return preloadImages();
  }, []);

  // Helper function to select the right image based on screen size
  const getImageForViewport = () => {
    if (typeof window === 'undefined') return homeSectionBgMedium;
    
    if (window.innerWidth <= 320) {
      return homeSectionBgTiny;
    } else if (window.innerWidth <= 480) {
      return homeSectionBgSmall;
    } else if (window.innerWidth <= 800) {
      return homeSectionBgMedium;
    } else {
      return homeSectionBgLarge;
    }
  };
  
  // Get webp fallback image for browsers that don't support webp
  const getFallbackImage = () => {
    if (typeof window === 'undefined') return homeSectionBgMediumFallback;
    
    if (window.innerWidth <= 320) {
      return homeSectionBgTinyFallback;
    } else if (window.innerWidth <= 480) {
      return homeSectionBgSmallFallback;
    } else if (window.innerWidth <= 800) {
      return homeSectionBgMediumFallback;
    } else {
      return homeSectionBgLargeFallback;
    }
  };

  return (
    <div>
      {/* Add critical preload component */}
      <CriticalPreload />
      
      {/* Add page-specific meta tags that override global ones */}
      <MetaTags 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        ogImage={seoData.ogImage}
        preloadImages={[
          { href: homeSectionBgTiny, media: "(max-width: 320px)" },
          { href: homeSectionBgSmall, media: "(min-width: 321px) and (max-width: 480px)" },
          { href: homeSectionBgMedium, media: "(min-width: 481px) and (max-width: 800px)" },
          { href: homeSectionBgLarge, media: "(min-width: 801px)" }
        ]}
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
          ref={heroSectionRef}
          className="bg-img cover-background position-relative"
          data-overlay-dark={7}
          style={{
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            willChange: "transform", // Helps with compositing
            contain: "layout paint",
            backgroundColor: "#0a0a0a", // Dark background for before image loads
          }}
          role="img"
          aria-label="Adysun Ventures hero section background"
        >
          {/* Add a dark overlay */}
          <div 
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              zIndex: 0,
            }}
          ></div>
          
          {/* Tiny placeholder image - loaded immediately for LQIP technique */}
          <img 
            src={homeSectionBgPlaceholder}
            alt=""
            className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
            style={{ 
              opacity: imageLoaded ? 0 : 0.6,
              zIndex: -1,
              objectFit: "cover",
              width: "100%",
              height: "100%",
              filter: "blur(10px) brightness(0.7)",
              transition: "opacity 0.5s ease",
            }}
            width="20"
            height="12"
            loading="eager"
          />
          
          {/* Main background image - optimized implementation */}
          <picture>
            {/* WebP format for modern browsers */}
            <source
              srcSet={`${homeSectionBgTiny} 320w, ${homeSectionBgSmall} 480w, ${homeSectionBgMedium} 800w, ${homeSectionBgLarge} 1200w`}
              sizes="100vw"
              type="image/webp"
            />
            {/* JPG fallback for older browsers */}
            <source
              srcSet={`${homeSectionBgTinyFallback} 320w, ${homeSectionBgSmallFallback} 480w, ${homeSectionBgMediumFallback} 800w, ${homeSectionBgLargeFallback} 1200w`}
              sizes="100vw"
              type="image/jpeg"
            />
            <img 
              src={getFallbackImage()}
              alt="Adysun Ventures hero background"
              className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
              style={{ 
                opacity: 0.6, 
                zIndex: -1,
                objectFit: "cover",
                width: "100%",
                height: "100%",
                transform: "translateZ(0)",
                willChange: "transform",
                filter: "brightness(0.7) contrast(1.1)",
              }}
              fetchpriority="high"
              loading="eager"
              decoding="async"
              onLoad={() => setImageLoaded(true)}
              width="1200"
              height="800"
              importance="high"
              data-lcp="true"
            />
          </picture>

          <div className="container py-10 position-relative" style={{ zIndex: 1 }}>
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
                  <Link to="/services" className="btn me-3" style={{
                    backgroundColor: "#ff5a2e",
                    color: "#ffffff",
                    fontWeight: "600",
                    padding: "0.5rem 1.5rem",
                    borderRadius: "4px",
                    border: "2px solid #ff5a2e",
                    transition: "all 0.3s ease"
                  }}>Our Services</Link>
                  <Link to="/contact-us" className="btn" style={{
                    backgroundColor: "transparent",
                    color: "#ffffff",
                    fontWeight: "600",
                    padding: "0.5rem 1.5rem",
                    borderRadius: "4px",
                    border: "2px solid #ffffff",
                    transition: "all 0.3s ease",
                    boxShadow: "none"
                  }}>Contact Us</Link>
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

        <section className="py-5" style={{ background: 'linear-gradient(to bottom, #f8f9fa, #ffffff)' }}>
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-lg-7 text-center">
                <span className="text-uppercase small fw-semibold" 
                      style={{ color: '#6B7280', letterSpacing: '2px' }}>
                  HOW WE CAN SERVE
                </span>
                <h2 className="display-4 fw-bold mt-2 mb-0" 
                    style={{ 
                      background: 'linear-gradient(45deg, #1a1a1a, #404040)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                  Driving Success Through <br/> Strategic IT Solutions
                </h2>
              </div>
            </div>

            <div className="row g-4">
              {/* Left sidebar with steps */}
              <div className="col-lg-4">
                <div className="steps-wrapper pe-lg-4">
                  {tabData.map((tab, index) => (
                    <div
                      key={tab.id}
                      onClick={() => setActiveTab(index)}
                      className={`step-item d-flex align-items-start p-4 rounded-4 mb-3 ${
                        activeTab === index 
                          ? 'shadow-sm border-start border-4' 
                          : ''
                      }`}
                      style={{ 
                        cursor: 'pointer', 
                        transition: 'all 0.3s ease',
                        background: activeTab === index 
                          ? 'linear-gradient(to right, rgba(255,103,0,0.03), rgba(255,255,255,1))' 
                          : 'transparent',
                        borderColor: activeTab === index ? '#ff6700' : 'transparent'
                      }}
                    >
                      <div 
                        className="step-number rounded-circle d-flex align-items-center justify-content-center"
                        style={{
                          width: '40px',
                          height: '40px',
                          background: activeTab === index 
                            ? 'linear-gradient(135deg, #ff6700, #ff8e3c)' 
                            : '#f3f4f6',
                          color: activeTab === index ? 'white' : '#6B7280',
                          fontSize: '15px',
                          fontWeight: '600',
                          boxShadow: activeTab === index 
                            ? '0 4px 12px rgba(255, 103, 0, 0.15)' 
                            : 'none',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        {tab.number}
                      </div>
                      <div className="ms-3">
                        <h3 className="h5 mb-1" 
                            style={{ 
                              color: activeTab === index ? '#ff6700' : '#1a1a1a',
                              transition: 'color 0.3s ease'
                            }}>
                          {tab.title}
                        </h3>
                        <p className="small mb-0" 
                           style={{ color: '#6B7280' }}>
                          {tab.subtitle}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right content area */}
              <div className="col-lg-8">
                <div className="content-area rounded-4 overflow-hidden bg-white">
                  <div className="row g-0">
                    {/* Left Column */}
                    <div className="col-lg-6 p-4">
                      {/* Image Section */}
                      <div className="image-wrapper mb-4">
                        <OptimizedImage
                          src={activeTab === 0 ? content1 : activeTab === 1 ? content2 : content3}
                          className="w-100 rounded-3"
                          alt={activeTab === 0 ? "Strategic IT planning and vision" :
                               activeTab === 1 ? "IT marketing strategies" :
                               "Technology growth and scaling solutions"}
                          width={500}
                          height={300}
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      
                      {/* Content Section */}
                      <div className="content-section">
                        <div className="position-relative mb-3">
                          <div className="badge d-inline-flex align-items-center px-3 py-2" 
                               style={{ 
                                 background: 'rgba(255,103,0,0.1)',
                                 color: '#ff6700',
                                 fontWeight: '500',
                                 fontSize: '0.875rem'
                               }}>
                              {activeTab === 0 ? 'Strategic Planning' :
                               activeTab === 1 ? 'Marketing Strategy' :
                               'Growth Strategy'}
                            </div>
                            {/* Connector Line Element */}
                            <div className="connector-line position-absolute" style={{
                              width: '24px',
                              height: '2px',
                              background: '#E5E7EB',
                              bottom: '18px',
                              left: '-32px'
                            }}></div>
                            {/* Connector Dot */}
                            <div className="connector-dot position-absolute" style={{
                              width: '6px',
                              height: '6px',
                              background: '#E5E7EB',
                              borderRadius: '50%',
                              bottom: '16px',
                              left: '-38px'
                            }}></div>
                          </div>

                          <h2 className="h2 mb-3" style={{ 
                            color: '#1a1a1a',
                            fontSize: '2.25rem',
                            fontWeight: '600',
                            lineHeight: '1.2'
                          }}>
                            {activeTab === 0 ? 'Strategic Vision in IT' :
                             activeTab === 1 ? 'Marketing Excellence' :
                             'Scaling IT Success'}
                          </h2>

                          <p className="lead mb-0" style={{ 
                            color: '#4B5563',
                            fontSize: '1.125rem',
                            lineHeight: '1.6'
                          }}>
                            {activeTab === 0 ? 'Empowering businesses with strategic IT planning and innovative solutions.' :
                             activeTab === 1 ? 'Developing targeted strategies that drive growth and innovation in IT services.' :
                             'Empowering businesses with cutting-edge technologies for sustainable growth.'}
                          </p>
                        </div>
                      </div>

                      {/* Right Column - Feature Items */}
                      <div className="col-lg-6 bg-light p-4">
                        <div className="features-list">
                          {activeTab === 0 ? (
                            <>
                              <div className="feature-item d-flex align-items-start mb-4">
                                <div className="feature-icon-wrapper me-3 rounded-2 p-3" style={{
                                  background: 'rgba(255, 103, 0, 0.1)'
                                }}>
                                  <i className="fas fa-rocket text-primary"></i>
                                </div>
                                <div>
                                  <h4 className="h6 fw-bold mb-2">Digital Transformation</h4>
                                  <p className="text-muted mb-0">Guiding businesses through comprehensive digital transformation journeys.</p>
                                </div>
                              </div>
                              <div className="feature-item d-flex align-items-start mb-4">
                                <div className="feature-icon-wrapper me-3 rounded-2 p-3" style={{
                                  background: 'rgba(255, 103, 0, 0.1)'
                                }}>
                                  <i className="fas fa-brain text-primary"></i>
                                </div>
                                <div>
                                  <h4 className="h6 fw-bold mb-2">AI Integration</h4>
                                  <p className="text-muted mb-0">Implementing AI and machine learning solutions.</p>
                                </div>
                              </div>
                              <div className="feature-item d-flex align-items-start">
                                <div className="feature-icon-wrapper me-3 rounded-2 p-3" style={{
                                  background: 'rgba(255, 103, 0, 0.1)'
                                }}>
                                  <i className="fas fa-chart-bar text-primary"></i>
                                </div>
                                <div>
                                  <h4 className="h6 fw-bold mb-2">Data Analytics</h4>
                                  <p className="text-muted mb-0">Leveraging data-driven insights for decisions.</p>
                                </div>
                              </div>
                            </>
                          ) : activeTab === 1 ? (
                            <>
                              <div className="feature-item d-flex align-items-start mb-4">
                                <div className="feature-icon-wrapper me-3 rounded-2 p-3" style={{
                                  background: 'rgba(255, 103, 0, 0.1)'
                                }}>
                                  <i className="fas fa-bullseye text-primary"></i>
                                </div>
                                <div>
                                  <h4 className="h6 fw-bold mb-2">Market Analysis</h4>
                                  <p className="text-muted mb-0">Analyzing IT spending patterns and market trends.</p>
                                </div>
                              </div>
                              <div className="feature-item d-flex align-items-start mb-4">
                                <div className="feature-icon-wrapper me-3 rounded-2 p-3" style={{
                                  background: 'rgba(255, 103, 0, 0.1)'
                                }}>
                                  <i className="fas fa-cloud text-primary"></i>
                                </div>
                                <div>
                                  <h4 className="h6 fw-bold mb-2">Cloud Solutions</h4>
                                  <p className="text-muted mb-0">Promoting innovative cloud services that scale.</p>
                                </div>
                              </div>
                              <div className="feature-item d-flex align-items-start">
                                <div className="feature-icon-wrapper me-3 rounded-2 p-3" style={{
                                  background: 'rgba(255, 103, 0, 0.1)'
                                }}>
                                  <i className="fas fa-shield-alt text-primary"></i>
                                </div>
                                <div>
                                  <h4 className="h6 fw-bold mb-2">Security First</h4>
                                  <p className="text-muted mb-0">Implementing robust cybersecurity measures.</p>
                                </div>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="feature-item d-flex align-items-start mb-4">
                                <div className="feature-icon-wrapper me-3 rounded-2 p-3" style={{
                                  background: 'rgba(255, 103, 0, 0.1)'
                                }}>
                                  <i className="fas fa-rocket text-primary"></i>
                                </div>
                                <div>
                                  <h4 className="h6 fw-bold mb-2">Digital Transformation</h4>
                                  <p className="text-muted mb-0">Guiding businesses through digital transformation.</p>
                                </div>
                              </div>
                              <div className="feature-item d-flex align-items-start mb-4">
                                <div className="feature-icon-wrapper me-3 rounded-2 p-3" style={{
                                  background: 'rgba(255, 103, 0, 0.1)'
                                }}>
                                  <i className="fas fa-brain text-primary"></i>
                                </div>
                                <div>
                                  <h4 className="h6 fw-bold mb-2">AI Integration</h4>
                                  <p className="text-muted mb-0">Implementing AI and machine learning solutions.</p>
                                </div>
                              </div>
                              <div className="feature-item d-flex align-items-start">
                                <div className="feature-icon-wrapper me-3 rounded-2 p-3" style={{
                                  background: 'rgba(255, 103, 0, 0.1)'
                                }}>
                                  <i className="fas fa-chart-bar text-primary"></i>
                                </div>
                                <div>
                                  <h4 className="h6 fw-bold mb-2">Data Analytics</h4>
                                  <p className="text-muted mb-0">Leveraging data-driven insights for strategic decisions.</p>
                                </div>
                              </div>
                            </>
                          )}
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
                    <Link 
                      to="/industries/stock-exchange" 
                      className="btn" 
                      style={{
                        backgroundColor: "#ff5a2e",
                        color: "#ffffff",
                        fontWeight: "600",
                        padding: "0.5rem 1.5rem",
                        borderRadius: "4px",
                        border: "2px solid #ff5a2e",
                        transition: "all 0.3s ease"
                      }}
                    >
                      Explore Financial Services Solutions
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow text-center">
                  <div className="card-body p-4">
                    <i className="fas fa-shopping-cart fa-3x text-primary mb-3"></i>
                    <h3 className="h4 mb-3"><Link to="/industries/ecommerce" className="text-dark text-decoration-none">E-Commerce & Retail Solutions</Link></h3>
                    <p>Scalable platforms and solutions for online retail businesses.</p>
                    <Link to="/industries/ecommerce" className="btn" style={{backgroundColor: "#ff5a2e", color: "#ffffff", fontWeight: "600", padding: "0.5rem 1.5rem", borderRadius: "4px", border: "2px solid #ff5a2e", transition: "all 0.3s ease"}}>Discover E-Commerce Solutions</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow text-center">
                  <div className="card-body p-4">
                    <i className="fas fa-truck fa-3x text-primary mb-3"></i>
                    <h3 className="h4 mb-3"><Link to="/industries/transportation" className="text-dark text-decoration-none">Transportation & Logistics</Link></h3>
                    <p>Logistics and fleet management technology solutions.</p>
                    <Link to="/industries/transportation" className="btn" style={{backgroundColor: "#ff5a2e", color: "#ffffff", fontWeight: "600", padding: "0.5rem 1.5rem", borderRadius: "4px", border: "2px solid #ff5a2e", transition: "all 0.3s ease"}}>View Transportation Solutions</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Link to="/industries" className="btn" style={{backgroundColor: "#ff5a2e", color: "#ffffff", fontWeight: "600", padding: "0.5rem 1.5rem", borderRadius: "4px", border: "2px solid #ff5a2e", transition: "all 0.3s ease"}}>Explore All Industries</Link>
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
                <p className="lead mb-0 text-white">Contact us today to discuss how our services can drive your business growth.</p>
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