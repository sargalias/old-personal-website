import React from 'react';
import Base from '_Base';
import Abstracts from 'Abstracts';
import Navbar from '../Navbar';
import styles from './Layout.module.scss';

const Layout = ({ children }) => (
  <>
    <Base />
    <Abstracts />
    <Navbar />
    <div role="main" className={styles.Layout_content}>
      {children}
    </div>
  </>
);

export default Layout;
