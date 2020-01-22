import React from 'react';
import { graphql } from 'gatsby';
import Post from 'components/post/Post';

const BlogPostContainer = ({
  data: {
    markdownRemark: { frontmatter, html },
  },
}) => <Post frontmatter={frontmatter} html={html} />;

export default BlogPostContainer;

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
