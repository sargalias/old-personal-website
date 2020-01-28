import { compose, curry, append, map } from 'ramda';

const getModifierClasses = curry((baseClass, modifiers) => {
  const appendModifier = modifier => `${baseClass}___${modifier}`;
  return modifiers.map(appendModifier);
});

const getCssModuleClasses = curry((styles, baseClass, modifiers = []) => {
  const getModifierClassesWithBaseClass = getModifierClasses(baseClass);
  return compose(
    map(_getCssModuleClass(styles)),
    append(baseClass),
    getModifierClassesWithBaseClass,
  )(modifiers);
});

const _getCssModuleClass = curry((styles, className) => styles[className]);

export { getModifierClasses, getCssModuleClasses };
