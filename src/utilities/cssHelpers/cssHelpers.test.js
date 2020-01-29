import {
  getModifierClasses,
  getCssModuleClasses,
  getCssClasses,
} from './cssHelpers';
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

        const result = getModifierClasses(baseClass, modifiers);

        expect(result).toStrictEqual(expected);
      },
    );
  });

  describe('getCssModuleClasses', () => {
    each`
      modifiers             | expected
      ${[]}                 | ${['hash-baseClass']}
      ${['mod']}            | ${['hash-baseClass-mod', 'hash-baseClass']}
      ${['mod1', 'mod2']}   | ${[
      'hash-baseClass-mod1',
      'hash-baseClass-mod2',
      'hash-baseClass',
    ]}
    `.test(
      'should return $expected when modifiers are $modifiers',
      ({ modifiers, expected }) => {
        const baseClass = 'baseClass';
        const stylesSpy = {
          [baseClass]: `hash-${baseClass}`,
          baseClass___mod: `hash-baseClass-mod`,
          baseClass___mod1: `hash-baseClass-mod1`,
          baseClass___mod2: `hash-baseClass-mod2`,
        };

        const result = getCssModuleClasses(stylesSpy, baseClass, modifiers);

        expect(result).toStrictEqual(expected);
      },
    );
  });

  describe('getCssClasses', () => {
    test('should return correct class string', () => {
      const stylesMock = {
        baseClass: `hash-baseClass`,
        baseClass___mod: `hash-baseClass-mod`,
        baseClass___mod1: `hash-baseClass-mod1`,
        baseClass___mod2: `hash-baseClass-mod2`,
      };

      const result = getCssClasses(stylesMock, 'baseClass', ['mod1', 'mod2']);

      expect(result).toBe(
        `${stylesMock.baseClass___mod1} ${stylesMock.baseClass___mod2} ${stylesMock.baseClass}`,
      );
    });
  });
});
