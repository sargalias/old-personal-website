import { graphql } from 'gatsby';
import BlogPostContainer from './BlogPostContainer';

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
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
      fields {
        path
      }
    }
  }
`;

export default BlogPostContainer;
