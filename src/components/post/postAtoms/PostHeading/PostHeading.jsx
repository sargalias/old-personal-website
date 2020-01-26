import React from 'react';
import WithLink from 'components/wrappers/WithLink';

const PostHeading = ({
  heading,
  parentClass,
  headingTag = 'h1',
  path = undefined,
}) => (
  <div className={parentClass} data-testid="PostHeading">
    {React.createElement(
      headingTag,
      {
        'data-testid': 'PostHeading_heading',
      },
      path
        ? WithLink({
            children: heading,
            path,
          })
        : heading,
    )}
  </div>
);

export default PostHeading;
