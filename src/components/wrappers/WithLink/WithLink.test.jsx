import React from 'react';
import { render } from '@testing-library/react';
import WithLink from './WithLink';

describe('WithLink', () => {
  test('should render with correct path, content, and props', async () => {
    const children = 'foo';
    const path = '/foo';
    const className = 'foo';

    const { findByTestId } = render(
      <WithLink path={path} className={className}>
        {children}
      </WithLink>,
    );

    const linkPromise = findByTestId(`withLink_${path}`);
    return linkPromise.then(link => {
      expect(link).toHaveAttribute('href', path);
      expect(link).toHaveTextContent(children);
      expect(link).toHaveClass('foo');
    });
  });
});
