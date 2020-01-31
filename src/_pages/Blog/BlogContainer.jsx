import React from 'react';
import useBlogPosts from 'dataQueries/useBlogPosts';
import BlogView from './BlogView';

const BlogContainer = () => {
  const nodes = useBlogPosts();

  return <BlogView nodes={nodes} />;
};

export default BlogContainer;
