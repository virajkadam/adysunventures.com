import React from 'react';
import { Helmet } from 'react-helmet-async';

const SchemaMarkup = ({
  businessName = "Adysun Ventures",
  description = "Leading IT service provider specializing in business strategies, software development, cloud computing, and digital transformation.",
  logoUrl = "https://adysunventures.com/assets/images/adysun_cover.png",
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
  
  // FAQPage schema
  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

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
      "width": 1200,
      "height": 630
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

  // LocalBusiness schema
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
    "priceRange": "₹₹"
  };

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
  
  // BreadcrumbList schema
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
        "name": "Contact Us",
        "item": `${siteUrl}/contact-us`
      }
    ]
  };
  
  // Product schema for software development service
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Custom Software Development Services",
    "description": "Enterprise-grade custom software development services tailored to your business needs. Our expert team delivers scalable, secure, and innovative solutions.",
    "image": "https://adysunventures.com/assets/images/adysun_cover.png",
    "sku": "SVC-SOFTWARE-DEV",
    "brand": {
      "@type": "Brand",
      "name": businessName
    },
    "offers": {
      "@type": "Offer",
      "url": `${siteUrl}/services`,
      "priceCurrency": "INR",
      "price": "30000",
      "priceValidUntil": "2024-12-31",
      "availability": "https://schema.org/InStock",
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingRate": {
          "@type": "MonetaryAmount",
          "value": "0",
          "currency": "INR"
        },
        "shippingDestination": [
          {
            "@type": "DefinedRegion",
            "addressCountry": "IN"
          }
        ],
        "deliveryTime": {
          "@type": "ShippingDeliveryTime",
          "handlingTime": {
            "@type": "QuantitativeValue",
            "minValue": 0,
            "maxValue": 1,
            "unitCode": "DAY"
          },
          "transitTime": {
            "@type": "QuantitativeValue",
            "minValue": 1,
            "maxValue": 5,
            "unitCode": "DAY"
          }
        }
      },
      "hasMerchantReturnPolicy": {
        "@type": "MerchantReturnPolicy",
        "applicableCountry": "IN",
        "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
        "merchantReturnDays": 30,
        "returnMethod": "https://schema.org/ReturnByMail",
        "returnFees": "https://schema.org/FreeReturn"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": reviews.length.toString(),
      "reviewCount": reviews.length.toString()
    },
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "datePublished": review.datePublished,
      "reviewBody": review.reviewBody,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.reviewRating.toString(),
        "bestRating": "5",
        "worstRating": "1"
      }
    }))
  };

  // AggregateRating schema for the business
  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    "itemReviewed": {
      "@type": "Organization",
      "name": businessName,
      "url": siteUrl
    },
    "ratingValue": "5",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": reviews.length.toString()
  };

  // Service schema for IT services
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "IT Solutions and Services",
    "name": "IT Solutions & Services",
    "description": "Professional IT solutions and services including software development, cloud computing, digital transformation, and IT consulting tailored to meet your business objectives.",
    "provider": {
      "@type": "Organization",
      "name": businessName,
      "@id": `${siteUrl}/#organization`
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "18.5162",
        "longitude": "73.8553"
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "IT Services Catalog",
      "itemListElement": services.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service
        },
        "position": index + 1
      }))
    },
    "termsOfService": `${siteUrl}/terms-of-service`,
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "datePublished": review.datePublished,
      "reviewBody": review.reviewBody,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.reviewRating.toString(),
        "bestRating": "5"
      }
    }))
  };

  return (
    <Helmet>
      {/* All schemas as JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqPageSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(productSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(aggregateRatingSchema)}
      </script>
    </Helmet>
  );
};

export default SchemaMarkup; 