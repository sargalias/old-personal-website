import React from 'react';

const PostContent = ({ html, parentClass }) => (
  <div className={parentClass} dangerouslySetInnerHTML={{ __html: html }} />
);

export default PostContent;
