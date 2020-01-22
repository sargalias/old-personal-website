import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styles from './Hero.module.scss';

const Hero = () => {
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

  return (
    <div className={styles.Hero}>
      <div className={styles.Hero_content}>
        <h1 className={styles.Hero_heading}>Hi, I'm Spyros Argalias</h1>
        <p className={styles.Hero_text}>
          I'm just a guy who loves to code. Code is an essential part of
          everything in modern society. However when we get it wrong it can be
          very dangerous and very expensive to fix. I believe the solution is to
          treat software development as an engineering process and not just glue
          hacks together until something works.
        </p>
        <p className={styles.Hero_text}>
          When I code I always try to follow established practices and
          principles to create code that code works as intended, is easy to
          change and quick to create.
        </p>
      </div>
      <div className={styles.Hero_imgWrapper}>
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </div>
    </div>
  );
};

export default Hero;
