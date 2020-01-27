import React from 'react';
import styles from './PostCategory.module.scss';

const PostCategory = ({ category, parentClass }) => (
  <p className={`${styles.PostCategory} ${parentClass}`}>{category}</p>
);

export default PostCategory;
