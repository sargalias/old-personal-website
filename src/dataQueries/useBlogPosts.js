import { useStaticQuery, graphql } from 'gatsby';

const useBlogPosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        nodes {
          id
          excerpt
          frontmatter {
            heading: title
            author
            category
            date
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

  return data.allMarkdownRemark.nodes;
};

export default useBlogPosts;