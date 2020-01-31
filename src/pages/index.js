import React from 'react';
import { Helmet } from 'react-helmet';
import homePageConfig from 'config/pages/home';
import Home from '_pages/Home';

const HomePage = () => (
  <>
    <Helmet>
      <title>{homePageConfig.title}</title>
      <meta name="description" content={homePageConfig.description} />
      <link rel="canonical" href={homePageConfig.canonicalUrl} />
    </Helmet>
    <Home />
  </>
);

export default HomePage;
