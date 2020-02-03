import { useStaticQuery, graphql } from 'gatsby';

const useBlogPosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        nodes {
          id
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
            excerpt
          }
        }
      }
    }
  `);

  return data.allMarkdownRemark.nodes;
};

export default useBlogPosts;
