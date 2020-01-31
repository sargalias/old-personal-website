import React from 'react';
import BlogPostView from './BlogPostView';

const BlogPostContainer = ({
  data: {
    markdownRemark: {
      id,
      frontmatter,
      html,
      fields: { path },
    },
  },
}) => (
  <BlogPostView html={html} id={id} path={path} frontmatter={frontmatter} />
);

export default BlogPostContainer;
