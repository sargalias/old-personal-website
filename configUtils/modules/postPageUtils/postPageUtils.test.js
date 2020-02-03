import {
  formSeoTitle,
  formSeoDescription,
  formCanonicalUrl,
  formatExcerptOnNode,
} from './postPageUtils';
import each from 'jest-each';

const config = {
  titleDelimiter: '|',
  titleSuffix: 'Sargalias',
  defaultSeoTitle: 'Default title',
};

describe('postPageUtils', () => {
  describe('formSeoTitle', () => {
    each`
      seoTitle        | config    | expected
      ${'Seo title'}  | ${config} | ${'Seo title | Sargalias'}
      ${undefined}    | ${config} | ${'Default title | Sargalias'}
    `.test(
      `should return '$expected' when {seoTitle: '$seoTitle', config: $config}`,
      ({ seoTitle, config, expected }) => {
        const result = formSeoTitle(seoTitle, config);

        expect(result).toBe(expected);
      },
    );
  });

  describe('formSeoDescription', () => {
    each`
      seoDescription        | excerpt      | expected
      ${'Seo description'}  | ${'Excerpt'} | ${'Seo description'}
      ${undefined}          | ${'Excerpt'} | ${'Excerpt'}
    `.test(
      `should return '$expected' when {seoDescription: '$seoDescription', excerpt: $excerpt}`,
      ({ seoDescription, excerpt, expected }) => {
        const result = formSeoDescription({ seoDescription, excerpt });

        expect(result).toBe(expected);
      },
    );
  });

  describe('formCanonicalUrl', () => {
    const config1 = {
      doesUrlHaveTrailingSlash: true,
      canonicalUrlPrefix: 'url-prefix/',
    };

    const config2 = {
      doesUrlHaveTrailingSlash: false,
      canonicalUrlPrefix: 'url-prefix/',
    };

    each`
      slug            | config      | expected
      ${'foo-slug'}   | ${config1}   | ${'url-prefix/foo-slug/'}
      ${'foo-slug'}   | ${config2}   | ${'url-prefix/foo-slug'}
    `.test(
      `should return '$expected' when {slug: '$slug', config: $config}`,
      ({ slug, config, expected }) => {
        const result = formCanonicalUrl(slug, config);

        expect(result).toBe(expected);
      },
    );
  });

  describe('formatExcerptOnNode', () => {
    test('should return same object with same data if frontmatter.excerpt is undefined', () => {
      const mockNode = {
        excerpt: 'Yo',
        frontmatter: {},
      };

      const result = formatExcerptOnNode(mockNode);

      expect(result).toEqual(mockNode);
    });
  });
});
