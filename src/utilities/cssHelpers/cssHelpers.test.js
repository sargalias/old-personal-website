import { getModifierClasses } from './cssHelpers';
import each from 'jest-each';

describe('cssHelpers', () => {
  describe('getModifierClasses', () => {
    each`
      modifiers             | expected
      ${[]}                 | ${[]}
      ${['mod']}            | ${['base___mod']}
      ${['mod1', 'mod2']}   | ${['base___mod1', 'base___mod2']}
    `.test(
      'should return $expected when modifiers are $modifiers',
      ({ modifiers, expected }) => {
        const baseClass = 'base';

        const result = getModifierClasses(modifiers, baseClass);

        expect(result).toStrictEqual(expected);
      },
    );
  });
});
