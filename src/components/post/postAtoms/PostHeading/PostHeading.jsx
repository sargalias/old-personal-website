import React from 'react';

const PostHeading = ({ heading, parentClass }) => (
  <h1 className={parentClass} data-testid="PostHeading_heading">
    {heading}
  </h1>
);

export default PostHeading;
