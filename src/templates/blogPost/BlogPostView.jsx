import React from 'react';
import Layout from 'layout';
import PostDetail from 'components/post/postTemplates/PostDetail';
import Disqus from 'vendor/Disqus';
import styles from './BlogPostView.module.scss';

const BlogPostView = ({ id, html, frontmatter, path }) => (
  <Layout>
    <div className={styles.BlogPostView}>
      <PostDetail frontmatter={frontmatter} html={html} />
      <Disqus
        id={id}
        path={path}
        heading={frontmatter.heading}
        parentClass={styles.BlogPostView_disqus}
      />
    </div>
  </Layout>
);

export default BlogPostView;
