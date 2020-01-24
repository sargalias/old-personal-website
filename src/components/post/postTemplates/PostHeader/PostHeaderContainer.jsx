import React from 'react';
import PostHeader from './PostHeaderView';

const Container = ({ frontmatter }) => {
  const { heading, date, author, featuredImage, category } = frontmatter;

  return (
    <PostHeader
      heading={heading}
      date={date}
      author={author}
      category={category}
      featuredImageData={featuredImage && featuredImage.data}
    />
  );
};
export default Container;
