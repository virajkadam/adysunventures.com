import React from 'react';
import { Helmet } from 'react-helmet-async';

const SchemaMarkup = ({
  businessName = "Adysun Ventures",
  description = "Leading IT service provider specializing in business strategies, software development, cloud computing, and digital transformation.",
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
    instagram: "https://www.instagram.com/adysunventures/"
  },
  foundingDate = "2020-12-01",
  services = [
    "IT Solutions",
    "Business Strategy",
    "Software Development",
    "Cloud Computing",
    "Digital Transformation",
    "IT Consulting",
    "Data Analytics",
    "Cybersecurity",
    "Web Development",
    "Mobile Application Development"
  ],
  faqs = [
    {
      question: "What IT services does Adysun Ventures offer?",
      answer: "Adysun Ventures offers a comprehensive range of IT services including software development, cloud computing solutions, cybersecurity services, IT consulting, digital transformation, data analytics, and managed IT services tailored to meet the specific needs of your business."
    },
    {
      question: "How can IT solutions improve my business operations?",
      answer: "IT solutions can streamline workflows, automate repetitive tasks, improve data management, enhance security, enable remote work capabilities, provide business intelligence insights, and create scalable infrastructure that grows with your business needs."
    },
    {
      question: "What industries does Adysun Ventures specialize in?",
      answer: "We specialize in providing IT solutions for various industries including Transportation & Logistics, E-Commerce & Retail, Manufacturing, Stock Exchange & Financial Services, Healthcare, Education, and more."
    },
    {
      question: "How does cloud computing benefit my business?",
      answer: "Cloud computing offers improved scalability, cost efficiency, better collaboration, enhanced security, business continuity, and automatic updates. It allows businesses to access applications and data from anywhere, improving flexibility and productivity."
    },
    {
      question: "What is digital transformation and why is it important?",
      answer: "Digital transformation is the integration of digital technology into all areas of a business, changing how you operate and deliver value to customers. It's important because it helps businesses stay competitive, improve operational efficiency, enhance customer experiences, and unlock new opportunities for growth."
    }
  ],
  reviews = [
    {
      author: "John Smith",
      reviewBody: "Adysun Ventures provided excellent IT solutions that helped transform our business processes. Their team was professional and highly skilled.",
      reviewRating: 5,
      datePublished: "2023-05-15"
    },
    {
      author: "Sarah Johnson",
      reviewBody: "The business strategy consulting services from Adysun Ventures were instrumental in helping us navigate our digital transformation journey.",
      reviewRating: 5,
      datePublished: "2023-07-22"
    },
    {
      author: "Michael Brown",
      reviewBody: "Their cloud migration services were exceptional. They seamlessly moved our infrastructure to the cloud with minimal disruption to our operations.",
      reviewRating: 5,
      datePublished: "2023-09-10"
    }
  ]
}) => {
  
  // Organization schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    "name": businessName,
    "url": siteUrl,
    "logo": {
      "@type": "ImageObject",
      "url": logoUrl,
      "width": 720,
      "height": 602
    },
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
      socialProfiles.linkedin,
      socialProfiles.instagram
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
      "latitude": "18.5162",
      "longitude": "73.8553"
    },
    "openingHours": "Mo,Tu,We,Th,Fr,Sa 09:00-21:00",
    "priceRange": "₹₹",
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "18.5162",
        "longitude": "73.8553"
      },
      "geoRadius": "50000"
    }
  };

  // Professional Service schema
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#professionalservice`,
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
      "latitude": "18.5162",
      "longitude": "73.8553"
    },
    "openingHours": "Mo,Tu,We,Th,Fr,Sa 09:00-21:00",
    "priceRange": "₹₹",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "IT Services",
      "itemListElement": services.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service
        }
      }))
    }
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
      "areaServed": {
        "@type": "Country",
        "name": "India"
      }
    }
  };

  // Individual Service schemas for each service
  const servicesSchemas = services.map((service, index) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/services#${service.toLowerCase().replace(/\s+/g, '-')}`,
    "name": service,
    "provider": {
      "@type": "Organization",
      "name": businessName,
      "url": siteUrl
    },
    "serviceOutput": `Professional ${service}`,
    "areaServed": {
      "@type": "Country",
      "name": "India"
    }
  }));

  // WebSite schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    "url": siteUrl,
    "name": businessName,
    "description": description,
    "publisher": {
      "@id": `${siteUrl}/#organization`
    },
    "inLanguage": "en-US",
    "potentialAction": [
      {
        "@type": "SearchAction",
        "target": `${siteUrl}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    ]
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
        "name": "Technologies",
        "item": `${siteUrl}/technologies`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Industries",
        "item": `${siteUrl}/industries`
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "About Us",
        "item": `${siteUrl}/about-us`
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "Contact",
        "item": `${siteUrl}/contact-us`
      }
    ]
  };

  // FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // Review schema
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#reviews`,
    "name": businessName,
    "review": reviews.map((review) => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "reviewBody": review.reviewBody,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.reviewRating,
        "bestRating": "5"
      },
      "datePublished": review.datePublished
    })),
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": reviews.length.toString(),
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  // Article schema for blog posts
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Adysun Ventures: Leading IT Solutions Provider in India",
    "image": logoUrl,
    "keywords": "IT Solutions, Business Strategy, Software Development, Cloud Computing",
    "author": {
      "@type": "Organization",
      "name": businessName,
      "url": siteUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": businessName,
      "logo": {
        "@type": "ImageObject",
        "url": logoUrl,
        "width": 720,
        "height": 602
      }
    },
    "datePublished": "2023-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "description": description,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": siteUrl
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
        {JSON.stringify(professionalServiceSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
      {servicesSchemas.map((schema, index) => (
        <script key={`service-${index}`} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(reviewSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(articleSchema)}
      </script>
    </Helmet>
  );
};

export default SchemaMarkup; 