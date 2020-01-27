import React from 'react';
import { render } from '@testing-library/react';
import each from 'jest-each';
import PostHeading from './PostHeading';

describe('PostHeading', () => {
  describe('heading tag', () => {
    each`
      headingTag    | expected
      ${undefined}  | ${'h1'}
      ${'h1'}       | ${'h1'}
      ${'h2'}       | ${'h2'}
    `.test(
      'should have heading $expected with headingLevel $headingLevel',
      ({ headingTag, expected }) => {
        const heading = 'Foo';

        const { container } = render(
          <PostHeading heading={heading} headingTag={headingTag} />,
        );

        expect(container).toContainHTML(expected);
      },
    );
  });

  describe('link', () => {
    test('should have correct link if path is provided', () => {
      const heading = 'foo';
      const path = '/foo';

      const { container } = render(
        <PostHeading heading={heading} path={path} />,
      );

      const link = container.querySelector('a');
      expect(link).toHaveAttribute('href', path);
      expect(link).toHaveTextContent(heading);
    });

    test('should not have link if path is not provided', () => {
      const heading = 'foo';

      const { container } = render(<PostHeading heading={heading} />);

      const link = container.querySelector('a');
      expect(link).toBeNull();
      expect(container).toHaveTextContent(heading);
    });
  });
});
