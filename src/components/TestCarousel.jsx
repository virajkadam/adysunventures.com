import React, { useEffect } from "react";
import $ from "jquery";
import 'owl.carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const TestCarousel = () => {
  useEffect(() => {
    $('#test-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      items: 1
    });
  }, []);

  return (
    <div className="owl-carousel owl-theme" id="test-carousel">
      <div className="item"><h4>Item 1</h4></div>
      <div className="item"><h4>Item 2</h4></div>
      <div className="item"><h4>Item 3</h4></div>
    </div>
  );
};

export default TestCarousel;
