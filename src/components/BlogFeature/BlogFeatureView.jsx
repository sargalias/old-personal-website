import React from 'react';
import PostPreview from 'components/post/postTemplates/PostPreview/PostPreview';
import { Link } from 'gatsby';
import styles from './BlogFeatureView.module.scss';

const BlogFeatureView = ({ post, parentClass }) => (
  <div className={parentClass}>
    <p className={styles.BlogFeatureView_prelude}>I write about programming</p>
    <h2 className={styles.BlogFeatureView_heading}>Latest post</h2>
    <PostPreview
      {...post}
      headingTag="h3"
      parentClass={styles.BlogFeatureView_postPreview}
    />
    <p className={styles.BlogFeatureView_cta}>
      <Link to="/blog/">See all posts</Link>
    </p>
  </div>
);

export default BlogFeatureView;
