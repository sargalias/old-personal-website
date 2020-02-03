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
            manualExcerpt: excerpt
          }
          fields {
            path
          }
        }
      }
    }
  `);

  data.allMarkdownRemark.nodes.forEach(node => {
    const excerpt = node.frontmatter.excerpt || node.excerpt;
    node.fields.excerpt = excerpt;
  });

  return data.allMarkdownRemark.nodes;
};

export default useBlogPosts;
