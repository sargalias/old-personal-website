import React from 'react';
import Img from 'gatsby-image';
import styles from './PostHeader.module.scss';

const defaultAuthor = 'Spyros Argalias';

const PostHeader = ({ heading, date, author, featuredImageData }) => (
  <header className={styles.PostHeader}>
    <p className={styles.PostHeader_category}>Category One</p>
    <h1 className={styles.PostHeader_heading}>{heading}</h1>
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
