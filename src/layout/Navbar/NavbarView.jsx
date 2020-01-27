import React from 'react';
import { Link } from 'gatsby';
import Container from 'components/Container';
import Brand from 'components/Brand';
import styles from './NavbarView.module.scss';

const Navbar = () => (
  <Container>
    <nav className={styles.Navbar} aria-label="main navigation">
      <div className={styles.Navbar_division}>
        <Link
          to="/"
          className={`${styles.Navbar_link} ${styles.Navbar_link___hasBrand}`}
        >
          <Brand />
        </Link>
      </div>

      <div className={styles.Navbar_division}>
        <div className={styles.Navbar_links}>
          <Link
            to="/"
            className={styles.Navbar_link}
            activeClassName={styles.Navbar_link___isActive}
          >
            <div className={styles.Navbar_linkText}>Home</div>
          </Link>
          <Link
            to="/blog/"
            className={styles.Navbar_link}
            activeClassName={styles.Navbar_link___isActive}
          >
            <div className={styles.Navbar_linkText}>Blog</div>
          </Link>
        </div>
      </div>
    </nav>
  </Container>
);

export default Navbar;
