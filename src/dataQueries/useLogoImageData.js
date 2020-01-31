import { useStaticQuery, graphql } from 'gatsby';

const useLogoImageData = () => {
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

export default useLogoImageData;
