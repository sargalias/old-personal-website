import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import styles from './BrandIcons.module.scss';

const BrandIcons = () => (
  <p className={styles.BrandIcons}>
    <span className={styles.BrandIcons_iconContainer}>
      <a
        href="https://github.com/sargalias"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} className={styles.BrandIcons_icon} />
      </a>
    </span>
    <span className={styles.BrandIcons_iconContainer}>
      <a
        href="https://www.linkedin.com/in/sargalias/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} className={styles.BrandIcons_icon} />
      </a>
    </span>
  </p>
);

export default BrandIcons;
