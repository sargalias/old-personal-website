import { formSeoTitle } from './postPageUtils';
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
});
