import React from 'react';
import { Helmet } from 'react-helmet';

const MetaTags = () => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <meta name="keywords" content="Multipurpose Business and Admin HTML5 Template" />
      <meta name="description" content="Adysun Ventures" />
      <title>Adysun Ventures</title>
    </Helmet>
  );
};

export default MetaTags;
