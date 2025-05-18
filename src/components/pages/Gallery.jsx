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

// Optional: Set these to control image height or width dynamically. Leave as null to use default behavior.
const GALLERY_IMG_HEIGHT = null; // e.g., '250px' or null
const GALLERY_IMG_WIDTH = null;  // e.g., '350px' or null

const Gallery = () => {
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(Array(images.length).fill(false));

  const handleImageClick = (idx) => {
    setSelectedIdx(idx);
    setModalOpen(true);
  };

  const handleModalClose = () => setModalOpen(false);

  const handleImgLoad = idx => {
    setImgLoaded(prev => {
      const next = [...prev];
      next[idx] = true;
      return next;
    });
  };

  return (
    <>
      <Header />
      {/* Masonry Grid CSS */}
      <style>{`
        .gallery-masonry {
          column-count: 2;
          column-gap: 2rem;
        }
        @media (max-width: 768px) {
          .gallery-masonry {
            column-count: 1;
          }
        }
        .gallery-masonry-item {
          break-inside: avoid;
          margin-bottom: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .gallery-img-masonry {
          width: 100%;
          height: auto;
          border-radius: 16px;
          box-shadow: 0 2px 12px 0 rgba(0,0,0,0.07);
          transition: transform 0.25s, box-shadow 0.25s, filter 0.2s;
          cursor: pointer;
          background: #f3f3f3;
        }
        .gallery-img-masonry:hover {
          transform: scale(1.04);
          box-shadow: 0 8px 32px 0 rgba(255,90,46,0.18);
          filter: brightness(1.05);
        }
        .gallery-caption {
          margin-top: 0.75rem;
          font-size: 1.08rem;
          font-weight: 600;
          color: #333;
          text-align: center;
          background: rgba(255,255,255,0.85);
          border-radius: 8px;
          padding: 0.25rem 0.5rem;
          max-width: 95%;
        }
        .gallery-img-placeholder {
          width: 100%;
          height: 220px;
          background: linear-gradient(90deg, #f3f3f3 25%, #ececec 50%, #f3f3f3 75%);
          border-radius: 16px;
          margin-bottom: 0.5rem;
          animation: gallery-placeholder-pulse 1.2s infinite linear;
        }
        @keyframes gallery-placeholder-pulse {
          0% { opacity: 1; }
          50% { opacity: 0.6; }
          100% { opacity: 1; }
        }
      `}</style>
      <div className="py-5">
        {/* Section Heading */}
        <div className="container">
        <div className="text-center mb-5">
          <h2 className="text-uppercase fw-bold mb-2" style={{ color: "#ff5a2e", letterSpacing: 2 }}>
            Gallery
          </h2>
          <div className="separator-line-horrizontal-medium-light3 mb-3 mx-auto" style={{ background: "#ff5a2e", height: 3, width: 60 }}></div>
          <p className="text-muted mb-0">A glimpse of our workplace and culture</p>
        </div>
          {/* Masonry Grid */}
          <div className="gallery-masonry">
              {images.map((img, idx) => (
              <div className="gallery-masonry-item" key={idx}>
                {!imgLoaded[idx] && (
                  <div className="gallery-img-placeholder" />
                )}
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="gallery-img-masonry"
                    style={{
                      display: imgLoaded[idx] ? 'block' : 'none',
                      height: GALLERY_IMG_HEIGHT ? GALLERY_IMG_HEIGHT : 'auto',
                      width: GALLERY_IMG_WIDTH ? GALLERY_IMG_WIDTH : '100%',
                      maxWidth: GALLERY_IMG_WIDTH ? GALLERY_IMG_WIDTH : '100%',
                      objectFit: (GALLERY_IMG_HEIGHT || GALLERY_IMG_WIDTH) ? 'cover' : 'unset'
                    }}
                    onClick={() => handleImageClick(idx)}
                    tabIndex={0}
                    aria-label={`Open image: ${img.alt}`}
                    onKeyDown={e => (e.key === "Enter" || e.key === " ") && handleImageClick(idx)}
                    onLoad={() => handleImgLoad(idx)}
                  />
                <div className="gallery-caption">{img.alt}</div>
                </div>
              ))}
          </div>
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