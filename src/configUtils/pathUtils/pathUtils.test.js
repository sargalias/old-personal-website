import { formBlogPostPathFromSlug } from './pathUtils';

describe('pathUtils', () => {
  describe('formBlogPostPathFromSlug', () => {
    test('should throw TypeError with no slug provided', () => {
      expect(formBlogPostPathFromSlug).toThrow();
    });
  });
});
