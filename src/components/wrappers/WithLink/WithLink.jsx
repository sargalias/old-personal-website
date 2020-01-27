import React from 'react';
import { Link } from 'gatsby';

const WithLink = ({ path, children, ...rest }) => (
  <Link to={path} {...rest} data-testid={`withLink_${path}`}>
    {children}
  </Link>
);

export default WithLink;
