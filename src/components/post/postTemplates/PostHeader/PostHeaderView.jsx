import React from 'react';
import PostCategory from '../../postAtoms/PostCategory';
import PostHeading from '../../postAtoms/PostHeading';
import PostMetadata from '../../postAtoms/PostMetadata';
import PostFeaturedImage from '../../postAtoms/PostFeaturedImage';
import styles from './PostHeader.module.scss';

const PostHeader = ({ heading, date, author, category, featuredImageData }) => (
  <header className={styles.PostHeader}>
    {category && <PostCategory category={category} />}
    <PostHeading
      heading={heading}
      parentClass={styles.PostHeader_postHeading}
    />
    <PostMetadata author={author} date={date} />
    {featuredImageData && (
      <PostFeaturedImage featuredImageData={featuredImageData} />
    )}
  </header>
);

export default PostHeader;
