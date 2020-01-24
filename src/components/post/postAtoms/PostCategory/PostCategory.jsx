import React from 'react';
import styles from './PostCategory.module.scss';

const PostCategory = ({ category }) => (
  <p className={styles.PostCategory}>{category}</p>
);

export default PostCategory;
