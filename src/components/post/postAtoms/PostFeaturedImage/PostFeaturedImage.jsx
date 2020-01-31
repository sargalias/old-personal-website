import React from 'react';
import Img from 'gatsby-image';

const PostFeaturedImage = ({ featuredImageData: { fluid }, parentClass }) => (
  <div className={parentClass}>
    <Img
      fluid={fluid}
      imgStyle={{ objectFit: 'contain', objectPosition: '50% 50%' }}
    />
  </div>
);

export default PostFeaturedImage;
