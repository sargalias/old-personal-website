import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import BlogPostContainer from './BlogPostContainer';
import {
  formSeoTitle,
  formSeoDescription,
  formCanonicalUrl,
} from 'configUtils/modules/postPageUtils';

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      html
      excerpt
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        heading: title
        author
        category
        slug
        featuredImage {
          data: childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        seoTitle
        seoDescription
      }
      fields {
        path
      }
    }
  }
`;

const BlogPostHead = ({
  data: {
    markdownRemark: {
      frontmatter: { seoTitle, seoDescription, slug },
      excerpt,
    },
  },
}) => (
  <Helmet>
    <title>{formSeoTitle(seoTitle)}</title>
    <meta
      name="description"
      content={formSeoDescription({ seoDescription, excerpt })}
    />
    <link rel="canonical" href={formCanonicalUrl(slug)} />
  </Helmet>
);

const BlogPostPage = ({ data }) => (
  <>
    <BlogPostHead data={data} />
    <BlogPostContainer data={data} />
  </>
);

export default BlogPostPage;
