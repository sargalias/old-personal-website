import { getModifierClasses } from './cssHelpers';

describe('cssHelpers', () => {
  describe('getModifierClasses', () => {
    test('should return empty string with no modifiers', () => {
      const modifiers = [];
      const baseClass = 'base';

      const result = getModifierClasses(modifiers, baseClass);

      expect(result).toStrictEqual([]);
    });
  });
});
