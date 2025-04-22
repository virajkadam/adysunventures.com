import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const MetaTags = ({ 
  title = "Custom Software Development & Enterprise IT Solutions | Adysun Ventures",
  description = "Transform your business with custom software development, enterprise IT solutions, and strategic digital transformation services. Get innovative technology tailored to your needs.",
  keywords = "Custom Software Development, Enterprise IT Solutions, Digital Transformation, Cloud Computing, Cybersecurity, Business Technology, Web Applications, Mobile Apps, IT Consulting, Adysun Ventures",
  ogImage = "https://adysunventures.com/assets/images/adysun_cover.png",
  canonicalUrl = ""
}) => {
  const location = useLocation();
  const currentUrl = `https://adysunventures.com${location.pathname}`;
  const actualCanonicalUrl = canonicalUrl || currentUrl;
  const siteName = "Adysun Ventures";
  
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
      
      {/* Additional Meta Information */}
      <meta name="author" content="Adysun Ventures" />
      <meta name="robots" content="index, follow" />
      
      {/* Canonical Link */}
      <link rel="canonical" href={actualCanonicalUrl} />
      
      {/* Open Graph Meta Tags - Essential for social media previews */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage.replace('http:', 'https:')} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={siteName} />
      
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@adysunventures" />
      <meta name="twitter:creator" content="@adysunventures" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Favicon and Apple Touch Icon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/logo192.png" />
      
      {/* Color Theme */}
      <meta name="theme-color" content="#2C394B" />
      
      {/* Metadata for metatags.io compatibility */}
      <meta name="application-name" content={siteName} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
};

export default MetaTags;
