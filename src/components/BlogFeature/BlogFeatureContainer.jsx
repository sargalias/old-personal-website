import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BlogFeatureView from './BlogFeatureView';

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

  const post = data.allMarkdownRemark.nodes[0];
  return post;
};

const BlogFeatureContainer = props => (
  <BlogFeatureView post={useLatestBlogPost()} {...props} />
);

export default BlogFeatureContainer;
