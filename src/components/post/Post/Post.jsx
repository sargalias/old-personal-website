import React from 'react';
import PostHeader from 'components/post/PostHeader';
import PostContent from 'components/post/PostContent';
import styles from './Post.module.scss';

const Post = ({ frontmatter, html }) => (
  <article>
    <PostHeader frontmatter={frontmatter} />
    <PostContent html={html} parentClass={styles.Post_content} />
  </article>
);

export default Post;
