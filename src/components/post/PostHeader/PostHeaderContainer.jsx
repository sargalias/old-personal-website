import React from 'react';
import PostHeader from './PostHeaderView';

const Container = ({ frontmatter }) => {
  const { heading, date, author, featuredImage } = frontmatter;

  return (
    <PostHeader
      heading={heading}
      date={date}
      author={author}
      featuredImageData={featuredImage && featuredImage.data}
    />
  );
};
export default Container;
