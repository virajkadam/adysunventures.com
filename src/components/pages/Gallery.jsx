import React, { useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";

// Test images from bg and slider folders
const images = [
  {
    src: require("../../assets/images/gallery/2025-04-23 (1).jpg"),
    alt: "Adysun Ventures office workspace 1"
  },
  {
    src: require("../../assets/images/gallery/2025-04-23 (2).jpg"),
    alt: "Adysun Ventures office workspace 2"
  },
  {
    src: require("../../assets/images/gallery/2025-04-23 (3).jpg"),
    alt: "Adysun Ventures team area"
  },
  {
    src: require("../../assets/images/gallery/2025-04-23 (4).jpg"),
    alt: "Adysun Ventures meeting room"
  },
  {
    src: require("../../assets/images/gallery/2025-04-23.jpg"),
    alt: "Adysun Ventures workspace overview"
  },
  {
    src: require("../../assets/images/gallery/2025-04-23.png"),
    alt: "Adysun Ventures branding slide"
  },
  {
    src: require("../../assets/images/gallery/2025-05-13 (1).jpg"),
    alt: "Adysun Ventures office sign 1"
  },
  {
    src: require("../../assets/images/gallery/2025-05-13.jpg"),
    alt: "Adysun Ventures office sign 2"
  },
  {
    src: require("../../assets/images/gallery/2025-05-18 (1).jpg"),
    alt: "Adysun Ventures workspace with window"
  },
  {
    src: require("../../assets/images/gallery/2025-05-18.jpg"),
    alt: "Adysun Ventures workspace with computers"
  },
];

const Gallery = () => {
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleImageClick = (idx) => {
    setSelectedIdx(idx);
    setModalOpen(true);
  };

  const handleModalClose = () => setModalOpen(false);

  return (
    <>
      <Header />
      <div className="py-5">
        {/* Section Heading */}
        <div className="text-center mb-5">
          <h2 className="text-uppercase fw-bold mb-2" style={{ color: "#ff5a2e", letterSpacing: 2 }}>
            Gallery
          </h2>
          <div className="separator-line-horrizontal-medium-light3 mb-3 mx-auto" style={{ background: "#ff5a2e", height: 3, width: 60 }}></div>
          <p className="text-muted mb-0">A glimpse of our workplace and culture</p>
        </div>
        {/* Gallery Grid */}
        <div className="row g-4">
          {images.map((img, idx) => (
            <div className="col-6 d-flex flex-column align-items-center" key={idx}>
              <div
                className="gallery-img-wrapper mb-2 w-100"
                style={{ cursor: "pointer", borderRadius: 16, overflow: "hidden" }}
                onClick={() => handleImageClick(idx)}
                tabIndex={0}
                aria-label={`Open image: ${img.alt}`}
                onKeyDown={e => (e.key === "Enter" || e.key === " ") && handleImageClick(idx)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="d-block mx-auto"
                  style={{ width: "auto", height: "auto", maxWidth: "100%", maxHeight: "400px", transition: "filter 0.2s" }}
                />
              </div>
              <div className="text-center text-muted small" style={{ minHeight: 40, fontWeight: 500 }}>{img.alt}</div>
            </div>
          ))}
        </div>

        {/* Modal for full image view */}
        {modalOpen && selectedIdx !== null && (
          <div
            className="modal fade show"
            tabIndex={-1}
            style={{ display: "block", background: "rgba(0,0,0,0.7)" }}
            role="dialog"
            aria-modal="true"
            onClick={handleModalClose}
          >
            <div className="modal-dialog modal-dialog-centered" role="document" onClick={e => e.stopPropagation()}>
              <div className="modal-content bg-transparent border-0">
                <button
                  type="button"
                  className="btn-close btn-close-white ms-auto me-2 mt-2"
                  aria-label="Close"
                  onClick={handleModalClose}
                  style={{ position: "absolute", right: 0, top: 0, zIndex: 2 }}
                ></button>
                <img
                  src={images[selectedIdx].src}
                  alt={images[selectedIdx].alt}
                  className="img-fluid rounded shadow-lg"
                  style={{ maxHeight: "80vh", maxWidth: "90vw", display: "block", margin: "0 auto" }}
                />
                <div className="text-center text-white mt-3" style={{ fontSize: 18, fontWeight: 500 }}>
                  {images[selectedIdx].alt}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Gallery; 