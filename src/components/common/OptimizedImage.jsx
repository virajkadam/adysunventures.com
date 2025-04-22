import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = "", 
  width, 
  height, 
  loading = "lazy",
  sizes = "100vw"
}) => {
  const [imageSrc, setImageSrc] = useState(null);
  
  useEffect(() => {
    // Check if WebP support is available for modern image format usage
    const checkWebPSupport = async () => {
      const webpSupported = document.createElement('canvas')
        .toDataURL('image/webp')
        .indexOf('data:image/webp') === 0;
      
      // If src contains extension that can be converted to WebP
      if (webpSupported && (src.endsWith('.jpg') || src.endsWith('.jpeg') || src.endsWith('.png'))) {
        // Convert to webp path - this assumes you have webp versions available
        const webpSrc = src.substring(0, src.lastIndexOf('.')) + '.webp';
        setImageSrc(webpSrc);
      } else {
        setImageSrc(src);
      }
    };
    
    checkWebPSupport();
  }, [src]);
  
  // Create srcset for responsive images if width is provided
  const generateSrcSet = () => {
    if (!imageSrc) return undefined;
    
    // Base filename without extension
    const baseName = imageSrc.substring(0, imageSrc.lastIndexOf('.'));
    const extension = imageSrc.substring(imageSrc.lastIndexOf('.'));
    
    // Generate srcset with multiple sizes
    return `
      ${baseName}-300w${extension} 300w,
      ${baseName}-600w${extension} 600w,
      ${baseName}-900w${extension} 900w,
      ${imageSrc} 1200w
    `;
  };
  
  const imgProps = {
    src: imageSrc || src,
    alt: alt || "Image", // Always provide an alt text for accessibility
    className,
    loading,
    onError: (e) => {
      // Fallback to original source if WebP fails
      if (imageSrc !== src) {
        setImageSrc(src);
      }
    }
  };
  
  // Add width and height if provided (important for CLS optimization)
  if (width) imgProps.width = width;
  if (height) imgProps.height = height;
  
  // Add srcset and sizes for responsive images if available
  if (imageSrc) {
    // Commented out as this requires actual responsive images to be available
    // imgProps.srcSet = generateSrcSet();
    imgProps.sizes = sizes;
  }
  
  return <img {...imgProps} />;
};

OptimizedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  loading: PropTypes.oneOf(['lazy', 'eager', 'auto']),
  sizes: PropTypes.string
};

export default OptimizedImage; 