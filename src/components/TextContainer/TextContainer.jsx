import React from 'react';
import styles from './TextContainer.module.scss';

const TextContainer = ({ children }) => (
  <div className={styles.TextContainer}>{children}</div>
);

export default TextContainer;
