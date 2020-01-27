import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BlogView from './BlogView';

const BlogContainer = () => {
  const {
    allMarkdownRemark: { nodes },
  } = useStaticQuery(graphql`
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
            path
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
    }
  `);

  return <BlogView nodes={nodes} />;
};

export default BlogContainer;
