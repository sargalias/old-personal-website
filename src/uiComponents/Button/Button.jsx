import React from 'react';
import { Link } from 'gatsby';
import 'vendor/bulma/Button'; // this must come before our styles
import styles from './Button.module.scss';

const className = `button is-link ${styles.Button}`;

const Button = ({ children, path, type = 'button', parentClass }) =>
  path ? (
    <Link to={path} className={`${className} ${parentClass}`}>
      {children}
    </Link>
  ) : (
    <button type={type} className={`${className} ${parentClass}`}>
      {children}
    </button>
  );

export default Button;
