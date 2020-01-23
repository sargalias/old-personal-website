import React from 'react';
import Img from 'gatsby-image';
import styles from './PostHeader.module.scss';
import PostHeading from '../PostHeading';

const defaultAuthor = 'Spyros Argalias';

const PostHeader = ({ heading, date, author, category, featuredImageData }) => (
  <header className={styles.PostHeader}>
    {category && <p className={styles.PostHeader_category}>{category}</p>}
    <PostHeading
      heading={heading}
      parentClass={styles.PostHeader_postHeading}
    />
    <div className={styles.PostHeader_metadata}>
      <time className={styles.PostHeader_postedOn}>{date}</time>
      <span className={styles.PostHeader_author}>
        By {author || defaultAuthor}
      </span>
    </div>
    {featuredImageData && (
      <div className={styles.PostHeader_imgWrapper}>
        <Img fluid={featuredImageData.fluid} />
      </div>
    )}
  </header>
);

export default PostHeader;
