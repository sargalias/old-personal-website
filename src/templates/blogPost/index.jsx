import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'layout';
import PostDetail from 'components/post/postTemplates/PostDetail';

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        heading: title
        author
        category
        featuredImage {
          data: childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
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
