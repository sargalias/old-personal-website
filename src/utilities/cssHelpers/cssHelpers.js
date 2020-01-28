import { curry, append } from 'ramda';

const getModifierClasses = curry((baseClass, modifiers) => {
  const appendModifier = modifier => `${baseClass}___${modifier}`;
  return modifiers.map(appendModifier);
});

const getCssModuleClasses = (styles, baseClass, modifiers = []) => {
  const modifierClasses = getModifierClasses(baseClass, modifiers);
  const allClasses = append(baseClass)(modifierClasses);
  return allClasses.map(_getCssModuleClass(styles));
};

const _getCssModuleClass = curry((styles, className) => styles[className]);

export { getModifierClasses, getCssModuleClasses };
