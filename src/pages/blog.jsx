import React from 'react';
import { Helmet } from 'react-helmet';
import blogPageConfig from 'config/pages/blog';
import Blog from '_pages/Blog';

const BlogPage = () => (
  <>
    <Helmet>
      <title>{blogPageConfig.title}</title>
      <meta name="description" content={blogPageConfig.description} />
      <link rel="canonical" href={blogPageConfig.canonicalUrl} />
    </Helmet>
    <Blog />
  </>
);

export default BlogPage;
