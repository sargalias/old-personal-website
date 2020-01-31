import { graphql, useStaticQuery } from 'gatsby';

const useLatestBlogPost = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: {}
        sort: { order: DESC, fields: frontmatter___date }
        limit: 1
      ) {
        nodes {
          excerpt
          id
          frontmatter {
            category
            heading: title
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
    }
  `);

  const post = data.allMarkdownRemark.nodes[0];
  return post;
};

export default useLatestBlogPost;
