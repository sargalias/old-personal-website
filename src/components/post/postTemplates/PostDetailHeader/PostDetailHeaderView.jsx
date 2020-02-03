import React from 'react';
import PostCategory from '../../postAtoms/PostCategory';
import PostHeading from '../../postAtoms/PostHeading';
import PostMetadata from '../../postAtoms/PostMetadata';
import PostFeaturedImage from '../../postAtoms/PostFeaturedImage';
import styles from './PostDetailHeader.module.scss';

const PostDetailHeader = ({
  heading,
  date,
  author,
  category,
  featuredImageData,
}) => (
  <header className={styles.PostDetailHeader}>
    {category && <PostCategory category={category} />}
    <PostHeading
      heading={heading}
      parentClass={styles.PostDetailHeader_postHeading}
    />
    <PostMetadata
      author={author}
      date={date}
      parentClass={styles.PostDetailHeader_postMetadata}
    />
    {featuredImageData && (
      <PostFeaturedImage
        featuredImageData={featuredImageData}
        parentClass={styles.PostDetailHeader_postFeaturedImage}
      />
    )}
  </header>
);

export default PostDetailHeader;
