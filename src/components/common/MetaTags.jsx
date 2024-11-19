import React from "react";
import { Helmet } from "react-helmet-async";

const MetaTags = ({ 
  title = "Adysun Ventures | IT Solutions & Business Strategy Experts | Tailored IT Services",
  description = "Adysun Ventures, founded in Dec 2020, is a premier IT service provider specializing in business strategies and cutting-edge technology. Partner with us for reliable and innovative IT solutions.",
  keywords = "Adysun Ventures, IT Solutions, Business Strategies, IT Services, Premium IT Products, Collaborative IT Partnerships, Innovative IT Solutions",
  ogImage = "https://adysunventures.com/assets/adysun_ventures_image.jpg"
}) => {
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
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
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
      
      {/* Canonical Links */}
      <link rel="canonical" href="https://adysunventures.com/" />
      <link rel="shortlink" href="https://adysunventures.com/" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content="https://adysunventures.com/" />
      <meta property="og:site_name" content="Adysun Ventures" />
      <meta property="article:publisher" content="https://www.facebook.com/adysunventures/" />
      <meta property="article:updated_time" content="2024-11-18" />
      <meta property="og:image" itemProp="image" content={ogImage} />
      <meta property="og:image:url" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:image:alt" content="Adysun Ventures Logo" />
      <meta property="og:image:width" content="720" />
      <meta property="og:image:height" content="602" />
      
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Favicon and Apple Touch Icon */}
      <link href="https://adysunventures.com/assets/adysun_ventures_logo.jpg" rel="icon" />
      <link href="https://adysunventures.com/assets/adysun_ventures_logo.jpg" rel="apple-touch-icon" />
    </Helmet>
  );
};

export default MetaTags;
