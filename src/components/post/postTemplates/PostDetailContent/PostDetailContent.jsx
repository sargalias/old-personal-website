import React from 'react';

const PostDetailContent = ({ html, parentClass }) => (
  <div className={parentClass} dangerouslySetInnerHTML={{ __html: html }} />
);

export default PostDetailContent;
