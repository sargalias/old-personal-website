import React from 'react';
import styles from './BrandView.module.scss';
import Img from 'gatsby-image';

const Brand = ({ imageData }) => (
  <div className={styles.Brand}>
    <Img
      fixed={imageData.fixed}
      alt="Spyros Argalias - Full stack developer"
      width={50}
      height={50}
      className={styles.Brand_logo}
    />
    <span className={styles.Brand_name}>Sargalias</span>
  </div>
);

export default Brand;
