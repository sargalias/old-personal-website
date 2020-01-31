import React from 'react';
import useLatestBlogPost from 'dataQueries/useLatestBlogPost';
import BlogFeatureView from './BlogFeatureView';

const BlogFeatureContainer = props => (
  <BlogFeatureView post={useLatestBlogPost()} {...props} />
);

export default BlogFeatureContainer;
