import React from 'react';
import PostDetailHeader from './PostDetailHeaderView';

const Container = ({ frontmatter }) => {
  const { heading, date, author, featuredImage, category } = frontmatter;

  return (
    <PostDetailHeader
      heading={heading}
      date={date}
      author={author}
      category={category}
      featuredImageData={featuredImage && featuredImage.data}
    />
  );
};
export default Container;
