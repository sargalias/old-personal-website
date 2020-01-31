import { formBlogPostPathFromSlug } from './pathUtils';
import each from 'jest-each';

const mockConfigPaths = ({ blogPostPathPrefix, doesUrlHaveTrailingSlash }) => {
  jest.doMock(
    'config/paths.json',
    () => ({
      blogPostPathPrefix,
      doesUrlHaveTrailingSlash,
    }),
    { virtual: true },
  );
};

describe('pathUtils', () => {
  describe('formBlogPostPathFromSlug', () => {
    beforeEach(jest.resetModules);

    test('should throw TypeError with no slug provided', () => {
      expect(formBlogPostPathFromSlug).toThrow();
    });

    each`
    slug          | blogPostPathPrefix  | doesUrlHaveTrailingSlash  | expected
    ${'foo-bar'}  | ${'/blog-foo/'}     | ${true}                   | ${'/blog-foo/foo-bar/'}
    ${'foo-bar'}  | ${'/blog-foo/'}     | ${false}                  | ${'/blog-foo/foo-bar'}
    ${'foo-bar'}  | ${'/'}              | ${true}                  | ${'/foo-bar/'}
    `.test(
      `should return $expected when {
        blogPostPathPrefix: $blogPostPathPrefix,
        doesUrlHaveTrailingSlash: $doesUrlHaveTrailingSlash,
        slug: $slug,
      }`,
      async ({
        slug,
        blogPostPathPrefix,
        doesUrlHaveTrailingSlash,
        expected,
      }) => {
        mockConfigPaths({ blogPostPathPrefix, doesUrlHaveTrailingSlash });
        const { formBlogPostPathFromSlug } = await import('./pathUtils');

        const result = formBlogPostPathFromSlug(slug);

        expect(result).toBe(expected);
      },
    );
  });
});
