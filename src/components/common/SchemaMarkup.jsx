import React from 'react';
import { Helmet } from 'react-helmet-async';

const SchemaMarkup = ({
  businessName = "Adysun Ventures",
  description = "Premier IT service provider specializing in business strategies and cutting-edge technology.",
  logoUrl = "https://adysunventures.com/assets/adysun_ventures_image.jpg",
  siteUrl = "https://adysunventures.com",
  phone = "+91-YOUR-PHONE", // Replace with your actual phone
  email = "contact@adysunventures.com", // Replace with your actual email
  address = {
    streetAddress: "Your Street Address",
    addressLocality: "Your City",
    addressRegion: "Your State",
    postalCode: "Your Postal Code",
    addressCountry: "IN"
  },
  socialProfiles = {
    facebook: "https://www.facebook.com/adysunventures/",
    twitter: "https://twitter.com/adysunventures", // Replace with actual Twitter
    linkedin: "https://www.linkedin.com/company/adysunventures", // Replace with actual LinkedIn
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
      "latitude": "YOUR_LATITUDE", // Replace with actual coordinates
      "longitude": "YOUR_LONGITUDE" // Replace with actual coordinates
    },
    "openingHours": "Mo,Tu,We,Th,Fr 09:00-18:00",
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
    </Helmet>
  );
};

export default SchemaMarkup; 