import React from 'react';
import TextContainer from 'components/TextContainer';
import PostDetailHeader from '../PostDetailHeader';
import PostDetailContent from '../PostDetailContent';
import styles from './Post.module.scss';

const Post = ({ frontmatter, html }) => (
  <TextContainer>
    <article className={styles.Post}>
      <PostDetailHeader frontmatter={frontmatter} />
      <PostDetailContent html={html} parentClass={styles.Post_content} />
    </article>
  </TextContainer>
);

export default Post;
