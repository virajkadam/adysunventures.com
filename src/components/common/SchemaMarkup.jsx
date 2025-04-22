import React from 'react';
import { Helmet } from 'react-helmet-async';

const SchemaMarkup = ({
  businessName = "Adysun Ventures",
  description = "Premier IT service provider specializing in business strategies and cutting-edge technology.",
  logoUrl = "https://adysunventures.com/assets/adysun_ventures_image.jpg",
  siteUrl = "https://adysunventures.com",
  phone = "+91-7776827177", // Updated with actual phone from Navbar
  email = "info@adysunventures.com", // Updated with actual email
  address = {
    streetAddress: "Office no 6, 2nd Floor Manogat Appt",
    addressLocality: "Swarget, Pune",
    addressRegion: "MH",
    postalCode: "411037",
    addressCountry: "IN"
  },
  socialProfiles = {
    facebook: "https://www.facebook.com/adysunventures/",
    twitter: "https://twitter.com/adysunventures", 
    linkedin: "https://www.linkedin.com/company/adysunventures", 
  },
  foundingDate = "2020-12-01",
  services = [
    "IT Solutions",
    "Business Strategy",
    "Software Development",
    "Digital Transformation",
    "IT Consulting"
  ]
}) => {
  
  // Organization schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": businessName,
    "url": siteUrl,
    "logo": logoUrl,
    "description": description,
    "foundingDate": foundingDate,
    "email": email,
    "telephone": phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address.streetAddress,
      "addressLocality": address.addressLocality,
      "addressRegion": address.addressRegion,
      "postalCode": address.postalCode,
      "addressCountry": address.addressCountry
    },
    "sameAs": [
      socialProfiles.facebook,
      socialProfiles.twitter,
      socialProfiles.linkedin
    ]
  };

  // Local Business schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#localbusiness`,
    "name": businessName,
    "image": logoUrl,
    "url": siteUrl,
    "telephone": phone,
    "email": email,
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address.streetAddress,
      "addressLocality": address.addressLocality,
      "addressRegion": address.addressRegion,
      "postalCode": address.postalCode,
      "addressCountry": address.addressCountry
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "18.5162", // Added actual coordinates for Pune
      "longitude": "73.8553" // Added actual coordinates for Pune
    },
    "openingHours": "Mo,Tu,We,Th,Fr,Sa 09:00-21:00", // Updated from Navbar (Mon-Sat 9AM-9PM)
    "priceRange": "₹₹"
  };

  // Service schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "IT Solutions and Business Strategy",
    "provider": {
      "@type": "Organization",
      "name": businessName,
      "url": siteUrl
    },
    "description": description,
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "areaServed": "India"
    }
  };

  // WebSite schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": siteUrl,
    "name": businessName,
    "description": description,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  // BreadcrumbList schema for navigation hierarchy
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": `${siteUrl}/services`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "About Us",
        "item": `${siteUrl}/about-us`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Contact",
        "item": `${siteUrl}/contact-us`
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
};

export default SchemaMarkup; 