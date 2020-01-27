import React from 'react';
import styles from './Brand.module.scss';

const Brand = () => (
  <div className={styles.Brand}>
    <img
      src="https://via.placeholder.com/50"
      alt="Sargalias logo"
      className={styles.Brand_logo}
    />
    <span className={styles.Brand_name}>Sargalias</span>
  </div>
);

export default Brand;
