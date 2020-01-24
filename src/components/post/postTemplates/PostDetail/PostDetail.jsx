import React from 'react';
import TextContainer from 'components/TextContainer';
import PostDetailHeader from '../PostDetailHeader';
import PostDetailContent from '../PostDetailContent';
import styles from './PostDetail.module.scss';

const PostDetail = ({ frontmatter, html }) => (
  <TextContainer>
    <article className={styles.PostDetail}>
      <PostDetailHeader frontmatter={frontmatter} />
      <PostDetailContent html={html} parentClass={styles.PostDetail_content} />
    </article>
  </TextContainer>
);

export default PostDetail;
