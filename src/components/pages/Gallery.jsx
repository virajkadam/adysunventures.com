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
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const handleThumbnailClick = (idx) => {
    setSelectedIdx(idx);
    setModalOpen(true);
  };

  const handleModalClose = () => setModalOpen(false);

  return (
    <>
      <Header />
      <div className="container py-5">
        <div className="row">
          {/* Left: Scrollable Thumbnails */}
          <div className="col-md-3 mb-4 mb-md-0">
            <div
              style={{
                maxHeight: "70vh",
                overflowY: "auto",
                borderRadius: 12,
                border: "1px solid #eee",
                background: "#fafbfc",
                padding: 8,
              }}
              tabIndex={0}
              aria-label="Gallery thumbnails"
            >
              {images.map((img, idx) => (
                <div
                  key={idx}
                  className={`mb-3 rounded gallery-thumb ${selectedIdx === idx ? "border border-2 border-primary" : "border border-1 border-light"}`}
                  style={{ cursor: "pointer", background: selectedIdx === idx ? "#fff7f3" : "#fff", transition: "background 0.2s", width: "100%", aspectRatio: "1 / 1", overflow: "hidden" }}
                  onClick={() => setSelectedIdx(idx)}
                  onKeyDown={e => (e.key === "Enter" || e.key === " ") && setSelectedIdx(idx)}
                  tabIndex={0}
                  aria-label={`Show image: ${img.alt}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="img-fluid rounded"
                    style={{ width: "100%", height: "100%", objectFit: "cover", filter: selectedIdx === idx ? "none" : "grayscale(40%)", transition: "filter 0.2s", display: "block" }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Large Image Preview */}
          <div className="col-md-9">
            <div className="w-100 mb-4">
              <h2 className="text-uppercase fw-bold mb-2" style={{ color: "#ff5a2e", letterSpacing: 2 }}>
                Gallery
              </h2>
              <div className="separator-line-horrizontal-medium-light3 mb-3" style={{ background: "#ff5a2e", height: 3, width: 60 }}></div>
              <p className="text-muted mb-0">A glimpse of our workplace and culture</p>
            </div>
            <div className="w-100">
              <img
                src={images[selectedIdx].src}
                alt={images[selectedIdx].alt}
                loading="lazy"
                className="img-fluid rounded"
                style={{ width: "100%", height: "auto", maxHeight: "70vh", objectFit: "contain", cursor: "pointer", transition: "box-shadow 0.2s" }}
                onClick={() => setModalOpen(true)}
                tabIndex={0}
                aria-label="Open image in modal"
              />
            </div>
          </div>
        </div>

        {/* Modal for full image view */}
        {modalOpen && (
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