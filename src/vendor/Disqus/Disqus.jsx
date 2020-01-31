import React from 'react';
import { Disqus } from 'gatsby-plugin-disqus';
import TextContainer from 'components/TextContainer';
import paths from 'config/paths.json';
import styles from './Disqus.module.scss';

const DisqusComments = ({ id, heading, path, parentClass }) => {
  const disqusConfig = {
    url: `${paths.siteUrl}${path}`,
    identifier: id,
    title: heading,
  };
  return (
    <div className={`${styles.Disqus} ${parentClass}`}>
      <TextContainer>
        <Disqus config={disqusConfig} />
      </TextContainer>
    </div>
  );
};

export default DisqusComments;
