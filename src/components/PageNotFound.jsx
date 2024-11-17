import React from 'react'
import bg4 from "../assets/images/bg/bg4.jpg";

function PageNotFound() {
  return (
    <div className="vh-100 vw-100 overflow-hidden position-fixed top-0 start-0">
      <section
        className="error-box bg-img h-100 d-flex align-items-center"
        data-overlay-dark={0}
        data-background="img/bg/bg4.jpg"
        style={{ 
        //   backgroundImage: `url(${bg4})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container">
          <div className="error-box-text d-flex flex-column justify-content-center align-items-center text-center">
            <h1>404</h1>
            <h3>Page not Found</h3>
            <h4>We're sorry, Please try one of the following Pages.</h4>
            <div className="mt-1-9">
              <a href="/" className="butn">
                <span>Back Home</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PageNotFound