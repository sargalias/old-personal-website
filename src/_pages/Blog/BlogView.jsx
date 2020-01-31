import React from 'react';
import Layout from 'layout';
import Container from 'components/Container';
import PostPreview from 'components/post/postTemplates/PostPreview';
import styles from './BlogView.module.scss';
import { equals } from 'ramda';

const isFirst = equals(0);

const BlogView = ({ nodes }) => (
  <Layout>
    <Container>
      {nodes.map(({ id, excerpt, frontmatter, fields }, i) => (
        <div
          className={`${styles.BlogView} ${
            !isFirst(i) ? styles.BlogView___hasDivider : ''
          }`}
          key={id}
        >
          <PostPreview
            frontmatter={frontmatter}
            excerpt={excerpt}
            fields={fields}
          />
        </div>
      ))}
    </Container>
  </Layout>
);

export default BlogView;
