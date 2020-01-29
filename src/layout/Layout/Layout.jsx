import React from 'react';
import Base from '_Base';
import Abstracts from 'Abstracts';
import Navbar from '../Navbar';
import Footer from '../Footer';
import styles from './Layout.module.scss';

const Layout = ({ children }) => (
  <div className={styles.Layout}>
    <div className={styles.Layout_stickyFooterContentWrapper}>
      <Base />
      <Abstracts />
      <Navbar />
      <div role="main" className={styles.Layout_content}>
        {children}
      </div>
    </div>
    <Footer parentClass={styles.Layout_stickyFooterFooter} />
  </div>
);

export default Layout;
