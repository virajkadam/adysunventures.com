import React from "react";
import { Helmet } from "react-helmet-async";

const DynamicMetaTags = ({
  title = "Adysun Ventures | IT Solutions, Business Strategy & Technology Consulting Experts",
  description = "Adysun Ventures, founded in Dec 2020, is a premier IT service provider specializing in business strategy, cloud computing, software development, and digital transformation...",
  keywords = "Adysun Ventures, IT Solutions, Business Strategies, Cloud Computing, Software Development, Digital Transformation, Cybersecurity, Technology Consulting",
  ogImage = "https://adysunventures.com/assets/adysun_ventures_image.jpg",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default DynamicMetaTags;
