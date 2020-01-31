import React from 'react';
import Layout from 'layout';
import PostDetail from 'components/post/postTemplates/PostDetail';

const BlogPostContainer = ({ frontmatter, html }) => (
  <Layout>
    <PostDetail frontmatter={frontmatter} html={html} />
  </Layout>
);

export default BlogPostContainer;
