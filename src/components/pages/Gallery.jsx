import React, { useState, useEffect, useCallback } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";

// Test images from bg and slider folders
const images = [
  {
    src: require("../../assets/images/gallery/2025-04-23 (1).jpg"),
    alt: "Modern workspace with natural light"
  },
  {
    src: require("../../assets/images/gallery/2025-04-23 (2).jpg"),
    alt: "Collaborative desk area with yellow dividers"
  },
  {
    src: require("../../assets/images/gallery/2025-04-23 (3).jpg"),
    alt: "Open team area for group collaboration"
  },
  {
    src: require("../../assets/images/gallery/2025-04-23 (4).jpg"),
    alt: "Private meeting room with window view"
  },
  {
    src: require("../../assets/images/gallery/2025-04-23.jpg"),
    alt: "Main office space overview"
  },
  {
    src: require("../../assets/images/gallery/2025-04-23.png"),
    alt: "Digital branding and contact card"
  },
  {
    src: require("../../assets/images/gallery/2025-05-13 (1).jpg"),
    alt: "Company entrance signage"
  },
  {
    src: require("../../assets/images/gallery/2025-05-13.jpg"),
    alt: "Office window signage with contact details"
  },
  {
    src: require("../../assets/images/gallery/2025-05-18 (1).jpg"),
    alt: "Workspace corner with large window"
  },
  {
    src: require("../../assets/images/gallery/2025-05-18.jpg"),
    alt: "Desk setup facing the garden"
  },
];

// Optional: Set these to control image height or width dynamically. Leave as null to use default behavior.
const GALLERY_IMG_HEIGHT = null; // e.g., '250px' or null
const GALLERY_IMG_WIDTH = null;  // e.g., '350px' or null

// Number of images to load initially and in each batch
const INITIAL_LOAD_COUNT = 4;
const BATCH_LOAD_COUNT = 3;

const Gallery = () => {
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(Array(images.length).fill(false));
  const [imgError, setImgError] = useState(Array(images.length).fill(false));
  const [visibleCount, setVisibleCount] = useState(INITIAL_LOAD_COUNT);
  const [preloadedImages, setPreloadedImages] = useState([]);

  // Preload images in batches
  const preloadImages = useCallback((startIdx, count) => {
    const endIdx = Math.min(startIdx + count, images.length);
    const imagePromises = [];

    for (let i = startIdx; i < endIdx; i++) {
      if (!preloadedImages.includes(i)) {
        const img = new Image();
        const promise = new Promise((resolve, reject) => {
          img.onload = () => {
            setImgLoaded(prev => {
              const next = [...prev];
              next[i] = true;
              return next;
            });
            resolve(i);
          };
          img.onerror = () => {
            setImgError(prev => {
              const next = [...prev];
              next[i] = true;
              return next;
            });
            reject(i);
          };
        });
        img.src = images[i].src;
        imagePromises.push(promise);
      }
    }

    Promise.allSettled(imagePromises).then(() => {
      setPreloadedImages(prev => [...prev, ...Array.from({ length: count }, (_, i) => startIdx + i)]);
    });
  }, [preloadedImages]);

  // Initial load
  useEffect(() => {
    preloadImages(0, INITIAL_LOAD_COUNT);
  }, [preloadImages]);

  // Intersection Observer for infinite loading
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && visibleCount < images.length) {
          setVisibleCount(prev => {
            const next = Math.min(prev + BATCH_LOAD_COUNT, images.length);
            preloadImages(prev, BATCH_LOAD_COUNT);
            return next;
          });
        }
      });
    }, {
      rootMargin: '100px',
      threshold: 0.1
    });

    const sentinel = document.querySelector('#gallery-sentinel');
    if (sentinel) {
      observer.observe(sentinel);
    }

    return () => observer.disconnect();
  }, [visibleCount, preloadImages]);

  // Modal and navigation handlers
  const handleImageClick = (idx) => {
    setSelectedIdx(idx);
    setModalOpen(true);
    // Preload next few images when modal opens
    const nextIdx = idx + 1;
    if (nextIdx < images.length) {
      preloadImages(nextIdx, 2);
    }
  };

  const handleModalClose = () => setModalOpen(false);

  const handlePrevImage = () => {
    setSelectedIdx(prev => {
      const newIdx = prev > 0 ? prev - 1 : images.length - 1;
      // Preload previous images
      if (newIdx > 0) {
        preloadImages(newIdx - 1, 1);
      }
      return newIdx;
    });
  };

  const handleNextImage = () => {
    setSelectedIdx(prev => {
      const newIdx = prev < images.length - 1 ? prev + 1 : 0;
      // Preload next images
      if (newIdx < images.length - 1) {
        preloadImages(newIdx + 1, 1);
      }
      return newIdx;
    });
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!modalOpen) return;
      
      switch(e.key) {
        case 'ArrowLeft':
          handlePrevImage();
          break;
        case 'ArrowRight':
          handleNextImage();
          break;
        case 'Escape':
          handleModalClose();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalOpen]);

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
        .gallery-img-error {
          width: 100%;
          height: 220px;
          background: #fee;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #c33;
          font-size: 0.9rem;
          text-align: center;
          padding: 1rem;
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
            {images.slice(0, visibleCount).map((img, idx) => (
              <div className="gallery-masonry-item" key={idx}>
                {!imgLoaded[idx] && !imgError[idx] && (
                  <div className="gallery-img-placeholder" />
                )}
                {imgError[idx] ? (
                  <div className="gallery-img-error">
                    <span>Failed to load image.<br />Please try refreshing the page.</span>
                  </div>
                ) : (
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading={idx < INITIAL_LOAD_COUNT ? "eager" : "lazy"}
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
                  />
                )}
                <div className="gallery-caption">{img.alt}</div>
              </div>
            ))}
            {/* Sentinel element for infinite loading */}
            {visibleCount < images.length && (
              <div id="gallery-sentinel" style={{ height: '20px' }} />
            )}
          </div>
        </div>
        {/* Modal for full image view */}
        {modalOpen && selectedIdx !== null && (
          <div
            className="modal fade show"
            tabIndex={-1}
            style={{ display: "block", background: "rgba(0,0,0,0.85)" }}
            role="dialog"
            aria-modal="true"
            onClick={handleModalClose}
          >
            <div 
              className="modal-dialog modal-dialog-centered modal-xl" 
              role="document" 
              onClick={e => e.stopPropagation()}
              style={{ maxWidth: "95vw" }}
            >
              <div className="modal-content bg-transparent border-0">
                {/* Close Button */}
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  aria-label="Close"
                  onClick={handleModalClose}
                  style={{ position: "absolute", right: 15, top: 15, zIndex: 2 }}
                ></button>
                {/* Company Logo */}
                <div className="position-absolute" style={{ top: 15, left: 15, zIndex: 3 }}>
                  <img 
                    src={require("../../assets/images/logos/logo.png")}
                    alt="Adysun Ventures"
                    style={{ height: "50px", width: "auto" }}
                  />
                </div>
                {/* Previous Button */}
                <button
                  className="btn text-white fs-3"
                  onClick={handlePrevImage}
                  style={{
                    position: "absolute",
                    left: 10,
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 2,
                    background: "none",
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 0,
                    fontSize: "2rem"
                  }}
                  aria-label="Previous image"
                >
                  <i className="fas fa-angle-left"></i>
                </button>
                {/* Next Button */}
                <button
                  className="btn text-white fs-3"
                  onClick={handleNextImage}
                  style={{
                    position: "absolute",
                    right: 10,
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 2,
                    background: "none",
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 0,
                    fontSize: "2rem"
                  }}
                  aria-label="Next image"
                >
                  <i className="fas fa-angle-right"></i>
                </button>
                {/* Image Container */}
                <div style={{ 
                  position: "relative",
                  width: "100%",
                  height: "85vh",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center"
                }}>
                  <img
                    src={images[selectedIdx].src}
                    alt={images[selectedIdx].alt}
                    style={{ 
                      maxHeight: "100%",
                      maxWidth: "100%",
                      objectFit: "contain",
                      display: "block"
                    }}
                  />
                </div>
                {/* Caption and Navigation */}
                <div className="position-absolute w-100" style={{ bottom: 20, left: 0 }}>
                  <div className="text-center text-white mb-2" style={{ fontSize: 18, fontWeight: 500 }}>
                    {images[selectedIdx].alt}
                  </div>
                  <div className="d-flex justify-content-center align-items-center gap-3">
                    <span className="text-white-50">Previous</span>
                    <span className="text-white">{selectedIdx + 1} / {images.length}</span>
                    <span className="text-white-50">Next</span>
                  </div>
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