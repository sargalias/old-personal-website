import React from 'react';
import styles from './PostMetadata.module.scss';

const defaultAuthor = 'Spyros Argalias';

const PostMetadata = ({ date, author, parentClass }) => (
  <div className={`${styles.PostMetadata} ${parentClass}`}>
    <time className={styles.PostMetadata_postedOn}>{date}</time>
    <span className={styles.PostMetadata_author}>
      By {author || defaultAuthor}
    </span>
  </div>
);

export default PostMetadata;
