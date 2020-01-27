import { useStaticQuery, graphql } from 'gatsby';

/* use image */
/*
  <Link to="/" className="navbar-item">
    <GatsbyImage
      fluid={useLogo().fluid}
      alt={'Spyros Argalias - Full stack developer'}
      width={200}
      height={200}
      className={styles.Navbar_gatsbyImage}
    />
  </Link>
*/

const useLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return data.file.childImageSharp;
};
