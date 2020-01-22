import React from 'react';
import Base from '_Base';
import Abstracts from 'Abstracts';

const Layout = ({ children }) => (
  <>
    <Base />
    <Abstracts />
    {children}
  </>
);

export default Layout;
