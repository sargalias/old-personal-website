import React from 'react';
import PostHeader from 'components/post/PostHeader';
import PostContent from 'components/post/PostContent';
import TextContainer from 'components/TextContainer';
import styles from './Post.module.scss';

const Post = ({ frontmatter, html }) => (
  <TextContainer>
    <article className={styles.Post}>
      <PostHeader frontmatter={frontmatter} />
      <PostContent html={html} parentClass={styles.Post_content} />
    </article>
  </TextContainer>
);

export default Post;
