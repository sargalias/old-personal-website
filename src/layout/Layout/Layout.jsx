import React from 'react';
import Base from '_Base';
import Abstracts from 'Abstracts';
import Navbar from '../Navbar';
import Footer from '../Footer';
import styles from './Layout.module.scss';
import { getCssClasses } from 'utilities/cssHelpers';

const Layout = ({ children, styleModifiers = [] }) => (
  <div className={getCssClasses(styles, 'Layout', styleModifiers)}>
    <div className={styles.Layout_stickyFooterContentWrapper}>
      <Base />
      <Abstracts />
      <Navbar />
      <div role="main" className={styles.Layout_content}>
        {children}
      </div>
    </div>
    <div className={styles.Layout_stickyFooterFooterWrapper}>
      <Footer parentClass={styles.Layout_footer} />
    </div>
  </div>
);

export default Layout;
