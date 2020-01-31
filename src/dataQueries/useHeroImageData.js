import { useStaticQuery, graphql } from 'gatsby';

const useHeroImageData = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "spyros-argalias.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return data.placeholderImage.childImageSharp;
};

export default useHeroImageData;
