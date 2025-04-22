import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = "", 
  width, 
  height, 
  loading = "lazy",
  sizes = "100vw",
  priority = false,
  placeholder = "blur"
}) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [supportsWebP, setSupportsWebP] = useState(false);

  // Check WebP support on component mount
  useEffect(() => {
    checkWebPSupport();
    determineImageSource();
  }, [src]);

  // Check if browser supports WebP
  const checkWebPSupport = async () => {
    try {
      const webpSupported = document.createElement('canvas')
        .toDataURL('image/webp')
        .indexOf('data:image/webp') === 0;
      setSupportsWebP(webpSupported);
    } catch (e) {
      setSupportsWebP(false);
    }
  };

  // Determine appropriate image source based on WebP support
  const determineImageSource = () => {
    if (!src) return;

    if (supportsWebP && (src.endsWith('.jpg') || src.endsWith('.jpeg') || src.endsWith('.png'))) {
      // Convert to webp path - this assumes webp versions are available
      const webpSrc = src.substring(0, src.lastIndexOf('.')) + '.webp';
      
      // We use a test image object to verify the WebP version actually exists
      const tester = new Image();
      tester.onload = () => setImageSrc(webpSrc);
      tester.onerror = () => setImageSrc(src); // Fall back to original if WebP doesn't exist
      tester.src = webpSrc;
    } else {
      setImageSrc(src);
    }
  };
  
  // Create srcset for responsive images
  const generateSrcSet = () => {
    if (!imageSrc) return undefined;
    
    // Extract base filename and extension
    const baseName = imageSrc.substring(0, imageSrc.lastIndexOf('.'));
    const extension = imageSrc.substring(imageSrc.lastIndexOf('.'));
    
    // Create responsive image srcset for multiple screen sizes
    return `
      ${baseName}-300w${extension} 300w,
      ${baseName}-600w${extension} 600w,
      ${baseName}-900w${extension} 900w,
      ${imageSrc} 1200w
    `;
  };

  // Handle image loading complete
  const handleImageLoaded = () => {
    setIsLoaded(true);
  };
  
  // Handle image load error
  const handleImageError = () => {
    // Fallback to original source if WebP or responsive image fails
    if (imageSrc !== src) {
      setImageSrc(src);
    }
  };
  
  // Image placeholder - blurred low-quality image representation
  const renderPlaceholder = () => {
    if (placeholder === 'blur' && !isLoaded) {
      return (
        <div 
          className={`image-placeholder ${className}`}
          style={{
            backgroundColor: '#f0f0f0',
            width: width ? `${width}px` : '100%',
            height: height ? `${height}px` : '0',
            paddingBottom: !height ? '56.25%' : '0', // Default aspect ratio 16:9
            position: 'absolute',
            top: 0,
            left: 0
          }}
        />
      );
    }
    return null;
  };
  
  // Main image component
  const imgProps = {
    src: imageSrc || src,
    alt: alt || "Image", // Always provide an alt text for accessibility
    className: `${className} ${isLoaded ? 'loaded' : 'loading'}`,
    loading: priority ? 'eager' : loading,
    onLoad: handleImageLoaded,
    onError: handleImageError,
    style: {
      // Only fade in when loaded if placeholder is enabled
      opacity: (placeholder === 'blur' && !isLoaded) ? 0 : 1,
      transition: 'opacity 0.5s ease-in-out'
    }
  };
  
  // Add width and height if provided (important for CLS optimization)
  if (width) imgProps.width = width;
  if (height) imgProps.height = height;
  
  // Add srcset and sizes for responsive images if available
  // Commented out as this requires actual responsive images to be available
  // if (imageSrc) {
  //   imgProps.srcSet = generateSrcSet();
  //   imgProps.sizes = sizes;
  // }
  
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      {renderPlaceholder()}
      <img {...imgProps} />
      <noscript>
        <img 
          src={src} 
          alt={alt || "Image"} 
          className={className} 
          width={width} 
          height={height} 
        />
      </noscript>
    </div>
  );
};

OptimizedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  loading: PropTypes.oneOf(['lazy', 'eager', 'auto']),
  sizes: PropTypes.string,
  priority: PropTypes.bool,
  placeholder: PropTypes.oneOf(['blur', 'none'])
};

export default OptimizedImage; 