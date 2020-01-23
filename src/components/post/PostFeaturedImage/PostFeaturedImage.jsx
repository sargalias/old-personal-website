import React from 'react';
import Img from 'gatsby-image';

const PostFeaturedImage = ({ featuredImageData: { fluid } }) => (
  <Img fluid={fluid} />
);

export default PostFeaturedImage;
