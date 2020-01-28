import { curry, append } from 'ramda';

const getModifierClasses = (modifiers, baseClass) => {
  const appendModifier = modifier => `${baseClass}___${modifier}`;
  return modifiers.map(appendModifier);
};

const getCssModuleClasses = (styles, baseClass, modifiers = []) => {
  const modifierClasses = getModifierClasses(modifiers, baseClass);
  const allClasses = append(baseClass)(modifierClasses);
  return allClasses.map(_getCssModuleClass(styles));
};

const _getCssModuleClass = curry((styles, className) => styles[className]);

export { getModifierClasses, getCssModuleClasses };
