import React from 'react';
import Container from 'components/Container';
import Brand from 'components/Brand';
import BrandIcons from 'components/BrandIcons';
import styles from './Footer.module.scss';

console.log(JSON.stringify(styles, null, 2));

const Footer = ({ parentClass }) => (
  <footer className={`${styles.Footer} ${parentClass}`}>
    <Container>
      <div className={styles.Footer_inner}>
        <div className={styles.Footer_content}>
          <Brand />
          <small className={styles.Footer_copyright}>
            Copyright &copy; {new Date().getFullYear()} Spyros Argalias
          </small>
          <BrandIcons />
        </div>
      </div>
    </Container>
  </footer>
);

export default Footer;
