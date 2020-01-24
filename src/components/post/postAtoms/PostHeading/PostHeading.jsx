import React from 'react';

const testId = 'PostHeading_heading';

const PostHeading = ({ heading, parentClass, headingLevel = 1 }) =>
  React.createElement(
    `h${headingLevel}`,
    { className: parentClass, 'data-testid': testId },
    heading,
  );

export default PostHeading;
