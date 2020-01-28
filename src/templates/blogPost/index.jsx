import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'layout';
import PostDetail from 'components/post/postTemplates/PostDetail';

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        heading: title
        author
        featuredImage {
          data: childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        category
      }
    }
  }
`;

const BlogPostContainer = ({
  data: {
    markdownRemark: { frontmatter, html },
  },
}) => (
  <Layout>
    <PostDetail frontmatter={frontmatter} html={html} />
  </Layout>
);

export default BlogPostContainer;
