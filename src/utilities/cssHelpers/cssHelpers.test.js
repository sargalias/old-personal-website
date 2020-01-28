import { getModifierClasses, getCssModuleClasses } from './cssHelpers';
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

  describe('getCssModuleClasses', () => {
    test('should return correct classes for no modifiers', () => {
      const baseClass = 'baseClass';
      const stylesSpy = { [baseClass]: `hash-${baseClass}` };

      const result = getCssModuleClasses(stylesSpy, baseClass);

      expect(result).toStrictEqual(['hash-baseClass']);
    });

    test('should return correct classes for one modifier', () => {
      const baseClass = 'baseClass';
      const modifiers = ['mod'];
      const stylesSpy = {
        [baseClass]: `hash-${baseClass}`,
        baseClass___mod: `hash-baseClass-mod`,
      };

      const result = getCssModuleClasses(stylesSpy, baseClass, modifiers);

      expect(result).toStrictEqual(['hash-baseClass-mod', 'hash-baseClass']);
    });

    test('should return correct classes for two modifiers', () => {
      const baseClass = 'baseClass';
      const modifiers = ['mod1', 'mod2'];
      const stylesSpy = {
        [baseClass]: `hash-${baseClass}`,
        baseClass___mod1: `hash-baseClass-mod1`,
        baseClass___mod2: `hash-baseClass-mod2`,
      };

      const result = getCssModuleClasses(stylesSpy, baseClass, modifiers);

      expect(result).toStrictEqual([
        'hash-baseClass-mod1',
        'hash-baseClass-mod2',
        'hash-baseClass',
      ]);
    });
  });
});
