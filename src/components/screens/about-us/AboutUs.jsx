import React, { useEffect, useRef, useState } from 'react';
import {Link} from 'react-router-dom'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import { images } from '../../../assets'
import Chart from 'chart.js/auto';
import useCounter from "../../../hooks/useCounter";
import content1 from "../../../assets/images/content/team_wokring.png";
import { LazyLoadImage } from "react-lazy-load-image-component";


// Images used in this component:
// 1. Background images: bg9, bg3
// 2. Service images: service2b, service3b, service4b
// 3. Content images: signature
// 4. Team images: teammember01, teammember02, teammember03, teammember04

function AboutUs() {
  const chartRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const prevDataRef = useRef(Array(12).fill(500));
  const useFancyAnimation = false; // Toggle this to switch between animations
  
  // Speed control variables
  const ANIMATION_SPEED = {
    updateInterval: 100,    // Update speed (ms)
    waveSpeed: 0.1,       // Wave speed
    amplitude: 300        // Wave height
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, ANIMATION_SPEED.updateInterval);

    return () => clearInterval(interval);
  }, []);

  const generateDummyData = () => {
    // Simple increasing data from 300 to 900
    return Array(12).fill(0).map((_, index) => {
      return 300 + (index * 50);
    });
  };

  const generateWaveData = () => {
    const time = performance.now() * ANIMATION_SPEED.waveSpeed;
    
    return Array(12).fill(0).map((_, index) => {
      const frequency = 0.5 + (index * 0.2);
      const phase = index * (Math.PI / 4);
      
      const wave1 = Math.sin(time * frequency + phase) * ANIMATION_SPEED.amplitude;
      const wave2 = Math.sin(time * 0.5 + phase * 2) * (ANIMATION_SPEED.amplitude * 0.5);
      
      const newValue = 600 + wave1 + wave2;
      return Math.round(Math.max(300, Math.min(900, newValue)));
    });
  };

  const generateRandomData = () => {
    return useFancyAnimation ? generateWaveData() : generateDummyData();
  };

  useEffect(() => {
    const ctx = document.getElementById("chBar");
    
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    if (ctx) {
      chartRef.current = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [{
            label: "Monthly Growth",
            data: generateRandomData(),
            backgroundColor: [
              '#2C394B', '#1B9C85', '#40B37C', '#F6D776', 
              '#FF6B6B', '#FFB347', '#FFD7D7', '#9DB4C0', 
              '#253B4D', '#FF7676', '#AED6F1', '#FADADD'
            ],
            borderWidth: 0,
            barThickness: 20,
            maxBarThickness: 20
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          animation: {
            duration: ANIMATION_SPEED.updateInterval, // Match the interval
            easing: 'linear'
          },
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            y: {
              beginAtZero: false,
              min: 300,
              max: 900,
              ticks: {
                stepSize: 100,
                color: '#666',
                font: {
                  size: 11
                }
              },
              grid: {
                color: '#EAEAEA',
                drawBorder: false,
                lineWidth: 1,
                drawTicks: false
              },
              border: {
                display: false
              }
            },
            x: {
              grid: {
                color: '#EAEAEA',
                drawBorder: false,
                lineWidth: 1,
                display: true
              },
              ticks: {
                color: '#666',
                font: {
                  size: 11
                }
              },
              border: {
                display: false
              }
            }
          },
          layout: {
            padding: {
              left: 10,
              right: 10,
              top: 20,
              bottom: 10
            }
          }
        }
      });

      // Update data using the custom interval
      const interval = setInterval(() => {
        if (chartRef.current) {
          chartRef.current.data.datasets[0].data = generateRandomData();
          chartRef.current.update('active');
        }
      }, ANIMATION_SPEED.updateInterval);

      return () => {
        clearInterval(interval);
        if (chartRef.current) {
          chartRef.current.destroy();
        }
      };
    }
  }, []);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const counterSection = document.querySelector(".about-right-box");
    if (counterSection) {
      observer.observe(counterSection);
    }

    return () => {
      if (counterSection) {
        observer.unobserve(counterSection);
      }
    };
  }, []);

  const count1 = useCounter(isVisible ? 50 : 0, true);
  const count2 = useCounter(isVisible ? 200 : 0, true);
  const count3 = useCounter(isVisible ? 50 : 0, true);
  const count4 = useCounter(isVisible ? 100 : 0, true);

  return (
    <>
      <Header />
      <div>
        {/* Background Image 1 */}
        <section
          className="page-title-section2 bg-img cover-background top-position1"
          style={{ backgroundImage: `url(${images.bg.bg9})` }}
          data-overlay-dark={4}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>About Us</h1>
              </div>
              <div className="col-md-12">
                <ul className="ps-0">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about-us">About Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Service Images */}
        <section className="md pb-5">
          <div className="container">
            <div className="section-heading">
              <h2>About Us</h2>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="feature-box-07">
                  <div className="img-box">
                    <img
                      src={images.content.services.service2b}
                      alt="Who We Are"
                    />
                  </div>
                  <div className="feature-textbox p-2-2 text-center bg-light-gray">
                    <h4 className="title mb-2">Who We Are</h4>
                    <p className="feature-desc">
                      We help you to grow up your best business and solution for
                      your impressive projects.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="feature-box-07">
                  <div className="img-box">
                    <img
                      src={images.content.services.service4b}
                      alt="What We Do"
                    />
                  </div>
                  <div className="feature-textbox p-2-2 text-center bg-light-gray">
                    <h4 className="title mb-2">What We Do</h4>
                    <p className="feature-desc">
                      We help you to grow up your best business and solution for
                      your impressive projects.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="feature-box-07">
                  <div className="img-box">
                    <img
                      src={images.content.services.service3b}
                      alt="Our Success"
                    />
                  </div>
                  <div className="feature-textbox p-2-2 text-center bg-light-gray">
                    <h4 className="title mb-2">Our Success</h4>
                    <p className="feature-desc">
                      We help you to grow up your best business and solution for
                      your impressive projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Background Image 2 & Signature */}
        <section
          className="parallax about-area p-0"
          style={{ backgroundImage: `url(${images.bg.bg3})` }}
          data-overlay-dark={8}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-text">
                  <div className="section-heading left white">
                    <h4>Welcome To Our Consulting</h4>
                  </div>
                  <div className="inner-content">
                    {/* <h2>
                      <span>
                        “ Pride of the Business For Over a Hundred Years."{" "}
                      </span>
                      for public &amp; private clients.
                    </h2> */}
                    <p>
                      We deliver high-performance services to help your business
                      embrace innovation and tackle the ever-changing challenges
                      of today’s digital world. Designed to meet your specific
                      needs, our services capture and deliver business value in
                      a cost-effective way. Based on your strategic objectives,
                      we focus on business outcomes in software engineering,
                      advanced technology, development teams, digital
                      consulting, and solution operations.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-right-box">
                  <ul className="ps-0">
                    <li>
                      <div className="left-content float-start">
                        <div className="icon">
                          <span className="ti-cloud-up" />
                        </div>
                        <div className="title">
                          <h3>Total Projects</h3>
                          <span>By Our Experienced Team</span>
                        </div>
                      </div>
                      <div className="right-content float-end">
                        <div className="title">
                          <h4 className="countup">{count1}+</h4>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="left-content float-start">
                        <div className="icon">
                          <span className="ti-user" />
                        </div>
                        <div className="title">
                          <h3>Happy Clients</h3>
                          <span>Smart and Hard Workers</span>
                        </div>
                      </div>
                      <div className="right-content float-end">
                        <div className="title">
                          <h4 className="countup">{count2}</h4>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="left-content float-start">
                        <div className="icon">
                          <span className="ti-vector" />
                        </div>
                        <div className="title">
                          <h3>Projects Finished</h3>
                          <span>We Provides All Industry Services</span>
                        </div>
                      </div>
                      <div className="right-content float-end">
                        <div className="title">
                          <h4 className="countup">{count3}+</h4>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="left-content float-start">
                        <div className="icon">
                          <span className="ti-cup" />
                        </div>
                        <div className="title">
                          <h3>Business Solutions</h3>
                          <span>Most Trusted Company By Experts</span>
                        </div>
                      </div>
                      <div className="right-content float-end">
                        <div className="title">
                          <h4 className="countup">{count4}</h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ABOUT OUR MISSION
        ================================================== */}
        <section className="md">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <div className="pe-lg-1-9">
                  <h3 className="font-weight-600 mb-1-9">
                    Our mission is to deliver growth to your business
                  </h3>
                  <h5 className="font-weight-700 h6">Planning Strategies</h5>
                  <p className="w-95">
                    Excepteur integration aute irure design in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                  <h5 className="font-weight-700 h6">Successful Marketing</h5>
                  <p className="w-95 m-0">
                    Duis Integration aute irure design in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <LazyLoadImage
                  src={content1}
                  className="img-fluid rounded"
                  alt="Strategic IT planning and vision at Adysun Ventures"
                  width={545}
                  height={348}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs