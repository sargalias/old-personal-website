import React from 'react';
import Img from 'gatsby-image';

const PostFeaturedImage = ({ featuredImageData: { fluid }, parentClass }) => (
  <div className={parentClass}>
    <Img fluid={fluid} />
  </div>
);

export default PostFeaturedImage;
