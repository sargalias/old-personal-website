import React from 'react';
import Img from 'gatsby-image';
import PostHeading from '../PostHeading';
import PostMetadata from '../PostMetadata';
import styles from './PostHeader.module.scss';

const PostHeader = ({ heading, date, author, category, featuredImageData }) => (
  <header className={styles.PostHeader}>
    {category && <p className={styles.PostHeader_category}>{category}</p>}
    <PostHeading
      heading={heading}
      parentClass={styles.PostHeader_postHeading}
    />
    <PostMetadata author={author} date={date} />
    {featuredImageData && (
      <div className={styles.PostHeader_imgWrapper}>
        <Img fluid={featuredImageData.fluid} />
      </div>
    )}
  </header>
);

export default PostHeader;
