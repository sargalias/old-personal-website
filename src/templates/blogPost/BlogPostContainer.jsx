import React from 'react';
import BlogPostView from './BlogPostView';

const BlogPostContainer = ({
  data: {
    markdownRemark: { frontmatter, html },
  },
}) => <BlogPostView frontmatter={frontmatter} html={html} />;

export default BlogPostContainer;
