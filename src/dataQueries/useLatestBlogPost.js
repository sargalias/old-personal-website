import { graphql, useStaticQuery } from 'gatsby';

const useLatestBlogPost = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
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
            excerpt
          }
          fields {
            path
          }
        }
      }
    }
  `);

  const post = data.allMarkdownRemark.nodes[0];
  post.fields.excerpt = post.frontmatter.excerpt || post.exerpt;
  return post;
};

export default useLatestBlogPost;
