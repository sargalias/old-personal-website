import { compose, curry, curryN, append, join, map } from 'ramda';

const getCssModuleClasses = curry((styles, baseClass, modifiers = []) => {
  const getModifierClassesWithBaseClass = getModifierClasses(baseClass);
  return compose(
    map(_getCssModuleClass(styles)),
    append(baseClass),
    getModifierClassesWithBaseClass,
  )(modifiers);
});

const getModifierClasses = curry((baseClass, modifiers) => {
  const appendModifier = modifier => `${baseClass}___${modifier}`;
  return modifiers.map(appendModifier);
});

const _getCssModuleClass = curry((styles, className) => styles[className]);

const getCssClasses = curryN(3, compose(join(' '), getCssModuleClasses));

export { getCssClasses, getCssModuleClasses, getModifierClasses };
