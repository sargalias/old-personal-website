import React from 'react';
import Img from 'gatsby-image';
import useHeroImageData from 'dataQueries/useHeroImageData';
import styles from './Hero.module.scss';

const Hero = () => {
  const heroImageData = useHeroImageData();

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
        <Img fluid={heroImageData.fluid} />
      </div>
    </div>
  );
};

export default Hero;
