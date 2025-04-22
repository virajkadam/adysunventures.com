import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const MetaTags = ({ 
  title = "Adysun Ventures | IT Solutions & Business Strategy Experts",
  description = "Premier IT service provider specializing in business strategies and cutting-edge technology. Partner with us for reliable and innovative IT solutions.",
  keywords = "Adysun Ventures, IT Solutions, Business Strategies, IT Services, Premium IT Products, Collaborative IT Partnerships, Innovative IT Solutions",
  ogImage = "https://adysunventures.com/assets/adysun_ventures_image.jpg"
}) => {
  const location = useLocation();
  const currentUrl = `https://adysunventures.com${location.pathname}`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      
      {/* Primary Meta Tags */}
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      
      {/* HTTP Equiv Tags */}
      <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta httpEquiv="pragma" content="no-cache" />
      <meta httpEquiv="expires" content="never" />
      
      {/* Additional Meta Information */}
      <meta name="author" content="Adysun Ventures" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="geo.placename" content="India" />
      
      {/* Dynamic Canonical Link for each page */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content="Adysun Ventures" />
      <meta property="article:publisher" content="https://www.facebook.com/adysunventures/" />
      <meta property="article:modified_time" content={new Date().toISOString()} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content="Adysun Ventures Logo" />
      <meta property="og:image:width" content="720" />
      <meta property="og:image:height" content="602" />
      
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Favicon and Apple Touch Icon */}
      <link href={ogImage} rel="icon" />
      <link href={ogImage} rel="apple-touch-icon" />
      
      {/* Security Headers */}
      <meta httpEquiv="Strict-Transport-Security" content="max-age=31536000; includeSubDomains" />
    </Helmet>
  );
};

export default MetaTags;
