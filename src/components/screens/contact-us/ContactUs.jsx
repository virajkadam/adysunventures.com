import React from 'react'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import { images, captchaImageExport } from "../../../assets";

function ContactUs() {
  return (
    <div>
      <Header />
      <div>
        {/* PAGE TITLE
  ================================================== */}
        <section
          className="page-title-section2 bg-img cover-background top-position1"
          data-overlay-dark={4}
          style={{ backgroundImage: `url(${images.bg.bg9})` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>Contact style2</h1>
              </div>
              <div className="col-md-12">
                <ul className="ps-0">
                  <li>
                    <a href="home-default.html">Home</a>
                  </li>
                  <li>
                    <a href="#!">Contact style2</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* CONTACT
  ================================================== */}
        <section>
          <div className="container">
            <div className="text-center section-heading">
              <h2>Let's talk about your business</h2>
            </div>
            {/* contact detail */}
            <div className="row mb-1-9 mb-lg-6 mt-n1-9">
              <div className="col-md-6 col-lg-3 mt-1-9">
                <div className="contact-box">
                  <i className="fas fa-phone" />
                  <h4>Call Us</h4>
                  <span>(+44) 123 456 789</span>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mt-1-9">
                <div className="contact-box">
                  <i className="fas fa-map-marker-alt" />
                  <h4>Visit Us</h4>
                  <span>Regina ST, London, SK 8GH.</span>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mt-1-9">
                <div className="contact-box">
                  <i className="far fa-envelope" />
                  <h4>Mail Us</h4>
                  <span>email@youradress.com</span>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mt-1-9">
                <div className="contact-box">
                  <i className="far fa-comments" />
                  <h4>Live Chat</h4>
                  <span>Chat with Us 24/7</span>
                </div>
              </div>
            </div>
            {/* end contact detail */}
            <div className="row">
              {/* contact form */}
              <div className="col-lg-6 mb-1-9 mb-lg-0">
                <form
                  className="contact quform"
                  action="https://fabrex.websitelayout.net/quform/contact.php"
                  method="post"
                  encType="multipart/form-data"
                  onclick
                >
                  <div className="quform-elements">
                    <div className="row">
                      {/* Begin Text input element */}
                      <div className="col-md-6">
                        <div className="quform-element form-group">
                          <div className="quform-input">
                            <input
                              className="form-control"
                              id="name"
                              type="text"
                              name="name"
                              placeholder="Your name here"
                            />
                          </div>
                        </div>
                      </div>
                      {/* End Text input element */}
                      {/* Begin Text input element */}
                      <div className="col-md-6">
                        <div className="quform-element form-group">
                          <div className="quform-input">
                            <input
                              className="form-control"
                              id="email"
                              type="text"
                              name="email"
                              placeholder="Your email here"
                            />
                          </div>
                        </div>
                      </div>
                      {/* End Text input element */}
                      {/* Begin Text input element */}
                      <div className="col-md-6">
                        <div className="quform-element form-group">
                          <div className="quform-input">
                            <input
                              className="form-control"
                              id="subject"
                              type="text"
                              name="subject"
                              placeholder="Your subject here"
                            />
                          </div>
                        </div>
                      </div>
                      {/* End Text input element */}
                      {/* Begin Text input element */}
                      <div className="col-md-6">
                        <div className="quform-element form-group">
                          <div className="quform-input">
                            <input
                              className="form-control"
                              id="phone"
                              type="text"
                              name="phone"
                              placeholder="Your phone here"
                            />
                          </div>
                        </div>
                      </div>
                      {/* End Text input element */}
                      {/* Begin Textarea element */}
                      <div className="col-md-12">
                        <div className="quform-element form-group">
                          <div className="quform-input">
                            <textarea
                              className="form-control h-100"
                              id="message"
                              name="message"
                              rows={3}
                              placeholder="Tell us a few words"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                      </div>
                      {/* End Textarea element */}
                      {/* Begin Captcha element */}
                      <div className="col-md-12">
                        <div className="quform-element">
                          <div className="form-group">
                            <div className="quform-input">
                              <input
                                className="form-control"
                                id="type_the_word"
                                type="text"
                                name="type_the_word"
                                placeholder="Type the below word"
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="quform-captcha">
                              <div className="quform-captcha-inner">
                                <img
                                  src={captchaImageExport}
                                  alt="..."
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End Captcha element */}
                      {/* Begin Submit button */}
                      <div className="col-md-12">
                        <div className="quform-submit-inner">
                          <button className="butn" type="submit">
                            <span>Sumbit comment</span>
                          </button>
                        </div>
                        <div className="quform-loading-wrap text-start">
                          <span className="quform-loading" />
                        </div>
                      </div>
                      {/* End Submit button */}
                    </div>
                  </div>
                </form>
              </div>
              {/* end contact form  */}
              {/* map section */}
              <div className="col-lg-6">
                <iframe
                  className="map"
                  title="map"
                  src="https://maps.google.com/maps?q=wakad+pune&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  allowFullScreen="true"
                  frameBorder="0"
                  loading="lazy"
                />
              </div>
              {/* end map section */}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default ContactUs