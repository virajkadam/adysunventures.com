import React from "react";
import { Helmet } from "react-helmet-async";

const MetaTags = () => {
  return (
    <Helmet>
      {/* General Meta Tags */}
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <meta
        name="keywords"
        content="Adysun Ventures, Business Solutions, Digital Consulting, Software Engineering, Innovation"
      />
      <meta
        name="description"
        content="Adysun Ventures delivers high-performance services tailored to your business needs, focusing on software engineering, technology solutions, digital consulting, and more to drive innovation and growth."
      />
      <title>
        Adysun Ventures | High-Performance Services for Your Business
      </title>

      {/* Open Graph / Facebook Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://adysunventures.com/" />
      <meta
        property="og:title"
        content="Adysun Ventures | High-Performance Services for Your Business"
      />
      <meta
        property="og:description"
        content="Adysun Ventures delivers high-performance services tailored to your business needs, focusing on software engineering, technology solutions, digital consulting, and more to drive innovation and growth."
      />
      <meta
        property="og:image"
        content="https://adysunventures.com/static/media/logo.dbaa4b73916b9a3893f6.png"
      />

      {/* Twitter Meta Tags */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://adysunventures.com/" />
      <meta
        property="twitter:title"
        content="Adysun Ventures | High-Performance Services for Your Business"
      />
      <meta
        property="twitter:description"
        content="Adysun Ventures delivers high-performance services tailored to your business needs, focusing on software engineering, technology solutions, digital consulting, and more to drive innovation and growth."
      />
      <meta
        property="twitter:image"
        content="https://adysunventures.com/static/media/logo.dbaa4b73916b9a3893f6.png"
      />
    </Helmet>
  );
};

export default MetaTags;
