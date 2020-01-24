import React from 'react';
import { render } from '@testing-library/react';
import each from 'jest-each';
import PostHeading from './PostHeading';

describe('PostHeading', () => {
  describe('heading level', () => {
    each`
      headingLevel  | expected
      ${undefined}  | ${1}
      ${1}          | ${1}
      ${2}          | ${2}
    `.test(
      'should have heading $expected with headingLevel $headingLevel',
      ({ headingLevel, expected }) => {
        const heading = 'Foo';

        const { container } = render(
          <PostHeading heading={heading} headingLevel={headingLevel} />,
        );

        expect(container).toContainHTML(expected);
      },
    );
  });
});
