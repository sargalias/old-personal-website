import { getModifierClasses } from './cssHelpers';

describe('cssHelpers', () => {
  describe('getModifierClasses', () => {
    test('should return empty string with no modifiers', () => {
      const modifiers = [];
      const baseClass = 'base';

      const result = getModifierClasses(modifiers, baseClass);

      expect(result).toStrictEqual([]);
    });

    test('should return correct result with one modifier', () => {
      const modifiers = ['mod'];
      const baseClass = 'base';

      const result = getModifierClasses(modifiers, baseClass);

      expect(result).toStrictEqual(['base___mod']);
    });
  });
});
