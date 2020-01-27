import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BrandView from './BrandView';

const useLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return data.file.childImageSharp;
};

const BrandContainer = () => <BrandView imageData={useLogo()} />;

export default BrandContainer;
